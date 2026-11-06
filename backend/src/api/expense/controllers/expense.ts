"use strict";

export default {
  async schulden(ctx: any) {
    const expenses = await strapi.entityService.findMany(
      "api::expense.expense",
      {},
    );

    if (!expenses || expenses.length === 0) {
      ctx.body = {
        data: [],
        meta: {
          total: 0,
          anteilProPerson: 0,
          bezahlt: {},
        },
      };
      return;
    }

    const bezahlt: Record<string, number> = {};

    for (const e of expenses as any[]) {
      const person = e.bezahltVon;
      const betrag = Number(e.betrag);

      if (!person || Number.isNaN(betrag)) continue;

      if (!bezahlt[person]) {
        bezahlt[person] = 0;
      }

      bezahlt[person] += betrag;
    }

    const personen = Object.keys(bezahlt);

    const total: number = Object.values(bezahlt).reduce(
      (sum: number, betrag: number) => sum + betrag,
      0,
    );

    if (personen.length === 0) {
      ctx.body = {
        data: [],
        meta: {
          total: 0,
          anteilProPerson: 0,
          bezahlt: {},
        },
      };
      return;
    }

    const anteil: number = total / personen.length;

    const schuldner: { person: string; betrag: number }[] = [];
    const glaeubiger: { person: string; betrag: number }[] = [];

    for (const person of personen) {
      const saldo = Math.round((bezahlt[person] - anteil) * 100) / 100;

      if (saldo < 0) {
        schuldner.push({
          person,
          betrag: Math.abs(saldo),
        });
      } else if (saldo > 0) {
        glaeubiger.push({
          person,
          betrag: saldo,
        });
      }
    }

    const transaktionen: {
      von: string;
      an: string;
      betrag: number;
    }[] = [];

    let i = 0;
    let j = 0;

    while (i < schuldner.length && j < glaeubiger.length) {
      const betrag = Math.min(schuldner[i].betrag, glaeubiger[j].betrag);

      const gerundeterBetrag = Math.round(betrag * 100) / 100;

      transaktionen.push({
        von: schuldner[i].person,
        an: glaeubiger[j].person,
        betrag: gerundeterBetrag,
      });

      schuldner[i].betrag -= gerundeterBetrag;
      glaeubiger[j].betrag -= gerundeterBetrag;

      if (schuldner[i].betrag < 0.01) i++;
      if (glaeubiger[j].betrag < 0.01) j++;
    }

    ctx.body = {
      data: transaktionen,
      meta: {
        total: Math.round(total * 100) / 100,
        anteilProPerson: Math.round(anteil * 100) / 100,
        bezahlt,
      },
    };
  },
};

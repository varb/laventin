const metricaId = Number(import.meta.env.VITE_YANDEX_METRICA_ID);

export const setGoal = (name: string, params: Record<string, any>) => {
  if (import.meta.env.DEV) return;

  const { ym } = window;
  if (!ym && !name && !params) return;
  const metrikaId = metricaId;

  ym(metrikaId, "reachGoal", name, params);
};

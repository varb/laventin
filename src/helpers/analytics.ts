const metricaId = Number(process.env.REACT_APP_YANDEX_METRICA_ID);

export const setGoal = (name: string, params: Record<string, any>) => {
  if (process.env.NODE_ENV !== 'production') return;

  const { ym } = window;
  if (!ym && !name && !params) return;
  const metrikaId = metricaId;

  ym(metrikaId, 'reachGoal', name, params);
};

import { YANDEX_METRICA_ID } from '../config';

export const setGoal = (name, params = null) => {
  if (process.env.NODE_ENV !== 'production') return;

  const { ym } = window;
  if (!ym && !name) return;
  const metrikaId = YANDEX_METRICA_ID;

  ym(metrikaId, 'reachGoal', name, params);
};
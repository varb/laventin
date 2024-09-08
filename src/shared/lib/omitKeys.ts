/**
 * Omits the specified keys from the given object.
 *
 * @param obj - Object from which to omit keys.
 * @param keys - Keys to omit.
 * @returns A new object with the specified keys omitted.
 */
export function omitKeys<T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
): Omit<T, K> {
  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => !keys.includes(key as K))
  ) as Omit<T, K>;
}

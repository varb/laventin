/**
 * Filter dirty fields from the form data.
 *
 * @param data The form data.
 * @param dirtyFields The dirty fields from the form state.
 * @returns A new object with only the dirty fields.
 * The function takes into account the following cases:
 *  - If the value of dirtyFields[key] is true, it means that the field was changed,
 *    and the function adds the field to the result.
 *  - If the value of dirtyFields[key] is an array, it means that the field is an array,
 *    and the function adds the array to the result if at least one element of the array was changed.
 *    The function filters the array and adds only the elements that were changed.
 *    If the array is empty, the field is not added to the result.
 */
export function filterDirtyFields<T>(
  data: T,
  dirtyFields: Partial<Record<keyof T, any>>
): Partial<T> {
  return Object.keys(dirtyFields).reduce<Partial<T>>((result, _key) => {
    const key = _key as keyof T; // Create a constant with the type of the key
    const fieldDirty = dirtyFields[key];

    if (fieldDirty === true) {
      result[key] = data[key]; // Добавляем поле, если оно было изменено
    } else if (Array.isArray(fieldDirty) && Array.isArray(data[key])) {
      const dirtyArray = fieldDirty;
      const dataArray = data[key] as unknown as Array<any>;

      const filteredArray = dataArray.filter((_, index) => {
        const dirtyItem = dirtyArray[index];
        return (
          dirtyItem && Object.values(dirtyItem).some((value) => value === true)
        );
      });

      if (filteredArray.length > 0) {
        result[key] = dataArray as T[keyof T]; // If at least one element was changed, add the entire array
      }
    }

    return result; // Return the accumulated result
  }, {});
}

// —————————————————————————————————————————————————————————————————————————————
// Challenge: Decorate frozen objects
// —————————————————————————————————————————————————————————————————————————————
// Write the bodies to `setData` and `getData` below so that the tests pass.
//
// —————————————————————————————————————————————————————————————————————————————
// Hint: Frozen objects cannot be modified.
// You must find a way to assign data to them.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap
// —————————————————————————————————————————————————————————————————————————————

/**
 * Assign some value to `object` so it can be retrieved later.
 *
 * @template T
 * @param {Readonly<object>} object
 * @param {T} value
 * @returns {void}
 */

const map = new Map();
export function setData(object, value) {
  // Using map to set value to object, as map is the data structure which
  // can use anything as key in this case we are using object as a key
  map.set(object, value);
}

/**
 * Retrieve some value from `object`.
 *
 * @template T
 * @param {Readonly<object>} object
 * @returns {T | undefined}
 */
export function getData(object) {

  // Accessing the value stored in map, by using object as a key
  return map.get(object);

}

// —————————————————————————————————————————————————————————————————————————————
// Challenge: Called once
// —————————————————————————————————————————————————————————————————————————————
// Sometimes, a function should be called once. A typical use-case might be the
// initialization of a database client. Instead of having to set a boolean flag
// and check it later, it is possible to _decorate_ the function to prevent
// further calls to it.
//
// Write the `once` function to implement the desired behavior.
// —————————————————————————————————————————————————————————————————————————————
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
// —————————————————————————————————————————————————————————————————————————————

/**
 * Creates a version of `callback` that can only be called once.
 *
 * Repeated calls to the modified function will have no effect, returning the
 * value from the original call.
 *
 * @template {Function} F
 * @param {F} callback The callback
 * @returns {F}
 */
export function once(callback) {

  // While using JSON.stringify to create keys it converts
  // some primitive values to null this functions helps it
  // return valid key for each argument
  const replacer = (key) => key;

  // `callback` must be called once!
  // Its return value must be memoized.

  // using cache to store the result of first call to function
  const cache = {};

  return (...args) => {
    // if the result is in the cache returns it from cache
    if (JSON.stringify(args, replacer) in cache) {
      return cache[JSON.stringify(args, replacer)];
    }

    // if it's not found in the cache calculate the result
    // store it in cache and also return the same value
    const result = callback(...args);
    cache[JSON.stringify(args, replacer)] = result;
    return result;
  };
}

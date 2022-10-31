/* exported pick */
function pick(source, keys) {
  keys.forEach(key => {
    if (!source[key]) {
      delete source[key];
    }
  });
  return source;
}

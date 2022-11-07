/* exported defaults */
/* use for in loop to loop through keys in source object.
make a conditional to check if key in target does not exist - and if it doesn't
make target[key] source[key] */
function defaults(target, source) {
  for (var key in source) {
    if (!(key in target)) {
      target[key] = source[key];
    }
  }
}

/* exported defaults */
function defaults(target, source) {
  target = {};
  for (var key in source) {
    if (!target[key]) {
      target[key] = source[key];
    }
  }
}
var source = {
  foo: 1,
  bar: 2,
  baz: 3
};
var target = {};
defaults(target, source);

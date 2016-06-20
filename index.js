// What happens if you rename CountModel to countmodel? What ramifications does this have?

function CountModel() {
  this._count = 0;

  // What happens if you assign `this` to a different value?

  // What happens if you add `return {}` below. Why?
};

CountModel.prototype = {
  count: function() {
    return this._count;
  },

  // What happens if you rename `set` to `_set` (and change
  // `countModel.set(5)` below to `countModel._set(5)`)?
  set: function(count) {
    this._count = count;
  },

  increment: function() {
    this._count++;
  }
};

// What happens if you omit the `new` keyword in the next line?
var countModel = new CountModel();
countModel.set(5);

// What happens if you add this code? Why?
// countModel.toString = function() {
//   return countModel.count().toString();
// };
// console.log(countModel.toString());

// What happens if you add this code? Why?
// countModel.count = function() {
//   return "hello";
// };

console.log("count is", countModel.count());

// Bonus research project. Can you find the property name below that
// makes the statement log `true`?
// console.log(countModel["???"] === CountModel.prototype);

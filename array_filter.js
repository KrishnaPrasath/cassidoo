// array filter by 🖐
// Array.prototype.filter()
// The filter() method creates a new array with all elements
// that pass the test implemented by the provided function.

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present"
];

var heroes = [
  { name: "Batman", franchise: "DC" },
  { name: "Ironman", franchise: "Marvel" },
  { name: "Thor", franchise: "Marvel" },
  { name: "Superman", franchise: "DC" }
];

// let result = words.filter(word => word.length <= 5);

// OP : [ 'spray', 'limit', 'elite' ]

// By Hand

let _filter = (array, cb) => {
  let result = [];
  array.forEach(element => {
    if (cb(element)) {
      result.push(element);
    }
  });
  console.log(result);
  return result;
};

_filter(heroes, function(ele) {
  return ele.franchise == "Marvel";
});

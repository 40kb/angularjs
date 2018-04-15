var things = [
  1,
  2,
  3
]
console.log(things);


// Function item可以使JS的任何类型(包括function)
var things = [
  1,
  2,
  function() {
    console.log('hello');
  }
];

// 可以呼叫这个function
things[2]()


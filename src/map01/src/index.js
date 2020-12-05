const array1 = [0, 1, 2, 3, 4];

const newArray1 = array1.map((output, index) => {
  return "index" + index + " is " + output
});

console.log(newArray1);
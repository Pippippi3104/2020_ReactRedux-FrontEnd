const array1 = [1, 2, 3, 4, 5];

const newArray1 = array1.filter((output, index) => {
  return output > 3
});

console.log(newArray1);


const array2 = ["nakanishi", "hurukata", "tanaka"];

const newArray2 = array2.filter((output, index) => {
  return output === "nakanishi"
});

console.log(newArray2);


const newArray3 = array2.filter((output, index) => {
  return output.length > 7
});

console.log(newArray3);
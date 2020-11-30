function name1 () {
  console.log("name1");
}
name1();

const name2 = () => {
  console.log("name2");
}
name2();

const name3 = (val) => {
  console.log(val);
}
name3("passed value");

const name4 = val => {
  console.log(val);
}
name4("passed value2");

const name5 = (val1, val2) => {
  console.log(val1, val2);
}
name5("arg1", "arg2");

const name6 = () => {
  return "returned value";
}
console.log(name6());

const name7 = () => "returned value2"
console.log(name7());

const name8 = () => console.log("console");
name8();
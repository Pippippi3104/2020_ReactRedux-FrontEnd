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
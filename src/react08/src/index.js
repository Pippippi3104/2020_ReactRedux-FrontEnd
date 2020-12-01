class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

    callMyProfile() {
      console.log(this.name, this.age);
  }
};

const Nakanishi = new Human("Nakanishi", 30);
//console.log(Nakanishi);
Nakanishi.callMyProfile();
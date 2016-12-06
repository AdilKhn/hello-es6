export default class Person {
  constructor(name, age){
    this.name = name;
    this.age  = age;
  }

  printIt(){
    console.log(`name is ${this.name}, age is ${this.age}`);
  }
}


function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.greet = function(){
    console.log("Hello"," ",this.firstName," ",this.lastName);
}

var john = new Person("John","Doe");
john.greet();

var jane = new Person("Jane","Doe");
jane.greet();

Person.prototype.greet = this.age = age;

var afonso = new Person("Afonso","Santo",19);
afonso.greet();

console.log(john.__proto__);
console.log(jane.__proto__);
console.log(afonso.__proto__);

console.log(john.__proto__==jane.__proto__);


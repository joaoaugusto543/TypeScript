"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let x = 10;
x = 12;
//erro
//x='lopes'
console.log(x);
//...................................................
let firstName = 'Lucas';
//error
//firstName=12
console.log(firstName);
//...................................................
let myArrayStrings = ['a', 'b'];
//error
//myArrayStrings=[1,2,3]
myArrayStrings.forEach((element) => {
    console.log(element);
});
//...................................................
let myArray;
myArray = ['a', 2, true];
//error
//myArray= [1,'2','nne']
myArray.forEach((element) => {
    console.log(element);
});
//...................................................
let obj;
obj = {
    name: 'João',
    age: 16
};
console.log(`Meu nome é ${obj.name}, eu tenho ${obj.age}`);
//error
// obj={
//     firstName:'lopes',
//     age:12
// }
// obj={
//     name:12,
//     age:'23'
// }
//...................................................
//any
let random;
random = true;
random = 'teste';
random = 12;
console.log(random);
//...................................................
//tuplas
let id;
id = 10;
id = "10";
//error
// id=true
// id=[]
console.log(id);
let idUser = "1234";
idUser = ['dfff', 'bdhbhf'];
idUser = 12133;
console.log(idUser);
//...................................................
//enum
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: 'Camiseta',
    size: Size.G
};
console.log(`Eu quero uma ${camisa.name} ${camisa.size}`);
//...................................................
//literal types
let test;
//error
//test='lopes'
let thisOrNothing;
thisOrNothing = 'É isso';
thisOrNothing = null;
//error
//test=true
//...................................................
//funções
function sum(a, b) {
    return a + b;
}
console.log(sum(12, 3));
//error
//console.log(sum('loes',2))
function sayHelloTo(name) {
    return `Hello ${name}`;
}
//erro
// function sayHelloTo(name: string): string{
//     return 3
// }
//console.log(sayHelloTo(2))
console.log(sayHelloTo('João'));
function sendMessage(msg) {
    console.log(msg);
}
console.log('Bom dia!!!');
function Hello(name, greet) {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
        return;
    }
    console.log(`Olá ${name}`);
}
Hello('João', 'sr');
Hello('Marcos');
function subtract(nums) {
    return nums.num1 - nums.num2;
}
console.log(subtract({ num1: 10, num2: 5 }));
const numbers = {
    num1: 2,
    num2: 5
};
function multiply(nums) {
    return nums.num1 * nums.num2;
}
console.log(multiply(numbers));
//...................................................
//narroWing
//checagem tipos
function showNumberof(info) {
    if (typeof info === 'number') {
        return `o número é ${info}`;
    }
    return `não foi enviado um número, foi enviado o valor ${info}`;
}
console.log(showNumberof(1));
console.log(showNumberof(true));
//generics
function showArrayItens(arr) {
    arr.forEach(element => {
        console.log(element);
    });
    console.log('...................');
}
const arr1 = ['a', 'b', 'c'];
const arr2 = [1, 2, 3, 4];
const arr3 = [true, false];
showArrayItens(arr1);
showArrayItens(arr2);
showArrayItens(arr3);
//classes
class user {
    name;
    age;
    approved;
    constructor(name, age, approved) {
        this.name = name;
        this.age = age;
        this.approved = approved;
    }
    showName() {
        return `O nome do usuário é ${this.name}`;
    }
    permissionToShow(permission) {
        if (permission) {
            return `O nome do usuário é ${this.name}, ele tem ${this.age}, sua provação é ${this.approved}`;
        }
        return `Não tem permissão`;
    }
}
const felipe = new user("Felipe", 17, true);
console.log(felipe);
console.log(felipe.showName());
console.log(felipe.permissionToShow(false));
console.log(felipe.permissionToShow(true));
class car {
    brand;
    kilometersTraveled;
    constructor(brand, kilometersTraveled) {
        this.brand = brand;
        this.kilometersTraveled = kilometersTraveled;
    }
    showBrand() {
        console.log(`A marca do carro é ${this.brand}`);
    }
}
const fusca = new car('VW', 100);
fusca.showBrand();
class superCar extends car {
    engine;
    constructor(brand, kilometersTraveled, engine) {
        super(brand, kilometersTraveled);
        this.engine = engine;
    }
}
const ferrari = new superCar('Renault', 1000, 1.0);
ferrari.showBrand();
//decorators
function BaseParameters() {
    return function (constructor) {
        return class extends constructor {
            id = Math.random();
            date = new Date();
        };
    };
}
let Person = class Person {
    name;
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParameters()
], Person);
const marcos = new Person('Marcos');
console.log(marcos);

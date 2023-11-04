"use strict";
// Basic types
const ten = 10;
let username = "Andrei";
let isAbove20 = true;
let novalueundefined = undefined;
let novaluenull = null;
let anyValue = 10;
let stringOrNumber = "10";
let numbersList = [1, 2, 3, 4, 5];
let numbersOrSttringsList = [1, 2, 3, "s"];
let fn = () => { };
let age = 20;
age = 10;
// nu putem atribui alt tip de valoare
// username = 10; // Error of type
// numbers.push('abc');
function add2Numbers(a, b) {
    return a + b;
}
function logValue() {
    console.log("No value retruned");
}
const addedNumbers = add2Numbers(10, 10);
//  More complex types
var Colors;
(function (Colors) {
    Colors["Rosu"] = "rosu";
    Colors["Galben"] = "galben";
    Colors["Albastru"] = "albastru";
})(Colors || (Colors = {}));
// Alta valoare ne da eroare
const redBackground = Colors.Rosu;
var CalendarMonths;
(function (CalendarMonths) {
    CalendarMonths["jan"] = "Ianuarie";
    CalendarMonths["feb"] = "Februarie";
})(CalendarMonths || (CalendarMonths = {}));
var Weekdays;
(function (Weekdays) {
    Weekdays["monday"] = "Monday";
})(Weekdays || (Weekdays = {}));
let tupleArr = ["Andrei", 10];
const userAlex = {
    username: "alex",
    age: 10,
    getAge() {
        return age;
    },
};
console.log(tupleArr);
logValue();
const zebra = {
    isInExistance: true,
    gender: "M",
    continent: "Africa",
    varsta: 10,
    printDetails: function () {
        console.log(`Zebra este de pe continentul ${this.continent} si are varsta de ${this.varsta} ani`);
    },
};
class Feline {
    constructor(gender, continent, varsta) {
        this.isInExistance = true;
        this.tipDeFelina = "Leopard";
        this.gender = gender;
        this.continent = continent;
        this.varsta = varsta;
    }
    printDetails() { }
}
function getPerson() {
    const obj = {};
    const t = 20;
    const y = 10;
    return obj;
}
const persona = { name: "Andrei" };
const personList = [];
const personList2 = [];
personList.push({ name: "Andrei" });
personList2.push({ name: "Andrei" });

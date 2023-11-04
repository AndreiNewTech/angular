// Basic types
const ten: number = 10;
let username: string = "Andrei";
let isAbove20: boolean = true;
let novalueundefined: undefined = undefined;
let novaluenull: null = null;
let anyValue: any = 10;
let stringOrNumber: string | number = "10";
let numbersList: number[] = [1, 2, 3, 4, 5];
let numbersOrSttringsList: Array<number | string> = [1, 2, 3, "s"];
let fn: () => void = () => {};

let age: number = 20;
age = 10;

// nu putem atribui alt tip de valoare
// username = 10; // Error of type
// numbers.push('abc');

function add2Numbers(a: number, b: number): number {
  return a + b;
}

function logValue(): void {
  console.log("No value retruned");
}

const addedNumbers: number = add2Numbers(10, 10);

//  More complex types

enum Colors {
  Rosu = "rosu",
  Galben = "galben",
  Albastru = "albastru",
}

// Alta valoare ne da eroare
const redBackground: Colors = Colors.Rosu;

enum CalendarMonths {
  jan = "Ianuarie",
  feb = "Februarie",
}

enum Weekdays {
  monday = "Monday",
}

type MyFirstType = [string, number];
let tupleArr: MyFirstType = ["Andrei", 10];

// type
type NumberTypes = string | number;

type Person = {
  name: string;
};

type User = {
  username: string;
  age: number;
  getAge: () => number;
};

type Human = User | Person;

const userAlex: Human = {
  username: "alex",
  age: 10,
  getAge() {
    return age;
  },
};

console.log(tupleArr);

logValue();

type Continent = "Europa" | "Asia" | "Africa" | "America";
//  intefaces
interface Animal extends Fiinta {
  gender?: string;
  continent: Continent;
  varsta: number;
  printDetails: () => void;
}

interface Fiinta {
  isInExistance: boolean;
}

const zebra: Animal = {
  isInExistance: true,
  gender: "M",
  continent: "Africa",
  varsta: 10,
  printDetails: function () {
    console.log(
      `Zebra este de pe continentul ${this.continent} si are varsta de ${this.varsta} ani`
    );
  },
};

class Feline implements Animal {
  isInExistance = true;
  tipDeFelina: "Leopard" | "Tigru" | "Leu" = "Leopard";
  gender: string;
  continent: Continent;
  varsta: number;

  constructor(gender: string, continent: Continent, varsta: number) {
    this.gender = gender;
    this.continent = continent;
    this.varsta = varsta;
  }

  printDetails() {}
}

function getPerson(): Person {
  const obj: Person = {} as Person;

  const t = 20;
  const y = 10;

  return obj;
}

const persona: Person = { name: "Andrei" };

const personList: Person[] = [];
const personList2: Array<Person> = [];

personList.push({ name: "Andrei" });
personList2.push({ name: "Andrei" });

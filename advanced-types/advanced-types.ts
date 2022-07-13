// intersection types
// import * as stream from "stream";

interface Admin {
// type Admin = {
    name: string;
    privileges: string[];
}

interface Employee {
// type Employee = {
    name: string;
    startDate: Date;
}

interface ElevatedEmployee extends Admin, Employee {};
// type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: "Max",
    privileges: ['crated-server'],
    startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// Type guards
function added(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
    console.log('Name: ' + emp.name);

    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('StartDate: ' + emp.startDate);
    }
}

// printEmployeeInformation(e1);
printEmployeeInformation({ name: 'Rick', startDate: new Date() }); // also work without privileges

class Car {
    drive() {
        console.log('Driving ...');
    }
}

class Truck {
    drive() {
        console.log('Driving a truck ...');
    }

    loadCargo(amount: number) {
        console.log('Loading cargo ...' + amount);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    // vehicle.loadCargo(1000); //  Property 'loadCargo' does not exist on type 'Vehicle'
    // if ('loadCargo' in vehicle) {
    //     vehicle.loadCargo(1000);
    // }
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}

useVehicle(v1);
useVehicle(v2);

// ********************** START  **********************
// Discriminated Unions // syntax

interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log('Moving with speed: ' + speed);
}

moveAnimal({ type: 'bird', flyingSpeed: 200 });
// ********************** END  **********************


// ********************** START  **********************
// ============== type casting
// const paragraph = document.querySelector('p');
const paragraph = document.getElementById('message-output');
// const userInputElement = document.getElementById('user-input')!;
// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!; // version 1
// const userInputElement = document.getElementById('user-input')! as HTMLInputElement; // version 2
const userInputElement = document.getElementById('user-input'); // version 3

if (userInputElement) {
    (userInputElement as HTMLInputElement).value = 'Hi there!'; // version 3
}

// ============== Index properties
// email: not valid email, username: must start with a charector
interface ErrorContainer {
    // id: string;
    [prop: string]: string;
}

const errorBlog: ErrorContainer = {
    email: "not valid email",
    // email: 1, // Type 'number' is not assignable to type 'string'
    username: "must start with character"
}


// ******************* START *********************
// ============== function overloads
// const result = added(1, 2)
// const result = added("string", " value");
// result.split //dont work , it knows that is a number
// const result = added("string", " value") as string;

function addOther(a: number, b: number): number;
function addOther(a: string, b: string): string;
function addOther(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

const result = addOther("max", " ali");

// console.log(result.split(" "))
// ******************* END *********************


// Optional chaining

const fetchedUserData = {
    id: "u1",
    name: "Max",
    job: { title: "CEO", description: "My own company" }
}

console.log(fetchedUserData?.job?.title)


// Nullish Coalescing

const userInput = '';

// const storedData = userInput || "Default"     // Default
const storedData = userInput ?? "Default"        // ''
console.log(storedData)
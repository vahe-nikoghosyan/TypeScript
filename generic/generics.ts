// Flexible & Re-Usable code

// const names: Array<string> = []; // same as string[]

// const names: Array<> = []

// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("This is done!");
//     }, 2000);
// });
//
// promise.then(data => {
//     console.log(data.)
// })

// OUR OWN GENERIC

// function   merge(objA: object, objB: object) {
//     return Object.assign(objA, objB)
// }

// const mergedObj = merge({name: "Gago"}, {age: 35})
// console.log(mergedObj.name) // TS2339: Property 'name' does not exist on type 'object'.
// console.log(mergedObj.age) // TS2339: Property 'age' does not exist on type 'object'.

function merge<T extends object, U extends object>(objA: T, objB: U) {
  console.log(objB);
  return Object.assign(objA, objB);
}

// console.log(merge({name: "Gago"}, {age: 35}))
const mergedObj = merge({ name: "Gago", hobbies: ["sport"] }, { age: 35 });
// const mergedObj = merge({ name: "Gago", hobbies: ["sport"]}, 35) // TS2345: Argument of type 'number' is not assignable to parameter of type 'object'.
// const mergedObj2 = merge({ name: "Gago" }, {age: 35})
console.log(mergedObj.name);
console.log(mergedObj.age);

interface Lengthy {
  length: number;
} // only string and array have length property

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Got 1 element.";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements.";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe("Hi there!"));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

// extractAndConvert({}, "name"); // name dose not exist in obj
extractAndConvert({ name: "Max" }, "name"); // work

// generic class
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Max");
textStorage.addItem("Alex");
textStorage.removeItem("Alex");
console.log(textStorage.getItems());

// const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// objStorage.addItem({ name: "Max" });
// objStorage.addItem({ name: "Alex" });
// // ...
// objStorage.removeItem({ name: "Max" });
// console.log(objStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  completeUntil: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = completeUntil;

  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ["Max", "Anna"];
// names.push("Menu"); // TS2339: Property 'push' does not exist on type 'readonly string[]'.

// type AddFn = (a: number, b: number) => number;
interface AddFn {
    (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
    return n1 + n2;
};

interface Named {
    readonly name?: string;
    outputName?: string; // optional property
}

interface Greetable extends Named {
    // name: string = "Max"; // can not have initializer
    age: number;

    greet(phrase: string): void;
}

// class Perosn implements Greetable, Named {
class Perosn implements Greetable {
    name?: string;
    age = 30;

    constructor(n?: string) {
        if (n) {
            this.name = n;
        }
    }

    greet(phrase: string) {
        if (this.name) {
            console.log(phrase + ' ' + this.name);
        } else {
            console.log('Hi!');
        }
    }
}

let user1: Greetable;

// user1 = new Perosn('Max');
user1 = new Perosn();
user1.greet('Hi there!');

// const person: {
//     name: string;
//     age: number;
// } = {

// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]
// } = {
//     name: 'Vahe',
//     age: 24,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// };

// Works
// person.role.push('admin');
// person.role[1] = 10;

// const admin = 0;
// const read_only = 1;
// const author = 2;

// enum Role { ADMIN, READ_ONLY, AUTHOR }; // 0, 1, 2
enum Role { ADMIN = 5, READ_ONLY, AUTHOR }; // 5, 6, 7

const person = {
    name: 'Vahe',
    age: 24,
    hobbies: ['Sports', 'Cooking'],
    // role: admin
    role: Role.ADMIN
};

if (person.role === Role.ADMIN) {
    console.log('is admin');
}

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person);

for (const hobby of person.hobbies) {
    console.log(hobby.toLowerCase());
    // console.log(hobby.map()) //  Property 'map' does not exist on type 'string'.
}

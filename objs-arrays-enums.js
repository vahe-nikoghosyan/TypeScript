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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: 'Vahe',
    age: 24,
    hobbies: ['Sports', 'Cooking'],
    // role: admin
    role: Role.ADMIN
};
if (person.role === Role.ADMIN) {
    console.log('is admin');
}
var favoriteActivities;
favoriteActivities = ['Sports'];
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toLowerCase());
    // console.log(hobby.map()) //  Property 'map' does not exist on type 'string'.
}

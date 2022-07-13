"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 6] = "READ_ONLY";
    Role[Role["AUTHOR"] = 7] = "AUTHOR";
})(Role || (Role = {}));
;
const person = {
    name: 'Vahe',
    age: 24,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
if (person.role === Role.ADMIN) {
    console.log('is admin');
}
let favoriteActivities;
favoriteActivities = ['Sports'];
console.log(person);
for (const hobby of person.hobbies) {
    console.log(hobby.toLowerCase());
}
//# sourceMappingURL=objs-arrays-enums.js.map
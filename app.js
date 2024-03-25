// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]; //tulip
// } = {
//     name: "Yulia",
//     age: 35,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// }
//enum is a custom type
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "Yulia",
    age: 35,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
// person.role.push('admin'); //push actually is an exception which is allowed in tuples.
var favouriteActivities;
favouriteActivities = ['Sports'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // !!! ERROR!!!
}
if (person.role === Role.ADMIN) {
    console.log('is admin');
}

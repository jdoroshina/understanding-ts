
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
enum Role { ADMIN, READ_ONLY, AUTHOR}
const person = {
    name: "Yulia",
    age: 35,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
}

// person.role.push('admin'); //push actually is an exception which is allowed in tuples.

let favouriteActivities: string[];
favouriteActivities = ['Sports']

console.log(person.name)

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // !!! ERROR!!!
}

if (person.role === Role.ADMIN) {
    console.log('is admin')
}
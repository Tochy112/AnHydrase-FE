// 1
let date = new Date().getTime();

console.log(date);

// 2
const developer = {
    name : "Tochi",
    location : "Nigeria",
    age : 22,
    stack : "fullstack",
    experience : 4,
    hobby : "gaming"
};
let name = developer.name;
let locate = developer.location;
let age = developer.age;
let stack = developer.stack;
let experience = developer.experience;
let hobby = developer.hobby;

console.log(`My name is ${name}, I'm a ${stack} developer from ${locate} with ${experience}yrs of experience. I'm ${age}yrs old and i love ${hobby}.`);
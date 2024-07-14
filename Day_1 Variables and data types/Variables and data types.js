//  Activity - 1    Variable Declaration

// Task-1
var num = 39;
console.log(num);
// Task-2
let name = "Hemanth";
console.log(name)

// Activity - 2    Constant Declaration

//  Task-3  
const IsLogged = true;
console.log(IsLogged)

// Activity - 3    Data types

// Task-4
let nums = 39;
console.log(nums);
console.log(typeof nums);

let names = "Rishita";
console.log(names);
console.log(typeof names);

let Isdata = false;
console.log(Isdata);
console.log(typeof Isdata);

let myFriend = {
    name: "Rishita",
    age: 20,
    place: "Vzm"
}

console.log(myFriend);
console.log(typeof myFriend);
console.log(typeof myFriend.name);
console.log(typeof myFriend.age);
console.log(typeof myFriend.place);

let MyArr = [1,2,3,4,5]

console.log(MyArr);
console.log(typeof MyArr);

//  Activity-4   Reassigning Variables

// Task-5

let value = 39;
console.log(`initial value: ${value}`);
value = 63;
console.log(`reassigned value: ${value}`);

//  Activity-5   Understanding Const

//  Task-6

const color = "White";
console.log(`initial color: ${color}`);
//TypeError: Assignment to constant variable.
// color = "Blue";
// console.log(`changed color: ${color}`);


//  Feature request

// 1

let name1  = "Hemanth";
console.log(`name is ${name1} and its type is ${typeof name1}`);
let age1 = 20;
console.log(`age is ${age1} and its type ${typeof age1}`);
let loc = "vzm";
console.log(`location is ${loc} and its type ${typeof loc}`);
let userLogged = true;
console.log(`${userLogged} and its type ${typeof userLogged}`);

// 2

let mySkill = "JS, React";
mSkills = "JS, React, Node js, three js "
const myProjects = "car app,coffee app"
//TypeError: Assignment to constant variable.
myProjects = "Web Development"
console.log(`Skills ${mSkills} and Project ${mProject}`);

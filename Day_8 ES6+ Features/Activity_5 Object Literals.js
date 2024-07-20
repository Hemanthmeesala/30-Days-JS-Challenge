//Task 8

const name = "Rishita";
const age = 19;
const school = "Sri Chaitanya";
function voteEligible() {
    if(this.age >= 18) {
        console.log("eligible");   
    }
    else {
        console.log("not eligible");
    }
}
const object = {
    name,
    age,
    school,
    voteEligible
};
console.log(object);

//Task 9

const compProp1 = "name"; 
const compProp2 = "age";
const compProp3 = "school"

const obj = {
    [compProp1]: "Hemanth",
    [compProp2]: 19,
    [compProp3]: "Sri Chaitanya"
}

console.log(obj);
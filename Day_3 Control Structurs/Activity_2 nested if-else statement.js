//Task 3: Find the largest of threee numbers using the nested if else

let first = 39;
let second = 63;
let third = 0;

if(first > second){
    if(first > third){
        console.log(first + " is the Largest number");
    }else{
        console.log(third + " is the Largest number");
    }
}else{
    if(second > third){
        console.log(second + " is the Largest number");
    }else{
        console.log(third + " is the Largest number");
    }
}
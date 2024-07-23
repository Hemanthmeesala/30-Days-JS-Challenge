//task 8
let promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(`Resolve first after 1 sec`)
    },1000)
})
let promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(`Resolve first after 2 sec`)
    },2000)
})
let promise3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(`Resolve first after 3 sec`)
    },3000)
})
let promise4 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(`Resolve first after 4 sec`)
    },4000)
})

try{
    let result = Promise.all([promise1,promise2,promise3,promise4])
    result.then((data)=>{
        console.log(data);
    })
} catch(err){
    console.error(err);//if any promise not resolved then error thrown irrrespective of other
}

//task 9
try{
    let result2 = Promise.race([promise1,promise2,promise3,promise4])
    .then((value)=>{
        console.log(value)
    })
}
catch(error){
    console.log(error);
}
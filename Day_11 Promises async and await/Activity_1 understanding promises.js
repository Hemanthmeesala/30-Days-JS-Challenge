//task 1
let newPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`Resolved after 2 sec`)
    }, 2000);
})
newPromise.then((data)=>{
    console.log(data);
})

//task 2
new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject(`Can't resolved error occured`)
    },2000)
}).then((data)=>{
    console.log("print it if resolved")
}).catch((error)=>{
    console.log(error)
})
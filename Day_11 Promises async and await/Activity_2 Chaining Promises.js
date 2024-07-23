//task 3


new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("from resolve one")
    },1000)
})
.then((message)=>{
    console.log("message")
   return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("resolve 2")
        }, 1000);
    })
})
.then((message)=>{
    console.log("message")
   return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("resolve 3")
        }, 1000);
    })
})
.then((message)=>{
    console.log("message")
})
.catch((error)=>{
    console.log(`Error:`,error);
})
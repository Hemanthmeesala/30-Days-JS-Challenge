//task 4

async function myFunction(){
    let response = await new Promise((resolve,reject)=>{
        resolve(`message from resolve`)
    })
    console.log(response)
}
myFunction();

//task 5

async function handleasync(){
    try{
        let response = await new Promise((resolve,reject)=>{
            reject(`message from resolve from try`)
        })
        console.log(`hiii`)
    } catch(err){
        console.error(err)
    }
}
handleasync()
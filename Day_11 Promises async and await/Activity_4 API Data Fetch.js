//task 6
fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{response.json()
.then((data)=>{
        console.log(data);
    })
})
.catch((err)=>{
    console.error(`Error:`, err);
});

//task 7
async function publicdata(){
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/users")
        let data = await response.json();
        console.log(data);
    } catch(err){
        console.error(err);
    }
   
}
publicdata()
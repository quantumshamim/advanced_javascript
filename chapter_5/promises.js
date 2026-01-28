let message = true;

let mypromise = new Promise((resolve,reject)=>{
    if(message){
        resolve(
            [
                {username:"Shamim", age:23}
            ]
        )
    }else{
        reject("you're not ")
    }
})

mypromise.then(
    (success)=>{
        console.log(success)
    }
)

mypromise.catch(
    (error)=>{
        console.log(error)
    }
)
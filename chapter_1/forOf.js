//array iterating

let scores = [10,20,30,40,50];

for(let store of scores){
    console.log(store);
}


//object detructuring

const ratings = [
    {username:"shamim", info:"student of nub"},
    {username:"bristy", info:"student of bmc"},
    {username:"esrat", info:"student of shs"},
]

for(let {username} of ratings){
    console.log(username);
}


//iterating over string

let str = "Hi, I am Shamim";

for(let storing of str)
{
    console.log(storing)
}
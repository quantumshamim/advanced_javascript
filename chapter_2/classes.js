class userInfo{
    constructor(name,age,prof,gender,hometown){
        this.name=name;
        this.age=age;
        this.prof=prof;
        this.gender=gender;
        this.hometown=hometown;
    }
}

const user1= new userInfo("Shamim",22,"Student","Male","Gopalganj");
const user2= new userInfo("Bristy",20,"Student","Female","Naogaon");
console.log(user1);
console.log(user2);

class car{
    constructor(brand){
        this.brand=brand;
    }

    parent(){
        return "My car brand is " + this.brand;
    }
}

class model extends car {
    constructor(brand,model){
        super(brand);
        this.model=model;
    }
    show(){
        return this.parent() +" and model is "+this.model;
    }
}

let myCar = new model("ford", "mustang")
console.log(myCar.show())
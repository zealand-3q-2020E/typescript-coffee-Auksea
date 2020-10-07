abstract class coffee {
    //property discount and a type
    discount:number;

    abstract Price(number);//abstract method

    //method with return value
    Strength(type:string){
        return "Mild";

    }
    //constructor that takes parameter and sets discount
    constructor(disocunt?:number){
        if(disocunt == void 0){disocunt = 0}
        this.discount = disocunt;
    }
    
    }
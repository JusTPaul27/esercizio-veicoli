class Car{
    constructor(vehicle, model, yop, image){
        this.vehicle = vehicle;
        this.model = model;
        this.yop = yop;
        this.image = image;
    }

    get YearOfProduction(){
        return new Date(this.yop);    
    }

    set YearOfProduction(value) {
        this.yop = value.toISOString;
    }

    static fromObj(obj) {
        return new Car(obj.id, obj.vehicle, obj.model, obj.yop, obj.image);
    }

}
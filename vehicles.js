class Car{
    constructor(id, vehicle, model, yop, image){
        this.id = id
        this.vehicle = vehicle;
        this.model = model;
        this.yop = yop;
        this.image = image;
    }

    getYearOfProduction(){
        return this.yop.getFullYear
    }


    static fromObj(obj) {
        return new Car(obj.id, obj.vehicle, obj.model, obj.yop, obj.image);
    }

}
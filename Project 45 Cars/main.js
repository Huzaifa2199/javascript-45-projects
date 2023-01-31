function createCar(manufacturer, model, color, topSpeed, transmission) {
    const car = {
        manufacturer: manufacturer,
        model: model,
        color: color,
        topSpeed: topSpeed,
        transmission: transmission
    };
    return car;
}

const newCar = createCar("Honda", "Civic RS", "Grey", 240, "Automatic");
console.log(newCar);
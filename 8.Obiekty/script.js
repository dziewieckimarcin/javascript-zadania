// Zadanie 1

console.log("");
console.log("Zadanie 1");
console.log("");
{
    let car = {
        brand: "Kia",
        model: "Rio",
        color: "red",
        engineCapaciy: 1400,
        seats: 5
    }

    console.log(car);

    console.log(car.brand);
    console.log(car.model);
    console.log(car.color);
    console.log(car.engineCapaciy);
    console.log(car.seats);

    for (let i in car) {
        console.log(car[i]);
    }
}


// Zadanie 2

console.log("");
console.log("Zadanie 2");
console.log("");
{
    let car = {
        brand: "Kia",
        model: "Rio",
        color: "red",
        engineCapaciy: 1400,
        seats: 5,
        changeColor: function (newColor) { this.color = newColor }
    }

    console.log(car);
    car.changeColor("blue");
    console.log(car);
}


// Zadanie 3

console.log("");
console.log("Zadanie 3");
console.log("");
{
    let sumObj = {
        sum : 0,
        sumArray : function (arrayParameter) {
            let sumOfElements = 0;
            for (var i = 0; i < arrayParameter.length; i++) {
                sumOfElements += arrayParameter[i];
            }
            this.sum = sumOfElements;
        }
    }

    console.log(sumObj);

    let arrayOfNumbers = [5, 15, 6, 21];

    sumObj.sumArray(arrayOfNumbers);

    console.log(sumObj.sum);
}


// Zadanie 4

console.log("");
console.log("Zadanie 4");
console.log("");
{
    let car = {
        brand: "Kia",
        model: "Rio",
        color: "red",
        engineCapaciy: 1400,
        seats: 5
    }

    for (let element in car) {
        console.log(`${element}: ${car[element]}`);
    }
}


// Zadanie 5

console.log("");
console.log("Zadanie 5");
console.log("");
{
    let car = {
        brand: "Kia",
        model: "Rio",
        color: "red",
        seats: 5,
        engine: {
            capaciy: 2000,
            maxRpm: 5500,
            isWorking: true
        }
    }

    for (let property in car) {
        console.log(car[property]);
    }
}


// Zadanie 6

console.log("");
console.log("Zadanie 6");
console.log("");
{
    let car = {
        brand: "Kia",
        model: "Rio",
        engineCapaciy: 1400,
        seats: 5
    }

    car.color = "red";
    car.drive = function () {
        console.log("Hello");
    }

    console.log(car);
    car.drive();
}
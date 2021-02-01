// Zadanie 1

console.log("");
console.log("Zadanie 1");
console.log("");
{
    let person = {
        firstName: "Jan",
        lastName: "Kowalski",
        age: 34,
        country: "Polska",
        city: "Kraków"
    }

    let person2 = {
        firstName: "James",
        lastName: "Bond",
        age: 41,
        country: "Great Britan",
        city: "London"
    }

    function showDetais() {
        console.log(`Imiê: ${this.firstName}`);
        console.log(`Nazwisko: ${this.lastName}`);
        console.log(`Wiek: ${this.age}`);
        console.log(`Kraj: ${this.country}`);
        console.log(`Miasto: ${this.city}`);
    }

    function addAge() {
        this.age += 1;
    }

    person.show = showDetais;
    person.bithday = addAge;

    person2.show = showDetais;
    person2.bithday = addAge;

    person.show();
    person2.show();

    person.bithday();
    person.bithday();
    person.bithday();

    person.show();
}


// Zadanie 2

console.log("");
console.log("Zadanie 2");
console.log("");
{
    let person = {
        firstName: "Jan",
        lastName: "Kowalski",
        age: 34,
        country: "Polska",
        city: "Kraków"
    }

    let person2 = {
        firstName: "James",
        lastName: "Bond",
        age: 41,
        country: "Great Britan",
        city: "London"
    }

    person.food = [];
    person2.food = [];

    function showFood() {
        console.log(this.food);
    }

    function addFood(foodToAdd) {
        this.food.push(foodToAdd);
    }

    person.showAllFood = showFood;
    person.addLikedFood = addFood;
    person2.showAllFood = showFood;
    person2.addLikedFood = addFood;

    person.addLikedFood("bigos");
    person.addLikedFood("kebab");
    person.addLikedFood("burger");

    person2.addLikedFood("sa³atka");
    person2.addLikedFood("pizza");

    person.showAllFood();
    person2.showAllFood();
}


// Zadanie 3

console.log("");
console.log("Zadanie 3");
console.log("");
{
    let calc = {
        addParametrs : (p1, p2) => {
            this.paramA = p1;
            this.paramB = p2;
            console.log(`Ustawiono parametry ${p1} oraz ${p2}`);
        },

        sum: () => console.log(`Suma: ${paramA + paramB}`),
        sub: () => console.log(`Ró¿nica: ${paramA - paramB}`),
        multiiply: () => console.log(`Iloczyn: ${paramA * paramB}`),
        div : () => {
            if (this.paramB == 0) {
                console.log(`Dzielenie przez zero jest niedozwolone`);
            } else {
                console.log(`Iloraz: ${paramA / paramB}`);
            }
        }
    }

    calc.addParametrs(15, 5);
    calc.sum();
    calc.sub();
    calc.multiiply();
    calc.div();

    calc.addParametrs(3, 0);
    calc.div();
}


// Zadanie 4

console.log("");
console.log("Zadanie 4");
console.log("");
{
    let ladder = {
        height: 0,

        up: function() {
            this.height ++;
            console.log("Idê w górê");
        },
        down: function() {
            if (this.height > 0) {
                this.height--;
                console.log("Idê w dó³");

                if (this.height == 0) {
                    console.log("Zszed³em z drabiny");
                }
            } else {
                console.log("Jestem ju¿ na ziemi. Nie da siê zejœæ ni¿ej");
            }        
        },
        status: function() {
            if (this.height > 0) {
                console.log(`Jestem na ${this.height} szczeblu drabiny`);
            } else {
                console.log("Stojê przed drabin¹");
            }
        }
    }

    ladder.status();
    ladder.up();
    ladder.up();
    ladder.up();
    ladder.up();
    ladder.up();
    ladder.up();
    ladder.status();
    ladder.down();
    ladder.down();
    ladder.status();
    ladder.down();
    ladder.down();
    ladder.down();
    ladder.down();
    ladder.down();
    ladder.down();
    ladder.status();
}
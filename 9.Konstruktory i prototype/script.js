// Zadanie 1

console.log("");
console.log("Zadanie 1");
console.log("");
{
    function Person(firstName, lastName, age, country, city, language) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.country = country;
        this.city = city;
        this.language = language;

        this.changeAge = function (newAge) {
            this.age = newAge;
        }

        this.changeCity = function (newCity) {
            this.city = newCity;
        }
    }

    let person1 = new Person("Adam", "Kowalski", 34, "Polska", "Kraków", "polski");
    let person2 = new Person("Joe", "Doe", 67, "US", "New York", "english")
    let person3 = new Person("Jan", "Nowak", 11, "Polska", "Poznañ", "polski");
    let person4= new Person("Ivan", "Ivanovic", 88, "Bia³oruœ", "Miñsk", "russian");
    let person5 = new Person("James", "Bond", 35, "Wielka Brytania", "London", "english");

    person1.changeAge(35);
    person1.changeCity("Warszawa");

    person2.changeAge(68);
    person2.changeCity("Helsinki");

    person2.changeAge(12);
    person2.changeCity("Gdañsk");

    person2.changeAge(89);
    person2.changeCity("Moskwa");

    person2.changeAge(36);
    person2.changeCity("Dublin");

    console.log(person1);
    console.log(person2);
    console.log(person3);
    console.log(person4);
    console.log(person5);
}


// Zadanie 2

console.log("");
console.log("Zadanie 2");
console.log("");
{
    function Calculator() {
        this.currentValue = 0;
        this.history = [];

        this.add = function(value) {
            let newValue = this.currentValue + value;
            this.history.push(`${this.currentValue} + ${value} = ${newValue}`);
            this.currentValue = newValue;
            this.showLastHistoryElement();
        }

        this.sub = function(value) {
            let newValue = this.currentValue - value;
            this.history.push(`${this.currentValue} - ${value} = ${newValue}`);
            this.currentValue = newValue;
            this.showLastHistoryElement();
        }

        this.multiply = function(value) {
            let newValue = this.currentValue * value;
            this.history.push(`${this.currentValue} * ${value} = ${newValue}`);
            this.currentValue = newValue;
            this.showLastHistoryElement();
        }

        this.div = function(value) {
            let newValue = this.currentValue / value;
            this.history.push(`${this.currentValue} / ${value} = ${newValue}`);
            this.currentValue = newValue;
            this.showLastHistoryElement();
        }

        this.showLastHistoryElement = () => console.log(this.history[this.history.length - 1]);

        this.showAllHistory = function() {
            console.log("All history:");
            if (this.history.length == 0) {
                console.log("History is Empty.");
            } else {
                for (var i = 0; i < this.history.length; i++) {
                    console.log(this.history[i]);
                }
                console.log("End of history.");
            }
        }

        this.clearHistory = function() {
            this.history = [];
            console.log("History cleared");
        }
    }

    let calc1 = new Calculator();
    let calc2 = new Calculator();

    calc1.add(55);
    calc1.sub(12);
    calc1.multiply(2);
    calc1.showAllHistory();

    calc2.sub(27);
    calc2.div(4);
    calc2.showAllHistory();
    calc2.clearHistory();

    calc1.showAllHistory();
    calc2.showAllHistory();
}


// Zadanie 3

console.log("");
console.log("Zadanie 3");
console.log("");
{
    function MyConstructor() {
        this.start = function () {
            this.setStatus(true);
            this.timerStart = setInterval(() => {
                if (this.getStatus()) {
                    this.setNumber(Math.floor((Math.random() * 10) + 1));
                    console.log(`Current number: ${this.getNumber()}`);
                } else {
                    clearInterval(this.timerStart);
                    console.log(`Stop changing numbers`);
                }
                
            }, 1000)
        }

        this.end = function () {
            this.timerEnd = setInterval(() => {
                if (this.getNumber() > 5) {
                    this.setStatus(false);
                    clearInterval(this.timerEnd);
                    console.log('Catched');
                } else {
                    console.log(`Not catched number: ${this.getNumber()}`);
                }
            }, 1000)
        }
    }

    MyConstructor.prototype.number = 0;
    MyConstructor.prototype.setNumber = (nextNumber) => {
        MyConstructor.prototype.number = nextNumber;
    }
    MyConstructor.prototype.getNumber = () => {
        return MyConstructor.prototype.number;
    }

    MyConstructor.prototype.isWorking = false;
    MyConstructor.prototype.setStatus = (status) => {
        MyConstructor.prototype.isWorking = status;
    }
    MyConstructor.prototype.getStatus = () => {
        return MyConstructor.prototype.isWorking;
    }

    let obj1 = new MyConstructor();
    let obj2 = new MyConstructor();

    obj1.start();
    obj2.end();
}
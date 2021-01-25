// Zadanie 1

console.log("");
console.log("Zadanie 1");
console.log("");
{
    function firstFunction() {
        console.log("Uda³o siê!");
    }

    firstFunction();
}


// Zadanie 2

console.log("");
console.log("Zadanie 2");
console.log("");
{
    function functionWithParameter(parameter) {
        console.log(parameter);
    }

    functionWithParameter("Funkcja z parametrem");
}


// Zadanie 3

console.log("");
console.log("Zadanie 3");
console.log("");
{
    let someArray = ["first", 2, "last"]

    function arrayFunction(arrayParameter) {
        return arrayParameter;
    }

    let result = arrayFunction(someArray);
    console.log(result);
}


// Zadanie 4

console.log("");
console.log("Zadanie 4");
console.log("");
{
    function myFunction(stringParameter) {

        let timerCount = 1;

        let timer = setInterval(() => {

            console.log(stringParameter);
            timerCount++;

            if (timerCount > 5) {
                clearInterval(timer);
                console.log("Koniec");
            }
        }, 3000)
    }

    myFunction("Test funkcji");
}
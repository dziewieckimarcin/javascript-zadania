// Zadanie 1

console.log("");
console.log("Zadanie 1");
console.log("");

{
    let variable1 = true;
    let variable2 = false;

    console.log(variable1);
    console.log(variable2);

    console.log("Result:");
    console.log(variable1 === variable2);
}

// Zadanie 2

console.log("");
console.log("Zadanie 2");
console.log("");

{
    let variable1 = 34;
    let variable2 = 5;
    let moduloResult = 0;

    console.log(variable1);
    console.log(variable2);
    console.log(moduloResult);

    moduloResult = variable1 % variable2;

    console.log("Result:");
    console.log(moduloResult);
}

// Zadanie 3

console.log("");
console.log("Zadanie 3");
console.log("");

{
    let variable1 = "First text.";
    let variable2 = "Second text.";
    let stringResults = "";

    console.log(variable1);
    console.log(variable2);
    console.log(stringResults);

    stringResults = variable1 + variable2;

    console.log("Result:");
    console.log(stringResults);

}
// Zadanie 4

console.log("");
console.log("Zadanie 4");
console.log("");

{
    var someNumber = 425;
    var someString = "425";

    console.log(someNumber);
    console.log(someString);

    console.log("Result:");
    console.log(someNumber == someString);          // wynik to: true - nast�pi�o por�wnanie warto�ci bez por�wnania typ�w (typy danych zosta�y do siebie dopasowane).
    console.log(someNumber === someString);         // wynik to: false - nast�pi�o por�wnanie warto�ci z porownaniem typ�w. Por�wanie da�o wynik false ze wzgl�du na r�nic� typ�w danych.
}

// Zadanie 5

console.log("");
console.log("Zadanie 5");
console.log("");

{
    let counter = 30;
    console.log(counter);

    counter++;
    console.log(counter);

    counter--;
    console.log(counter);
}

// Zadanie 6

console.log("");
console.log("Zadanie 6");
console.log("");

{
    let variable1 = 15;
    let variable2 = 3;
    let result = null;

    console.log(variable1);
    console.log(variable2);
    console.log(result);

    result = variable1 > variable2

    console.log("Result:");
    console.log(result);
}

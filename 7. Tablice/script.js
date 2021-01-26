// Zadanie 1

console.log("");
console.log("Zadanie 1");
console.log("");
{
    let arrayVariable = [1, "dwa", null, undefined, true, "last"];

    for (let i = 0; i < arrayVariable.length; i++) {
        console.log(arrayVariable[i]);
    }
}


// Zadanie 2

console.log("");
console.log("Zadanie 2");
console.log("");
{
    let arrayVariable = ["element 1", 2, "element 3", null, true, 6, "element 7",];

    console.log("1. Pierszy i drugi element");
    console.log(arrayVariable[0]);
    console.log(arrayVariable[1]);
    
    console.log("2. Ostatni element");
    console.log(arrayVariable[arrayVariable.length - 1]);

    console.log("3. Wszystkie elementy");
    for (let i = 0; i < arrayVariable.length; i++) {
        console.log(arrayVariable[i]);
    }

    console.log("4. Co drugi element");
    for (let i = 0; i < arrayVariable.length; i++) {
        if (i % 2 == 0)
        console.log(arrayVariable[i]);
    }

    console.log("5. Wszystkie stringi");
    for (let i = 0; i < arrayVariable.length; i++) {
        if (typeof arrayVariable[i] === "string")
            console.log(arrayVariable[i]);
    }

    console.log("6. Wszystkie numbery");
    for (let i = 0; i < arrayVariable.length; i++) {
        if (typeof arrayVariable[i] === "number")
            console.log(arrayVariable[i]);
    }
}


// Zadanie 3

console.log("");
console.log("Zadanie 3");
console.log("");
{
    let arrayOfNumbers = [3, 2, 16, 29, 1, 9, 4];

    console.log("1. sumê wszystkich elementów");
    let sum = 0;
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        sum += arrayOfNumbers[i];
    }
    console.log(sum);

    console.log("2. ró¿nicê wszystkich elementów");
    let sub = arrayOfNumbers[0];
    for (let i = 1; i < arrayOfNumbers.length; i++) {
        sub -= arrayOfNumbers[i];
    }
    console.log(sub);

    console.log("3. œredni¹ wszystkich elementów");
    let average = 0;
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        average += arrayOfNumbers[i];
    }
    average = average / arrayOfNumbers.length;
    console.log(average);

    console.log("4. elementy parzyste");
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        if (arrayOfNumbers[i] % 2 == 0)
            console.log(arrayOfNumbers[i]);
    }

    console.log("5. elementy nieparzyste");
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        if (arrayOfNumbers[i] % 2 != 0)
            console.log(arrayOfNumbers[i]);
    }

    console.log("6. najwiêksz¹ liczbê");
    let maks = arrayOfNumbers[0];
    for (let i = 1; i < arrayOfNumbers.length; i++) {
        if (arrayOfNumbers[i] > maks)
            maks = arrayOfNumbers[i];
    }
    console.log(maks);

    console.log("7. najmniejsz¹ liczbê");
    let min = arrayOfNumbers[0];
    for (let i = 1; i < arrayOfNumbers.length; i++) {
        if (arrayOfNumbers[i] < min)
            min = arrayOfNumbers[i];
    }
    console.log(min);

    console.log("8. wypisz tablicê od ty³u");
    for (let i = arrayOfNumbers.length - 1; i >= 0; i--) {
        console.log(arrayOfNumbers[i]);
    }
}


// Zadanie 4

console.log("");
console.log("Zadanie 4");
console.log("");
{
    let arrayOfNumbers = [3, 2, 16, 29, 1, 9, 4];

    function sumFunction(arrayParameter) {
        let sum = 0;
        for (let i = 0; i < arrayParameter.length; i++) {
            sum += arrayParameter[i];
        }
        console.log(sum);
    }

    sumFunction(arrayOfNumbers);
}


// Zadanie 5

console.log("");
console.log("Zadanie 5");
console.log("");
{
    let arrayOfNumbers = [3, 2, 16, 29, 1, 9, 4];

    function myFunctionTask5(arrayParameter) {

        let average = 0;
        for (let i = 0; i < arrayParameter.length; i++) {
            average += arrayParameter[i];
        }
        average = average / arrayParameter.length;

        for (let i = 0; i < arrayParameter.length; i++) {
            console.log(arrayParameter[i] * average);
        }
    }

    myFunctionTask5(arrayOfNumbers);
}


// Zadanie 6

console.log("");
console.log("Zadanie 6");
console.log("");
{
    let arrayOfNumbers = [3, 2, 16, 29, 1, 9, 4];

    function myFunctionTask6(arrayParameter) {

        let average = 0;
        let count = 0;
        for (let i = 0; i < arrayParameter.length; i++) {
            if (arrayParameter[i] % 2 == 0) {
                average += arrayParameter[i];
                count++;
            }
        }

        return average / count;
    }

    let result = myFunctionTask6(arrayOfNumbers);
    console.log(result);
}


// Zadanie 7

console.log("");
console.log("Zadanie 7");
console.log("");
{
    let arrayOfNumbers = [3, 2, 16, 29, 1, 9, 4];

    function myFunctionTask7(arrayParameter) {
        arrayParameter.sort((a, b) => a - b);
        for (let i = 0; i < arrayParameter.length; i++) {
            console.log(arrayParameter[i]);
        }
    }

    myFunctionTask7(arrayOfNumbers);
}


// Zadanie 8

console.log("");
console.log("Zadanie 8");
console.log("");
{
    let arrayOfNumbers1 = [3, 2, 16, 29, 1, 9, 4];
    let arrayOfNumbers2 = [6, 9, 2, 4, 55, 23, 1];

    function indexSum(arrayParameter1, arrayParameter2) {
        let sumResult = [];
        for (let i = 0; i < arrayParameter1.length; i++) {
            sumResult.push(arrayParameter1[i] + arrayParameter2[i])
        }
        return sumResult;
    }

    let result = indexSum(arrayOfNumbers1, arrayOfNumbers2);
    console.log(result);
}


// Zadanie 9

console.log("");
console.log("Zadanie 9");
console.log("");
{
    let arrayOfNumbers = [3, -2, 16, -29, -1, 9, 4];

    function toggleArrayElements(arrayParameter) {
        let resultArray = [];
        for (let i = 0; i < arrayParameter.length; i++) {
            resultArray.push(-(arrayParameter[i]))
        }
        return resultArray;
    }

    let result = toggleArrayElements(arrayOfNumbers);
    console.log(result);
}
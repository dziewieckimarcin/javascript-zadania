// Zadanie 1

console.log("");
console.log("Zadanie 1");
console.log("");
{
    let variable1 = 45;
    let variable2 = 67;

    console.log(variable1);
    console.log(variable2);

    console.log("Result:");

    if (variable1 > variable2)
        console.log("Greatest: " + variable1)
    else
        console.log("Greatest: " + variable2)
}


// Zadanie 2

console.log("");
console.log("Zadanie 2");
console.log("");
{
    let variable1 = 45;
    let variable2 = 67;
    let variable3 = 27;

    console.log(variable1);
    console.log(variable2);
    console.log(variable3);

    console.log("Result:");

    if (variable1 > variable2 && variable1 > variable3)
        console.log("Greatest: " + variable1)
    else if (variable2 > variable3)
        console.log("Greatest: " + variable2)
    else
        console.log("Greatest: " + variable3)
}


// Zadanie 3

console.log("");
console.log("Zadanie 3");
console.log("");
{
    for (let i = 0; i < 10; i++) {
        console.log("Lubiê JavaScript")
    }
}


// Zadanie 4

console.log("");
console.log("Zadanie 4");
console.log("");
{
    let result = 0;

    for (let i = 1; i <= 10; i++) {
        result = result + i;
    }

    console.log("Result:");
    console.log(result);
}


// Zadanie 5

console.log("");
console.log("Zadanie 5");
console.log("");
{
    let value = 5;

    for (let i = 0; i <= value; i++) {
        if (i % 2 == 0)
            console.log(i + " - parzysta");
        else
            console.log(i + " - nieparzysta");
    }
}


// Zadanie 6

console.log("");
console.log("Zadanie 6");
console.log("");
{
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 5; j++) {
            console.log("i= " + i + ", j= " + j);
        }
    }
}


// Zadanie 7

console.log("");
console.log("Zadanie 7");
console.log("");
{
    for (let i = 0; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0)
            console.log("FizzBuzz");
        else if (i % 3 == 0)
            console.log("Fizz");
        else if (i % 5 == 0)
            console.log("Buzz");
        else
            console.log(i);
    }
}


// Zadanie 8 a

console.log("");
console.log("Zadanie 8 a");
console.log("");
{
    let size = 5;
    console.log("Size: " + size);

    for (let i = 1; i <= size; i++) {

        let output = "";

        for (var j = 0; j < i; j++) {
            output = output + "*";
        }

        console.log(output);
    }
}


// Zadanie 8 b

console.log("");
console.log("Zadanie 8 b");
console.log("");
{
    let size = 5;
    console.log("Size: " + size);

    for (let i = 1; i <= size; i++) {

        let output = "";

        for (let k = i; k < size; k++) {
            output += " ";
        }

        for (let j = 0; j < i; j++) {
            if (j > 0 && j < i && size > 1)
                output += " ";
            output += "*";
        }

        console.log(output);
    }
}


// Zadanie 8 c

console.log("");
console.log("Zadanie 8 c");
console.log("");
{
    let size = 5;
    console.log("Size: " + size);

    for (let i = 1; i <= size; i++) {

        let output = "";

        for (let k = i; k < size; k++) {
            output += " ";
        }

        for (let j = 0; j < i; j++) {
            if (j > 0 && j < i && size > 1)
                output += "*";
            output += "*";
        }

        console.log(output);
    }
}


// Zadanie 8 d

console.log("");
console.log("Zadanie 8 d");
console.log("");
{
    let size = 5;
    console.log("Size: " + size);

    for (let i = 0; i < size; i++) {

        let output = "";

        for (let k = 0; k < size; k++) {
            if (k <= i)
                output += "*";
            else
                output += k;
        }

        console.log(output);
    }

    let line = "";
    for (let i = 0; i <= size; i++) {
        line += "-";
    }
    console.log(line);


    for (let i = size - 1; i >= 0; i--) {

        let output = "";

        for (let k = 0; k < size; k++) {
            if (k <= i)
                output += "*";
            else
                output += k;
        }

        console.log(output);
    }
}


// Zadanie 8 e

console.log("");
console.log("Zadanie 8 e");
console.log("");
{
    let size = 5;
    console.log("Size: " + size);

    for (let i = 1; i <= size; i++) {

        let output = "";

        for (let k = i; k < size; k++) {
            output += " ";
        }

        for (let j = 0; j < i; j++) {
            if (j > 0 && j < i && size > 1)
                output += " ";
            output += "*";
        }

        console.log(output);
    }

    let output2 = "";

    for (let i = 0; i < size - 1; i++) {
        output2 += " ";
    }
    output2 += "*";

    for (let i = 0; i <= size / 2; i++) {
        console.log(output2);
    }
}
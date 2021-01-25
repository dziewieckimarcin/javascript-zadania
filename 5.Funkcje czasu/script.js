// Zadanie 1

console.log("");
console.log("Zadanie 1");
console.log("");
{
    let timerCount = 1;

    let timer = setInterval(() => {

        console.log("Czesæ po raz " + timerCount);
        timerCount++;

        if (timerCount > 15)
            clearInterval(timer);

    }, 3000)
}

// Zadanie 2

console.log("");
console.log("Zadanie 2");
console.log("");
{
    let taskArray = ["First element", "SecondElement", 3, null, "LastElement"];

    let taskTimeout = setTimeout(() => {

        for (let i = 0; i < taskArray.length; i++)
            console.log(taskArray[i]);

        clearTimeout(taskTimeout);

        let timerArrayCounter = 0;

        let timer = setInterval(() => {

            console.log(taskArray[timerArrayCounter]);
            timerArrayCounter++;

            if (timerArrayCounter >= taskArray.length)
                clearInterval(timer);

        }, 3000)

    }, 2000)
}
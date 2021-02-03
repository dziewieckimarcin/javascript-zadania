// Zadanie 1

console.log("");
console.log("Zadanie 1");
console.log("");
{
    console.log("Podpunkt 1");
    document.getElementById("test-event").addEventListener("click", (e) => {
        console.log(e);
    });

    console.log("Podpunkt 2");
    document.addEventListener("mousemove", (e) => {
        console.log(e);
    });

    console.log("Podpunkt 3");
    document.getElementById("test-event").addEventListener("mouseover", (e) => {
        console.log(e);
    });

    console.log("Podpunkt 4");
    document.addEventListener("keypress", (e) => {
        console.log(e);
    });

    console.log("Podpunkt 5");
    document.addEventListener("scroll", (e) => {
        console.log(e);
    });

    console.log("Podpunkt 6");
    document.getElementById("input-test").addEventListener("input", (e) => {
        console.log(e);
    });
}

// Zadanie 2

console.log("");
console.log("Zadanie 2");
console.log("");
{
    document.getElementById("ex2").addEventListener("click", (e) => {
        let text = e.target.getAttribute("data-text");
        e.target.nextElementSibling.innerHTML = text;
    });
}

// Zadanie 3

console.log("");
console.log("Zadanie 3");
console.log("");
{
    document.getElementById("ex3").addEventListener("mouseenter", (e) => {
        e.target.style.background = "blue";
    });
    document.getElementById("ex3").addEventListener("mouseleave", (e) => {
        e.target.style.background = "red";
    });
}

// Zadanie 4

console.log("");
console.log("Zadanie 4");
console.log("");
{
    document.getElementById("input-test").addEventListener("input", (e) => {
        if (e.target.value.match("\\d")) {
            e.target.nextElementSibling.innerHTML = "Can't use digits";
        } else {
            e.target.nextElementSibling.innerHTML = "";
        }
    });
}


// Zadanie 5 - !!!!! - w pliku html brak jest elementu o id="ex5" do wykonania zadania. Dodalem fragment kodu html. 

console.log("");
console.log("Zadanie 5");
console.log("");
{
    document.querySelector("#ex5 button").addEventListener("click", counter);

    function counter(e) {
        let currentText = e.target.nextElementSibling.innerHTML;

        if (currentText == "") {
            currentText = "1";
        } else {
            currentText = parseInt(currentText) + 1;
        }

        if (currentText == "10") {
            e.target.removeEventListener("click", counter);
        } 

        e.target.nextElementSibling.innerHTML = currentText;
    }
}

// Zadanie 6

console.log("");
console.log("Zadanie 6");
console.log("");
{
    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            document.querySelector("body").style.background = "red";
        } else {
            document.querySelector("body").style.background = "white";
        }
    });
}


// Zadanie 7

console.log("");
console.log("Zadanie 7");
console.log("");
{
    let firstTime = true;
    let currentValue = 0;
    let currentOperation = null;
    let showSummary = false;

    let box = document.querySelector("#calculator input");
    let numbers = document.querySelectorAll("#calculator div button");

    for (var i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener("click", (e) => {
            let value = e.target.innerHTML;
            if (value == "+" || value == "-" || value == "*" || value == "/") {
                submit(value);
            }
            else {
                if (showSummary) {
                    box.value = value;
                    showSummary = false;
                } else {
                    box.value = box.value + value;
                }
            }
        });
    }

    function submit(nextOperation) {
        if (box.value != "") {
            if (firstTime) {
                firstTime = false;
                currentValue = parseInt(box.value);
            } else if (!showSummary) {
                switch (currentOperation) {
                    case "+":
                        currentValue = currentValue + parseInt(box.value);
                        break;
                    case "-":
                        currentValue = currentValue - parseInt(box.value);
                        break;
                    case "*":
                        currentValue = currentValue * parseInt(box.value);
                        break;
                    case "/":
                        currentValue = currentValue / parseInt(box.value);
                        break;
                    default:
                        break;
                }
            }
        }
        

        currentOperation = nextOperation;
        box.value = currentValue;
        showSummary = true;
        firstTime = false;

        
    }
}
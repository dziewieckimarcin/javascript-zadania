// Zadanie 1

console.log("");
console.log("Zadanie 1");
console.log("");
{
    function convertToTags(elements) {
        let resultArray = [];
        for (var i = 0; i < elements.length; i++) {
            resultArray.push(elements[i].tagName);
        }
        return resultArray;
    }

    let result = convertToTags(document.getElementsByClassName("more-divs"));


    for (var i = 0; i < result.length; i++) {
        console.log(result[i]);
    }
}

// Zadanie 2

console.log("");
console.log("Zadanie 2");
console.log("");
{
    function showThings(element, chosenOption) {
        switch (chosenOption) {
            case 1:
                console.log(element.innerHTML);
                break;
            case 2:
                console.log(element.outerHTML);
                break;
            case 3:
                console.log(element.className);
                break;
            case 4:
                let result = [];
                for (var i = 0; i < element.classList.length; i++) {
                    result.push(element.classList[i])
                }
                console.log(result);
                break;
            case 5:
                console.log(element.dataset);
                break;
            default:
                break;
        }
    }

    let option = 2;  // wybór podpunktu
    showThings(document.getElementsByClassName("short-list")[0], option);
}

// Zadanie 3

console.log("");
console.log("Zadanie 3");
console.log("");
{
    function calculate(elementId) {
        let element = document.getElementById(elementId);

        let value1 = parseInt(element.getAttribute("data-numberOne"));
        let value2 = parseInt(element.getAttribute("data-numberTwo"));
        let value3 = parseInt(element.getAttribute("data-number-three"));

        let sum = value1 + value2 + value3;
        let dif = value1 - value2 - value3;

        console.log("Suma: ", sum);
        console.log("Ró¿nica: ", dif);
    }

    calculate("datasetCheck");
}

// Zadanie 4

console.log("");
console.log("Zadanie 4");
console.log("");
{
    document.getElementById("spanText").innerHTML = "nowy tekst";
}


// Zadanie 5

console.log("");
console.log("Zadanie 5");
console.log("");
{
    document.getElementById("spanText").className = "new-class";
}

// Zadanie 6

console.log("");
console.log("Zadanie 6");
console.log("");
{
    function multiTask(listOfClasses) {
        let connectedClasses = "";

        for (var i = 0; i < listOfClasses.length; i++) {
            console.log(listOfClasses[i]);

            if (i > 0) {
                connectedClasses += "+";
            }

            connectedClasses += listOfClasses[i];
        }
    }

    let element = document.getElementById("classes");

    multiTask(element.classList);

    element.className = "";
    console.log("Usuniêto wszystkie klasy");
}


// Zadanie 7

console.log("");
console.log("Zadanie 7");
console.log("");
{
    function addDataText(elements) {
        for (var i = 0; i < elements.length; i++) {
            let element = elements[i];

            if (element.getAttribute("data-text") == null) {
                element.setAttribute("data-text", "text");
            }
        }
    }

    let liElements = document.querySelectorAll("#longList li");
    addDataText(liElements);
}

// Zadanie 8

console.log("");
console.log("Zadanie 8");
console.log("");
{
    function saveObject(parameter1) {
        return {
            newClass: parameter1
        }
    }

    function getValueFromObject(objectParameter) {
        return objectParameter.newClass;
    }

    let myObject = saveObject("new-class-to-set");
    let myClassName = getValueFromObject(myObject);

    document.getElementById("myDiv").className = myClassName;
}

// Zadanie 9

console.log("");
console.log("Zadanie 9");
console.log("");
{
    function setClassToNumbersElement(numberParameter) {
        let element = document.getElementById("numbers");

        if (numberParameter % 2 == 0) {
            element.classList.add("even");
        } else {
            element.classList.add("odd");
        }
    }

    let randomNumber = Math.round(Math.random() * 10);
    setClassToNumbersElement(randomNumber);
}

// Zadanie 10

console.log("");
console.log("Zadanie 10");
console.log("");
{
    function getValuesFromList(element) {

        let resultArray = [];
        let allElements = element.children;

        for (var i = 0; i < allElements.length; i++) {
            resultArray.push(allElements[i].innerHTML)
        }
        return resultArray;
    }

    let result = getValuesFromList(document.getElementById("longList"));
    console.log(result);
}

// Zadanie 11

console.log("");
console.log("Zadanie 11");
console.log("");
{
    function changeElementsValues(listsOfElements) {

        for (var i = 0; i < listsOfElements.length; i++) {
            listsOfElements[i].setAttribute("old-value", listsOfElements[i].innerHTML);
            listsOfElements[i].innerHTML = Math.round(Math.random() * 10);
        }
    }

    let elements = document.getElementById("longList").children;
    changeElementsValues(elements);
}
// Zadanie 1

console.log("");
console.log("Zadanie 1");
console.log("");
{
    let element = document.createElement("div");
    element.innerHTML = "To jest nowy element"

    document.body.appendChild(element);
}

// Zadanie 2

console.log("");
console.log("Zadanie 2");
console.log("");
{
    function addFruitList(fruits) {
        let list = document.createElement("ul");

        for (let i = 0; i < fruits.length; i++) {
            let listElement = document.createElement("li");
            listElement.innerHTML = fruits[i];
            list.appendChild(listElement);
        }

        document.body.appendChild(list);
    }

    let myfruits = ["apple", "orange", "strowbery", "rasberry", "lemon", "lime", "ananas"];
    addFruitList(myfruits);
}

// Zadanie 3

console.log("");
console.log("Zadanie 3");
console.log("");
{
    let element = document.querySelector("body ul");
    element.addEventListener("click", removeElements);

    function removeElements() {
        let elementsToRemove = [];
        for (let i = 0; i < element.children.length; i++) {
            if (i % 2 != 0) {
                elementsToRemove.push(element.children[i]);
            }
        }
        elementsToRemove.forEach(element => element.remove());
        element.removeEventListener("click", removeElements);
    }
}

// Zadanie 4

console.log("");
console.log("Zadanie 4");
console.log("");
{
    let element = document.createElement("button");
    element.innerHTML = "Click to remove me";

    document.body.appendChild(element);

    element.addEventListener("click", () => {
        element.remove();
    })
}


// Zadanie 5

console.log("");
console.log("Zadanie 5");
console.log("");
{
    function createDivs(numberOfElements) {
        for (var i = 0; i < numberOfElements; i++) {
            let element = document.createElement("div");
            element.innerHTML = `To jest Div numer ${i}`;
            document.body.appendChild(element);
        }
    }

    let randomNumber = Math.round(Math.random() * 10);
    createDivs(randomNumber);
}

// Zadanie 6

console.log("");
console.log("Zadanie 6");
console.log("");
{
    function createElementsFromObject(sourceObject, parentElement) {
        for (var i in sourceObject) {
            if (typeof (taskObject[i]) == "object") {
                let createdElement = createSingleElement(parentElement, i, "");
                createElementsFromObject(taskObject[i], createdElement);
            }
            else {
                createSingleElement(parentElement, i, sourceObject[i])
            }
        }
    }

    function createSingleElement(parentElement, elementType, innerText) {
        let element = document.createElement(elementType);
        element.innerHTML = innerText;
        parentElement.appendChild(element);
        return element;
    }

    let taskObject = {
        div1: 'to jest div',
        span1: 'to jest span',
        div2: {
            div3: 'to jest div',
        },
        span2: 'to jest span',
    }

    createElementsFromObject(taskObject, document.body);
}


// Zadanie 7

console.log("");
console.log("Zadanie 7");
console.log("");
{
    function createCustomList(listToCreate, listId) {

        let list = document.createElement("ul");
        list.id = listId;

        for (let i = 0; i < listToCreate.length; i++) {
            let listElement = document.createElement("li");
            listElement.innerHTML = listToCreate[i];
            list.appendChild(listElement);
        }

        document.body.appendChild(list);
        return list;
    }

    function createButtonList(parentList) {
        let button = document.createElement("button");
        button.innerHTML = "Move";
        parentList.appendChild(button);
        return button;
    }

    function moveElement(sourceList, destinationList) {
        let elementToMove = sourceList.lastElementChild.previousElementSibling;
        sourceList.removeChild(elementToMove);
        destinationList.insertBefore(elementToMove, destinationList.lastElementChild);
    }

    let myList1 = ["Audi", "BMW", "KIA", "FIAT", "RENAULT", "OPEL", "VW"];
    let myList2 = [];

    let list1 = createCustomList(myList1, "list1");
    let list2 = createCustomList(myList2, "list2");

    let button1 = createButtonList(list1);
    let button2 = createButtonList(list2);
    button2.disabled = true;

    button1.addEventListener("click", () => {
        moveElement(list1, list2);
        if (list1.children.length == 1) {
            button1.disabled = true;
        }
        button2.disabled = false;
            
    });

    button2.addEventListener("click", () => {
        moveElement(list2, list1);
        if (list2.children.length == 1) {
            button2.disabled = true;
        }
        button1.disabled = false;
    });
}

// Zadanie 8

console.log("");
console.log("Zadanie 8");
console.log("");
{
    let formElement = document.createElement("form");
    formElement.id = "task8-form";

    let labelElement1 = document.createElement("label");
    labelElement1.innerHTML = "Type: ";

    let inputElement1 = document.createElement("input");
    inputElement1.type = "text";
    inputElement1.id = "task8-input1";

    let labelElement2 = document.createElement("label");
    labelElement2.innerHTML = "Inner text: ";

    let inputElement2 = document.createElement("input");
    inputElement2.type = "text";
    inputElement2.id = "task8-input2";

    let labelElement3 = document.createElement("label");
    labelElement3.innerHTML = "Color name: ";

    let inputElement3 = document.createElement("input");
    inputElement3.type = "text";
    inputElement3.id = "task8-input3";

    let labelElement4 = document.createElement("label");
    labelElement4.innerHTML = "Repeat: ";

    let inputElement4 = document.createElement("input");
    inputElement4.type = "number";
    inputElement4.id = "task8-input4";

    let submitButtton = document.createElement("button");
    submitButtton.innerHTML = "Generate";

    formElement.appendChild(labelElement1);
    formElement.appendChild(inputElement1);

    formElement.appendChild(labelElement2);
    formElement.appendChild(inputElement2);

    formElement.appendChild(labelElement3);
    formElement.appendChild(inputElement3);

    formElement.appendChild(labelElement4);
    formElement.appendChild(inputElement4);

    formElement.appendChild(submitButtton);

    document.body.appendChild(formElement);

    let collectionElement = document.createElement("div");
    document.body.appendChild(collectionElement);

    formElement.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log("a1");

        let type = document.getElementById("task8-input1").value;
        let innerText = document.getElementById("task8-input2").value;
        let colorName = document.getElementById("task8-input3").value;
        let repeat = document.getElementById("task8-input4").value;

        if (!(repeat > 0) || innerText == "" || type == "" || colorName == "") return;

        console.log("a2");

        for (var i = 0; i < repeat; i++) {

            let newElement = document.createElement(type);
            newElement.innerHTML = innerText;
            newElement.style.color = colorName;

            collectionElement.appendChild(newElement);
        }
        
    });

}

// Zadanie 9

console.log("");
console.log("Zadanie 9");
console.log("");
{
    function addFormLine(formElementParameter) {

        let lineElement = document.createElement("div");

        let labelElement1 = document.createElement("label");
        labelElement1.innerHTML = "Imiê: ";

        let inputElement1 = document.createElement("input");
        inputElement1.type = "text";

        let labelElement2 = document.createElement("label");
        labelElement2.innerHTML = "Nazwisko: ";

        let inputElement2 = document.createElement("input");
        inputElement2.type = "text";

        let labelElement3 = document.createElement("label");
        labelElement3.innerHTML = "Wiek: ";

        let inputElement3 = document.createElement("input");
        inputElement3.type = "number";

        let labelElement4 = document.createElement("label");
        labelElement4.innerHTML = "Iloœæ dzieci: ";

        let inputElement4 = document.createElement("input");
        inputElement4.type = "number";

        lineElement.appendChild(labelElement1);
        lineElement.appendChild(inputElement1);

        lineElement.appendChild(labelElement2);
        lineElement.appendChild(inputElement2);

        lineElement.appendChild(labelElement3);
        lineElement.appendChild(inputElement3);

        lineElement.appendChild(labelElement4);
        lineElement.appendChild(inputElement4);

        formElementParameter.insertBefore(lineElement, document.getElementById("task9-more-button"));
    }


    function createTable(parentElement, formElementParameter) {

        let tbodyElement = null;

        if (document.getElementById("task9-table") == null) {

            let tableElement = document.createElement("table");
            tableElement.id = "task9-table";

            let theadElement = document.createElement("thead");
            let trHeadElement = document.createElement("tr");
            let thFirstNameElement = document.createElement("th");
            thFirstNameElement.innerHTML = "Imiê";
            let thLastNameElement = document.createElement("th");
            thLastNameElement.innerHTML = "Nazwisko";
            let thAgeElement = document.createElement("th");
            thAgeElement.innerHTML = "Wiek";
            let thChildrenCountElement = document.createElement("th");
            thChildrenCountElement.innerHTML = "Iloœæ dzieci";
            let thActionElement = document.createElement("th");
            thActionElement.innerHTML = "Akcja";
            trHeadElement.appendChild(thFirstNameElement);
            trHeadElement.appendChild(thLastNameElement);
            trHeadElement.appendChild(thAgeElement);
            trHeadElement.appendChild(thChildrenCountElement);
            trHeadElement.appendChild(thActionElement);
            theadElement.appendChild(trHeadElement);
            tableElement.appendChild(theadElement);

            tbodyElement = document.createElement("tbody");
            tbodyElement.id = "task9-tbody";

            tableElement.appendChild(tbodyElement);
            parentElement.appendChild(tableElement);

        } else {
            tbodyElement = document.getElementById("task9-tbody");
        }

        let lines = formElementParameter.querySelectorAll("div");

        for (var i = 0; i < lines.length; i++) {
            let lineData = lines[i].children;

            let trLine = document.createElement("tr");

            let tdFirstName = document.createElement("td");
            tdFirstName.innerHTML = lineData[1].value;

            let tdLasttName = document.createElement("td");
            tdLasttName.innerHTML = lineData[3].value;

            let tdAge = document.createElement("td");
            tdAge.innerHTML = lineData[5].value;

            let tdChildsCount = document.createElement("td");
            tdChildsCount.innerHTML = lineData[7].value;

            let tdButton = document.createElement("td");
            let tdDelete = document.createElement("button");
            tdDelete.innerHTML = "Usuñ";
            tdButton.appendChild(tdDelete);

            trLine.appendChild(tdFirstName);
            trLine.appendChild(tdLasttName);
            trLine.appendChild(tdAge);
            trLine.appendChild(tdChildsCount);
            trLine.appendChild(tdButton);

            tbodyElement.appendChild(trLine);

            tdDelete.addEventListener("click", (e) => {
                let elementToRemove = e.target.parentElement.parentElement;
                elementToRemove.remove();
            });
        }
    }


    let moreButton = document.createElement("button");
    moreButton.id = "task9-more-button";
    moreButton.innerHTML = "Wiêcej";

    let submitButtton = document.createElement("button");
    submitButtton.innerHTML = "Utwórz";

    let formElement = document.createElement("form");
    formElement.id = "task9-form";

    formElement.appendChild(moreButton);
    formElement.appendChild(submitButtton);

    document.body.appendChild(formElement);

    addFormLine(formElement);

    let tableDiv = document.createElement("div");
    document.body.appendChild(tableDiv);

    moreButton.addEventListener("click", (e) => {
        e.preventDefault();
        addFormLine(formElement);
    })

    submitButtton.addEventListener("click", (e) => {
        e.preventDefault();

        createTable(tableDiv, formElement);

        document.querySelectorAll("#task9-form div").forEach(x => x.remove());
        addFormLine(formElement);
    })
}

// Zadanie 10

console.log("");
console.log("Zadanie 10");
console.log("");
{
    function upperCaseFirstLetter(stringValue) {
        if (stringValue == "") {
            return stringValue;
        } else {
            return stringValue.charAt(0).toUpperCase() + stringValue.slice(1);
        }
    }

    console.log(upperCaseFirstLetter("test")); // upperCaseFirstLetter function test
}

// Zadanie 11

console.log("");
console.log("Zadanie 11");
console.log("");
{
    function searchForNumbers(stringValue) {
        let reg = new RegExp("\\d+", 'g');
        let matches = stringValue.matchAll(reg);

        let sum = 0;
        let multiply = 1;

        for (match of matches) {
            sum = sum + parseInt(match[0]);
            multiply = multiply * parseInt(match[0]);
        }

        console.log(`Suma: ${sum}`);

        for (var i = 0; i < multiply; i++) {
            let element = document.createElement("div");
            element.innerHTML = stringValue;
            document.body.appendChild(element);
        }
    }

    searchForNumbers("test2abc11zxc"); // searchForNumbers function test
}


// Zadanie 12

console.log("");
console.log("Zadanie 12");
console.log("");
{
    function createObjectWithString(stringParameter) {
        return {
            stringFromFunction: stringParameter
        }
    }

    let createdObject = createObjectWithString("Jakiœ string to sprawdzenia");

    createdObject.checkMethod = function () {
        if (this.stringFromFunction.includes("Ala")) {
            this.stringFromFunction = this.stringFromFunction.replaceAll("Ala", "Ola");
            console.log(this.stringFromFunction);
        }
        else {
            let element = document.createElement("div");
            element.innerHTML = "S³owo Ala nie wystêpuje w tekœcie.";
            document.body.appendChild(element);
        }
    }

    createdObject.checkMethod();
}

// Zadanie 13

console.log("");
console.log("Zadanie 13");
console.log("");
{
    function convertCountLettersInStringArray(stringArray) {
        let returnArray = [];
        let reg = new RegExp("[\\W\\d]", 'g');

        stringArray.forEach((stringElement) => {
            let onlyLetters = stringElement.replaceAll(reg, "");
            returnArray.push(onlyLetters.length);
        });
        return returnArray;
    }

    function arraySum(stringArrayParameter) {
        let result = 0;
        stringArrayParameter.forEach((element) => {
            result += element;
        });
        return result;
    }

    function avgOfArray(arrayParameter) {
        let sum = arraySum(arrayParameter);
        return sum / arrayParameter.length;
    }

    let testCollection = ["To jest 45", "Tu jest 145 i 34"];
    let lengthArray = convertCountLettersInStringArray(testCollection);
    let sumOfArray = arraySum(lengthArray);
    let arrayAvg = avgOfArray(lengthArray);


    console.log(lengthArray);
    console.log(`Sum: ${sumOfArray}`);
    console.log(`Avg: ${arrayAvg}`);

}

// Zadanie 14

console.log("");
console.log("Zadanie 14");
console.log("");
{
    let testObject = {
        name: '',
        surname: '',
        age: ''
    }

    function newObjectValues(nameParameter, surnameParameter, ageParameter) {
        testObject.name = nameParameter;
        testObject.surname = surnameParameter;
        testObject.ageParameter = ageParameter;

        testObject.nameLength = nameParameter.length;
        testObject.surnameLength = surnameParameter.length;
        testObject.ageLength = ageParameter.length;

        if (nameParameter > 5 || surnameParameter > 5 || ageParameter > 5) {
            let buttonElement = document.createElement("button");
            buttonElement.innerHTML = "Reset";
            document.body.appendChild(buttonElement);

            buttonElement.addEventListener("click", (e) => {
                testObject = {
                    name: '',
                    surname: '',
                    age: ''
                }
                console.log(testObject);
                e.target.remove();
            })
        }
    }

    console.log(testObject);
    newObjectValues("Jan", "Nowak", 24);
    console.log(testObject);
}
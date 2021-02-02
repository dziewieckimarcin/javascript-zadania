// Zadanie 1

console.log("");
console.log("Zadanie 1");
console.log("");
{
    console.log("Podpunkt 1");
    console.log(document.querySelector('#buz').parentElement);

    console.log("Podpunkt 2");
    console.log(document.querySelector('#baz').previousElementSibling);

    console.log("Podpunkt 3");
    let childrens = document.querySelector('#foo').children;
    for (var i = 0; i < childrens.length; i++) {
        console.log(childrens[i])
    }

    console.log("Podpunkt 4");
    console.log(document.querySelector('#foo').parentElement);

    console.log("Podpunkt 5");
    console.log(document.querySelector('#foo').firstElementChild);

    console.log("Podpunkt 6");
    console.log(document.querySelector('#foo').firstElementChild.nextElementSibling);
}

// Zadanie 2

console.log("");
console.log("Zadanie 2");
console.log("");
{
    function squareFunction(elementId) {
        document.querySelector(`#${elementId}`).addEventListener('click', function (e) {
            console.log(e.target.querySelector('div div div div div').nextElementSibling.firstElementChild.firstElementChild.firstChild);
        })
    }

    squareFunction("ex2");
}

// Zadanie 3

console.log("");
console.log("Zadanie 3");
console.log("");
{
    function showAndHide(divId) {
        let buttonNodes = document.querySelectorAll(`#${divId} button`)
        for (var i = 0; i < buttonNodes.length; i++) {
            buttonNodes[i].addEventListener('click', trigger)
        }
    }

    function trigger(e) {
        let spanElement = e.target.nextElementSibling;

        if (spanElement.style.display == "none") {
            spanElement.style.display = "inline-block";
        } else {
            spanElement.style.display = "none";
        }
    }

    showAndHide('ex3');
}

// Zadanie 4

console.log("");
console.log("Zadanie 4");
console.log("");
{
    function randomColor(divId) {
        let buttonNodes = document.querySelectorAll(`#${divId} button`)
        for (var i = 0; i < buttonNodes.length; i++) {
            buttonNodes[i].addEventListener('click', function (e) {
                let parent = e.target.parentElement;
                let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
                parent.style.background = randomColor;
            })
        }
    }

    randomColor('ex3');
}


// Zadanie 5

console.log("");
console.log("Zadanie 5");
console.log("");
{
    let option = 3     // wybór podpunktu zadania

    function setColors(divId) {
        let buttonNodes = document.querySelectorAll(`#${divId} div`)
        let ulElement = document.querySelector(`#${divId} ul`);
        for (var i = 0; i < buttonNodes.length; i++) {
            buttonNodes[i].addEventListener('mouseover', function (e) {
                switch (option) {
                    case 1:
                        option1(e, ulElement);
                        break;
                    case 2:
                        option2(e, ulElement);
                        break;
                    case 3:
                        option3(e, ulElement);
                        break;
                    case 4:
                        option4(e, ulElement);
                        break;
                    case 5:
                        option5(e, ulElement);
                        break;
                    default:
                        break;
                }
            })
        }
    }

    function option1(e, ulElement) {
        setElementColor(e, ulElement.firstElementChild);
    }

    function option2(e, ulElement) {
        setElementColor(e, ulElement.lastElementChild);
    }

    function option3(e, ulElement) {
        for (var i = 1; i < ulElement.children.length; i += 2) {
            setElementColor(e, ulElement.children[i]);
        }
    }

    function option4(e, ulElement) {
        for (var i = 0; i < ulElement.children.length; i++) {
            setElementColor(e, ulElement.children[i]);
        }
    }

    function option5(e, ulElement) {
        setElementColor(e, ulElement);
    }

    function setElementColor(sourceEvent, destinationElement) {
        let colorToSet = sourceEvent.target.style.backgroundColor;
        destinationElement.style.backgroundColor = colorToSet;
    }

    setColors('ex5');
}

// Zadanie 6

console.log("");
console.log("Zadanie 6");
console.log("");
{
    let point1 = document.getElementById("ex6").firstElementChild.firstElementChild.firstElementChild;
    console.log(point1);

    let point2 = document.getElementById("ex6").firstElementChild.parentElement.firstElementChild.firstElementChild.nextElementSibling.parentElement;
    console.log(point2);

    let point3 = document.getElementById("ex6").parentElement.firstElementChild.parentElement.firstElementChild.nextElementSibling.firstElementChild.firstElementChild.firstElementChild;
    console.log(point3);
}
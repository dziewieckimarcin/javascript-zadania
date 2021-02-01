// Zadanie 1

console.log("");
console.log("Zadanie 1");
console.log("");
{
    let elements = document.getElementsByClassName("list");
    console.log(elements);
}

// Zadanie 2

console.log("");
console.log("Zadanie 2");
console.log("");
{
    function showByTag(tagParameter){
        return document.getElementsByTagName(tagParameter);
    }

    let x = showByTag("ul")
    console.log(x);
}

// Zadanie 3

console.log("");
console.log("Zadanie 3");
console.log("");
{
    let element = document.getElementById("list");
    console.log(element);
}

// Zadanie 4

console.log("");
console.log("Zadanie 4");
console.log("");
{
    function showElementsInConsole(parameter) {
        for (var i = 0; i < parameter.length; i++) {
            console.log(parameter[i]);
        }
    }

    console.log("Podpunkt: 1");
    showElementsInConsole(document.getElementsByTagName("li"));

    console.log("Podpunkt: 2");
    showElementsInConsole(document.getElementsByTagName("ul"));

    console.log("Podpunkt: 3");
    showElementsInConsole(document.getElementsByTagName("span"));

    console.log("Podpunkt: 4");
    showElementsInConsole(document.querySelectorAll("div.list span"));

    console.log("Podpunkt: 5");
    showElementsInConsole(document.querySelectorAll("div#spans span"));
}
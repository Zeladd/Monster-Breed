
// useCase is the ID we are using and the value is by how much do we increment
function incrementAnything(useCase, value = 1) {
    var element = document.getElementById(useCase);
    var number = element.innerHTML;
    number = parseInt(number);

    number = number + value;

    element.innerHTML = number;
}
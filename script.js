const value = document.querySelectorAll(".number");
const expression = document.querySelectorAll(".expression")
const storage = document.querySelector(".storage");
const enter = document.querySelector(".enter")
const clear = document.querySelector(".clear")

let calculate = "";
let numberA = 0;
let numberB = 0;
let sign;

function displayCurrent() {
    storage.innerHTML = calculate;
}
function reset() {
    sign = undefined
    numberB = 0;
    storage.innerHTML = numberA
    calculate = numberA;
}

for (let i = 0; i < value.length; i++) {
    value[i].addEventListener("click", () => {
        calculate += value[i].innerHTML
        displayCurrent()
        if (numberA == undefined || sign == undefined) {
            numberA += value[i].innerHTML
        } else {
            numberB += value[i].innerHTML
        }
    })
}

for (let i = 0; i < expression.length; i++) {
    expression[i].addEventListener("click", () => {
        calculate += expression[i].innerHTML
        displayCurrent()
        sign = expression[i].innerHTML
    })
}

enter.addEventListener("click", () => {
    if (sign == "+") {
        numberA = Number(numberA) + Number(numberB)
        reset()
    } else if (sign == "-") {
        numberA = Number(numberA) - Number(numberB)
        reset()
    } else if (sign == "/") {
        numberA = Number(numberA) / Number(numberB)
        reset()
    } else {
        numberA = Number(numberA) * Number(numberB)
        reset()
    }
})
clear.addEventListener("click", () => {
    calculate = "";
    numberA = undefined;
    numberB = undefined;
    displayCurrent();
})
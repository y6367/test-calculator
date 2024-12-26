const value = document.querySelectorAll(".number");
const expression = document.querySelectorAll(".expression")
const storage = document.querySelector(".storage");
const enter = document.querySelector(".enter")
const clear = document.querySelector(".clear")

let calculate = "";
let numberA = 0;
let numberB = 0;
let sign;


function reset() {
    sign = undefined
    numberB = 0;
    storage.innerHTML = numberA
    calculate = numberA;
}
function doExpression() {
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
}

for (let i = 0; i < value.length; i++) {
    value[i].addEventListener("click", () => {
        calculate += value[i].innerHTML
        storage.innerHTML = calculate;
        if (numberA == undefined || sign == undefined) {
            numberA += value[i].innerHTML
        } else {
            numberB += value[i].innerHTML
            console.log(numberB)
            console.log(sign)
        }
    })
}

for (let i = 0; i < expression.length; i++) {
    expression[i].addEventListener("click", () => {
        if (sign != undefined) {
            doExpression()
        }
        calculate += expression[i].innerHTML
        storage.innerHTML = calculate;
        sign = expression[i].innerHTML
    })
}

enter.addEventListener("click", () => {
    doExpression()
})
clear.addEventListener("click", () => {
    calculate = "";
    numberA = 0;
    numberB = 0;
    sign = undefined
    storage.innerHTML = calculate;
})

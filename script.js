const value = document.querySelectorAll(".number");
for (let i = 0; i < value.length; i++) {
    value[i].addEventListener("click", () => {
        console.log(value[i].innerHTML)
    })
}
let input = document.querySelector("input");
let buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        let display = e.target.innerText;
        if (display === "=") {
            input.value = eval(input.value);
        } else if (display === "AC") {
            input.value = "";
        } else if (display === "C") {
            input.value = "";
        } else {
            input.value += e.target.innerText;
        }
    });
});






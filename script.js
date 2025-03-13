document.addEventListener("keydown", function(event) {
    let inputs = document.querySelectorAll("input");
    let allFilled = Array.from(inputs).every(input => input.value.trim() !== "");
    
    if (event.key === "Escape") {
        document.activeElement.blur();
    }
    if (event.key === "Enter" && allFilled) {
        document.getElementById("submit").click();
    }
});
document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();
    const inputs = document.querySelectorAll("input");
    inputs.forEach(input => {
        if (input.value.trim() === '') {
            input.style.border = '2px solid red';
        } else {
            input.style.border = '';
        }
    });
    alert("Form muvaffaqiyatli jo'natildi!");
});
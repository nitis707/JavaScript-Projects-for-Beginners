let userInput = document.querySelector("#date");
userInput.max = new Date().toISOString().split("T")[0]; // To disable future dates
const calculateBtn = document.querySelector(".calculateBtn");

calculateBtn.addEventListener("click", () => {
    let birthDate = new Date(userInput.value);
    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1; // +1 because month will be start from 0
    let y1 = birthDate.getFullYear();

    let today = new Date();
    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3, y3;

    y3 = y2 - y1;
    d3 = d2 - d1;
    
    if (m2 >= m1) {
        m3 = m2 - m1; 
    } else {
        y3--; // decreasing year
        m3 = 12 + m2 - m1; // decreasing year and adding 12 month and then decrease the birthmonth from the today month
    }

    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }
    if (m3 < 0) {
        m3 = 11;
        y3--;
    }

    let showDate = document.createElement("p");
    showDate.innerHTML = `You are <span>${y3}</span> years <span>${m3}</span> months <span>${d3}</span> days old!`;
    const calculator = document.querySelector(".calculator");
    calculator.appendChild(showDate);
})

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}
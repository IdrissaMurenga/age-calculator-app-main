const btn = document.querySelector("#btn");
const age = () => {

    const displayYear = document.querySelector("#displayYear");
    const displayMonth = document.querySelector("#displayMonth");
    const displayDay = document.querySelector("#displayDay");

    const day = document.getElementById("date").value;
    const months = document.getElementById("month").value;
    const years = document.getElementById("year").value;
    const date = new Date();
    const date2 = date.getDate();
    const month2 = 1 + date.getMonth();
    const year2 = date.getFullYear();
    
    const d = date2 - day;
    const m = month2 - months;
    const y = year2 - years;

    displayDay.textContent=`${d}`
    displayMonth.textContent=`${m}`
    displayYear.textContent=`${y}`
}

btn.addEventListener("click", () => {
    age()
})

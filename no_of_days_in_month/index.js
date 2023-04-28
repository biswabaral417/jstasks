let month = document.querySelector("#months");
let days = document.querySelector(".days")
function create(i) {
    let box = document.createElement('div');
    box.setAttribute('class', 'boxes')
    box.innerText = `${i}`
    days.appendChild(box);

}
//i dont know why i could not set m=month.value variable i tried didnt work

month.addEventListener('change', () => {
    let boxes = document.querySelector(".boxes");
    if (month.value == "january" || month.value == "march" || month.value == "may" || month.value == "july" || month.value == "august" || month.value == "october" || month.value == "december") {
        days.innerHTML = '';
        for (let i = 1; i <= 31; i++) {
            create(i);
        }
    }
    else if (month.value == "april" || month.value == "june" || month.value == "september" || month.value == "november") {
        days.innerHTML = '';
        for (let i = 1; i <= 30; i++) {
            create(i);
        }
    }
    else {
        days.innerHTML = '';
        for (let i = 1; i <= 29; i++) {
            create(i);
        }
    }
})

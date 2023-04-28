let p_for_sunny = document.querySelector('#for_sunny');
let p_for_rainy = document.querySelector('#for_rainy');
let p_for_snow = document.querySelector('#for_snow');
let p_for_cold = document.querySelector('#for_cold');
let selected = document.querySelector('#selection');
let paras = document.querySelector('p');

selected.addEventListener('change', (wheather) => {
    switch (selected.value) {
        case ("sunny"):
            paras.style.display = "none";
            p_for_sunny.style.display = "block";
            console.log(selected.value);
            break;

        case ("rainy"):
            paras.style.display = "none";
            p_for_rainy.style.display = "block";
            console.log(selected.value);
            break;

        case ("cold"):
            paras.style.display = "none";
            p_for_cold.style.display = "block";
            console.log(selected.value);
            break;
        case ("snow"):
            paras.style.display = "none";
            p_for_snow.style.display = "block";
            console.log(selected.value);
            break;

        default:
            paras.style.display = "none";
            console.log(selected.value);
        }
        
})
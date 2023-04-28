let body = document.querySelector("body");
let select = document.querySelector("#bg_color");

select.addEventListener("change", () => {
    let color = select.value;
    console.log(color);
    switch (color) {
        case ("red"):
            body.style.backgroundColor = "red";
            break;

        case ("green"):
            body.style.backgroundColor = "green";
            break;

        case ("yellow"):
            body.style.backgroundColor = "yellow";
            break;

        case ("blue"):
            body.style.backgroundColor = "blue";
            break;

        case ("violet"):
            body.style.backgroundColor = "violet";
            break;

        case ("black"):
            body.style.backgroundColor = "black";
            break;

        default:
            body.style.backgroundColor = "white";
            break;
    }




})
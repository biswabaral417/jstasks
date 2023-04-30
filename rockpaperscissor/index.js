let computer_choice = "";
let user_choice = "";
function a() {
    rndm = Math.floor(Math.random() * 100);
    if (rndm >= 66) {
        return "rock";
    }
    else if (rndm >= 33) {
        return "scissor";
    }
    else {
        return "paper";
    }
}
function compare() {
    if (user_choice == computer_choice) {
        alert("draw");
    }
    else if (user_choice == "rock" && computer_choice == "scissor") {
        alert('u win');
    }
    else if (user_choice == "paper" && computer_choice == "rock") {
        alert('u win');
    }
    else if(user_choice == "scissor" && computer_choice == "paper"){
        alert('u win');
    }
    else {
        alert('u lose');
    }

}



function rock() {
    user_choice = "rock";
    computer_choice = a();
    compare();

}
function scissor() {
    user_choice = "scissor";
    computer_choice = a();
    compare();
}
function paper() {
    user_choice = "paper";
    computer_choice = a();
    compare();
}

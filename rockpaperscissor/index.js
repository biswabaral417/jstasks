let user_choice=prompt("enter rock paper or scissor");
function a()
{
    rndm=Math.floor(Math.random()*100);
    if (rndm>=66) {
        return "rock";
    }
    else if(rndm>=33){
        return "scissor";
    }
    else{
        return "paper";
    }
}
let helo="";
helo=a();


function userChoice(){
    switch (user_choice) {
        case "rock":
            if (helo=="scissor") {
                alert("u win");
            }
            else if(helo=='paper'){
                alert('u lose')
            }
            else{
                alert("draw")
            }
            break;
            
            case "paper":
                if (helo=="rock") {
                    alert("u win");
                }
                else if(helo=='scissor'){
                    alert('u lose')
                }
                else{
                    alert("draw")
                }
            
            break;
            
            case "scissor":
                if (helo=="paper") {
                    alert("u win");
                }
                else if(helo=='rock'){
                    alert('u lose')
                }
                else{
                    alert("draw")
                }
            
            break;
        default:
            alert("wrong choices try reloading page and then enter rock paper or scissor");
            break;
    }

}
userChoice();
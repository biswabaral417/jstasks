const output=document.querySelector(".output");

for (let i = 10; i>=0 ; i--) {
    const para=document.createElement('p');
    output.appendChild(para);
    if (i == 10) {
        para.innerText="countdown"+i;

    }
    else if(i>0){
        para.innerText=i;
    } 
    else {
        para.textContent="gentlemen we have liftoff";
    }
}
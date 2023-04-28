inp_txt=document.querySelector("input");
para=document.querySelector("#print_here");
inp_txt.addEventListener("keypress", hit=>{
    if(hit.key==="Enter"){
        console.log("enter pressed");
        para.innerText=inp_txt.value;
    }
})
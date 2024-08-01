let a=document.querySelector("#mode");
let curmode="light";
//console.log(a);
a.addEventListener("click" ,()=>{
    if(curmode==="light"){
        curmode="dark";
        document.querySelector("body").classList.add("dark");
        document.querySelector("body").classList.remove("light");
    }
    else{
        curmode="light";
        document.querySelector("body").classList.add("light");
        document.querySelector("body").classList.remove("dark");
    }
});
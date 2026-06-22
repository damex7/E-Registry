let left = document.getElementById("left");
let bars = document.getElementById("bars");
let cancel = document.getElementById("cancel");

bars.addEventListener('click', ()=>{
    if(!left.classList.contains("show")){
        left.classList.add("show");
        bars.style.display = "none";
    }
})

cancel.addEventListener('click', ()=>{
    if(left.classList.contains("show")){
        left.classList.remove("show");
        bars.style.display= "block";
    }
})

// file detail
let actionsheet = document.getElementById("actionsheet");
let mhistory = document.getElementById("mhistory");
let maildets = document.getElementById("maildets");

let newtable1 = document.getElementById("newtable1");
let newtable2 = document.getElementById("newtable2");
let newtable3 = document.getElementById("newtable3");

actionsheet.addEventListener('click', ()=>{
    if(!actionsheet.classList.contains("show")){
        newtable1.style.display = "block";
        newtable2.style.display = "none";
        newtable3.style.display = "none";
    }
    else{
        newtable1.style.display = "block";
    }
});

mhistory.addEventListener('click', ()=>{
    if(!mhistory.classList.contains("show")){
        newtable1.style.display = "none";
        newtable2.style.display = "block";
        newtable3.style.display = "none";
    }
    // else{
    //     newtable3.style.display = "none";
    // }
});

maildets.addEventListener('click', ()=>{
    if(!maildets.classList.contains("show")){
        newtable1.style.display = "none";
        newtable2.style.display = "none";
        newtable3.style.display = "block";

    }
})

const img = document.getElementById("profileImg"),
imgUpload = document.getElementById("imgUpload");

imgUpload.addEventListener("change", ()=> {
    img.src = URL.createObjectURL(imgUpload.files[0]);
});


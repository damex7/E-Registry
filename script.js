let left = document.getElementById("left");
let bars = document.getElementById("bars");
let cancel = document.getElementById("cancel");

bars.addEventListener('click', ()=>{
    if(!left.classList.contains("show")){
        left.classList.add("show");
        bars.classList.add("hide");
    }
});

cancel.addEventListener('click', ()=>{
    if(left.classList.contains("show")){
        left.classList.remove("show");
        // bars.style.display= "block";
        bars.classList.remove("hide");
    }
});

// Add file /////////////////////////////////////
let cancel1 = document.getElementById("cancel1");
let newFile = document.getElementById("newFile");
let addFile = document.getElementById("addFile");


if(cancel1 && newFile && addFile){

    cancel1.addEventListener('click', ()=>{
        newFile.classList.add("hide");
    });

    addFile.addEventListener('click', ()=>{
        newFile.classList.remove("hide");
        newFile.classList.add("show");
    });

}

// /////////////////////////////////////////////

// Add Mail ///////////////////////////////////////
let cancel2 = document.getElementById("cancel2");
let newMail = document.getElementById("newMail");
let addMail = document.getElementById("addMail");

console.log("Script reached Add Mail section");

if(cancel2 && newMail && addMail){

    cancel2.addEventListener('click', ()=>{
        newMail.classList.add("hide");
    });

    addMail.addEventListener('click', ()=>{
        newMail.classList.remove("hide");
        newMail.classList.add("show");
    });

}

//////////////////////////////////////////////////
// file detail
let actionsheet = document.getElementById("actionsheet");
let mhistory = document.getElementById("mhistory");
let maildets = document.getElementById("maildets");

let newtable1 = document.getElementById("newtable1");
let newtable2 = document.getElementById("newtable2");
let newtable3 = document.getElementById("newtable3");


if(actionsheet && mhistory && maildets){
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
}

///////////////////////////////////
// Forward File ////////////////////////////////
let cancel4 = document.getElementById("cancel4");
let fFile = document.getElementById("fFile");
let Fbtn = document.getElementById("Fbtn");

console.log("Script reached Add Mail section");

if(cancel4 && fFile){
    cancel4.addEventListener('click', ()=>{
        fFile.classList.add("hide");
    });

    Fbtn.addEventListener('click', ()=>{
        fFile.classList.remove("hide");
        fFile.classList.add("show");
    })
}
////////////////////////////////////////

const img = document.getElementById("profileImg"),
imgUpload = document.getElementById("imgUpload");

if(img && imgUpload){
    imgUpload.addEventListener("change", ()=>{
        img.src = URL.createObjectURL(imgUpload.files[0]);
    });
}


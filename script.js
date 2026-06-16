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

const img = document.getElementById("profileImg"),
imgUpload = document.getElementById("imgUpload");

imgUpload.addEventListener("change", ()=> {
    img.src = URL.createObjectURL(imgUpload.files[0]);
});
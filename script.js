function showMessage(){

alert("Project ini dibuat menggunakan HTML, CSS, dan JavaScript.");

}

const hidden=document.querySelectorAll(".hidden");

window.addEventListener("scroll",()=>{

hidden.forEach(item=>{

let posisi=item.getBoundingClientRect().top;

if(posisi<window.innerHeight-100){

item.classList.add("show");

}

});

});
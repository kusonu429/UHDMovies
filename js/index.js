
let active_navbar = document.querySelector('.icons');

let  left_bar  = document.querySelector('.left_side_bar');

active_navbar.addEventListener("click" , function(){
  
    left_bar.classList.add("active_left_bar") 

 
})

// remove_left_bar class 

let remove_left_bar = document.querySelector(".cross_icon");


remove_left_bar.addEventListener("click" , function (){

    left_bar.classList.remove("active_left_bar") 

})
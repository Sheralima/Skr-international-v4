/* ==========================================
   SKR INTERNATIONAL V4
   script.js - Part 1
========================================== */

// ===============================
// Image Slider
// ===============================

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index){

    slides.forEach((slide)=>{
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");

}

function nextSlide(){

    if(slides.length===0) return;

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    showSlide(currentSlide);

}

if(slides.length > 0){

    showSlide(currentSlide);

    setInterval(nextSlide,3000);

}


// ===============================
// Fade Animation
// ===============================

const fadeItems=document.querySelectorAll(".card,.hero,.container");

const observer=new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add("fade-up");

}

});

});

fadeItems.forEach((item)=>{

observer.observe(item);

});


// ===============================
// Counter Animation
// ===============================

const counters=document.querySelectorAll("[data-counter]");

counters.forEach(counter=>{

const update=()=>{

const target=+counter.getAttribute("data-counter");

const current=+counter.innerText;

const increment=target/100;

if(current<target){

counter.innerText=Math.ceil(current+increment);

setTimeout(update,20);

}else{

counter.innerText=target;

}

};

update();

});

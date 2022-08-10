

var sliders = document.getElementsByClassName("slider_content");
let index = 0;
// console.log(sliders.length);

next = function() {
    sliders[index].classList.remove("active_slider");
    index = (index+1)%sliders.length;
    sliders[index].classList.toggle("active_slider");
    clearInterval(setInterval);
};

prev = function() {
    sliders[index].classList.remove("active_slider");
    index = (index+1)%sliders.length;
    sliders[index].classList.toggle("active_slider");
    clearInterval(setInterval)
};



const myInterval = setInterval(next,8000);


window.addEventListener("scroll" ,function(){
    let header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 750);
})
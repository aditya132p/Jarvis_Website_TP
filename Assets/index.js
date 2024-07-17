
var menuBtn = document.querySelector(".ri-menu-line");
var qty = 0
var nav = document.querySelector(".nav-center")
menuBtn.addEventListener("click", function (){
    
     
    if (qty == 0){
    nav.style.height= "0px";
    nav.style.paddingTop="0rem"
    qty +=1;
    }
    else if(qty == 1){
nav.style.height = "100vh";
nav.style.paddingTop="2rem"
  qty = 0;
    }
    
    console.log(menuBtn)
})

var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      autoplay:{
        delay:4000,

      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      
    });









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


var menuBtn = document.querySelector(".ri-menu-line");
var qty = 0
var nav = document.querySelector(".nav-center")
menuBtn.addEventListener("click", function (){
    
     
    if (qty == 0){
    nav.style.height= "0px";
    qty +=1;
    }
    else if(qty == 1){
nav.style.height = "25rem";
  qty = 0;
    }
    
    console.log(menuBtn)
})

const select = document.querySelectorAll(".label_group");

select.forEach((labelInp) => {
  labelInp.addEventListener("click", (event) => {
    labelInp.classList.toggle("select-color")
    console.log(event)
    // labelInp.style.backgroundColor ="#1566D6"
    // labelInp.style.color="#ffff"
  });
});




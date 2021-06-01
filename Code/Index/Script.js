function asked_questions(m){
    let text = document.querySelectorAll(".asked-questions .text")[m]
    let img = document.querySelectorAll(".asked-questions img")[m]
    if(text.style.display != "block"){
        text.style.display = "block"
        img.style.transform = "rotate(180deg)"
    }else{
        text.style.display = "none"
        img.style.transform = "rotate(0deg)"
    }
}

var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
var slideIndex=1;
function currentSlide(n) {
    showSlide(slideIndex=n)
}
function showslide(n){
    var i;
    var slide=document.getElementsByClassName("mySlides");
    if(n>slides.length){
        slideIndex=1;
    }
    if(n<1){
        slideIndex=slides.length;
    }
    for(i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }
    slides[slidesIndex-1].style.display="block";

}
var slideIndex=0;
showSlide();
function showSlide(){
    var i;
    var slides=Document.getElementsByClassName("myslide");
    for(i=0;i<slide.length;i++){
        slides[i].style.display="none";
    }
    slideIndex++;
    if(slideIndex>slides.length){slide}
    slides[slideIndex-1].style.display="block";
    setTimeout(showsSlide,4000);
}
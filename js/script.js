const navigation = document.querySelector('.navigation');
const navigationItemFirst = document.querySelector('.navigation-burger__item--first');
const navigationItemSecond = document.querySelector('.navigation-burger__item--second');
const navigationItemThird = document.querySelector('.navigation-burger__item--third');
const navigationItems = document.querySelectorAll('.navigation-burger__item');
const navigationLinks = document.querySelectorAll('.navigation__link');
const navigationDropDown = document.querySelector('.navigation__dropdown');
const dropDownList = document.querySelector('.dropdown__list-hide');
const translateBurger = ()=>{
    navigation.classList.toggle('active');
    navigation.classList.remove('hide');
    navigationItemSecond.classList.toggle('display-none');
    navigationItemFirst.classList.toggle('translateAdd');
    navigationItemThird.classList.toggle('translateMinus');
    navigationItems.forEach((item)=>{
        item.classList.toggle('dark-background');
    })
    let windowWidth = window.innerWidth;
    if(windowWidth < 600){
        TweenMax.staggerFrom('.navigation-animation',.5,{
            x: 30,
            ease: Circ.easeOut
        },0.5)
    }

}
const shodDropDown = (e)=>{
    dropDownList.classList.toggle('dropdown__list-visible');
}
const navigationBurger = document.querySelector('.navigation-burger').addEventListener('click',translateBurger);
navigationLinks.forEach((item)=>{
    item.addEventListener('click',function(){
        navigation.classList.add('hide');
        navigation.classList.toggle('active');
        navigationItemSecond.classList.toggle('display-none');
        navigationItemFirst.classList.toggle('translateAdd');
        navigationItemThird.classList.toggle('translateMinus');
        navigationItems.forEach((item)=>{
            item.classList.toggle('dark-background');
        })
        console.log('kij')
    })
})
navigationDropDown.addEventListener('click',shodDropDown);
window.addEventListener('scroll',()=>{
    let scrollY = window.scrollY;
    if(scrollY > 200){
        navigationItems.forEach((item)=>{
            item.classList.add('dark-item');
        })
    }else{
        navigationItems.forEach((item)=>{
            item.classList.remove('dark-item');
        })
    }
})

TweenMax.from('.header-h1',2,{
    x:20,
    opacity: 0
})
TweenMax.from('.button-animated',2,{
    y:10,
    opacity: 0,
    delay:1
})

$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});





// api google map function
 


 

 
 
 
 
 
 
 
 
 
 
 
 
 
 

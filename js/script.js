const navigation = document.querySelector('.navigation');
const navigationItemFirst = document.querySelector('.navigation-burger__item--first');
const navigationItemSecond = document.querySelector('.navigation-burger__item--second');
const navigationItemThird = document.querySelector('.navigation-burger__item--third');
const navigationItems = document.querySelectorAll('.navigation-burger__item');
const translateBurger = ()=>{
    navigation.classList.toggle('active');
    navigationItemSecond.classList.toggle('display-none');
    navigationItemFirst.classList.toggle('translateAdd');
    navigationItemThird.classList.toggle('translateMinus');
    navigationItems.forEach((item)=>{
        item.classList.toggle('dark-background');
    })

}
const navigationBurger = document.querySelector('.navigation-burger').addEventListener('click',translateBurger);













$(window).on('scroll',function(){
  

    if( $('.offer-box').inView() && flag == true ) {
      tl.to('.offer-box__reveal',.3,{left: 0})
      
      tl.to('.offer-box__paragraph',.1,{opacity: 1, delay:.1 })
      tl.to('.offer-box__headline',.1,{opacity: 1, delay: .1})
      tl.to('.offer-box__reveal',.3,{left: '-100%',delay:.05})
       flag = false;
     
    }
    else if( $('.transport__wrapper').inView() && flag == false ) {
        
        tl.to('.transport__content',.5,{opacity: 1, delay:.1 })
     
        
     
         flag = true;
       
      }
      else if( $('.job-placement__wrapper').inView() && flag == false ) {
        
        tl.to('.job-placement__content',.5,{opacity: 1, delay:.1 })
        
     
         flag = true;
       
      }
      else if( $('.it-service__wrapper').inView() && flag == true) {
        
        tl.to('.it-service__content',.5,{opacity: 1, delay:.1 })
      
        
     
         flag = true;
       
      }
      
});




// api google map function
 function initMap(){
     
     let styledMapType = new google.maps.StyledMapType(
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "gamma": 0.5
                    }
                ]
            }
        ],
        
          {name: 'Styled Map'}   
     )
     let location = {
        lat: 52.2269913,
        lng: 21.0019028
    };
    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        mapTypeControl: true,
  mapTypeControlOptions: {
    style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
  },
        center: location,
        mapTypeControlOptions:{
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                    'styled_map']
        }
    });
   
    let marker = new google.maps.Marker({
        position: location,
        map: map
    });
    map.mapTypes.set('styled_map', styledMapType);
        map.setMapTypeId('styled_map');
 }



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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

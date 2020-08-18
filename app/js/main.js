$('.trainers__slider').slick({
    slidesToShow: 3,
    centerMode: true,
    nextArrow: '<button class="slider-arrows slider-arrows__next"></button>',
    prevArrow: '<button class="slider-arrows slider-arrows__prev"></button>',
    responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 2,
          }
        },
        {
            breakpoint: 1250,
            settings: {
              slidesToShow: 1,
            }
          },
        
    ]
});

$('.nav-toggle').click(function() {
    $(this).toggleClass('opened');
    $('.header__menu').slideToggle()
});

document.addEventListener('click', function(e) {
    var map = document.querySelector('.contacts__map')
    if(e.target.id === 'contacts__map') {
        map.style.pointerEvents = 'all'
    } else {
        map.style.pointerEvents = 'none'
    }
  })

  document.addEventListener('click', function(e) {
    var table = document.querySelector('.price__table')
    if(e.target.id === 'price__table') {
        table.style.pointerEvents = 'all'
    } else {
        table.style.pointerEvents = 'none'
    }
  })


  YaMapsShown = false;


$(document).ready(function (){

 $(window).scroll(function() {
    if (!YaMapsShown){
     if($(window).scrollTop() + $(window).height() > $(document).height() - 1000) {      
      showYaMaps();
      YaMapsShown = true;
     }
    }
 });
 
});


function showYaMaps(){
 var script   = document.createElement("script");
 script.type  = "text/javascript";
 script.src   = "https://yandex.ru/map-widget/v1/?um=constructor%3Ac0a7bb6f633ae5e9d206346727914b341ce954f59ef3e267f2fdc0d778ea8f5e&amp;source=constructor";
 document.getElementById("YaMaps").appendChild(script);
}
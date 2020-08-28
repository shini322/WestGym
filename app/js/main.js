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


$(document).ready( function(){
  document.addEventListener('click', function(e) {
    var map = document.querySelector('.contacts__map > ymaps');
  });
});

$('.nav-toggle').click(function() {
    $(this).toggleClass('opened');
    $('.header__menu').slideToggle()
});

$('.reviews__link').click(function() {
  $(this).toggleClass('opened');
  $('.reviews__container:nth-child(n+5)').slideToggle()
});





    $(".menu__list li a:not([data-fancybox]").on("click",  function (event) {
        event.preventDefault();
        if ( $(window).width() < 1025 ){
            $('.header__menu').slideToggle()
            $('.nav-toggle').toggleClass('opened')
        }
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 400);
    });

    



window.onload = function(){
 setTimeout(function(){
   document.getElementById('personal_widget_frame_csn').src = 'http://mobifitness.ru/schedule-widget/?code=418871&type=schedule&club=3761&host=mobifitness.ru&version=v6&direction=0&group=0&activity=0&trainer=0&room=0&age=&level=&year=0&week=0&icons=&test=0&debug=0&desc=&language=&shopAuth=0&parent=http://localhost:3000/?mfw_csn';
 },2000);
};

$('.action-btn').click(function(){
  $(".action").animate({
    right: 0
  });
});

// $(document).on('click', function(e) {
//   if (!$(e.target).closest(".action").length) {
//     $('.action').animate({
//       right: '-100%'
//     });
//   }
//   e.stopPropagation();
// });

$('.action__close').click( function(){
  $('.action').animate({
    right: '-150%'
  });
});


// $(window).scroll(function() {
//   if (!YaMapsShown){
//    if($(window).scrollTop() + $(window).height() > $(document).height() - 1000) {      
//     showYaMaps();
//     YaMapsShown = true;
//    }
//   }
// });

// document.addEventListener('click', function(e) {
// var map = document.querySelector('.contacts__map > ymaps')

// if(e.target.id === 'contacts__map') {
//     map.style.pointerEvents = 'all';
// } else {
//     map.style.pointerEvents = 'none';
// }
// });

document.addEventListener('click', function(e) {
var table = document.querySelector('.price__table');
if(e.target.id === 'price__table') {
    table.style.pointerEvents = 'all';
} else {
    table.style.pointerEvents = 'none';
}

});





// let YaMapsShown = false;

// function showYaMaps(){
// var script   = document.createElement("script");
// script.type  = "text/javascript";

// script.src   = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ac0a7bb6f633ae5e9d206346727914b341ce954f59ef3e267f2fdc0d778ea8f5e&amp;width=100%25&amp;height=683&amp;lang=ru_RU&amp;scroll=true";
// document.getElementById("YaMaps").appendChild(script);
// }

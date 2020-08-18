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
    var map = document.querySelector('.contacts__map > ymaps')
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


  $(window).scroll(function() {
    if (!YaMapsShown){
     if($(window).scrollTop() + $(window).height() > $(document).height() - 1000) {      
      showYaMaps();
      YaMapsShown = true;
     }
    }
 });


function showYaMaps(){
 var script   = document.createElement("script");
 script.type  = "text/javascript";
 
 script.src   = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ac0a7bb6f633ae5e9d206346727914b341ce954f59ef3e267f2fdc0d778ea8f5e&amp;width=100%25&amp;height=683&amp;lang=ru_RU&amp;scroll=true";
 document.getElementById("YaMaps").appendChild(script);
}

$(".menu__list li a").on("click",  function (event) {
    event.preventDefault();
    $('.header__menu').slideToggle()
    $('.nav-toggle').toggleClass('opened')
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 400);
});
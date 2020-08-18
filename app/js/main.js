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
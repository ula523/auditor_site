$(document).ready(function(){
  //Мобильное меню
var menuButton = $("[data-toggle=menu]");
  var closeButton = $(".mobile-menu__close");
  menuButton.on("click", openMenu);
  closeButton.on('click',closeMenu);
function openMenu(){
  var mobileMenu = $(".mobile-menu");
  mobileMenu.addClass("mobile-menu--visible");
}
  function closeMenu(event) {
    event.preventDefault();
    var mobileMenu = $(".mobile-menu");
    mobileMenu.removeClass("mobile-menu--visible");
  }
  $("#slider").owlCarousel();

   // Owl Carousel
 $('#js-carousel-5').owlCarousel({

  // Включаем стандартные кнопки
  nav: true,

  // Можно еще задать тексты кнопок
  navText: [
  '<i class="fas fa-chevron-circle-left"></i> Влево',
  'Вправо <i class="fas fa-chevron-circle-right"></i>'
  ]
});
$('#js-carousel-6').each(function () {

  // Создаем карусель
  var owl = $(this).find('.owl-carousel').owlCarousel();

  // При клике по кнопке Влево
  $(this).find('.js-prev').on('click', function () {
    // Перематываем карусель назад
    owl.trigger('prev.owl.carousel');
  });

  // При клике по кнопке Вправо
  $(this).find('.js-next').on('click', function () {
    // Перематываем карусель вперед
    owl.trigger('next.owl.carousel');
  });
});
  
});
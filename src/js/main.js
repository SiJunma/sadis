$( document ).ready(function() {
  
  //SLIDERS
  if($('.feedback-slider')) {
    let reviewSlider = new Splide( '.feedback-slider', {
      type: 'slide',
      pagination: false,
      arrows: true,
      perPage: 1,
      perMove: 1,
    });

    reviewSlider.mount();
  }

  //BURGER BTN
  function burgerBtn(btn) {
    let menu = $('#navigationMenu');

    $(btn).on('click', function(evt) {
      evt.preventDefault();
      menu.toggleClass('opened');
      $(btn).toggleClass('opened');
    })
  }
  burgerBtn('#burgerBtn');

  //ACCORDEON
  $(".custom-accordion__btn").on("click", function(e) {

    e.preventDefault();
    var $this = $(this);

    if (!$this.hasClass("active")) {
        $(".custom-accordion__panel").slideUp(400);
        $(".custom-accordion__btn").removeClass("active");
    }

    $this.toggleClass("active");
    $this.next().slideToggle();
      
  });

  //TABS
  function tabs(btn, panel) {
    $(btn).on('click', function(evt) {
      evt.preventDefault();

      $(btn).removeClass('active');
      $(this).addClass('active');
      $(panel).removeClass('active');
      $($(this).attr('data-target')).addClass('active');
    });
  }
  tabs('.blog-section__tab-btn', '.blog-section__tab-panel');
  
});
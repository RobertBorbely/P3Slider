(function () {
	var $slider = $('#slider'),
      $element = $('.slider-element'),
      $left = $('.left-arrow'),
      $right = $('.right-arrow');

  function slideRight() {
    var $this = $(this),
        $current = $('.active'),
        $next = $current.next(),
        $next_next = $next.next(),
        $next_next_next = $next_next.next(),
        $prev = $current.prev(),
        $prev_prev = $prev.prev();

    
    if($next.length == 0){
      // alert('Vége a bulinak!');
      return;
    }

    changeTitle($next);

    $current.addClass('secondary left').removeClass('active right');
    $next.addClass('active').removeClass('secondary');

    $prev.removeClass('secondary right').addClass('third');
    $prev_prev.removeClass('third');

    $next_next.addClass('secondary').removeClass('third');
    $next_next_next.addClass('third right');


  }

  function slideLeft(){
    var $this = $(this),
        $current = $('.active'),
        $next = $current.next(),
        $next_next = $next.next(),
        $next_next_next = $next_next.next(),
        $prev = $current.prev(),
        $prev_prev = $prev.prev(),
        $prev_prev_prev = $prev_prev.prev();

    if($prev.length == 0){
      // alert('Vége a bulinak!');
      return;
    }

    changeTitle($prev);

    $current.addClass('secondary right').removeClass('active');
    $prev.addClass('active').removeClass('secondary right');

    $next.removeClass('secondary').addClass('third');
    $next_next.removeClass('third');

    $prev_prev.addClass('secondary').removeClass('third');
    $prev_prev_prev.addClass('third left');

  }

  function elementClick() {
    $this = $(this),
    current = $('.active'),
    next_element = $this,
    next_num = $this.data('number'),
    next_element_right = next_element.next(),
    next_element_left = next_element.prev(),
    next_next_element_right = next_element_right.next(),
    next_next_element_left = next_element_left.prev(),
    // prev_element_right = current.next(),
    // prev_element_left = current.prev(),
    // prev_prev_element_right = prev_element_right.next(),
    // prev_prev_element_left = prev_element_left.prev(),
    secondary = $('.secondary'),
    third = $('.third'),
    right = $('.right'),
    left = $('.left');

    changeTitle($this);

    right.removeClass('right');
    left.removeClass('left');

    secondary.removeClass('secondary');
    third.removeClass('third'); 


    $element.each(function(index){
      number = $(this).data('number');

      if(next_num > index) {
        $(this).addClass('left');
      } else {
        $(this).addClass('right');
      }
    })



    // prev_element_right.removeClass('secondary right');
    // prev_element_left.removeClass('secondary left');

    // prev_prev_element_right.removeClass('third right');
    // prev_prev_element_left.removeClass('thrid left');
    

    current.removeClass('active right left');
    next_element.removeClass('secondary third').addClass('active');

    if(current.data('number') < next_num) {
      current.addClass('left');
    } else {
      current.addClass('right');
    }

    next_element_right.addClass('secondary');
    next_next_element_right.addClass('third');

    next_element_left.addClass('secondary');
    next_next_element_left.addClass('third');

  }

  function changeTitle(element) {
    var name = element.data('name'),
        desc = element.data('desc'),
        link = element.data('link');

        $('#item-name').text(name);
        $('#item-desc').text(desc);
        $('#item-link').attr('href', link);
  }

  function init() {
    var $current = $('.active'),
        name = $current.data('name'),
        desc = $current.data('desc'),
        link = $current.data('link');

        $('#item-name').text(name);
        $('#item-desc').text(desc);
        $('#item-link').attr('href', link);
  }

  init();
  $left.on('click', slideLeft);
  $right.on('click', slideRight);
  $element.on('click', elementClick);

})( jQuery );
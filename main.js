function greeting() {
  $('.jumbo-text').text('I changed the text!').css('background-color', 'orange');
}

$('.alert-btn').click(greeting);

// setTimeout(function () {
//   $('.greeting').css('display', 'block')
// }, 3000);

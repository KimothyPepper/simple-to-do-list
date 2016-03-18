var $input = $('#todo-input');
var $list = $('.list');

$('#todo-list').on('submit', function (e){
  var $li = $('<li>');
  e.preventDefault();
  $li.html ($input.val());
  $list.append($li);
})

$('ul').on('click', 'li', function (e) {
  $(this).toggleClass ('is-clicked');
})

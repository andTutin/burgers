;(function() {
  var menuAccordeon = document.querySelector('.menu-accordeon');
  menuAccordeon.addEventListener('click', function(e) {
    e.preventDefault();
    var menuCard = document.querySelectorAll('.menu-card');
    var target = e.target.closest('li');

    if (!target) return;

    if (!target.classList.contains('menu-card--active')) {
      for (var card of menuCard) {
        card.classList.remove('menu-card--active');
      }
        target.classList.add('menu-card--active');
      } else {
        target.classList.remove('menu-card--active');
    }
  });
})()
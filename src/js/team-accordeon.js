;(function() { 
  var teamAccordeon = document.querySelector('.team-accordeon');
      
  teamAccordeon.addEventListener('click', function(e) {
    e.preventDefault();

    var teamCard = document.querySelectorAll('.team-card');
    var target = e.target.closest('li');

    if (!target) return;

    if (!target.classList.contains('team-card--active')) {
      for (var card of teamCard) {
        card.classList.remove('team-card--active');
      }
      target.classList.add('team-card--active');
    } else {
      target.classList.remove('team-card--active');
    }
  });
})()
;(function() {
  var hamburger = document.querySelector('.hamburger');
  var fullscreenMenu = document.querySelector('.mobile-menu');
  var fullscreenMenuLink = document.querySelectorAll('.mobile-menu__link');
  var close = document.querySelector('.close');
      
  hamburger.addEventListener('click', function(event) {
    inscroll = true;
    event.preventDefault();
    hamburger.style.display = 'none';
    fullscreenMenu.style.display = 'flex';
    close.style.display = 'block';
    document.body.style.overflow = 'hidden';
    close.addEventListener('click', function(event) {
      event.preventDefault();
        fullscreenMenu.style.display = '';
        hamburger.style.display = '';
        document.body.style.overflow = 'initial';
        inscroll = false;
      });
    });

    for (var i = 0; i < fullscreenMenuLink.length; i++) {
      fullscreenMenuLink[i].addEventListener('click', function(event) {
        hamburger.style.display = '';
        fullscreenMenu.style.display = 'none';
        document.body.style.overflow = 'initial';
        inscroll = false;
      });
    };
})()
;(function() {
  var modalRev = document.querySelector('.popup-reviews');
  var modalTitle = document.querySelector('.popup-reviews__title');
  var modalText = document.querySelector('.popup-reviews__text');
  var revList = document.querySelector('.reviews__list');
  var revClose = document.querySelector('.popup-reviews__close');
  revClose.addEventListener('click', function(e) {
    e.preventDefault();
    inscroll = false;
    modalRev.style.display = 'none';
    document.body.style.overflow = 'initial';
  });

  revList.addEventListener('click', function(e) {
    e.preventDefault();
    var target = e.target.closest('button');
    if (!target) return;
    inscroll = true;
      modalRev.style.display = 'flex';
      document.body.style.overflow = 'hidden';
      modalTitle.style.display  = 'block';
      modalTitle.innerText = target.parentNode.firstChild.nextSibling.textContent;
      modalText.innerText = target.parentNode.firstChild.nextSibling.nextSibling.nextSibling.textContent;
    });
})()
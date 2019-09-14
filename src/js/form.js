;(function() {
  const orderForm = document.querySelector('.form');
  const orderButton = document.querySelector('.button--order');
  const resetButton = document.querySelector('.button--reset');
  var popupForm = document.querySelector('.popup-form');
  var popupText = document.querySelector('.popup-form__text');
  var popupClose = document.querySelector('.popup-form__close');

  orderButton.addEventListener('click', function (e) {
    e.preventDefault();
    if (validateForm(orderForm)) {
      let data = new FormData();
      data.append("name", orderForm.elements.name.value);
      data.append("phone", orderForm.elements.phone.value);
      data.append("comment", orderForm.elements.comment.value);
      data.append("to", "and.tutin@gmail.com");
      const xhr = new XMLHttpRequest();
      xhr.responseType = 'json';
      xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
      xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      xhr.send(data);
      xhr.addEventListener('load', () => {
        popupForm.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        popupText.innerText = xhr.response.message;
        orderForm.elements.name.value = '';
        orderForm.elements.phone.value = '';
        orderForm.elements.comment.value = '';
      });
    };      
  });

  popupClose.addEventListener('click', function(e) {
    e.preventDefault();
    popupForm.style.display = '';
    document.body.style.overflow = '';
  })

  function validateForm(form) {
    let valid = true;
    if (!validateField(form.elements.name)) {
      valid = false;
    }
    if (!validateField(form.elements.phone)) {
      valid = false;
    }
    if (!validateField(form.elements.comment)) {
      valid = false;
    }
    return valid;
  }
  function validateField(field) {
    if (!field.checkValidity()) {
      field.nextElementSibling.textContent = field.validationMessage;
      return false;
    } else {
      field.nextElementSibling.textContent = '';
      return true;
    }
  }
})()
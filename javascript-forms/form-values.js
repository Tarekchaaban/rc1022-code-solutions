var $contactForm = document.querySelector('#contact-form');

function handleSubmit(event) {
  event.preventDefault();
  var formData = {};
  formData.name = $contactForm.elements.name.value;
  formData.email = $contactForm.elements.email.value;
  formData.message = $contactForm.elements.message.value;
  console.log('formData: ', formData);
  $contactForm.reset();
}

$contactForm.addEventListener('submit', handleSubmit);

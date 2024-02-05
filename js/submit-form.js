
document.getElementById('signup-form').onsubmit = function(e) {
  e.preventDefault();
  const formElements = e.target;
  if (validateForm(formElements)) {
    console.log('is valid');
  } else {
    console.log('is invalid');
  }
}
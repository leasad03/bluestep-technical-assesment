/**
 * validation script that helps on validate the inputs on the user signup form
 * 
 * single functions that are being called on different possible events:
 * onblur - checks the input state after leaving it
 * onchange - checking input validity for selects
 * onsubmit - doing a general validation, in case the user wants to save without focus on an input first.
 * 
 */
let isValid = true;

function toggleInvalidFeedback(element) {
  if (isValid){
    element.classList.remove('invalid');
    element.classList.add('valid');
    return;
  }
  element.classList.add('invalid');
}

function isEmpty(val) {
  return val === '';
}

function isDateValid(val) {
  return !isNaN(new Date(val));
}

const validateEmailInput = function(e) {
  const email = e.value;
  const emailReg = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
  isValid = !isEmpty(email) && emailReg.test(email.trim());
  toggleInvalidFeedback(e);
};

const validatePassword = function(e) {
  const password = e.value;
  isValid = !isEmpty(password);
  toggleInvalidFeedback(e);
}

const validateConfirmPassword = function(e) {
  const confirmation = e.value;
  const originalPassword = document.getElementById('password').value;
  isValid = !isEmpty(confirmation) && confirmation === originalPassword;
  toggleInvalidFeedback(e);
}

const validateRequired = function(e) {
  isValid = !isEmpty(e.value);
  toggleInvalidFeedback(e);
}

const validateBirthDate = function(e) {
  const dateStr = e.value;
  isValid = !isEmpty(dateStr) && isDateValid(dateStr);
  toggleInvalidFeedback(e);
}

const validatePhoneNumber = function(e) {
  const phone = e.value;
  const phoneReg = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
  isValid = !isEmpty(phone) && phoneReg.test(phone);
  toggleInvalidFeedback(e);
}

const validateState = function(e) {
  const selected = e.value;
  isValid = selected !== 'Choose...';
  toggleInvalidFeedback(e);
}

const validateForm = function (elements) {
  Array.from(elements).forEach(function(element){
    const elementType = element.type;
    switch(elementType) {
      case 'email':
        validateEmailInput(element);
        break;
      case 'password':
        validatePassword(element);
        validateConfirmPassword(element);
        break;
      case 'date':
        validateBirthDate(element);
        break;
      case 'tel':
        validatePhoneNumber(element);
        break;
      case 'text':
        validateRequired(element);
        break;
      default:
        break;
    }
  });
  const states = document.querySelector('.form-select');
  validateState(states);

  return isValid;
}

document.getElementById('email').onblur = (e) => validateEmailInput(e.target);
document.getElementById('password').onblur = (e) => validatePassword(e.target);
document.getElementById('confirmPassword').onblur = (e) => validateConfirmPassword(e.target);
document.getElementById('firstName').onblur = (e) => validateRequired(e.target);
document.getElementById('lastName').onblur = (e) => validateRequired(e.target);
document.getElementById('birthdate').onblur = (e) => validateRequired(e.target);
document.getElementById('phone').onblur = (e) => validatePhoneNumber(e.target);
document.getElementById('addressLine1').onblur = (e) => validateRequired(e.target);
document.getElementById('city').onblur = (e) => validateRequired(e.target);
document.getElementById('state').onchange = (e) => validateState(e.target);
document.getElementById('zipCode').onblur = (e) => validateRequired(e.target);

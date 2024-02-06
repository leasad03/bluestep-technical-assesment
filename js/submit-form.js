document.getElementById('signup-form').onsubmit = async function(e) {
  e.preventDefault();
  // getting messages and form inputs
  const userMessages = document.getElementById('messageResult');
  const elements = document.querySelectorAll('.form-control');

  // adding a validation of the full form before attempting to submit
  if (validateForm(elements)) {
    // transforming form elements to a javascript objetct 
    // that will be converted to a json object easily when needed
    const data = new FormData(e.target);
    let jsonData = {};
    data.forEach((val, key) => jsonData[key] = val);

    // posting the json object to the fake endpoint
    // left it commented due to assesment instructions
    /* await fetch('https://myfunapi.fake/user/signup', {
      method: 'POST',
      body: JSON.stringify(jsonData),
    }); */
    console.log(jsonData);
    
    //Adding calls to the mock API 
    const saved = mockAPI(jsonData);
    //displaying result message to user
    userMessages.innerHTML = saved.message;

    // handling styles for the message
    // red: error
    // green: success
    if (saved.result) {
      userMessages.classList.add('success');
      userMessages.classList.remove('error');
    }
    else {
      userMessages.classList.add('error');
      userMessages.classList.remove('success');
    }
  } else {
    userMessages.classList.add('error');
    userMessages.innerHTML = 'There are some errors or missing fields. Please check the form!';
  }
}
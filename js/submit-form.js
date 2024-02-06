document.getElementById('signup-form').onsubmit = async function(e) {
  e.preventDefault();
  const userMessages = document.getElementById('messageResult');
  const elements = document.querySelectorAll('.form-control');

  if (validateForm(elements)) {
    const data = new FormData(e.target);
    let jsonData = {};
    data.forEach((val, key) => jsonData[key] = val);
    /* await fetch('https://myfunapi.fake/user/signup', {
      method: 'POST',
      body: JSON.stringify(jsonData),
    }); */
    console.log(jsonData);
    
    const saved = mockAPI(jsonData);
    userMessages.innerHTML = saved.message;
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
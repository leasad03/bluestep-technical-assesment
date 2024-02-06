document.getElementById('signup-form').onsubmit = async function(e) {
  e.preventDefault();
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
    
    mockAPI(jsonData);
  } else {
    alert('There are some errors or missing fields. Please check the form!');
  }
}
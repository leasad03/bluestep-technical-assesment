function mockAPI(data) {
  const response = {
    result: false,
    message: 'an error happened!',
  };

  try {
    // validating required fields!
    if (isEmpty(data.firsName) || isEmpty(data.lastName)) response.message = 'User first and last name are mandatories.';
    if (isEmpty(data.email)) response.message = 'The email is mandatory';
    
    const myUser = UserHelper.create(data);


  } catch(err) {
    response.result = false;
    response.message = err.message ?
      err.message :
      'An error happened while creating user in the database';
  }

  return response;
}

function isEmpty(val) {
  return val === '' || val === null || val === undefined;
}
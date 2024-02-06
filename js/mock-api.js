function mockAPI(data) {
  const response = {
    result: false,
    message: 'an error happened!',
  };

  try {
    /* // validating required fields!
    if (isEmpty(data.firsName) || isEmpty(data.lastName)) {
      response.message = 'User first and last name are mandatories.';
      return response;
    }
    if (isEmpty(data.email)) {
      response.message = 'The email is mandatory';
      return response;
    } 
    
    const myUser = UserHelper.create(data);
    let isUserSet = false;

    // reading through the data JSON and setting up the user
    for(const [key, value] in Object.entries(data)) {
      switch (key) {
        case 'email':
          isUserSet = myUser.setEmail(value);
          break;
        case 'password':
          isUserSet = myUser.setPassword(value);
          break;
        case 'firstName':
          isUserSet = myUser.setName(`${data.firsName} ${data.lastName}`);
          break;
        case 'birthdate':
          isUserSet = myUser.setBirthdate(value);
          break;
        case 'phone':
          isUserSet = myUser.setPhone(value);
          break;
        case 'addressLine1':
          isUserSet = myUser.setAddressLine1(value);
          break;
        case 'addressLine2':
          isUserSet = myUser.setAddressLine2(value);
          break;
        case 'city':
          isUserSet = myUser.setCity(value);
          break;
        case 'state':
          isUserSet = myUser.setState(value);
          break;
        case 'zipCode':
          isUserSet = myUser.setZipCode(value);
          break;
        case 'ecName':
          isUserSet = myUser.setEmergencyContactName(value);
          break;
        case 'ecPhone':
          isUserSet = myUser.setEmergencyContactPhone(value);
          break;
        default:
          break;
      }
      if (!isUserSet) {
        response.message = `A problem happened on setting user ${key}.`
        return response;
      }
    }

    // saving new user by using the library
    response.result = UserHelper.save();
    // setting up a descriptive message for the customer.
    response.message = response.result ? 'User created successfully!' : 'There was an error while saving the user'; */

    response.result = true;
    response.message = 'User created successfully!';
  } catch(err) {
    response.message = err.message ?
      err.message :
      'An error happened while creating user in the database';
  }

  return response;
}

function isEmpty(val) {
  return val === '' || val === null || val === undefined;
}
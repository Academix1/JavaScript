const car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2020
  };
  
  console.log(car.make);
  console.log(car.model);
  console.log(car.year);
  
  const { make, model, year } = car;
  console.log(make);
  console.log(model);
  console.log(year);
  
  const employee = {
    name: 'Alice',
    position: 'Software Engineer',
    contact: {
      email: 'alice@example.com',
      phone: '123-456-7890'
    }
  };
  
  console.log(employee.name);
  console.log(employee.position);
  console.log(employee.contact.email);
  console.log(employee.contact.phone);
  
  const { name, position, contact: { email, phone } } = employee;
  console.log(name);
  console.log(position);
  console.log(email);
  console.log(phone);
  
  const dynamicKey = 'age';
  const person = {
    name: 'John',
    [dynamicKey]: 28
  };
  
  console.log(person.name);
  console.log(person.age);
  
  const { name: personName, [dynamicKey]: personAge } = person;
  console.log(personName);
  console.log(personAge);
  
  const user = new Object();
  user.username = 'johndoe';
  user.email = 'john.doe@example.com';
  
  console.log(user.username);
  console.log(user.email);
  
  const { username, gmail } = user;
  console.log(username);
  console.log(email);
  
  const calculator = {
    add: function(a, b) {
      return a + b;
    },
    subtract: function(a, b) {
      return a - b;
    }
  };
  
  console.log(calculator.add(5, 3));
  console.log(calculator.subtract(5, 3));
  
  const { add, subtract } = calculator;
  console.log(add(10, 2));
  console.log(subtract(10, 2));
  
  const personDetails = {
    firstName: 'Michael',
    lastName: 'Jordan',
    birthYear: 1963
  };
  
  const { firstName: fname, lastName: lname, birthYear: birth } = personDetails;
  console.log(fname);
  console.log(lname);
  console.log(birth);
  
  const address = {
    street: '123 Main St',
    city: 'New York',
    zipCode: '10001'
  };
  
  const updatedAddress = { ...address, country: 'USA' };
  console.log(updatedAddress);
  
  const { street, city, zipCode, country } = updatedAddress;
  console.log(street);
  console.log(city);
  console.log(zipCode);
  console.log(country);
  
  const userProfile = {
    username: 'jane_doe',
    skills: ['JavaScript', 'React', 'Node.js']
  };
  
  console.log(userProfile.skills);
  
  const { username: profileName, skills } = userProfile;
  console.log(profileName);
  console.log(skills);
  
  const original = {
    name: 'David',
    occupation: 'Engineer'
  };
  
  const copy = Object.assign({}, original);
  console.log(copy);
  
  const { name: copiedName, occupation: copiedOccupation } = copy;
  console.log(copiedName);
  console.log(copiedOccupation);
  



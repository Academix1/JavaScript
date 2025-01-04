### Objects and Maps
```js
const users = [
    { id: 1, name: 'John', age: 25, city: 'New York', job: 'Developer' },
    { id: 2, name: 'Alice', age: 30, city: 'Los Angeles', job: 'Designer' },
    { id: 3, name: 'Bob', age: 22, city: 'Chicago', job: 'Artist' },
    { id: 4, name: 'Emily', age: 27, city: 'San Francisco', job: 'Engineer' }
  ];
  
  const userDescriptions = users.map(({ name, city, job }) => {
    return `${name}, a ${job}, lives in ${city}.`;
  });
  console.log(userDescriptions); 
  
  
  const usersWithFullInfo = users.map(user => {
    const fullInfo = `${user.name}, aged ${user.age}, lives in ${user.city} and works as a(n) ${user.job}.`;
    return { ...user, fullInfo };
  });
  console.log(usersWithFullInfo);
  

  
  
  const jobTitles = users.map(user => user.job);
  console.log(jobTitles);
  
  const transformedUsers = users.map(({ name, city, job }) => {
    return {
      userName: name.toUpperCase(),
      userCity: city.toLowerCase(),
      userJob: job.charAt(0).toUpperCase() + job.slice(1)
    };
  });
  
  console.log(transformedUsers);
  const usersWithExperience = users.map(user => {
    const experience = user.age - 18;
    return { ...user, experience };
  });
  console.log(usersWithExperience);
  
  const usersWithStatus = usersWithExperience.map(user => {
    const status = user.experience > 7 ? 'Experienced' : 'Junior';
    return { ...user, status };
  });
  console.log(usersWithStatus);
  
  ```

### Objects and Destructure


```js
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
```
### Object (Multi Attribute) Destructure

````js
const complexObject = {
    fname: 'Alice',
    age: 30,
    isActive: true,
    hobbies: ['Reading', 'Hiking', 'Coding'],
    address: {
      street: '123 Main St',
      city: 'New York',
      zipCode: '10001'
    },
    greet: function() {
      return `Hello, my name is ${this.fname}.`;
    },
  };
  
  const {
    fname,
    age,
    isActive,
    hobbies,
    address: { street, city, zipCode },
    greet
  } = complexObject;
  
  const boundGreet = greet.bind(complexObject);
  
  console.log(fname);        // Alice
  console.log(age);         // 30
  console.log(isActive);    // true
  console.log(hobbies);     // ['Reading', 'Hiking', 'Coding']
  console.log(street);      // 123 Main St
  console.log(city);        // New York
  console.log(zipCode);     // 10001
  console.log(boundGreet()); // Hello, my name is Alice.
  
  ````

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
  
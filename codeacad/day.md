## Day6

### Objects

   #### **Q1:** Write a code snippet to create an object called `book` with the following properties:
      
   - `title`: "JavaScript Fundamentals"
   - `author`: "John Doe"
   - `year`: 2022
   - `isAvailable`: true
     
   **A**
   
   ```javascript
         const book = {
           title: "JavaScript Fundamentals",
           author: "John Doe",
           year: 2022,
           isAvailable: true
         };
         console.log(book);
   ````
   
   #### **Q2:** Add a method getDiscountedPrice to the object product which returns a discounted price (10% off) for a given price. The object has properties:
   - name: 'Laptop'
   - price: 1000

     **A**

     ```js
           const product = { name: 'Laptop', price: 1000 };
         product.getDiscountedPrice = function() {
           return this.price - (this.price * 0.10);
         };
         console.log(product.getDiscountedPrice()); // 900

     ```
   
   #### **Q3:** Create an object with a dynamic key color where the value of the key is "Red". Use a variable to store the key name.
   
   **A**
    
   ```js
       const key = 'color';
       const obj = {
         [key]: 'Red'
       };
       console.log(obj.color); // Red
   ```
  
   #### **Q4:** Create an object student with the following properties:
   - name: 'Alice'
   - age: 20
   - address: a nested object with properties: street, city, and zipCode.
   
   **A**
   
   ```js
       const student = {
         name: 'Alice',
         age: 20,
         address: {
           street: '123 Main St',
           city: 'New York',
           zipCode: '10001'
         }
       };
       console.log(student);
   ```
   #### **Q5:** Create a constructor function Person that accepts name, age, and city as parameters and returns an object with those properties.
   
   **A**
     
   ````js
     function Person(name, age, city) {
       this.name = name;
       this.age = age;
       this.city = city;
     }
     const person1 = new Person('John', 28, 'New York');
     console.log(person1);
   
   ````
---

### Destructure of Objects
----
#### **Q1** Given the following object, destructure it to extract the make, model, and year properties:

   ```js
   const car = { make: 'Toyota', model: 'Corolla', year: 2020 };
   ```
   **A**
   ```js
   const { make, model, year } = car;
   console.log(make); 
   console.log(model); 
   console.log(year);  
  ```

#### **Q2** Given the following object, destructure it to extract the name, email, and phone properties from the nested contact object:
   ```js
      const user = { name: 'Alice', contact: { email: 'alice@example.com', phone: '123-456-7890' } };
   ```
  **A**
  ```js
   const { name, contact: { email, phone } } = user;
   console.log(name);  
   console.log(email);  
   console.log(phone);  
  ```
#### **Q3** Given the following object, destructure it to extract firstName, lastName, and birthYear properties, and rename them as fname, lname, and birth:
   ```js
      const person = { firstName: 'Michael', lastName: 'Jordan', birthYear: 1963 };
   ```
   **A**
   
   ```js
   const { firstName: fname, lastName: lname, birthYear: birth } = person;
   console.log(fname);  
   console.log(lname);  
   console.log(birth);  
   ```
#### **Q4** Given the following array, destructure it to extract the first two elements:

   ```js
      const numbers = [10, 20, 30, 40];
   ```
   **A**
   
   ```js
   const [first, second] = numbers;
   console.log(first);  
   console.log(second); 
  ```
#### **Q5** Given the following object, destructure it to extract the username and email properties. If email does not exist, set it to 'default@example.com' ?
   
   ```js
      const user = { username: 'johndoe' };
   ```
   **A** 
   
   ```js
   const { username, email = 'default@example.com' } = user;
   console.log(username);
   console.log(email);
   ```
#### **Q6:** Given the following array of users, destructure it to extract the hobbies of the first and second users:

```js
const users = [
  { id: 1, name: 'John', hobbies: ['Reading', 'Cycling'] },
  { id: 2, name: 'Alice', hobbies: ['Painting', 'Running'] }
];
```

**A**

```js
   const [{ hobbies: johnHobbies }, { hobbies: aliceHobbies }] = users;
   console.log(johnHobbies[0]);  
   console.log(aliceHobbies[0]);
```
---
### Maps
---
#### **Q1:** Create a Map called carInfo and add the following key-value pairs:
- make: 'Toyota'
- model: 'Corolla'
- year: 2020

```js
   const carInfo = new Map();
   carInfo.set('make', 'Toyota');
   carInfo.set('model', 'Corolla');
   carInfo.set('year', 2020);
   console.log(carInfo);
```
#### **Q2:** Given the following Map called carInfo, access and log the value for the key make:

```js
const carInfo = new Map([
  ['make', 'Toyota'],
  ['model', 'Corolla'],
  ['year', 2020]
]);
```
**A**
```js
console.log(carInfo.get('make'));
```

#### **Q3** Given the Map from the previous question, iterate over it and log the keys and values.

```js
const carInfo = new Map([
  ['make', 'Toyota'],
  ['model', 'Corolla'],
  ['year', 2020]
]);
```
**A**

```js
carInfo.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
```
#### **Q4** Given the Map called carInfo, convert it to an object.
```js
const carInfo = new Map([
  ['make', 'Toyota'],
  ['model', 'Corolla'],
  ['year', 2020]
]);
```
**A**

```js
const carInfoObject = Object.fromEntries(carInfo);
console.log(carInfoObject);
```
#### **Q5** You are given an array of products, where each product has a `name` and `price`.  
- Write a function using the `map` method that adds a `discountedPrice` property to each product object. The discounted price should be 20% less than the original price.
```js
const products = [
  { name: 'Product A', price: 100 },
  { name: 'Product B', price: 200 },
  { name: 'Product C', price: 300 }
];
```

**A**

```js
const productsWithDiscount = products.map(product => {
  const discountedPrice = product.price * 0.8;
  return { ...product, discountedPrice };
});

console.log(productsWithDiscount);
```

#### **Q6:** You have an array of people objects, each containing firstName and lastName.
 - Write a function that extracts only the firstName from each person and returns a new array containing the first names.

```js
   const people = [
  { firstName: 'John', lastName: 'Doe' },
  { firstName: 'Alice', lastName: 'Smith' },
  { firstName: 'Bob', lastName: 'Johnson' }
   ];
```

**A**

```js
const firstNames = people.map(person => person.firstName);
console.log(firstNames);
```
#### **Q7:** You have an array of books, and each book has a title.
- Write a function that uses map to convert the title of each book to uppercase.

 ```js
const books = [
  { title: 'The Great Gatsby' },
  { title: '1984' },
  { title: 'To Kill a Mockingbird' }
];
```
**A**

```js
const uppercaseTitles = books.map(book => {
  return { title: book.title.toUpperCase() };
});

console.log(uppercaseTitles);
```
#### **Q8:** You are given an array of products, where each product contains name, category, and price.
   - Write a function that returns a new array where each product's name is appended with the category and price, in the format: "name (category): price"
```js
const products = [
  { name: 'Laptop', category: 'Electronics', price: 1000 },
  { name: 'Shoes', category: 'Footwear', price: 50 },
  { name: 'T-shirt', category: 'Clothing', price: 20 }
];
```
**A**
```js
const formattedProducts = products.map(product => {
  return `${product.name} (${product.category}): $${product.price}`;
});

console.log(formattedProducts);
```
#### **Q9:** Write a function that adds an ageGroup property to each user object. If their age is less than 18, the ageGroup should be "Minor". If their age is between 18 and 40, it should be "Adult", and if they are above 40, it should be "Senior".
```js
const users = [
  { name: 'John', age: 15 },
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 50 }
];
```
**A**

```js
const usersWithAgeGroup = users.map(user => {
  let ageGroup;
  if (user.age < 18) ageGroup = 'Minor';
  else if (user.age <= 40) ageGroup = 'Adult';
  else ageGroup = 'Senior';
  
  return { ...user, ageGroup };
});

console.log(usersWithAgeGroup);
```
#### **Q10:** Write a function using map that combines both firstName and lastName to create a new fullName property for each person. Return a new array of people with the fullName added

```js
const people = [
  { firstName: 'John', lastName: 'Doe' },
  { firstName: 'Alice', lastName: 'Smith' },
  { firstName: 'Bob', lastName: 'Johnson' }
];
```
**A**

```js
const peopleWithFullName = people.map(person => {
  return { ...person, fullName: `${person.firstName} ${person.lastName}` };
});

console.log(peopleWithFullName);
```

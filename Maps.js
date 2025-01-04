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
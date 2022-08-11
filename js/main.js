"use strict";

//task 1
const myCity={
  city: 'Grodno',
  country: 'Belarus'

}
console.log(myCity);
      delete myCity.country;   
      console.log(myCity);


const yearOffoundation='year';
myCity[yearOffoundation]='1128';
console.log(myCity);
                             /////////в чем разница

myCity.country= 'Belarus';
console.log(myCity);


//task 2

const myPerson={
  name: 'Nastya',
  age:25, 

}
if ('age' in myPerson){
  console.log(true);
}
else {
  console.log(false);
}




//task 3
const student = {
  name: 'John',
  age: 19,
  isHappy: true
}
  for (const key in student) {
  console.log(key);
  console.log(student[key]);


  console.log(`${key} - ${student[key]}`)
  }

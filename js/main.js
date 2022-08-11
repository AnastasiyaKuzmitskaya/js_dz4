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




  

//task 4
const colors = {
  'ru pum pu ru rum': {       // вложенный объект
      red: 'красный',
      green: 'зеленый',
      blue: 'синий'
  },
};
console.log(colors['ru pum pu ru rum'].red);

console.log(colors['ru pum pu ru rum'].blue);



//task 5

const salaries = {
  andrei: 500,
  sveta: 413,
  anton: 987,
  andrey: 664,
  alexandra: 199
}

let sum = 0;
let count = 0;
for( const person in salaries){
  sum+= salaries[person]
  count++;
}
const result = sum/count;

console.log(result);
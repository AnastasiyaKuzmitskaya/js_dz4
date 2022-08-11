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


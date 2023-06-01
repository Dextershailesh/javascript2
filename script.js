
   
   // let js = 'amazing'; //
   
   
   /* console.log( 40 + 8 + 23 - 10);
    
   console.log("jonas");
   console.log(23);
   console.log('25');
   let firstName = 'jonas happanen'
   console.log(firstName);
   console.log(firstName);
   console.log(firstName);
 let country = 'Nepal';
 let population = '30.5millions';
 let continent = "Asia";

 console.log(country);
 console.log(population);
 console.log(continent);

 let myFirstjob = "coder";
 let myCurrentjob = "teacher";

 console.log(myFirstjob);
 console.log(myCurrentjob);
 let javascriptisFun = true;
 console.log(javascriptisFun);

console.log(typeof true);
console.log(typeof javascriptisFun);
console.log(typeof 23);
console.log(typeof 'jonas');

javascriptisFun = 'yes!';
console.log(javascriptisFun);
console.log(typeof javascriptisFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991
console.log(typeof year); 
*/


 
/*let age = 30;
   age = 35;
 console.log(age);

 const birthYear = 1991;

 //birthYear = 1990; //

//console.log(birthYear);//

/* lastName = 'pandey';
console.log(lastName)

var job = 'programmer';
job = 'teacher' */

//math operators
 
/* const ageShailesh = 2023 - 1991;
console.log(ageShailesh);
const ageSarah = 2023-1985;
console.log(ageSarah);
console.log(ageShailesh, ageSarah);
console.log(ageShailesh * 2, ageSarah / 10, 2 ** 2); */
// 2  ** 2 means 2 to the power of 2 //

/*
const firstName = 'shailesh';
const lastName = 'pandey';
console.log(firstName + lastName);
console.log(firstName + ' ' + lastName);


//assignments operators

 /*let x = 10 + 5; //15
x += 10; // x= x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; //x = x + 1
x--;
x--;
console.log(x);


//comparison operators
/*
 console.log(ageShailesh < ageSarah);
 console.log (ageShailesh > ageSarah);
 console.log(ageSarah <= 35);
 console.log(ageShailesh >= 32);
 console.log(ageSarah >= 39); */


 /*
 const now = 2037;
 const ageJonas = now - 1991;
 const ageSarah = now - 2018;

 console.log(now -ageJonas < now - ageSarah);

 //console.log(25 - 10 - 5); //

let x , y ;
 x = y = 25 - 10 - 5; //x = y = 10  x = 10//
 console.log(x , y);

 const averageAge = (ageJonas + ageSarah) / 2;
 console.log(ageJonas, ageSarah , averageAge); 
 */


 
 /*let markWeight = 78  ;
 let markHeight = 1.69 ;

 let johnWeight = 92;
 let johnHeight = 1.95 ;

 let bmiMark = markWeight / markHeight ** 2 
 let bmijohn =  johnWeight / (johnHeight * johnHeight)

 console.log(bmiMark);
 console.log(bmijohn);
 console.log(bmiMark > bmijohn);*/

/*
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;
 
const BMIMark = massMark / heightMark **2;
const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark , BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark > BMIJohn);
*/

/* 
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2025;

const jonas = " I'm "  +  firstName  +  ' a ' +  job  +   ' of '  + (year - birthYear)  + " year's " + ' old'+'.'

console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${job} of ${year - birthYear} year's old.`;

console.log(jonasNew);
console.log(`just a regular js practise...`);
console.log(`string with \n\
many and multiple\n\
lines.\n\
..!!`);

console.log(`string with
multiple line 
and many more 
texts
....`);
*/


/* 
const age = 30;
if ( age >= 25 ) {console.log('Sarah can start driving license 🚘');}

else {
  const yearsLeft = 30 - age;
  console.log(`sarah is too young. wait another ${yearsLeft} years :)`);
}

const birthYear = 1991;

let century;

if (birthYear <= 2000 ) { 
   century = 20;

} else {
   century = 21;
}
console.log(century);
*/

// type conversion //

/*
 const inputYear = '1991';
 console.log(Number(inputYear), inputYear);
 console.log(Number (inputYear) + 18);

 console.log(Number('Jonas'));
 console.log(typeof NaN)



console.log(String (23), 23);

// type coercion

console.log('I am ' + 23 + ' years old');
console.log( '23' - '10' - '3' );
console.log(String(23  - 10 - 3));



let n = '1' + 1; // '11'
n = n - 1;
console.log(n);
*/


/* boolean logig */

/*
const hasDriverLicense = true; //A
const hasGoodVision = true; // B

 console.log(hasDriverLicense && hasGoodVision);
 console.log(hasDriverLicense || hasGoodVision);
 console.log(hasDriverLicense && !hasGoodVision);
 console.log(!hasDriverLicense && hasGoodVision);

 const shoudDrive = hasDriverLicense && hasGoodVision;
/*
 //if (hasDriverLicense && hasGoodVision) 
 //{console.log('sarah is able to drive!');
//} else{
   //console.log('someone else should drive');
 // }

*/
/*
const isTired = false; // C

console.log(hasDriverLicense && hasGoodVision && isTired);

if (hasDriverLicense && !isTired && hasGoodVision) {
   console.log('sarah is able to drive!');
} else {
      console.log('someone else should drive');
   }

   */

   /*
  const day = 'thursday';
  switch(day) {
   case 'monday': //day === 'monday'
  
console.log('plan course structure');
console.log('got to coding camp');

break;
case 'tuesday':
console.log('prepare for theory');

break;
case 'wednesday':
case 'thursday':
   console.log('write a exam coding');

   break;
   case'friday':
   console.log('pizza oerjantai!! yaayyy!');
   break;
   case 'saturday':
   case 'sunday':
      console.log ( 'weekned  wine Netflix and chill' );
   break;

   default:
   console.log('back to nothing back to work');

}

if (day === 'monday'){
   console.log('plan course structure');
console.log('got to coding camp');


} else if ( day === 'tuesday'){console.log('prepare for theory');

}else if ( day === 'wednesday' || day === 'thursday'){
   console.log('write a exam coding');

} else if (day === 'friday'){
   console.log('pizza oerjantai!! yaayyy!');

} else if ( day === 'saturday' || day === 'sunday'){
console.log ( 'weekned  wine Netflix and chill' );


}

// The Conditional (ternary) operator://

  /*const age = 22 ;
  age >= 23 ?  console.log( "I'd like to drink a beer 🍺 " ) :
  console.log ('I will drink water'); */


 /*let age = 22;
   const drink = age >= 18 ? 'wine 🍷 ' :  'water 💧';
   console.log(drink);

   let drink2;
   if (age >= 18) {
   drink2 = 'wine 🍷';

   } else { drink2 = 'water 💧';
       }
      console.log(drink2);

      console.log(`i'd like to drink ${
         age >= 18 ? 'wine': 'water'
      }`);
   
      */




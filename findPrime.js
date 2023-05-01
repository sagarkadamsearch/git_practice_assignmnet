
const number = 13

let flag = false;

if (number == 1) {
   console.log(" 1 is neither prime nor composite");
}

else if (number > 1) {

   for (let i = 2; i < number / 2; i++) {
      if (number % i == 0) {
         flag = true;
         break;
      }
   }

   if (flag == true) console.log(`${number} is not a prime number`);
   else console.log(number, "is a prime number");
}
else {
   console.log(number, "is not a prime number");
}
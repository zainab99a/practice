// Task 1
function checkVotingEligibility(age) {
if(age>=18){
  console.log("You are eligible for voting" );
}
else{
console.log("You are not eligible for voting");
}

}

// Task 2
function printNumbersWithWhile() {
  var i=0
  while(i<=5){
    console.log("i= "+i );
    i++
  }

}

// Task 3
function printEvenNumbersWithFor() {
  for(var i=2;i<=10;i+=2){
    console.log(i +" even number");
  }

}

// Task 4
function getDayOfWeek(day) {
  switch (day) {
    case 1:
      console.log("Sunday");
      break;
      case 2:
      console.log("Monday");
      break;
      case 3:
      console.log("Tuesday");
      break;
      case 4:
      console.log("Wednesday");
      break;
      case 5:
      console.log("Thursday");
      break;
      case 6:
      console.log("Friday");
      break;
      case 7:
      console.log("Saturday");
      break;
  
    default:
      console.log("not exist");
      break;
  }

}

// Task 5
function sum(a,b) {
  return a+b
}

// Task 6
//Uncomment and solve
// const fruits = ;

function fruits(){
  var arr=['Orange','Banana','Apple','Pineapple','Strawbarry','Bluebarry']
  for(var i=0;i<arr.length;i++)
  {
    console.log(i +" "+arr[i]);
  }
}

module.exports = {
  checkVotingEligibility,
  printNumbersWithWhile,
  printEvenNumbersWithFor,
  getDayOfWeek,
  sum,
  fruits,
};

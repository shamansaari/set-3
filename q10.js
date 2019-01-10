//Quesion(3.10)
//TechKaro wants you to write a program that tells whether a student qualifies for the monthly awards or not. Students who have been absent 0, 1 or 2 times in a certain month are eligible for the award in that month. Otherwise they are not eligible.
let myAbsents = 2;
if (myAbsents < 0 ) {
    console.log("INVALID NUMBER. No. of absents cannot be negative");
} else if (myAbsents <= 2) {
    console.log("Congrats! You are eligible for the award");
} else {
    console.log("Sorry, but you have been absent too many times. You are ineligible for the awards :( ");
}
//Answer(Congrats! You are eligible for the award)
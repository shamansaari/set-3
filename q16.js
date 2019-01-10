//Question(3.16)
//TechKaro admission test is designed to admit all students who meet at least one of the following criteria:
//.Has scored more than 10 points in Math test.
//.Has scored more than 20 points in Computer test.
//.Has scored more than 8 points in English test.
//Write a program that checks a student's marks and declares if he has passed the admission test or not.
let math = 20;
let comp = 50; 
let eng = 5
if (math > 10 || comp > 20 || eng > 8) {
    console.log("PASSED!");
} else {
    console.log("FAILED");
}
//Answer(PASSED)
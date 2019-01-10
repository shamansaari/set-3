//Question(3.11)
//Hogwarts School of Witchcraft and Qizardry follows the following grading system for its Final Exams:
//Total Marks = 100
//Obtained marks        Grade
//91 - 100                A+
//86 - 90                 A
//80 - 85                 A-
//70 - 79                 B
//60 - 69                 C
//50 - 59                 D
//40 - 49                 E
//39 or less              F
//Create a program that prints the grade for a given value of Obtained Marks.     
let marks = 79;
if (marks >= 91) {
    console.log("A+");
} else if (marks >= 86) {
    console.log("A");
} else if (marks >= 80) {
    console.log("A-");
} else if (marks >= 70) {
    console.log("B");
} else if (marks >= 60) {
    console.log("C");
} else if (marks >= 50) {
    console.log("D");
} else if (marks >= 40) {
    console.log("E");
} else {
    console.log("F");
}
//Answer(B)
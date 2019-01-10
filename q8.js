//Question(3.8)
//A year has 365 days. However, some years also have 366 days. A calendar year containing 366 days is called a leap year. 
//Write a program that prints This is a Leap year!!! if year is leap, and This is NOT a Leap year if the year is not leap.
let year = 1920;
if (year % 4 === 0) {
    if (year % 100 === 0) {
        console.log("This is NOT a Leap year");
    } else if(year % 400 !== 0){
        console.log("This is a Leap year!!!");
	} else {
    	console.log("This is NOT a Leap year");
	}
}
//Answer(This is a Leap year!!!)
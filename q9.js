//Question(3.9)
//Ufone wants you to write a program that interacts with the caller when he attempts to make a call. 
//Each call costs Rs. 1 per minute. 
//If the user has has less than Rs. 1 balance, the program prints.
//Moazziz Sarif, aap ka mojooda balance iss call k lye naa kaafi hai. Please re-charge karain.
//If the user has greater than Rs. 10 balance, the program prints Ring Ring only.
let costPerMinute = 1;
let userCash = 2;
if (userCash < costPerMinute) {
    console.log("Moazziz Sarif, aap ka mojooda balance iss call k lye naa kaafi hai. Please re-charge karain");
} else if (userCash <= 5) {
    console.log("Moazziz sarif, aap ka balance khatam honay wala hai");
    console.log("Ring Ring!!");
} else {
    console.log("Ring Ring!!");
}
//Answer(Moazziz sarif, aap ka balance khatam honay wala hai Ring Ring!!)
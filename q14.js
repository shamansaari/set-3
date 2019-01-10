//Question(3.14)
//Meezan Bank wants you to write a program which tells the customer if he/she has enough money in his/her account.
//For example:
//A customer has Rs. 10000 in his account.
//If he asks the program to withdraw Rs. 500, the program would print Withdrawal SUCCESS! Your new balance is Rs. 9500.
//But,  If he asks it to withdraw Rs. 15000, it would print Withdrawal FAILED! Sorry, you do not have sufficient balance.
let customerCash = 5000;
let withdrawCash = 7000;
if (withdrawCash > customerCash) {
    console.log("Withdrawal FAILED! Sorry, you do not have sufficient balance.");
} else {
    console.log("Withdrawal SUCCESS! Your new balance is Rs. " + (customerCash - withdrawCash));
}
//Answer(Withdrawal FAILED! Sorry, you do not have sufficient balance.)
//Question(3.12)
//An apple costs Rs. 10. A mango costs Rs. 15. A banana costs Rs. 8.
//Ali has Rs. 100 only and wants to buy fruits for Fruit Chaat for Iftaar.
//Write a program that:
//.Uses a variable noOfApples to store the number of apples Ali wants to buy.
//.Uses a variable noOfMangoes to store the number of mangoes Ali wants to buy.
//.Uses a variable noOfBananas to store the number of bananas Ali wants to buy.
//The program should tell Ali if he has enough money to purchase the no. of fruits he wants.
//For example, it prints Shopping SUCCESS!! if he wants to buy.
//1 apple, 3 mango and 2 bananas (total cost = 1 * 10 + 3 * 15 + 2 * 8 = Rs. 71). But, it prints Shopping FAILED! Not enough money if he wants to buy.
//4 apples, 5 mangoes and 3 bananas (total cost = 4 * 10 + 5 * 15 + 3 * 8 = Rs. 139).
let appleCost = 10;
let mangoCost = 15;
let bananaCost = 8;
let aliCash = 100;
let noOfApples = 4;
let noOfMangoes = 2;
let noOfBananas = 6;
let totalCost;
totalCost = noOfApples*appleCost + noOfMangoes*mangoCost + noOfBananas*bananaCost;
if (totalCost > 100 ) {
    console.log("Sorry, you do not have enough money");
} else {
    console.log("Hurray! You have enough money to buy all fruits");
}
//Answer(Sorry, you do not have enough money)

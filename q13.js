//Question(3.13)
//Your task is to build a Customer Service Robot for TechKaro that is capable of answering frequently asked questions.
//Customer           Hi or Hello or Hey or Salam.
//Robot              Thank you for calling TechKaro Customer Service. How may I help you?
//Customer           Is UIT open today?
//Robot              Yes.
//Customer           What are the timings of today's class?
//Robot              1:30 - 5:3.
//Customer           Where will the class be conducted?
//Robot              At CL-1, Usman Institute.
//If the robot is asked anything else, the response will be:
//Sorry, I do not understand your question.
let customerSays = "Is UIT open today?"; 
switch(customerSays) {
    case "Hi":
    case "Hello":
    case "Hey":
    case "Salam":
        console.log("Thank you for calling TechKaro Customer Service. How may I help you?");
        break;
    case "Is UIT open today?":
        console.log("Yes");
        break;
    case "What are the timings of today's class?":
        console.log("1:30 - 5:3");
        break;
    case "Where will the class be conducted?":
        console.log("At CL-1, Usman Institute");
        break;
    default:
        console.log("Sorry, I do not understand your question");
}
//Answer(Yes)
//Question(3.15)
//A hypothetical rocket can launch only if all of following weather conditions are met:
//.It is not raining.
//.It is not snowing.
//.The wind speed is less than 15 km/hr.
//.It is not cloudy.
//Write a program that tells if the weather conditions are suitable for rocket launch or not.
let isRaining = true;
let isSnowing = false;
let windSpeed = 16;
let isCloudy = true;
if (isRaining === true && isSnowing === true && windSpeed < 15 && isCloudy === false) {
    console.log("SUCCESS!! The weather is good for launch!");
} else {
    console.log("FAIL!! The weather is NOT good for launch");
}
//Answer(FAIL!! The weather is NOT good for launch)
// the crystals generate a random number between 1 and 12...not the same
// the random number must be between 19 and 120...
var wins = 0;
var losses = 0;
var counter = 0;
var chosenNumber;
var crystalValue = [];

console.log("Starting the application...")

// create a random number generator (between 19 and 120)
getRandomNumber = function () {
    // set a max value
    var maxValue = 120;
    // set a min value
    var minValue = 19;
    // create a randomly chosen number based off the min and max values allowed
    chosenNumber =Math.floor(Math.random()*(maxValue-minValue+1)+minValue);
    // draw the chosen number onto the DOM
    drawChosenNumber();
    drawTotalScore();
    
    

}
// create a function that will draw the randomly chosen number into the #chosen-number
drawChosenNumber =function () {

    // draw the chosen number to the id
    $("#chosen-number").text(chosenNumber);
}
// create a function that draws the total score to the DOM
drawTotalScore = function () {

    // connect the counter with the html/css id total-score to draw it to the DOM
    $("#total-score").text(counter);


}

// create a function for updating the total wins
updateWins = function() {

    // connect the wins to the DOM
    $("#win-counter").text("Wins: " + wins);

};

updateLosses = function () {

    // conenct the losses wto the DOM
    $("#lose-counter").text("Losses: " + losses);
};

// Create a random number array between 1 and 12 for the crystals
getCrystalNumber = function () {
    // set the  crystalvalue array
    var crystalValue = [];
    // create a for loop that runs through the array four times
    for (var i = 0; i < 4; i++) {
        
            // create a random number between 1 and 12
            var randomNumber = Math.floor(Math.random() * 12) + 1;
            
            // console.log("++++++++");
            // console.log(randomNumber);
            // console.log("++++++++++")
            // push that random number into the empty array
            
            // if statement that recoginizes duplicate entries
            //  if (!crystalValue.includes(randomNumber)) {
                // replaces them with new random numbers

                crystalValue.push(randomNumber);
            // }
        }
        console.log("_____________")
        console.log(crystalValue);  

}

// create a function that will set data value to the crystal image
// addCrystalValue = function () {

//     getCrystalNumber();

//     var blueCrystal;
//         var clearCrystal; 
//         var purpleCrystal;
//         var greenCrystal;

//     for (var i = 0; i <crystalValue.length; i++) {
        
//         // link each crystal with the data-value from the array
//         blueCrystal.attr("data-crystalvalue", numberOptions[i]);
//         clearCrystal.attr("data-crystalvalue", numberOptions[i]);
//         purpleCrystal.attr("data-crystalvalue", numberOptions[i]);
//         greenCrystal.attr("data-crystalvalue", numberOptions[i]);

//     }

//     console.log(blueCrystal);
// };


// create a function that draws the crystal image to the DOM
drawCrystals = function () {

    
    getCrystalNumber();

   
    
    var test = [10, 12, 5, 1];
    
    // create a for loop that cycles through the crystalValue array
    // for (var i = 0; i < crystalValue.length; i++) {
      
        // create the image crystal for each crystal
       
        var blueCrystal = $("<img>");
        var clearCrystal = $("<img>");
        var purpleCrystal = $("<img>");
        var greenCrystal = $("<img>");

        // // link the image crystals to the CSS style
       
        blueCrystal.addClass("crystal-image");
        clearCrystal.addClass("crystal-image");
        purpleCrystal.addClass("crystal-image");
        greenCrystal.addClass("crystal-image");

        // // Link the crystal to their actual image source
        
        blueCrystal.attr("src", "assets/Images/Blue_crystal.jpg");
        clearCrystal.attr("src", "assets/Images/Clear_crystal.jpg");
        purpleCrystal.attr("src", "assets/Images/Purple_crystal.jpg");
        greenCrystal.attr("src", "assets/Images/Green_crystal.jpg");

        // // link each crystal with the data-value from the array

        blueCrystal.attr("data-crystalvalue", test[0]);
        clearCrystal.attr("data-crystalvalue", test[1]);
        purpleCrystal.attr("data-crystalvalue", test[2]);
        greenCrystal.attr("data-crystalvalue", test[3]);

        // // draw the new crystal images to the DOM
        
        $("#crystals").append(blueCrystal);
        $("#crystals").append(clearCrystal);
        $("#crystals").append(purpleCrystal);
        $("#crystals").append(greenCrystal);
    // };
    console.log("_____________")
console.log(blueCrystal.attr("data-crystalvalue", test[0]));  
    
};


// create a reset function to create a new target number and clear out the score
reset = function () {

    // get a new target number
    getRandomNumber();

    // reset the counter
    counter = 0;
    drawTotalScore();
    
}




$(document).ready(function() {



getRandomNumber();
drawCrystals();



// // addCrystalValue();


// getRandomNumber();



$(".crystal-image").on("click", function (){

    var scoreMultiplier = ($(this).attr("data-crystalvalue"));
    scoreMultiplier = parseInt(scoreMultiplier);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += scoreMultiplier;

    // alert("New score: " + counter);
    // console.log();

    drawTotalScore();

    if (counter === chosenNumber) {
        alert("You win!");

        wins++

        updateWins();

        reset();
      }
  
      else if (counter >= chosenNumber) {
        alert("You lose!!");

        losses++

        updateLosses();

        reset();
      }
    

});
});
// the crystals generate a random number between 1 and 12...not the same
// the random number must be between 19 and 120...
var wins = 0;
var losses = 0;
var counter = 0;
var chosenNumber;
var crystalValue = [];

var blueCrystal = $("<img>");
var clearCrystal = $("<img>");
var purpleCrystal = $("<img>");
var greenCrystal = $("<img>");

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
    // draw the users score to the DOM
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

    // set the  counter of the while loop to 0
    var counter = 0;
    
    // create a while loop that runs until the array is filled with 4 unique numbers
    while (counter < 4) {
        
            // create a random number between 1 and 12
            var randomNumber = Math.floor(Math.random() * 12) + 1;
            
            // if statement that recoginizes duplicate entries
             if (!crystalValue.includes(randomNumber)) {
    
                // push that unique random number into the empty global array
                crystalValue.push(randomNumber);

                // increase the counter by 1 each time
                counter++;
                
            }
        }
        return crystalValue;

}

giveCrystalsValue = function () {

    getCrystalNumber();

     // // link each crystal with the data-value from the array

     blueCrystal.attr("data-crystalvalue", crystalValue[0]);
     clearCrystal.attr("data-crystalvalue", crystalValue[1]);
     purpleCrystal.attr("data-crystalvalue", crystalValue[2]);
     greenCrystal.attr("data-crystalvalue", crystalValue[3]);


}

// create a function that draws the crystal image to the DOM
drawCrystals = function () {

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

        // // draw the new crystal images to the DOM
        
        $("#crystals").append(blueCrystal);
        $("#crystals").append(clearCrystal);
        $("#crystals").append(purpleCrystal);
        $("#crystals").append(greenCrystal);

    
};
 

// create a reset function to create a new target number and clear out the score
reset = function () {

    // get a new target number
    getRandomNumber();

    // reset the counter
    counter = 0;
    drawTotalScore();

    // reset crystal values
    crystalValue = [];
    giveCrystalsValue();
    
}



// create a document ready function that will start the game for the user
$(document).ready(function() {

// call the getRandomNUmber function
getRandomNumber();

// Call the drawCrystal function
drawCrystals();

// call the crystal value function
giveCrystalsValue();



// CONTROLS===================================================================================
// ===========================================================================================

// Create an on click function that starts when the document is readey
$(".crystal-image").on("click", function (){

    // attach the click function to each of the images created to the DOM
    var scoreMultiplier = ($(this).attr("data-crystalvalue"));

    // convert the value of the scoreMultiplier value
    scoreMultiplier = parseInt(scoreMultiplier);
  
    // add the scoreMultiplier to the counter that increase with every image "click"
    counter += scoreMultiplier;

    // draw the counter to the DOM for each "click"
    drawTotalScore();

    // Create a win condition
        // if the counter is equal to the chosenNumber
    if (counter === chosenNumber) {

        // alert the user they have won and...
        alert("Winner! Winner! Chicken Dinner!");

        // increase the win counter by 1
        wins++

        // update and draw the win counter to the DOM
        updateWins();

        // RESET for a new game
        reset();
      }
      
    // create a lose condition
        // if the counter exceeds the chosenNumber
      else if (counter >= chosenNumber) {

        // alert the user they have lost
        alert("So sorry, but this is going down as a loss!!");

        // increase the losses counter by 1
        losses++

        // update and draw the losses counter to the DOM
        updateLosses();

        // RESET for a new game
        reset();
      }
    

});
});
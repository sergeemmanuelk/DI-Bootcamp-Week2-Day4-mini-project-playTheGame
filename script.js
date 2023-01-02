function playTheGame() {
    if(confirm("Would you like to play the game?") == false) {
        alert("No problem, Goodbye")
    } else {
        let userInput
        let userNumber
        let computerNumber

        while (true) {
            userInput = prompt("Enter a number between 0 and 10");
            userNumber = parseInt(userInput)
        
            if (!isNaN(userNumber) && userNumber >= 0 && userNumber <= 10) {
                computerNumber = Math.floor(Math.random() * 11)
                compareNumbers(userNumber, computerNumber)
                break
            } else {
                alert("Sorry, try again. it's not a valid number or it's not between 0 and 10")
            }
        }
    }

    function compareNumbers(userNumber, computerNumber) {
        let guessCompter = 0
        
        while (guessCompter < 3) {
            if (userNumber === computerNumber) {
                alert("WINNER")
                return
            } else if (userNumber > computerNumber) {
                alert("Your number is bigger then the computer’s, guess again")
                userNumber = prompt("Enter a new number : ")
            } else {
                alert("Your number is smaller then the computer’s, guess again")
                userNumber = prompt("Enter a new number : ")
            }
            guessCompter++
        }

        alert("Out of chances")
    }
}
  
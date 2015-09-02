// JavaScript Document
var choiceArray = ["paper", "rock", "scissors"];

        var getUserChoice = function()
        {
            var userChoice = undefined;
            var userChoiceIndex = undefined;

            while (true)
            {
                userChoice = prompt("Choose - paper, scissor or rock");
                userChoiceIndex = choiceArray.indexOf(userChoice);

                if (userChoiceIndex >= 0 && userChoiceIndex <= 2)
                    return userChoice;

                alert("Not valided choice try again!");
            }
        }

        var getComputerChoice = function()
        {
            var computerChoiceIndex = Math.floor(Math.random() * 3);
            return choiceArray[computerChoiceIndex];
        }

        var decideWinner = function(userChoice, computerChoice)
        {
            if (userChoice === computerChoice)
                return "There is a tie!!!";

            if (userChoice === "paper")
            {
                if (computerChoice === "rock")
                {
                    return "paper wins!";
                }
                else //scissors
                {
                    return "scissors win!";
                }
            }
            if (userChoice === "rock")
            {
                if (computerChoice === "paper")
                {
                    return "paper wins!";
                }
                else //rock
                {
                    return "rock wins!";
                }
            }
            else //scissors
            {
                if (computerChoice === "paper")
                {
                    return "scissors wins!";
                }
                else //rock
                {
                    return "rock wins!";
                }
            }
        }

        var repeatGame = function()
        {
            var userChoice = getUserChoice();
            var computerChoice = getComputerChoice();
            var gameResult = decideWinner(userChoice, computerChoice);
            gameResult = "Computer Choice = " + computerChoice + ". " + gameResult;
            alert(gameResult);
        }

        ();

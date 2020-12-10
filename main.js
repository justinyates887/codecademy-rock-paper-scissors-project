// Welcome the user
function welcome(){
    console.log('__________               __        __________                               _________      .__                                  ');
    console.log('\______   \ ____   ____ |  | __    \______   \____  ______   ___________   /   _____/ ____ |__| ______ _________________  ______');
    console.log(' |       _//  _ \_/ ___\|  |/ /     |     ___|__  \ \____ \_/ __ \_  __ \  \_____  \_/ ___\|  |/  ___//  ___/  _ \_  __ \/  ___/');
    console.log(' |    |   (  <_> )  \___|    <      |    |    / __ \|  |_> >  ___/|  | \/  /        \  \___|  |\___ \ \___ (  <_> )  | \/\___ \ ');
    console.log(' |____|_  /\____/ \___  >__|_ \ /\  |____|   (____  /   __/ \___  >__| /\ /_______  /\___  >__/____  >____  >____/|__|  /____  >');
    console.log('        \/            \/     \/ )/                \/|__|        \/     )/         \/     \/        \/     \/                 \/ ');

    console.log('Welcome to Rock! Paper! Scissors!');
    console.log('By: Justin Yates');
  }
//Ask user if they would like to review the rules
  function rulesAsk(){
      let rulesRequest = window.prompt('Would you like to review the rules before playing? (y/n)');
      rulesRequest = rulesRequest.toLowerCase();

      if(rulesRequest === 'y'){
          rulesInfo();
      }

      else if(rulesRequest === 'n'){
          getUserInput();
      }

      else{
          console.log('Invlaid entry, please try again.');
          rulesAsk();
      }
  }
//Information on the rules of the game
  function rulesInfo(){
    console.log('To play rock paper scissors:');
    console.log(' ');
    console.log('Two opponants come face to face with three options: Rock, paper, or scissors.');
    console.log('Each opponant must make their decision to see who wins.');
    console.log('Rock crushes scissors, but is covered by paper.');
    console.log('Paper covers rock, but is cut by scissors.');
    console.log('Scissors cuts paper, but is crushed by rock.');
    console.log(' ');
    console.log('Easy enough?');
    console.log('glhf');

    getUserInput();
  }
//Recieve user input
function getUserInput(){
    let userInput = window.prompt("Please enter rock, paper, or scissors as your choice!");
    userInput = userInput.toLowerCase();
    return userInput;
  }
//Determine the user's choice based on the input
function getUserChoice(userInput){
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
    let userChoice = userInput;
    return userChoice;
  }

  else{
    console.log('Invlaid user input, try again.')
    getUserInput();
  }
}
//Determine the computer's choice randomly
const getComputerChoice = () => {
  let choiceInt = Math.floor(Math.random(3));
  let computerChoice;
  switch(choiceInt){
    case 0:
      choiceString = 'rock';
      return computerChoice;
      break;

    case 1:
      choiceString = 'paper';
      return computerChoice;
      break;

    case 2: 
      choiceString = 'scissors';
      return computerChoice;
      break;

    default:
      console.log('Error deteced at function: getComputerChoice.')
      break;
  }
}
//Determine the winner of the round
const determineWinner = (userChoice, computerChoice) =>{
  const tieStatement = 'It was a tie! Try again!';
  const computerWon = 'Oh no! The computer won!';
  let tellUserChoice = `It chose ${computerChoice}`;
  const userWon = 'Hooray! You won!';

  if(userInput === computerChoice){
    console.log(tieStatement);
    return tieStatement;
  }

  else if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
      console.log(computerWon + tellUserChoice);
      return computerWon;
    }
    else{
      console.log(userWon + tellUserChoice);
      return userWon;
    }
  }

  else if(userChoice === 'paper'){
    if(computerChoice === 'scissors'){
      console.log(computerWon + tellUserChoice);
      return computerWon;
    }
    else{
      console.log(userWon + tellUserChoice);
      return userWon;
    }
  }

  else if(userChoice === 'scissors'){
    if(computerChoice === 'rock'){
      console.log(computerWon + tellUserChoice);
      return computerWon;
    }
    else{
      console.log(userWon + tellUserChoice);
      return userWon;
    }
  }

  else{
      let runTimeError = 'Runtime Error';
      console.log(runTimeError);
      reset();
  }
}
//Function to reset the game
function reset(){
  let resetConfirm = window.prompt('Would you like to try again? (y/n)');
  resetConfirm = resetConfirm.toLowerCase();

  if(resetConfirm === 'y'){
    run();
  }

  else if(resetConfirm === 'n'){
    console.log('Thanks for playing!');
  }

  else{
    console.log('Invalid input, try again.');
    reset();
  }
}
//Execute the program sequentially
function run(){
  welcome();
  rulesAsk();
  getUserChoice(userInput);
  getComputerChoice();
  determineWinner(userChoice, computerChoice);
  reset();
}
//Initialize the program
run();
// using readline core module
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// variable to hold our questions
const questions = [
  "What is your name?",
  "where do you live?",
  "What will you do with node js?"
];

// send in list of questions and send answers back
const collectAnswers =(questions, done) => {
  const answers = [];
  const [firstQuestion] = questions;
  // done(answers);


const questionAnswered = answer => {
  answers.push(answer);
  if (answers.length < questions.length) {
    rl.question(questions[answers.length], questionAnswered);
  } else {
    done(answer);
  }
};
rl.question(firstQuestion, questionAnswered);
};


// get a list of answers back with a callback function"answers"
// Send in an array of questions
// Ask questions in the order they are presented
// When we get a list of answers back we want to and with a call back funciont
// the call back function should past back a list of collectAnswers
// questions in and answer back
collectAnswers(questions, answers => {
  console.log("Thank you for your answers. ");
  console.log(answers);
  process.exit();
});
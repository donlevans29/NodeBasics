const questions = [
  "What is your first name?",
  "What is your last name?",
  "What is your gender?",
  "What is your birth date?",
  "What is your family name?",
  "What career Do you want?"
];

const ask = (i = 0) => {
  process.stdout.write(`\n ${questions[i]}`);
  process.stdout.write(` > `);
};


ask();

// what do when I type and hit enter
const answers = []; // to hold your answers
process.stdin.on("data", data => {
  answers.push(data.toString().trim());

  if (answers.length < questions.length) {
      ask(answers.length);
  } else {
      process.exit();
  }
});

// event listener ?
process.on('exit', () => {

    const [firstName,lastName,gender,birthDate,familyName,career,income] = answers;
    
    console.log(`

    Thank you ${firstName} ${lastName} for your answers.
    Being a ${gender} takes courage in today's world.
    I'll send you a cake on ${birthDate} 👌🏾
    One day, soon you become a very successful ${career} earning ${income} a year
    You will continue to make the ${familyName} family Proud!!!

    }`)
})
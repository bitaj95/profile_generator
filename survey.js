const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (feedback) => {
    rl.question(`What's your name? Nicknames are also acceptable :) `, (name) => {
      rl.question(`What's an activity you like doing? `, (activity) => {
        rl.question(`What do you listen to while doing that? `, (music) => {
          rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.): `, (meal) => {
            rl.question("Which sport is your absolute favourite? ", (sport) => {
              rl.question("What is your superpower? ", (superpower) => {
                console.log(`My name is ${name},  and I think node is ${feedback}!`, 
                `I love to ${activity} while listening to ${music} and eating ${meal}. My absolute fav sport is ${sport}`,
                 `Don't tell anyone, but my secret superpower is ${superpower}, Thanks for reading my profile!`);
                rl.close();
              });
            });
          });
        });  
      });
    });
  });

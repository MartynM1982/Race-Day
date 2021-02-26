// race numbers are assigned randomly from 1-1000 using the following:
let raceNumber = Math.floor(Math.random() * 1000);
// below we collect informationm on the type of runner.
let earlyRegistration = true;
let runnerAge = 18;
if (earlyRegistration && runnerAge > 18){
  raceNumber += 1000;
}
// no we use a series of control flow statements to determine the instructions to the runner.
if (earlyRegistration && runnerAge >18){
  console.log(`Runner:${raceNumber}: Your race starts at 9:30am`);
} else if (runnerAge > 18 && !registeredEarly) {
  console.log(`Runner:${raceNumber}: Your race starts at 11:00`)
} else if (runnerAge < 18) {
  console.log(`Runner:${raceNumber}: Your race starts at 12:30`)
} else [console.log('please contact the registration desk')]
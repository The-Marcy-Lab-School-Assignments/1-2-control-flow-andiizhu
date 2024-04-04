const getRandomIntInRange = (min, max) => {
  if (min > max) throw new Error('min must be less than max');
    randomInt = Math.random() * (Math.floor(max) - Math.ceil(min))
  return Math.floor(randomInt) + min;
};

const coolnessGauge = (numOfFridges) => {
  return numOfFridges > 3.5 ? 'You are downright chilly!' : 'You need more fridges.';
};

const funkoPopAddictionLevel = (numOfFunkoPops) => {
  if (numOfFunkoPops === 0) {
    console.log('No pops? Maybe try one.');
  } else if (numOfFunkoPops >= 1 && numOfFunkoPops <= 10) {
    console.log('Only a few? Keep having fun!');
  } else if (numOfFunkoPops > 10 && numOfFunkoPops <= 20) {
    console.log('You have a problem.');
  } else if (numOfFunkoPops > 20 && numOfFunkoPops <= 30) {
    console.log('You need help!');
  } else {
    console.log('You need an intervention!!!');
  }
};

const getWeatherReport = (temperature) => {
  let weatherReport = ""
  if (temperature > 90) {
    weatherReport = "It's hot and gross out.";
    console.log(weatherReport);
  } else if (temperature > 70) {
    weatherReport = "At least it's a dry heat.";
    console.log(weatherReport);
  } else if (temperature < 32) {
    weatherReport = "Wow, it's cold out.";
    console.log(weatherReport);
  } else {
    weatherReport = "It's not too bad!"
    console.log(weatherReport)
  }
  console.log("And that's your report!");
  return weatherReport;
};

const returnPositiveNegativeZero = (num) => {
  if (num === 0){
    return "Zero"
  } else if (num > 0) {
    return "Positive"
  } else return "Negative"
}
  //   if (num === 0) return 'Zero';
  //   return (num < 1) ? 'Negative' : 'Positive';
  // };

  console.log(returnPositiveNegativeZero(1))
  console.log(returnPositiveNegativeZero(0))
  console.log(returnPositiveNegativeZero(-1))

module.exports = {
  getRandomIntInRange,
  coolnessGauge,
  funkoPopAddictionLevel,
  getWeatherReport,
  returnPositiveNegativeZero,
};

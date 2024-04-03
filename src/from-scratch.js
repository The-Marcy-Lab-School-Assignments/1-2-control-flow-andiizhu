const measureRain = (inches) => {
  if (inches === 0) {
    console.log("drought")
  } else if (inches < 2) {
    console.log("dry")
  } else if (inches < 4) {
    console.log("average")
  } else if (inches < 6) {
    console.log("rainy")
  } else console.log("flood")
};

const happyBirthdayPet = (breed, age) => {
  if (breed === "snake") {
    console.log("Hiss hiss!")
  } else if (breed === "cat" && age < 5) {
    console.log("Mew mew!")
  } else if (breed === "cat" && age >= 5) {
    console.log("Meow meow!")
  } else if (breed === "dog" && age < 5) {
    console.log("Arf arf!")
  } else if (breed === "dog" && age >= 5 && age < 10) {
    console.log("Woof woof!")
  } else if (breed === "dog" && age > 10) {
    console.log("Woof woof!")
  } else console.log("Happy Birthday!")
};

const funTypes = () => {
};

const rounder = () => {
};

const fizzBuzzish = () => {
};

module.exports = {
  measureRain,
  happyBirthdayPet,
  funTypes,
  rounder,
  fizzBuzzish,
};

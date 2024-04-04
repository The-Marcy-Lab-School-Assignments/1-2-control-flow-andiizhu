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
  } else if (breed === "dog" && age >= 10) {
    console.log("Boof!")
  } else console.log("Happy birthday!")
};

const funTypes = (jsType) => {
  if (typeof jsType === "string") {
    console.log("That's just some text.")
  } else if (jsType === null) {
    console.log("Nothing, and I did set that.")
  } else if (typeof(jsType) === "undefined") {
    console.log("Nothing, but I didn't set that.")
  } else if (typeof(jsType) === "object") {
    if (Array.isArray(jsType) === true) {
      console.log("I order you to be indexed.")
    } else return console.log("Anybody got the key?") 
  } else if (isNaN(jsType) === true){
    console.log("Well, now you're just showing off.")
  } else if (typeof jsType === "number") {
    console.log("That's a good number.")
  }  else if (typeof jsType === "boolean") {
    console.log("To bool, or not to bool?")
  } 
}
funTypes("Happy")
funTypes(12)
funTypes(true)
funTypes()
funTypes(null)
funTypes({})
funTypes([1,2])
funTypes(NaN)

const rounder = (float, roundingSetting) => {
  
};

const fizzBuzzish = (num) => {
  if (num % 3 === 0 && num % 5 === 0){
    return console.log("fizzBuzz!")
  } else if (num % 5 === 0) {
    return console.log("buzz")
  } else if (num % 3 === 0){
    return console.log("fizz")
  } else return console.log(num)
};


module.exports = {
  measureRain,
  happyBirthdayPet,
  funTypes,
  rounder,
  fizzBuzzish,
};

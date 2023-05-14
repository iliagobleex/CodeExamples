// The forecast today is 293 Kelvin
const Kelvin = 293
//Converting Kelvin to Celcius by subtracting 273
const Celsius = Kelvin - 273
//Changing celsius to fahrenheit
let Fahrenheit = Celsius * (9/5) + 32
//rounding fahrenheit to a whole number
Fahrenheit = Math.floor(Fahrenheit)
//print temperature in Fahrenheit
console.log(`The temperature is ${Fahrenheit} degrees Fahrenheit.`);
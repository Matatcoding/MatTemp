const converttoCelsius = (fahr) => {
  return ((fahr - 32) * 5) / 9;
};



const describeTemperature = (fahr) => {
  if (Celsius < 0) {
    scr = "very cold";
  } else if (Celsius < 20) {
    scr = "cold";
  } else if (Celsius < 30) {
    scr = "warm";
  } else if (Celsius < 40) {
    scr = "hot";
  } else {
    scr = "very hot";
  }
  return scr;
};
let fahr = prompt("Please enter temperature");

let Celsius = converttoCelsius(fahr);
console.log(`That fahrenheit is ${Celsius} celsius`);

const result = describeTemperature(fahr);
console.log(result);

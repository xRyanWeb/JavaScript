let hourlyPaycheck = {
  hours: 11,
  check: 15
};

const object = Object.create(hourlyPaycheck);

object.calc = object.hours * object.check;

if (object.calc < 190) {
  hourlyPaycheck = 165;
  console.log("My Hourly Paycheck: " + hourlyPaycheck);
  console.log("Calc: " + object.calc);
} else {
  throw new Error("Cant Calculate Hourly Paycheck...");
}

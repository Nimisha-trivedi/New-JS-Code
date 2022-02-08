function requiredAge(requiredAge) {
  return function (age) {
    return age >= requiredAge;
  };
}
let canDriveCar = requiredAge(16);
let canRentACar = requiredAge(25);

console.log(canDriveCar(6));

let people = [
  { name: "jon", age: 32 },
  { name: "paul", age: 30 },
  { name: "ram", age: 12 },
  { name: "nimi", age: 21 },
  { name: "jhon", age: 26 },
  { name: "rose", age: 87 },
];
people.forEach((person) => {
  if (canDriveCar(person.age)) {
    console.log(person.name + " can drive a car.");
  }

  if (canRentACar(person.age)) {
    console.log(person.name + " can rent a car.");
  }
});

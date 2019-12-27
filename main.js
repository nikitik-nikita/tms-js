//Задание №1
let name;
let manager;
let currentUser;

name = "Вася";
manager = name;
currentUser = manager;
console.log(currentUser);

//Задание №5
let animal = {
    type: "dog",
    weight: 40,
};
animal.color = "brown";
animal.speed = 25;
delete animal.weight;
animal.color = "ginger";
console.log(animal);
//Домашнее задание_1.
// Задание №1
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

//Домашнее задание_2.
const data = [
    {
        firstName: 'Ashton',
        lastName: 'Kutcher',
        age: 40,
    },
    {
        firstName: 'Bradley',
        lastName: 'Pitt',
        age: 54,
    },
    {
        firstName: 'Hannah',
        lastName: 'Dakota',
        age: 24,
    },
];

function showResult(lastName) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].lastName.toLocaleLowerCase() === lastName) {
            return data[i];
        }

    }
    return 'No results found for your request';
}

let result = showResult('pitt');
console.log(result);

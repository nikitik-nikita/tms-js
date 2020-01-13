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
        if (data[i].lastName.toLocaleLowerCase() === lastName.toLocaleLowerCase()) {
            return data[i];
        }

    }
    return 'No results found for your request';
}

let result = showResult('pitt');
console.log(result);

//форма
const input = document.getElementById('lastNameInput');
input.addEventListener("keyup", function (event) {
        let result = showResult(event.target.value);
        if (typeof (result) === 'object') {
            let html = '';
            for (let key in result) {
                html += key + ': ' + result[key] + '<br>';
            }
            document.getElementById('showResultInput').innerHTML = html;
        } else {
            document.getElementById('showResultInput').innerHTML = result;
        }
    }
);


//Домашнее задание_3 (classwork_4).
//(classwork_4)
const poly = 'репер';

function showResultOfPolyndrom() {
    let arr = poly.split('');
    arr = arr.reverse().join('');
    return (poly === arr) ? 'это палиндром' : 'это не палиндром';
}

console.log(showResultOfPolyndrom());


//1.

function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }

}

console.log(min(2, 4));

function min(a, b) {
    return (a < b) ? a : b;
}

console.log(min(2, 1));

function max(a, b) {
    if (a < b) {
        return b;
    } else {
        return a;
    }

}

console.log(max(9, 8));

function max(a, b) {
    return (a > b) ? a : b;
}

console.log(max(9, 10));

//2.
let arr = [0, 1, 24, 20, 40, 66, 100, 77, 70, 88];
let newArr = [];
let resultOfChange = function changeValue(arr) {
    arr.forEach(function (item, i, arr) {
        if (item === 0) {
            newArr.push('zero')
        } else if (item % 100 === 0) {
            newArr.push(item / 100 + 'zerozero')
        } else if (item % 10 === 0) {
            newArr.push(item / 10 + 'zero')
        } else {
            newArr.push(item)
        }

    });
    return newArr;
};

console.log(resultOfChange(newArr));
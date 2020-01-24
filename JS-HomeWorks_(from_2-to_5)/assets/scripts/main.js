//Домашнее_задание_1_(classwork_2)
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

//Домашнее_задание_2_(classwork_3)
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


//Домашнее_задание_3_(classwork_4)
//(classwork_4)
const poly = 'репер';

function showResultOfPolyndrom() {
    let arr = poly.split('');
    arr = arr.reverse().join('');
    return (poly === arr) ? 'это палиндром' : 'это не палиндром';
}

console.log(showResultOfPolyndrom());


// Задание №1

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

// Задание №2
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

console.log(resultOfChange(arr));

//Домашнее_задание_4_(classwork_5)
// Задание №1 (Напишите функцию sum, которая возвращает сумму чисел следующим образом:)
function sum(a) {
    return function (b) {
        return a + b;
    }

}

console.log(sum(5)(2)); // 7

//Задание №2 (Покрасить абзацы по клику (событие click))

// const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
//
// const text1 = document.getElementById('text1');
// const text2 = document.getElementById('text2');
// const text3 = document.getElementById('text3');
//
// const changeTextColor = () => {
//     let i = 0;
//     return function (event) {
//         event.target.style.color = colors[i];
//         i++;
//         if (i === colors.length) {
//             i = 0;
//         }
//     }
// };
// const changeColor1 = changeTextColor();
// const changeColor2 = changeTextColor();
// const changeColor3 = changeTextColor();
//
// text1.addEventListener('click', changeColor1);
// text2.addEventListener('click', changeColor2);
// text3.addEventListener('click', changeColor3);


////Домашнее_задание_5_(classwork_6)
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

const colors = {
    data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
    [Symbol.iterator]() {
        return this;
    },
    next(id) {
        if (this[id] === undefined) {
            this[id] = 0
        }
        if (this[id] < this.data.length) {
            return {
                done: false,
                value: this.data[this[id]++]
            }
        } else {
            this[id] = 0;
            {
                return {
                    done: true
                }
            }
        }
    }
};

const changeStyle = id => event => {
    event.target.style.color = colors.next(id).value;
};
text1.addEventListener('click', changeStyle(Symbol()));
text2.addEventListener('click', changeStyle(Symbol()));
text3.addEventListener('click', changeStyle(Symbol()));

// Пузырёк
const dataBubble = [4, 56, 33, 42, 15];
const bubbleSort = (arr) => {
    for (var i = 0, endI = arr.length - 1; i < endI; i++) {
        var wasSwap = false;
        for (var j = 0, endJ = endI - i; j < endJ; j++) {
            if (arr[j] > arr[j + 1]) {
                var swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
                wasSwap = true;
            }
        }
        if (!wasSwap) break;
    }
    return arr;
};
console.log(bubbleSort(dataBubble));
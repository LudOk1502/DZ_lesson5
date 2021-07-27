/*Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!

- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
    -- отримує текст з параграфа з id "content"*/
const content = document.getElementById('content');
console.log(content.innerText);
/*  -- отримує текст з блоку з id "rules"*/
const rules = document.getElementById('rules');
console.log(rules.innerText);
/*  -- замініть текст параграфа з id 'content' на будь-який інший*/
content.innerText = 'Hello Okten School';
console.log(content.innerText);
/*  -- замініть текст параграфа з id 'rules' на будь-який інший*/
rules.innerText = 'Hello World!';
console.log(rules.innerText);
/*    -- змініть кожному елементу колір фону на червоний*/
let bodyChildren = document.body.children;
for (let bodyItem of bodyChildren) {
    bodyItem.style.backgroundColor = 'red'; // або bodyItem.classList.add('red');
    /*  -- змініть кожному елементу колір тексту на синій*/
    bodyItem.style.color = 'blue';
}
/*  -- отримати весь список класів елемента з id=rules і вивести їх в console.log*/
console.log(rules.classList);
/*  -- отримати всі елементи з класом fc_rules. визначити їм 2 події "клік", одна вивдоить текст елементу, інша довільний ьексь*/
let fc_rules = document.getElementsByClassName('fc_rules');
for (const fcRule of fc_rules) {
    fcRule.addEventListener('click', function () {
        console.log(fcRule.innerText);
    })
    fcRule.addEventListener('click', function () {
        console.log('Hello');
    })
    /*    -- поміняти колір тексту у всіх елементів fc_rules на червоний*/
    fcRule.style.color = 'red';
}

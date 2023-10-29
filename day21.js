//DOM ÇALIŞMA DÜZENLERİ 
//const h1 = document.getElementsByTagName('h1'); //baslık ile alma 
/*
let len = h1.length
for (let i = 0; i < len; i++){
    console.log(
        h1[i]
    )
}*/
/*
[...h1].forEach(item => {
    console.log(item)
});*/
/******* */
/*const h1 = document.getElementsByClassName('title-1') // classname ile alma
console.log(h1)*/
/************ */
//const title = document.getElementById('title')
//console.log(title)

/*console.log(
    document.querySelector('.title-1 + #title')
)*/

/*console.log(
    document.querySelectorAll('.title-1').length
)
document.querySelectorAll('.title-1').forEach(item => console.log(item))*/

/*const title = document.getElementById('title')

title.style.color = 'blue'
title.style.backgroundColor = 'black'
title.title = 'test baslik'
//title.className = 'Adana'
title.classList.add('Adana')
title.classList.remove('test1')
title.textContent = ('Yeni Deger')// içerigi degistirir
//title.innerHTML = '' // içerik kaybolur


document.querySelectorAll('h1').forEach((h1, index) => {
    if(index %2 === 0){
        h1.style.color = 'green'
    }else {
        h1.style.color = 'blue'
    }
})
*/

/*const paragraph = document.querySelector('p')
console.log(paragraph)

const paragraph1 = document.querySelector('#paragraph-1')
const paragraph2 = document.querySelector('#paragraph-2')
const paragraph3 = document.querySelector('#paragraph-3')
const paragraph4 = document.querySelector('#paragraph-4')

console.log(paragraph1.innerText);
console.log(paragraph2.innerText);
console.log(paragraph3.innerText);
console.log(paragraph4.innerText);


const text = document.querySelectorAll('p')
const len = text.length
for (let i = 0; i < len; i++){
    console.log(text[i])
}

const list = document.querySelectorAll('p')
for(let i = 0; i < list.length; i++){
    const paragraph = list[i].textContent
    console.log(paragraph)
}

const paragraphs = document.querySelectorAll('p')
paragraphs[3].textContent = 'Fourty Paragraph'

const element = document.querySelectorAll('p')
element.forEach((paragraph, index) => {
    paragraph.setAttribute('id', 'paragraph-' + (index + 1))
    paragraph.setAttribute('class', 'custom-paragraph' + (index + 1))
})
console.log(element)

const elementStyle = document.querySelectorAll('p')
elementStyle[0].style.color = '#00b894'
elementStyle[1].style.backgroundColor = '#fdcb6e'
elementStyle[2].style.fontFamily = 'REM'
elementStyle[3].style.border = '1px solid #000000'

const allSelect = document.querySelectorAll('p')
allSelect.forEach((element, i) => {
    if (i % 2 == 0){
        element.style.color = 'green'
    }
    else{
        element.style.color = 'red'
    }
})*/

// Day 21 Exercise Solution

// Day 21 Exercise Level 2 Solution

// Exercise 3.1


const wrapper = document.querySelectorAll(".wrapper");
wrapper.forEach(element => {
    element.style.display = "flex";
    element.style.flexDirection = "column";
    element.style.justifyContent = "center";
    element.style.alignItems = "center";
    element.style.fontFamily = "REM";
})

const miniBigTtile = document.querySelector("h2");
miniBigTtile.style.textDecoration = "underline";

const listed = document.querySelectorAll("li");
listed.forEach((element, index) => {
    element.style.listStyleType = "none";
    element.style.margin = "20px 10px";
    element.style.padding = "15px 10px";
    element.setAttribute("id", "listed-style-" + (index + 1));
    element.style.backgroundColor = "#EB695B";
})

const selectStyle = document.getElementById("listed-style-1");
selectStyle.style.backgroundColor = "#5BBC7A";

const selectStyle2 = document.getElementById("listed-style-2");
selectStyle2.style.backgroundColor = "#F7DC5C";

const selectSpan = document.getElementById("year");
const elements = document.getElementById("timer");

const timer = document.getElementById("timer");
timer.style.padding = "15px 10px";
timer.style.color = "#fff";

function showingTime() {
    const time = new Date();
    let month = time.toLocaleDateString('en', { month: "long" });
    let day = String(time.getDate()).padStart(2, "0");
    let year = time.getFullYear();
    let h = String(time.getHours()).padStart(2, "0");
    let m = String(time.getMinutes()).padStart(2, "0");
    let s = String(time.getSeconds()).padStart(2, "0");
    const result = `${month} ${day} ${year} ${h}:${m}:${s}`;


    document.getElementById("timer").innerHTML = result;
    setTimeout(showingTime, 1000);
}

function randomColor() {
    var letter = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letter[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColor() {
    selectSpan.style.color = randomColor();
    elements.style.backgroundColor = randomColor();
}

setInterval(changeColor, 1000);
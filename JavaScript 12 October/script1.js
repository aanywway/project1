var someURL = window.location;
console.log(someURL);

// window.location = 'https://puzzleweb.ru/';

// location.href = "https://wikipedia.org";

// alert(location.href); // показывает текущий URL
/* if (confirm("Перейти на Wikipedia?")) {
    location.href = "https://wikipedia.org"; // перенаправляет браузер на другой URL 
} */

// console.log(location.host);
// console.log(location.reload());

let button = document.querySelector('.reload');
button.onclick = function() {
    location.reload();
}

console.log("screen.height", screen.height);
console.log("screen.height", screen.availHeight);
console.log("avail width", screen.width);
console.log("avail width", screen.availWidth);

const isMobile = navigator.userAgent.toLowerCase().match(/mobile/i);

if (isMobile) {
    console.log("isMobile");
} else {
    console.log("not isMobile")
}

const geo = navigator.geolocation;

if(!navigator.geolocation) {
    console.error('Ваш браузер не поддерживает геолокацию!');
} else {
    console.log(geo);
}

let button2 = document.querySelector('.scroll');
button2.onclick = function() {
    window.scroll(2000000, 2000000);
}
console.log(window.innerWidth); // полная ширина окна
console.log(document.documentElement.clientWidth); // ширина окна за вычетом колеса прокрутки
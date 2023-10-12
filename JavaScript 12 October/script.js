var a = 1;
window.some = 2;

// function foo() {
//     var some = 2;
//     window.some = 2;

//     window.bar = function() {
//         function bar() {
//             return false
//         }
//         console.log(some)
//         return true
//     }
// }
// foo();
console.log(some);
console.log('a' in window);

// window.alert("alert");

let button1 = document.querySelector('.button1');
button1.addEventListener('click', close);

let button2 = document.querySelector('.button2');
// button2.addEventListener('click', open);
button2.onclick = function() {
    window.open("https://puzzleweb.ru/", "popup", height=400, width=400, "scrollbars=yes");
}

// function close() {
//     window.close();
// }

// console.log(window);

// console.log(navigator);

// console.log(screen);

// console.log(location);

// console.log(history);
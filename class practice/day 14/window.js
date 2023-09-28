// console.log(window.innerHeight, window.innerWidth)

// window.setTimeout(() =>{
//     console.log("Hello gust..!!")
// }, 3000)

// // window.setTimeout(() =>{
// //     document.writeln("Hello gust..!!")
// // }, 3000)


// // button.textContent="button"
// // button.id="button"
// // document.body.appendChild(button)

// let button = document.getElementById("button")
// window.setTimeout(() => {
//     button.removeAttribute("disabled")
// }, 3000)

// let button2=document.getElementById("button2")
let paragraph=document.getElementById("paragraph")

// let timeleft=10;
// let a = setInterval( function b(){
// if (timeleft > -1){
//     paragraph.textContent=`Your download will appear in ${timeleft} seconds`
//     timeleft--;
// }else {
//     clearInterval(b)
//     button2.removeAttribute("disabled")
// }

// }, 1000)

// let data = window.prompt("Please enter your good name..!!")
// paragraph.textContent=`Nice to meet to you ${data}, Have a nice day`

// alert("Are you sure")

// let openion=confirm("Are you sure")
// if(openion){
//     paragraph.textContent="okey"
// }else
// {
//  paragraph.textContent="no"
// }

const button = document.getElementById("button")
button.addEventListener('click', function() {
console.log('button clicked');
});

// //select the button
// const button = document.getElementById('button');

// // // attach an event
// button.addEventListener('click', function () {
//    console.log('button clicked!');
//  });

const para = document.getElementById("para");
para.addEventListener("mouseenter", function() {
    para.style.backgroundColor="green";
})

// const divElement = document.getElementById('divelement');

// divElement.addEventListener('mouseover', function () {
//     divElement.style.backgroundColor = 'blue';
// });

// divElement.addEventListener('mouseout', function () {
//     divElement.style.backgroundColor = 'white';
// });
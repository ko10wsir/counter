alert("hello");
// let valueDisplays = document.querySelector(".num");
// let interval = 5000;
// valueDisplays.forEach((valueDisplay) =>{
// let startValue = 0;
// let endValue = parseInt(valueDisplay.getAttribute("data-val"));
// let duration = Math.floor(interval / endValue);
// let count = setInterval(function (){
// setInterval += 1;
// valueDisplay.textContent = startValue;
// if(startValue === endValue){
//     clearInterval(count);
// }
// }, duration);
// });
let num =document.querySelectorAll(".num");
let numItem = Array.from(num);

numItem.map((item)=>{
let count = 0;
function counterUp(){
    count++;
    if(count <= item.dataset.number){
        item .innerHTML = count;
    }
}
let stop = setInterval(()=>{
counterUp();
}, item.dataset.speed);
});


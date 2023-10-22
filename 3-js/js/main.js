var elInp = document.querySelector('.inp')
var elBtn = document.querySelector('.btn')
var elVaqt = document.querySelector('.time')
var elVaqt1 = document.querySelector('.time1')
var elVaqt2 = document.querySelector('.time2')
var elVaqt3 = document.querySelector('.time3')


function fn(){
    elVaqt.textContent = (elInp.value / 5 ) 
    elVaqt1.textContent = (elInp.value / 20) 
    elVaqt2.textContent = (elInp.value / 100) 
    elVaqt3.textContent = (elInp.value / 800) 
}

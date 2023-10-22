var ElTitle = document.querySelector('.title')
var ElBtn = document.querySelector('.btn')
var ElInp1 = document.querySelector('.inp1')
var ElInp2 = document.querySelector('.inp2')


ElBtn.addEventListener('click', function(){
    if(ElInp1.value / ElInp2.value % 2 == 0){
    ElTitle.textContent = 'juft- ' + ElInp1.value / ElInp2.value
    }else{
        ElTitle.textContent = 'Toq- ' + ElInp1.value / ElInp2.value
    }
})
let count = document.getElementById('count')
let sub = document.getElementById('sub')
let add = document.getElementById('add')
let reset = document.getElementById('reset')

add.addEventListener("click", function(){
    count.innerHTML++;
    count.style.color = 'green';
});




sub.addEventListener("click", function(){
    count.innerHTML--;
    count.style.color = 'red';
   
});

reset.addEventListener("click", function(){
    count.innerHTML = 0;
    count.style.color = 'white';
});


function applyColor(){
    if(count.innerHTML > 0){
        count.style.color = 'green';
    }else if(count.innerHTML < 0) {
        count.style.color = 'red';
    }else{
        count.style.color = 'white';
    }
}
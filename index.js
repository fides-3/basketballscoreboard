let countEl=document.getElementById("count");
let count=0;



function add(value){//accepts a new parameter called value
count+=value //increment the count by value passed
countEl.innerText=count
console.log(count)
}

let counter=document.getElementById("count2");
let count2=0;

function increment(val){
count2+=val //increment the count by value passed
counter.innerText=count2
console.log(count2)


}




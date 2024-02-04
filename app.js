const red=document.querySelector(".red-btn")
const blue=document.querySelector(".blue-btn")
const peach=document.querySelector(".peach-btn")
const back2=document.querySelector(".back-btn")

const changedIntoRed=()=>{
    document.body.style.backgroundColor="red";
}

const changItRed=red;
changItRed.addEventListener("click",changedIntoRed)

const changedIntoBlue=()=>{
    document.body.style.backgroundColor="blue";
}

const changItBlue=blue;
changItBlue.addEventListener("click",changedIntoBlue)

const changedIntoPeach=()=>{
    document.body.style.backgroundColor="peachpuff";
}

const changItPeach=peach;
changItPeach.addEventListener("click",changedIntoPeach)


const myfunction=()=>{    
    document.body.style.backgroundColor="black"
}
const myfunction2=()=>{    
    document.body.style.backgroundColor="grey"
}
back2.addEventListener("click",myfunction2)

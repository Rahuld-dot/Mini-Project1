let gameSeq=[];
let userSeq=[];
let btns=['yellow','red','purple','green'];

let level=0;
let started=false;

let h2=document.querySelector('h2');

document.addEventListener('keypress',function(){
    if(started==false){
        console.log('game started');
        started=true;
        levelUp();
    }
})

function gameFlash(btn){
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash');
    },250);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;

    let randInx=Math.floor(Math.random() * 3);
    let randColor=btns[randInx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx){
    
    if(gameSeq[idx]===userSeq[idx]){
        if(gameSeq.length==userSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        document.querySelector('body').style.backgroundColor='red';
        h2.innerHTML=`Game over! Your Score was <b>${level}</b>Please press any key to start again `;
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor='white';
        },1500);
        reset();
    }
}

function btnPress(){
    // console.log(this);
    let btn=this;
    gameFlash(btn);

    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll('.btn');

for ( btn of allBtns){
    btn.addEventListener('click',btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
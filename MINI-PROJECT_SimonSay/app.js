let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","blue", "green"];
let starter= false;
let level=0;

let h3=document.querySelector("h3");
let highScore=0;
let h2= document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(starter==false){
        console.log("Game Started");
        starter=true;
        
        levelUp();
    }
});
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250 );
}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randidx= Math.floor(Math.random()*4);
    let randColor= btns[randidx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    btnFlash(randBtn);

}

function btnPress(){
    let btn=this;
    btnFlash(btn);
    let userColor= btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);   
}
function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 900);
        }
    } else {
        if (level > highScore) {
            highScore = level;
            h3.innerHTML = `Highest Score:<b> ${highScore}</b>`;
        }
        h2.innerHTML = `GAME OVER!! Your Score was <b> ${level} </b> <br> Press any key to Start. `;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function reset(){
    gameSeq=[];
    userSeq=[];
    starter=false;
    level=0;
}

let allBtn= document.querySelectorAll(".btn");
for (let btn of allBtn){
    btn.addEventListener("click",btnPress);
}
h3.innerHTML = `Highest Score:<b> ${highScore}</b>`;
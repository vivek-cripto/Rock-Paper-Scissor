let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const message = document.querySelector("#msg");
const usrscr= document.querySelector("#userscore");
const compscorepscr= document.querySelector("#computerscore");
const reset = document.querySelector("#reset");

resetgame = ()=>{
    userscore=0;
    compscore=0;
    usrscr.innerText=userscore;
    compscorepscr.innerText=compscore;
    message.innerText="Play your Turn";
    message.style.backgroundColor="#081b31";
}

reset.addEventListener("click",resetgame);
const gencompchoice =()=>{
    const option =["rock","paper","scissor"];
    const randidx=Math.floor(Math.random()*3);
    return option[randidx];
}

const draw = (userchoice) =>{
    message.innerText =`Draw! Both choose ${userchoice}, Play again`; 
    message.style.backgroundColor="#081b31";
}

const showWinner = (userWin, userchoice, compchoice)=>{
    if(userWin===true){
        userscore++;
        usrscr.innerText=userscore;
        console.log("Win");
        message.innerText =`You win, ${userchoice} beats ${compchoice}`;
        message.style.backgroundColor="green";
    }
    else{
        compscore++;
        compscorepscr.innerText=compscore;
        message.innerText =`You Lost, ${compchoice} beats ${userchoice}`;
        message.style.backgroundColor="red";
    }
}

const playgame = (userchoice)=>{
    const compchoice=gencompchoice();
    if(userchoice === compchoice){
        draw(userchoice);
         
    }
    else{
        let userWin=true;
        if(userchoice === "rock"){
            userWin = compchoice ==="paper"? false : true;
        }
        else if(userchoice === "paper"){
            userWin = compchoice ==="scissor"? false : true;
        }
        else{
            userWin = compchoice ==="rock"?false:true;
        }
        showWinner(userWin, userchoice, compchoice);
    }

    
}

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click", ()=>{
        const userchoice = choice.getAttribute("id");
        playgame(userchoice)
    });
});


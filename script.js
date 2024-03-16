let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-game");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turn=true;


const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () => {
    turn = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    count=0;
}
let count =0;
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        count++;
        if(turn){
            box.innerText="X";
            turn = false;
            box.classList.add("green");
            box.classList.remove("red");
        }
        else{
            box.innerText="O";
            turn = true;
            box.classList.add("red");
            box.classList.remove("green");
        }
        box.disabled=true;

        checkWinner();

        if(count === 9)
        drawMsg();

    })
})

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
};

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const drawMsg = () => {
    msg.innerText=`Game is Drawn`;
    msgContainer.classList.remove("hide");
}

const showWinner = (winner) => {
    msg.innerText=`Congratulations!!! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for (const pat of winPatterns) {
        let pos1Val=boxes[pat[0]].innerText;
        let pos2Val=boxes[pat[1]].innerText;
        let pos3Val=boxes[pat[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
           
            
        }
    }
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
    


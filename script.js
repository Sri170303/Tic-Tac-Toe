console.log("Welcome To TicTacToe")
let audioTurn = new Audio("ping.mp3")
let audioGameOver = new Audio("gameOver.mp3")
let gameOver = false
let turn = "X"

// change turn
const changeTurn = () => {
    return turn === "X"? "O": "X";
}

// check win
const checkWin = () => {
    let boxTexts = document.getElementsByClassName("boxText");
    let wins = [
        [0, 1, 2, 3, 6, 0 ],
        [3, 4, 5, 3, 18, 0],
        [6, 7, 8, 3, 30, 0],
        [0, 3, 6, -9, 18, 90],
        [1, 4, 7, 3, 18, 90],
        [2, 5, 8, 15, 18, 90],
        [0, 4, 8, 3, 18, 45],
        [2, 4, 6, 3, 18, -45]
    ]
    wins.forEach( e => {
        if ((boxTexts[e[0]].innerText === boxTexts[e[1]].innerText) && (boxTexts[e[2]].innerText === boxTexts[e[1]].innerText) && (boxTexts[e[0]].innerText !== "")) {
            document.querySelector(".info").innerText = boxTexts[e[0]].innerText + " Won"
            audioGameOver.play();
            gameOver = true
            document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width = "200px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "30vw";
        }
    })
}

// game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector(".boxText")
    element.addEventListener("click", () => {
        if (boxText.innerText === "")
        {   
            boxText.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!gameOver) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

// event listener for reset
reset.addEventListener("click", () => {
    let boxTexts = document.querySelectorAll(".boxText");
    Array.from(boxTexts).forEach(element => {
        element.innerText = "";
    });
    turn = "X";
    gameOver = false;
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width = "0px";
})

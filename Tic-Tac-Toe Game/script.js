let boxes = document.querySelectorAll(".box");
let resetBtn = document.getElementById("reset-btn");
let msgContainer = document.querySelectorAll(".msg-container");
let msg = document.getElementById("msg");
let newGameBtn = document.getElementById("new-btn");

let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      box.dataset.player = "O";
      //   box.classList.add("O");
      turnO = false;
    } else {
      box.innerText = "X";
      box.dataset.player = "X";
      //   box.classList.add("X");
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const showWinner = (winner) => {
  msg.innerText = `Player ${pos1Val} Wins! 🏆`;
  msgContainer.classList.add("show");
  msgContainer.classList.remove("hide");
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("winner", pos1Val);
        showWinner(pos1Val);
      }
    }
  }
};

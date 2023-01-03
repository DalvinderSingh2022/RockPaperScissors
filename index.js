const Player = document.querySelector(".selected .player");
const Computer = document.querySelector(".selected .computer");
const Playerscore = document.querySelector(".score .player");
const Computerscore = document.querySelector(".score .computer");
const Options = document.querySelectorAll(".options>div");
const Restart = document.querySelectorAll(".score .restart");

var Pscore = 0;
var Cscore = 0;

for (let i = 0; i < Options.length; i++) {
    Options[i].addEventListener("click", function () {
        var PlayerSelect = Options[i];
        var ComputerSelect = Options[Math.floor(Math.random() * Options.length)];

        for (let j = 0; j < Options.length; j++) {
            Options[j].classList.remove("select");
            if (Options[j] == PlayerSelect) {
                Options[j].classList.add("select");
            }
        }

        check(PlayerSelect, ComputerSelect);
        Playerscore.innerText = Pscore;
        Computerscore.innerText = Cscore;

        Player.childNodes[1].classList = "fa-regular fa-" + PlayerSelect.classList;
        Computer.childNodes[1].classList = "fa-regular fa-" + ComputerSelect.classList;

        console.log((Pscore >= 10), (Cscore >= 10))
        if (Pscore >= 10) { Playerscore.parentElement.classList.add("winner") };
        if (Cscore >= 10) { Computerscore.parentElement.classList.add("winner") };
    })
};

for (let i = 0; i < Restart.length; i++) {
    Restart[i].addEventListener("click", function () {
        Pscore = 0;
        Cscore = 0;
        Playerscore.innerHTML = Pscore;
        Computerscore.innerHTML = Cscore;
        this.parentElement.classList.remove("winner");
        for (let j = 0; j < Options.length; j++) {
            Options[j].classList.remove("select");
        }
    });
};

function check(player, computer) {
    const PlayerSelected = player.getAttribute("id");
    const ComputerSelected = computer.getAttribute("id");

    if ((PlayerSelected == "rock" && ComputerSelected == "scissors") || (PlayerSelected == "scissors" && ComputerSelected == "paper") || (PlayerSelected == "paper" && ComputerSelected == "rock")) {
        Pscore++;
    } else if ((PlayerSelected == "rock" && ComputerSelected == "paper") || (PlayerSelected == "scissors" && ComputerSelected == "rock") || (PlayerSelected == "paper" && ComputerSelected == "scissors")) {
        Cscore++;
    }
}
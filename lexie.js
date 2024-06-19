console.log("Ready.");
console.log("√ = Correct letter, correct position. \n! = Correct letter, incorrect position. \nφ = Incorrect letter.");

let text;
let texts;

// Loads in the huge list of words and turns it into an array
async function loadFile(file) {
    text = await file.text();
    texts = text.split("\n");
}

// the game
function init() {
    let randomNumber = Math.floor(Math.random() * texts.length);
    let target = texts[randomNumber];

    startGame();

    function startGame() {
        let outA = "φ";
        let outB = "φ";
        let outC = "φ";
        let outD = "φ";
        let outE = "φ";
        let wordIn = prompt("Input a word.");

        if (wordIn == "lexie") {
            console.log("Secret word: " + target);
            return;
        } else if (wordIn == null || wordIn.length < 5 || wordIn.length > 5) {
            return;
        } else if (wordIn.length == 5) {
            console.log(wordIn);
            // This line enters debug mode
            // console.log("Secret word: " + target);
        } else {
            return;
        };

        let colA = wordIn.charCodeAt(0) - target.charCodeAt(0);
        let colB = wordIn.charCodeAt(1) - target.charCodeAt(1);
        let colC = wordIn.charCodeAt(2) - target.charCodeAt(2);
        let colD = wordIn.charCodeAt(3) - target.charCodeAt(3);
        let colE = wordIn.charCodeAt(4) - target.charCodeAt(4);

        if (
            wordIn.charCodeAt(0) == target.charCodeAt(0) ||
            wordIn.charCodeAt(0) == target.charCodeAt(1) ||
            wordIn.charCodeAt(0) == target.charCodeAt(2) ||
            wordIn.charCodeAt(0) == target.charCodeAt(3) ||
            wordIn.charCodeAt(0) == target.charCodeAt(4)
        ) {
            outA = "!";
        }

        if (
            wordIn.charCodeAt(1) == target.charCodeAt(0) ||
            wordIn.charCodeAt(1) == target.charCodeAt(1) ||
            wordIn.charCodeAt(1) == target.charCodeAt(2) ||
            wordIn.charCodeAt(1) == target.charCodeAt(3) ||
            wordIn.charCodeAt(1) == target.charCodeAt(4)
        ) {
            outB = "!";
        }

        if (
            wordIn.charCodeAt(2) == target.charCodeAt(0) ||
            wordIn.charCodeAt(2) == target.charCodeAt(1) ||
            wordIn.charCodeAt(2) == target.charCodeAt(2) ||
            wordIn.charCodeAt(2) == target.charCodeAt(3) ||
            wordIn.charCodeAt(2) == target.charCodeAt(4)
        ) {
            outC = "!";
        }

        if (
            wordIn.charCodeAt(3) == target.charCodeAt(0) ||
            wordIn.charCodeAt(3) == target.charCodeAt(1) ||
            wordIn.charCodeAt(3) == target.charCodeAt(2) ||
            wordIn.charCodeAt(3) == target.charCodeAt(3) ||
            wordIn.charCodeAt(3) == target.charCodeAt(4)
        ) {
            outD = "!";
        }

        if (
            wordIn.charCodeAt(4) == target.charCodeAt(0) ||
            wordIn.charCodeAt(4) == target.charCodeAt(1) ||
            wordIn.charCodeAt(4) == target.charCodeAt(2) ||
            wordIn.charCodeAt(4) == target.charCodeAt(3) ||
            wordIn.charCodeAt(4) == target.charCodeAt(4)
        ) {
            outE = "!";
        }

        // Checks for correct letters in correct order
        if (colA == 0) {
            outA = "√";  
        }

        if (colB == 0) {
            outB = "√";  
        }

        if (colC == 0) {
            outC = "√";  
        }

        if (colD == 0) {
            outD = "√";  
        }

        if (colE == 0) {
            outE = "√";  
        }

        console.log(outA + outB + outC + outD + outE);
        if (
            colA == 0 &&
            colB == 0 &&
            colC == 0 &&
            colD == 0 &&
            colE == 0
        ) {
            console.log("You win!")
            return;
        }
        startGame();
    }
}
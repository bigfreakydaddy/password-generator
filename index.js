const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let password1 = document.getElementById("password1");
let password2 = document.getElementById("password2");
let passwordGeneratorButton = document.getElementById("password-generator");
const p1Hide = document.getElementById("password1");
const p2Hide = document.getElementById("password2");

function passwordGenerator() {
  let password = "";
  for (let i = 0; i < 15; i++) {
    let passwordChar =
      characters[Math.floor(Math.random() * characters.length)];
    password += passwordChar;
  }
  return password;
}

passwordGeneratorButton.addEventListener("click", function () {
  p1Hide.removeAttribute("hidden");
  p2Hide.removeAttribute("hidden");
  password1.textContent = passwordGenerator();
  password2.textContent = passwordGenerator();
});

function copyPassword(passwordCopy) {
  alert("Copied Password");
  navigator.clipboard.writeText(passwordCopy.textContent);
}

// function passwordDispenser(){
// password1.textContent = passwordGenerator()
// password2.textContent = passwordGenerator()
// }

// requirements
// build it from scratch
// generate two random password
// password 15 length

// stetch goal
// copy on click
// change length
// toggle symbols and numbers

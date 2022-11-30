function createHiddenWord(str) { // "lac"
    let result = "" // "" - > "*" -> "**" -> "***"
    for (const char of str) { 
        result += "*"
    }
    return result
}

function createHiddenWordV2(str) {
    return "*".repeat(str.length)
}

function checkIfInWord(char, str) { // "a", "lac"
    for (const c of str) { // "l" -> "a"
        if (c === char) { 
            return true
        }
    }
    return false
}

function checkIfInWordV2(char, str) {
    return str.includes(char)
}

function generateHiddenWord(hWord, sWord, char) { // "*a****", "maison", "i"
    let result = "" // "" => "*" => "*a" => "*ai" => "*ai*" => "*ai**" => "*ai***"
    for (let i = 0; i < sWord.length; i++) { // 0
        if (char === sWord[i]) {
            result += char
        }
        else {
            result += hWord[i]
        }
    }
    return result
}

function resetGame() {
    secretWord = words[Math.floor(Math.random() * words.length)]
    hiddenWord = createHiddenWord(secretWord)
    hiddenWordHTML.innerText = "Mot caché : " + hiddenWord
    tries = 0
    maxTries = 10
}

function displayWord() {
    for (const word of words) {
        const liHTML = document.createElement("li")
        liHTML.innerText = word
        wordListHTML.appendChild(liHTML)
    }
}

function testChar() {
    const char = inputHTML.value

    if (checkIfInWord(char, secretWord)) {
        hiddenWord = generateHiddenWord(hiddenWord, secretWord, char)
        console.log(hiddenWord)
        hiddenWordHTML.innerText = "Mot caché : " + hiddenWord

        if (!hiddenWord.includes("*")) {
            console.log("Gagné !")
        }
    }
    else {
        tries++
        if (tries > maxTries) {
            console.log("Perdu !")
        }
    }

    inputHTML.value = ""
    inputHTML.focus()
}

const hiddenWordHTML = document.querySelector("h4")
const inputHTML = document.querySelector("input")
const buttonHTML = document.querySelector("#try")
const wordListHTML = document.querySelector("ul")
const buttonNewGameHTML = document.querySelector("#new-game")

const words = ["maison", "chambre", "velo", "appartement"]

let secretWord
let hiddenWord
let tries
let maxTries

resetGame()
displayWord()

buttonHTML.addEventListener("click", () => {
    testChar()
})

inputHTML.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        testChar()
    }
})

buttonNewGameHTML.addEventListener("click", () => {
    resetGame()
})


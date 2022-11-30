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

const hiddenWordHTML = document.querySelector("h4")
const inputHTML = document.querySelector("input")
const buttonHTML = document.querySelector("button")
const wordListHTML = document.querySelector("ul")

const words = ["maison", "chambre", "velo", "appartement"]

let secretWord = words[Math.floor(Math.random() * words.length)]
let hiddenWord = createHiddenWord(secretWord)
hiddenWordHTML.innerText = "Mot caché : " + hiddenWord

let aInWord = checkIfInWord("z", secretWord)
hiddenWord = generateHiddenWord("*a****", secretWord, "i")

console.log(hiddenWord)
console.log(aInWord)
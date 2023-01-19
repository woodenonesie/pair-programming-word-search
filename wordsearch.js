let transpose = (letters) => {
    let newVertArray = [];
    for (let row = 0; row < letters[0].length; row++) {
        newVertArray.push([]);
        for (let i = 0; i < letters.length; i++) {
            newVertArray[row].push(letters[i][row])
        }
    }
    return newVertArray;
}

const findWord = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true
        }
    }
    return false;
}

const wordSearch = (letters, word) => {
    if (letters.length !== 0 && letters[0].length !== 0) {
        if (findWord(letters, word) === false) {
            let changedLetters = transpose(letters);
            return findWord(changedLetters, word);
        } else {
            return true;
        }
    } else {
        return [];
    }
}

module.exports = wordSearch

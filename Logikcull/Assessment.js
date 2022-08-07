function longestSubString(array) {
    let characterArray = array.join('').split('')

    let i = 0;
    let longest = {
        letter: '',
        length: 0
    }
    let current = {
        letter: '',
        length: 0
    }

    while (i < characterArray.length) {
        letter = characterArray[i]
        if (current.letter != letter) {
            current = {
                letter,
                length: 0
            };
        }
        current.length += 1;
        if (current.length > longest.length) {
            longest = {...current}
        }
        i += 1;
    }
    return longest
}

console.log(longestSubString(["aaa", "aabaa", "babba", "a"]))
const vowelArray = ["a", "e", "i", "o", "u"];

function vowelSpotter(word) {
        if (vowelArray.includes(word.charAt(0))) {
            return word + "way";
        } else {
            return conSpotter(word)
        }
};

function conSpotter(word) {
    for (i = 0; i < word.length; i++) {
        if(vowelArray.includes(word.charAt(i))) {
            const firstLetters = word.slice(0,i);
            const restLetters = word.slice(i);
            return restLetters + firstLetters +"ay";
        }
    }
}
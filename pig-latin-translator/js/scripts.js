const vowelArray = ["a", "e", "i", "o", "u"];

function vowelSpotter(word) {
        if (vowelArray.includes(word.charAt(0))) {
            return word + "way";
        } else {
            return conSpotter(word)
        }
};

function conSpotter(word) {
    const firstLetter = word.slice(0,1);
    const restLetter = word.slice(1);
    return restLetter + firstLetter +"ay";
}
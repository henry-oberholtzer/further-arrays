function vowelSpotter(word) {
    const vowelArray = ["a", "e", "i", "o", "u"];
    for (i = 0; i < word.length; i++) {
        if (vowelArray.includes(word.charAt(i))) {
            return word + "way";
        }
    }
};
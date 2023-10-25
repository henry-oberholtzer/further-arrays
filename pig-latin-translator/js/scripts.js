// Business Logic

function vowelSpotter(word) {
    const vowelArray = ["a", "e", "i", "o", "u"];
    if (vowelArray.includes(word.charAt(0))) {
        return word + "way";
    } else {
        return conSpotter(word)
    }
};

function conSpotter(word) {
    if (word.slice(0, 2) === "qu") {
        return word.slice(2) + "quay";
    }
    for (i = 0; i < word.length; i++) {
        const vowelArrayAndQ = ["a", "e", "i", "o", "u", "q"];
        if (vowelArrayAndQ.includes(word.charAt(i))) {
            const firstLetters = word.slice(0, i);
            const restLetters = word.slice(i);
            return restLetters + firstLetters + "ay";
        }
    }
}

function pigLatin(text) {
    const textArray = text.split(" ");
    let pigText = "";
    textArray.forEach(function(word) {
        pigText = pigText + vowelSpotter(word) + " ";
    })
    return pigText.trim();
};

// UI Logic

function handleFormSubmission(e) {
    e.preventDefault();
    const text = document.getElementById("whatToSay").value;
    const result = document.getElementById("result");
    const p = document.createElement("p");
    const pigLatinText = pigLatin(text);
    p.append(pigLatinText);
    result.append(p);
}

window.addEventListener("load", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", handleFormSubmission);
});
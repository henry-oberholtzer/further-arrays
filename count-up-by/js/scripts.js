function countingBy(countTo, countBy) {
    const output = [];
    for (let i = 0; i <= countTo; i += countBy) {
        output.push(i);
    }
    return output;
}

function countString(countTo, countBy) {
    const outputString = countingBy(countTo, countBy).join(" and ");
    return outputString;
};

// UI Logic

window.addEventListener("load", function () {
    const form = document.querySelector("form")
    form.addEventListener("submit", function(e){
        e.preventDefault();
        const countTo = parseInt(document.getElementById("countTo").value);
        const countBy = parseInt(document.getElementById("countBy").value);
        const outputDiv = document.getElementById("outputDiv");
        outputDiv.append(countString(countTo, countBy));
    });
});
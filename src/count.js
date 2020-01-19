let start = 1577055600;
let end = 1577142000;
let timestamp, titleTag, countTag, iframe;
let timeRemaining, text;
let iFrameAdded = false;

document.addEventListener("DOMContentLoaded", function() {
    titleTag = document.getElementsByTagName("title")[0];
    countTag = document.getElementById("count");
    iframe = document.getElementById('iframe');

    render();
    update();
});

function update() {
    setTimeout(update, 1000);
    timestamp = Math.floor(Date.now() / 1000);
    render();
}

function render() {
    if (timestamp < start) {
        timeRemaining = start - timestamp;
    } else if (timestamp >= end) {
        timeRemaining = end - timestamp - 1;
    } else {
        timeRemaining = "a download should've started";

        if (!iFrameAdded) {
            var iframe = document.createElement('iframe');
            iframe.setAttribute("src", "download.php");
            document.body.appendChild(iframe);
            iframe.click();

            iFrameAdded = true;
        }
    }

    text = "4c7563 🎁 " + timeRemaining;
    titleTag.innerHTML = text;
    countTag.innerHTML = text;
}
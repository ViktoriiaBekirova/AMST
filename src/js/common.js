let modal = document.querySelector("#modal"),
    modalOverlay = document.querySelector("#modal-overlay"),
    closeButton = document.querySelector("#close-button"),
    openButton = document.querySelector("#open-button");

closeButton.addEventListener("click", function() {
    modal.classList.remove("open");
    modalOverlay.classList.remove("open");
});

openButton.addEventListener("click", function() {
    modal.classList.add("open");
    modalOverlay.classList.add("open");
});

// progressbar
let ProgressBar = require("progressbar.js")
let clock = new ProgressBar.Circle(".time__clock", {
    strokeWidth: 15,
    trailWidth: 15,
    trailColor: "rgba(106, 29, 27, 0.8)",
    color: "#ff5413",
    easing: "easeInOut",
    svgStyle: null,
    text: {
        value: "0",
        className: "progress-text",
        style: {
            color: "white",
            position: "absolute",
            top: "35%",
            left: "40%",
            transform: null
        }
    },
    step: (state, shape) => {
        shape.setText(Math.round(shape.value() * 12));
    }
});
clock.animate(0.25, {
    duration: 1500
});
let minute = new ProgressBar.Circle(".time__minute", {
    strokeWidth: 15,
    trailWidth: 15,
    trailColor: "rgba(106, 29, 27, 0.8)",
    color: "#ff5413",
    easing: "easeInOut",
    svgStyle: null,
    text: {
        value: "0",
        className: "progress-text",
        style: {
            color: "white",
            position: "absolute",
            top: "35%",
            left: "30%",
            transform: null
        }
    },
    step: (state, shape) => {
        shape.setText(Math.round(shape.value() * 60));
    }
});
minute.animate(0.66, {
    duration: 1500
});

let second = new ProgressBar.Circle(".time__second", {
    strokeWidth: 15,
    trailWidth: 15,
    trailColor: "rgba(106, 29, 27, 0.8)",
    color: "#ff5413",
    easing: "easeInOut",
    svgStyle: null,
    text: {
        value: "0",
        className: "progress-text",
        style: {
            color: "white",
            position: "absolute",
            top: "35%",
            left: "40%",
            transform: null
        }
    },
    step: (state, shape) => {
        shape.setText(Math.round(shape.value() * 60));
    }
});
second.animate(0.08, {
    duration: 1500
});
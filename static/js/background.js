const images = ["0.png","1.png"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

document.body.style.backgroundImage = `url('/static/images/${chosenImage}')`;
document.body.style.backgroundSize = "cover";

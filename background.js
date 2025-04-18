const images = ["0.png","1.png"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgimage = document.createElement("img");

bgimage.src = `${chosenImage}`;

document.body.appendChild(bgimage);

const images = ["0.png","1.png"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgimage = document.createElement("img");

bgimage.src = `${chosenImage}`;

bgimage.alt = "랜덤 배경";

document.body.appendChild(bgimage);

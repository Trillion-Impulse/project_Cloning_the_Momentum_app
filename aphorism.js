const aphorisms = [
    {
        aphorism: "That which does not kill us makes us stronger",
        author: "Friedrich Nietzsche"
    },
    {
        aphorism: "Only those who stand alone can truly go far",
        author: "Yeop"
    },
    {
        aphorism: "Since the very character of law is order, or constancy, it follows that all that happens will repeat and can be predicted if we know the law",
        author: "Ralph Nelson Elliott"
    },
    {
        aphorism: "In the middle of every difficulty lies opportunity",
        author: "Albert Einstein"
    },
    {
        aphorism: "If you can dream it, you can do it",
        author: "Walt Disney"
    }
]

const aphorism = document.querySelector("#aphorism span:first-child");
const author = document.querySelector("#aphorism span:last-child");

const todaysAphorism = aphorisms[Math.floor(Math.random()*aphorisms.length)];

aphorism.innerText = todaysAphorism.aphorism;
author.innerText = todaysAphorism.author;

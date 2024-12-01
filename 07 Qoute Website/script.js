const api_url = "https://api.quotable.io/random";

const quote = document.querySelector("#quote");
const quoteBtn = document.querySelector(".new-btn");
const authorName = document.querySelector("#author");
const tweetBtn = document.querySelector(".tweet-btn");


async function getQuote(url) {
    const response = await fetch(url);
    let data = await response.json();
    quote.innerHTML = data.content;
    authorName.innerHTML = data.author;
}

quoteBtn.addEventListener("click", () => {
    getQuote(api_url);
});


tweetBtn.addEventListener("click", () => {
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "---- by " + authorName.innerHTML, "Tweet Window", "width=600, height=600");
});
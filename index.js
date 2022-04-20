
const url = "https://friends-quotes-api.herokuapp.com/quotes";

const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.getElementById("btn");

btn.addEventListener("click", getQuote);

function getQuote(){
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        const index=Math.floor((Math.random() *data.length));
        console.log(index);
          quote.innerHTML=`"${data[index].quote}"`;
          author.innerHTML= data[index].character;

    });

}
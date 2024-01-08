// Import stylesheets
import './style.css';

// Write Javascript code!


 const mygrey = document.querySelector("#grey");

 
mygrey.addEventListener('click', function () {
  const x = Math.floor(Math.random() * 256);
  const y = Math.floor(Math.random() * 256);
  const z = Math.floor(Math.random() * 256);
  const mybg ='rgb('+x+','+y+','+z+')';
   console.log(mybg);
  document.body.style.backgroundColor = mybg;
document.querySelector("body").style.backgroundColor = mybg;
});

const maindiv=document.querySelector("#app");
const myred=document.querySelector("#red");
myred.addEventListener("click",function(){

  const quotes = [
    {
        quote: "Do not pity the dead, Harry. Pity the living, and, above all those who live without love.",
        author: "Albus Dumbledore"
    },
    {
        quote: "It is impossible to manufacture or imitate love",
        author: "Horace Slughorn"
    },
    {
        quote: "Being different isn't a bad thing. I mean that you are brave enough to be yourself.",
        author: "Luna Lovegood"
    },
    {
        quote: "If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals.",
        author: "Sirius Black"
    },
    {
        quote: "Never trust anything that can think for itself if you can’t see where it keeps its brain.",
        author: "Arthur Weasley"
    },
    {
        quote: "Every human life is worth the same, and worth saving.",
        author: "Kingsley Shacklebolt"
    },
    {
        quote: "Have a biscuit, Potter.",
        author: "Minerva McGonagall"
    },
    {
        quote: "Happiness can be found even in the darkest of times if one only remembers to turn on the light.",
        author: "Albus Dumbledore"
    },
    {
        quote: "Socks are Dobby’s favorite, favorite clothes, sir!",
        author: "Dobby"
    }
  ];
  const newred=quotes[Math.floor(Math.random()*quotes.length)];
  maindiv.innerHTML = `<h1>${newred.quote}</h1><h2>- ${newred.author}</h2>`;
  maindiv.style.color="white";
})




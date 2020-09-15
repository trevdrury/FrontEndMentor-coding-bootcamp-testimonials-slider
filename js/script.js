const quotes = [
  {
    name: "Tanya Sinclair",
    title: "UX Engineer",
    quote: `“ I’ve been interested in coding for a while but never taken the jump, until now. 
              I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
              excited about the future. ”`,
    imageURL: "../assets/image-tanya.jpg"
  },
  {
    name: "John Tarkpor",
    title: "Junior Front-End Developer",
    quote: `“ If you want to lay the best foundation possible I’d recommend taking this course. 
              The depth the instructors go into is incredible. I now feel so confident about 
              starting up as a professional developer. ”`,
    imageURL: "../assets/image-john.jpg"
  }
];

const prev = document.getElementById('prev');
const next = document.getElementById('next');

const quote = document.getElementById('quote');
const name = document.getElementById('name');
const title = document.getElementById('title');
const image = document.getElementById('img');

let index = 0;

prev.addEventListener('click', function(e) {
  if (index === 0) {
    index = quotes.length;
  }

  quote.innerHTML = quotes[index-1].quote;
  name.innerHTML = quotes[index-1].name;
  title.innerHTML = quotes[index-1].title;
  image.src = quotes[index-1].imageURL;
 
  index--;
});

next.addEventListener('click', function(e) {
  if (index === quotes.length - 1) {
    index = -1;
  }

  quote.innerHTML = quotes[index+1].quote;
  name.innerHTML = quotes[index+1].name;
  title.innerHTML = quotes[index+1].title;
  image.src = quotes[index+1].imageURL;

  index++;
});
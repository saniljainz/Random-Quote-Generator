let btn = document.getElementById("btn");
let output = document.getElementById("output");
let quote = [
  `"We grow fearless when we do the things we fear." - Robin Sharma.`,
  `"And, when you want something, all the universe conspires in helping you to achieve it." - Paulo Coelho, 'The Alchemist'.`,
  `"When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one which has been opened for us." - Helen Keller.`,
  `"If you hear a voice within you say 'you cannot paint,' then by all means paint and that voice will be silenced." - Vincent Van Gogh.`,
  ` "Impossible is just an opinion." - Paulo Coelho.`,
];

btn.addEventListener("click", function () {
  var randomQuote = quote[Math.floor(Math.random() * quote.length)];
  output.innerHTML = randomQuote;
});

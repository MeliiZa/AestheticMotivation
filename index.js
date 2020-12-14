(function () {
  var quotes = [
    {
      quote:
        "YOU CAN DO ANYTHING BUT NOT EVERYTHING",
      author: "",
    },
    {
      quote: "WHAT'S STOPPING YOU?",
      author: "",
    },
    {
      quote:
        "EVERY DAY IS A FRESH START",
      author: "",
    },
    { quote: "STAY POSITIVE.", author: "" },
    {
      quote:
        "YOU ARE SO LOVED",
      author: "",
    },
    {
      quote:
        "SUCCESS IS A SERIES OF SMALL WINS",
      author: "",
    },
    {
      quote:
        "DO IT NOW YOU WILL THANK YOURSELF LATER",
      author: "",
    },
    {
      quote:
        "BIG IDEAS HAVE SMALL BEGINNINGS",
      author: "",
    },
    {
      quote:
        "THE HAPPINESS OF YOUR LIFE DEPENDS ON THE QUALITY OF YOUR THOUGHTS",
      author: "",
    },
  ];
  function chooseRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  window.onload = function () {
    
    var randomQuote = chooseRandom(quotes);

    document.getElementById("quote").innerHTML = randomQuote.quote;
    document.getElementById("author").innerHTML =
       randomQuote.author;
    document.getElementById("quote").className = "move";
    document.getElementById("author").className = "move";
  };
})();
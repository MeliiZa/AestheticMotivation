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
        "DO IT NOW. YOU WILL THANK YOURSELF LATER",
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
    {
      quote:
        "CELEBRATE EVERY TINY VICTORY",
      author: "",
    },
    {
      quote:
        "BE AFRAID AND DO IT ANYWAY",
      author: "",
    },
    {
      quote:
        "YOU ARE DOING WONDERFUL DARLING",
      author: "",
    },
    {
      quote:
        "GIVE YOURSELF MORE CREDIT",
      author: "",
    },
    {
      quote:
        "DO IT FOR YOUR FUTURE SELF",
      author: "",
    },
    {
      quote:
        "SEEK WHAT SETS YOUR SOUL ON FIRE",
      author: "",
    },
    {
      quote:
        "IT'S OKAY TO NOT HAVE IT FIGURED OUT YET",
      author: "",
    },
    {
      quote:
        "RELAX YOU WILL BE OKAY",
      author: "",
    },
    {
      quote:
        "THE SECRET OF YOUR FUTURE IS HIDDEN IN YOUR DAILY ROUTINE",
      author: "",
    },
    {
      quote:
        "TRUST YOUR GUT, SHE KNOWS BEST",
      author: "",
    },
    {
      quote:
        "STOP TRYING TO CALM THE STORM. CALM YOURSELF. THE STORM WILL PASS.",
      author: "",
    },
    {
      quote:
        "IF YOU'RE MAKING MISTAKES IT MEANS YOU'RE TRYING.",
      author: "",
    },
    {
      quote:
        "REMEMBER WHY YOU STARTED",
      author: "",
    },
    {
      quote:
        "SOMETIMES IT'S HAVING THE FEAR AND MOVING FORWARD ANYWAYS.",
      author: "",
    },
    {
      quote:
        "IT'S A SLOW PROCESS, BUT QUITTING WON'T SPEED IT UP.",
      author: "",
    },
    {
      quote:
        "VISUALISE YOUR HIGHEST SELF. START SHOWING UP AS HER.",
      author: "",
    },
    {
      quote:
        "ACT LIKE THE PERSON YOU WANT TO BECOME.",
      author: "",
    },
    {
      quote:
        "YOU ARE THE FUTURE.",
      author: "",
    },
    {
      quote:
        "REMEMBER YOUR WORDS CAN PLANT GARDENS OR BURN WHOLE FOREST DOWN.",
      author: "",
    },
    {
      quote:
        "STOP WORRYING ABOUT THE FUTURE. LIVE IN THE NOW.",
      author: "",
    },
    {
      quote:
        "KEEP IT SIMPLE.",
      author: "",
    },
    {
      quote:
        "MAKE IT HAPPEN.",
      author: "",
    },
    {
      quote:
        "SMALL PROGRESS IS STILL PROGRESS.",
      author: "",
    },
    {
      quote:
        "ONE THING AT A TIME.",
      author: "",
    },
    {
      quote:
        "THE FUTURE DEPENDS ON WHAT YOU DO TODAY.",
      author: "",
    },
    {
      quote:
        "WE CANNOT BECOME WHAT WE WANT BY REMAINING WHAT WE ARE.",
      author: "",
    },
    {
      quote:
        "STOP DOUBTING YOURSELF.",
      author: "",
    },
    {
      quote:
        "YOUR POTENTIAL IS INFINITE.",
      author: "",
    },
    {
      quote:
        "IT WILL ALL MAKE SENSE EVENTUALLY.",
      author: "",
    },
    {
      quote:
        "OLD WAYS WON'T OPEN NEW DOORS.",
      author: "",
    },    {
      quote:
        "MISTAKES ARE PROOF THAT YOU ARE TRYING.",
      author: "",
      
    },
    {
      quote:
        "YOU ARE ENOUGH.",
      author: "",
      
    },
    {
      quote:
        "YOU ARE MORE RESILIENT THAN YOU THINK.",
      author: "",
      
    },
    {
      quote:
        "BE BRAVE ENOUGH TO SUCK AT SOMETHING NEW.",
      author: "",
      
    },
    {
      quote:
        "YOU HAVE ENDURED SO MUCH, AND LOOK AT YOU ARE STILL HERE.",
      author: "",
      
    },    
    {
      quote:
        "EVERY STORM RUNS OUT OF RAIN.",
      author: "MAYA ANGELOU",
      
    },
    {
      quote:
        "YOU ARE FORGETTING HOW FAR YOU HAVE COME.",
      author: "",
      
    },
    {
      quote:
        "WHEN A FLOWER DOESNT BLOOM YOU FIX THE ENVIRONMENT IN WHICH IT GROWS, NOT THE FLOWER.",
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
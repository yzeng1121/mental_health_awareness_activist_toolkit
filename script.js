/* .js files add interaction to your website */
var methodsList = [
  "Put on a 10-15 minute timer and journal about what's been bothering you!", // 0
  "Search up a guided breathing exercise/meditation on YouTube!", // 1
  "How about trying a new hobby you've never thought of before?", // 2
  "If the weather is nice, how about going on a nice walk outside? You can listen to a podcast, audiobook, or your own playlist!", // 3
  "Here's a fun exercise: make a list of ten things you're thankful for!", // 4
  "Take a break and designate a day for total self-care! Whether that is watching your favorite movie or doing everything you want to do, do it!" // 5
];
var methods = document.getElementById("methods");
var myButton = document.getElementById("myButton");
var count = 0;
  
btn.addEventListener("click", displayMessage);

function displayMessage() {
  methods.innerHTML = methodsList[count];
  if (count == 5) {
    count = -1;
  }
  count++;
}
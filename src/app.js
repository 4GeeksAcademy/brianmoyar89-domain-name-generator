import "./style.css";
var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["jogger", "racoon"];
var extensions = [".com", ".es", ".net", ".us", ".io"];

var generateBtn = document.getElementById("generateBtn");
var domainList = document.getElementById("domainList");
var counter = 1;

generateBtn.addEventListener("click", generateDomain);

function generateDomain() {
  var randomPronoun = pronoun[Math.floor(Math.random() * pronoun.length)];
  var randomAdj = adj[Math.floor(Math.random() * adj.length)];
  var randomNoun = noun[Math.floor(Math.random() * noun.length)];
  var randomExtension =
    extensions[Math.floor(Math.random() * extensions.length)];

  var domain =
    counter + ". " + randomPronoun + randomAdj + randomNoun + randomExtension;
  var listItem = document.createElement("li");
  listItem.textContent = domain;
  domainList.appendChild(listItem);

  counter++;
}

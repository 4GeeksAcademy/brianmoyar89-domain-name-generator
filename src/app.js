import "./style.css";
var pronoun = ["the", "our"];
var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["jogger", "racoon"];
var extensions = [".com", ".net", ".us", ".io", ".es"];

var generatorButton = document.getElementById("domain-generator");
var domainContainer = document.getElementById("domain-container");

generatorButton.addEventListener("click", generateDomain);

function generateDomain() {
  var randomPronoun = pronoun[Math.floor(Math.random() * pronoun.length)];
  var randomAdj = adj[Math.floor(Math.random() * adj.length)];
  var randomNoun = noun[Math.floor(Math.random() * noun.length)];
  var randomExtension =
    extensions[Math.floor(Math.random() * extensions.length)];

  var domain = randomPronoun + randomAdj + randomNoun + randomExtension;

  var domainElement = document.createElement("div");
  domainElement.textContent = domain;

  domainContainer.innerHTML = "";
  domainContainer.appendChild(domainElement);
}

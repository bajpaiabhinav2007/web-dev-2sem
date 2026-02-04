let newparagraph = document.createElement("p");
newparagraph.textContent = "this is anew paragraph created by js";
console.dir(newparagraph);

let conatainer = document.getElementById("content");
conatainer.appendChild(newparagraph);

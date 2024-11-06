function alertFunction() {
    alert("YAY! YOU DID IT!");
}

const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const paragraph = document.createElement("p");
paragraph.textContent = "Hey Im red!";

const header = document.createElement("h3");
header.textContent = "Im a blue h3";

const contentContainer = document.createElement("div");
contentContainer.style.borderColor = "#000000"
contentContainer.style.backgroundColor = "#578492"

const header1 = document.createElement("h1");
header1.textContent = "Im in a div";

const para1 = document.createElement("p");
para1.textContent = "ME TOO!"

container.appendChild(content);
container.appendChild(paragraph);
container.appendChild(header);

contentContainer.appendChild(header1);
contentContainer.appendChild(para1);

container.appendChild(contentContainer);

const btn = document.querySelector("#btn");
btn.addEventListener("click", alertFunction);

btn.addEventListener("click", function (e) { //function e is a callback that references the event node
    e.target.style.background = "blue";
});


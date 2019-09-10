const size = Number(prompt("What size grid?"));
const container = document.querySelector("#container");
for (let i = 0; i < Math.pow(size, 2); i++){
    const div = document.createElement("div");
    div.classList.add("grid");
    div.setAttribute("style", `border: 1px solid black; float: left; width: ${percentage(size)}%; height: ${percentage(size)}%`);
    container.appendChild(div);
}
const gridDiv = document.querySelectorAll("div.grid");
gridDiv.forEach((div) => {
    div.addEventListener("mouseover", (e) => {
        e.target.classList.add("black");
    });
});


const button = document.querySelector("#clear");


button.addEventListener("click", () => {
    gridDiv.forEach((div) => {
        div.classList.remove("black");
    });
});

function percentage(number){
    return ((1/number) * 100) - 1;
}
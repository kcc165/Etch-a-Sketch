const size = Number(prompt("What size grid?"));
const container = document.querySelector("#container");
for (let i = 0; i < Math.pow(size, 2); i++){
    const div = document.createElement("div");
    div.classList.add("grid");
    div.setAttribute("style", `border: 1px solid black; float: left; width: ${percentage(size)}%; height: ${percentage(size)}%`);
    container.appendChild(div);
}
container.addEventListener("mouseover", (e) => {
    console.log(e.target);
    e.target.style.backgroundColor = "black";
    
    
});

function percentage(number){
    return ((1/number) * 100) - 1;
}
// created element using append child 


function fun() {
    let child1 = document.createElement("div");
    let child2 = document.createElement("button");
    let parent1 = document.createElement("div");


    let a = document.querySelector("#input").value;
    let b = document.querySelector("#input2").value;

    parent1.style.display = 'flex';
    parent1.style.justifyContent = 'space-between';
    parent1.style.marginBottom = '4px';

    child1.textContent = a + " @" + b;
    child2.textContent = 'delete';

    parent1.appendChild(child1);
    parent1.appendChild(child2);


    let increment = document.querySelector("#increment");

    increment.appendChild(parent1);

}
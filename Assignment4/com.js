let cntr_l = 0;
let cntr_d = 0;

function like() {

    let element_l = document.querySelector("#like");

    cntr_l++;
    element_l.innerHTML = 'like' + cntr_l;
}

function dislike() {

    let element_d = document.querySelector("#dislike");

    cntr_d++;
    element_d.innerHTML = 'dislike' + cntr_d;
}
function comment() {
    let comm = document.querySelector("#comment").value;

    let child = document.querySelector("#id2").cloneNode(true);
    child.innerHTML = comm;

    let parent = document.querySelector("#id1");

    parent.insertBefore(child, parent.firstChild);


}
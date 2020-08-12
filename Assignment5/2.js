// created element using clone 

function fun() {

    let a = document.querySelector("#input").value;
    let b = document.querySelector("#input2").value;

    let new_element = document.querySelector("#id3").cloneNode(true);

    let main_element = document.querySelector("#id2");

    new_element.children[0].textContent = a + " " + b;
    new_element.style.visibility = 'visible';

    if (a + b != "") {
        main_element.insertBefore(new_element, main_element.firstChild);
    }

    document.querySelector("#input").value = "";
    document.querySelector("#input2").value = "";


}

function delete_com(laxu) {
    laxu.parentElement.remove();
}
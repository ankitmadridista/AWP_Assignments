function like(temp) {

    let likeCount = Number(temp.children[0].innerHTML);
    //console.log(likeCount);
    likeCount++;
    //console.log(likeCount);
    temp.children[0].innerHTML = likeCount;

}

function comment(temp) {


    let content = temp.parentElement.parentElement.children[1].children[0].value;
    //console.log(x);
    content = content.trim();
    if (content == "") {
        return;
    }

    let comCount = Number(temp.children[0].innerHTML);
    //console.log(comCount);
    comCount++;
    //console.log(comCount);
    temp.children[0].innerHTML = comCount;


    let display = temp.parentElement.parentElement.nextElementSibling.children[0];

    let clone_element = display.cloneNode(true);
    //    console.log(clone_element);

    clone_element.style.visibility = "visible";
    clone_element.children[0].innerHTML = content;

    temp.parentElement.parentElement.nextElementSibling.insertBefore(clone_element, commentbox.firstChild);
    //commentbox.insertBefore(clone_element, commentbox.firstChild)

    temp.parentElement.parentElement.children[1].children[0].value = "";

}

function del(temp) {



    let commCount = Number(temp.parentElement.parentElement.parentElement.parentElement.children[2].children[2].children[0].children[0].innerHTML);

    let new_comCount = commCount - 1;

    if (new_comCount == 0) {
        temp.parentElement.parentElement.parentElement.parentElement.children[2].children[2].children[0].children[0].innerHTML = "";
    }
    else {
        temp.parentElement.parentElement.parentElement.parentElement.children[2].children[2].children[0].children[0].innerHTML = new_comCount;
    }
    //console.log(new_comCount);

    let x = temp.parentElement.parentElement;
    //console.log(x);
    x.remove();
}
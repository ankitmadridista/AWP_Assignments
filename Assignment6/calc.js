function get_btn(btn) {

    let temp = document.querySelector("#display").value;

    document.querySelector("#display").value = temp + btn;
}

function calc() {

    let temp = document.querySelector("#display").value;
    if (temp == "") {
        return
    }
    document.querySelector("#display").value = eval(temp);
}

function clr() {

    document.querySelector("#display").value = "";
}



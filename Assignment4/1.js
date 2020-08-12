function sum() {
    let a = Number(document.querySelector("#first").value);
    let b = Number(document.querySelector("#second").value);
    let c = a + b;
    console.log(c);
    document.querySelector("#value").value = c;
}
function sub() {
    let a = Number(document.querySelector("#first").value);
    let b = Number(document.querySelector("#second").value);
    let c = a - b;
    console.log(c);
    document.querySelector("#value").value = c;
}
function mul() {
    let a = Number(document.querySelector("#first").value);
    let b = Number(document.querySelector("#second").value);
    let c = a * b;
    console.log(c);
    document.querySelector("#value").value = c;
}
function div() {
    let a = Number(document.querySelector("#first").value);
    let b = Number(document.querySelector("#second").value);
    let c = a / b;
    console.log(c);
    document.querySelector("#value").value = c;
}
function mod() {
    let a = Number(document.querySelector("#first").value);
    let b = Number(document.querySelector("#second").value);
    let c = a % b;
    console.log(c);
    document.querySelector("#value").value = c;
}
function add() {
    let count = document.getElementsByClassName(".counting").innerText;
    count++;
    document.getElementsByClassName(".counting").innerText = count;
}
function sub() {
    let count = document.getElementsByClassName(".counting").innerText;
    count--;
    document.getElementsByClassName(".counting").innerText = count;
}

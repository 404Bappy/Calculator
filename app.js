var result = document.getElementById("result");

function numShow(num) {
    result.value += num;
}
function crlAll() {
    result.value = "";
}

function calculate() {
    let x = eval(result.value);
    result.value = x;
}
function del() {
    result.value = result.value.slice(0, -1);
}
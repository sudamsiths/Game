let systemNumber = 10;
function printMethod() {
    let txt1 = Number(document.getElementById("txt1").value);
    
    if (txt1 == systemNumber) {
        document.getElementById("txt").innerText = "Congratulations! You Won";
    } else if (txt1 < systemNumber) {
        document.getElementById("txt").innerText = "Less Than System Number";
    } else {
        document.getElementById("txt").innerText = "Greater Than System Number";
    }
}
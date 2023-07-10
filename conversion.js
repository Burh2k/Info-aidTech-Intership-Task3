function convert_F() {
    var temp1 = parseFloat(document.getElementById("fahrenheit").value);
    let cel = (temp1 - 32) * (5 / 9);
    document.getElementById("celsius").value = cel.toFixed(2);
    let kel = (temp1 - 32) * (5 / 9) + 273.15;
    document.getElementById("kelvin").value = kel.toFixed(2);
}
function convert_C() {
    var temp2 = parseFloat(document.getElementById("celsius").value);
    let fah = (temp2 * 9 / 5) + 32;
    document.getElementById("fahrenheit").value = fah.toFixed(2);
    let kel = temp2 + 273.15;
    document.getElementById("kelvin").value = kel.toFixed(2);
}
function convert_K() {
    var temp3 = parseFloat(document.getElementById("kelvin").value);
    let cel = temp3 - 273.15;
    document.getElementById("celsius").value = cel.toFixed(2);
    let kel = (temp3 - 273.15) * 9 / 5 + 32;
    document.getElementById("fahrenheit").value = kel.toFixed(2);
}
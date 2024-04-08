function binaryToDecimal() {
    var binaryInput = document.getElementById("binaryInput").value;
    var decimalOutput = document.getElementById("decimalOutput");
    // Převod binárního čísla na desítkové
    var decimal = parseInt(binaryInput, 2);
    // Výstup desítkového čísla
    decimalOutput.textContent = "Desítkové číslo: " + decimal;
}
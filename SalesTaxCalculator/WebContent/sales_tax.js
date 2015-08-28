var $ = function (id) {	// Get the element by ID and store it to variable $
    return document.getElementById(id); 
}

var calculate_click = function () {
	var subtotal = parseFloat($("subtotal").value);
	var taxRate = parseFloat($("taxRate").value);
	
	$("salesTax").value = "";
	$("total").value = "";
	
	if (isNaN(subtotal) || subtotal <= 0) {
		alert("Subtotal must be a positive number!");
	} else if (isNaN(taxRate) || taxRate < 0) {
		alert("Tax rate must be a positive number!");
	} else {
		var salesTax = subtotal * taxRate / 100;
		salesTax = parseFloat(salesTax.toFixed(2));
		var total = subtotal + salesTax;
		$("salesTax").value = salesTax;
		$("total").value = total.toFixed(2);
	}
}

window.onload = function () {
	 $("calculate").onclick = calculate_click;	// Do the function when the button is clicked.
	 $("subtotal").focus();	// Select the subtotal text box automatically when the window is loaded.
}
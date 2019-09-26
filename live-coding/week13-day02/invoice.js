function Invoice(item) {
	this.currencySymbol = "INR";
	this.currencyCode = "INR";
	this.invoiceTotal = 0;
	this.taxAmount = 0;
	this.itemCount = 0;
	this.totalInWords = 'Zero only';
	this.items = items;
	this.invoiceURL = null;
}

Invoice.prototype.calculateTax = function() {
	// Iterate through all the items and callucate the tax 
	// On every calculation, update the taxAmount property

	return this.taxAmount;
}

Invoice.prototype.getTotalAmountWithoutTax = function() {
	return this.invoiceTotal - this.taxAmount;
}

Invoice.prototype.retrieveItems = function() {
	return this.items;
}

Invoice.prototype.addItem = function(itemCode, quantity) {
	// Retrieve the item from database
	/**
		item = {
			itemCode: "ITEM003",
			itemName: "Orange juice",
			amount: 100,
			currency: "INR",
			availability: {
				inStock: 20
			},
			tax: 18
		}
	*/

	this.items.push(item);
}

Invoice.prototype.deleteItem = function() {
	var index = findTheIndex;

	delete this.items[index];
}

Invoice.prototype.modifyItem = function(quantity) {
	var index = findTheIndex;

	var item = this.items[index];

	if(quantity != item.quantity) {
		item.quantity = quantity;	
	}

	this.items[index] = item;
}

Invoice.prototype.generatePDF = function() {
	// Call some third party services to generate invoice PDF file

	// Call API with some data

	// Store the invoice file URL in database

	return this.invoiceURL;
}

Invoice.prototype.generateFinalInvoice = function() {
	this.addItem("ITEM0003", 10);
	this.calculateTax();

	return this.invoiceURL;
}

var items = ["ITEM003", "ITEM0087"];
var invoice = new Invoice(items);
var finalInvoice = invoice.generateFinalInvoice();
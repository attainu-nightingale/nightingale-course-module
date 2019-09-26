class Invoice {
	constructor(items) {
		this.currencySymbol = "INR";
		this.currencyCode = "INR";
		this.invoiceTotal = 0;
		this.taxAmount = 0;
		this.itemCount = 0;
		this.totalInWords = 'Zero only';
		this.items = items;
		this.invoiceURL = null;
	}

	static info() {
		return `This class is used to generate Invoice.
		It has methods:
			- calculateTax
			- getTotalAmountWithoutTax
			- retrieveItems
			- addItem
			- deleteItem
			- modifyItem
			- generatePDF
			- generateFinalInvoice

		The final result will be the Invoice URL which will basically be a file with all the invoice and items with tax, and relevant totals.

		`
	}

	calculateTax() {
		// Iterate through all the items and callucate the tax 
		// On every calculation, update the taxAmount property

		console.log("Calculating taxes..")

		return this.taxAmount;
	}

	getTotalAmountWithoutTax() {
		return this.invoiceTotal - this.taxAmount;
	}

	retrieveItems() {
		console.log("Initiating purchase for the following items: ", this.items.join(", "))
		return this.items;
	}

	addItem(itemCode, quantity) {
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

	deleteItem() {
		var index = findTheIndex;

		delete this.items[index];
	}

	modifyItem(quantity) {
		var index = findTheIndex;

		var item = this.items[index];

		if(quantity != item.quantity) {
			item.quantity = quantity;	
		}

		this.items[index] = item;
	}

	generatePDF() {
		// Call some third party services to generate invoice PDF file

		// Call API with some data

		// Store the invoice file URL in database
		console.log("Generating invoice PDF file..");
		this.invoiceURL = "SOME_URL_TO_INVOICE_FILE";

		return this.invoiceURL;
	}

	generateFinalInvoice() {
		this.retrieveItems();
		this.calculateTax();
		this.generatePDF();

		return this.invoiceURL;
	}
}

class Subscription extends Invoice {
	constructor(subscriptionCode, userID) {
		super([subscriptionCode]); // Calls the constructor of Parent class

		this.subscriptionCode = subscriptionCode || "NETFLIX006";
		this.duration = subscriptionCode ? 1: 6; // in months
		this.amount = subscriptionCode ? 200: 1200;
		this.currencyCode = "INR";
		this.maxUsers = subscriptionCode ? 1: 2;
		this.userID = userID;
		this.users = [];

		if(!this.userID) {
			throw new Error("User ID is required to make a purchase");
		}
	}

	purchase() {
		// Create an invoice
		// Activate the subscription for user


		this.generateFinalInvoice();
		this.activateSubscription();
		this.sendEmail();

		console.log("Invoice has been successfully generated: "+ this.invoiceURL);
	}

	activateSubscription() {
		// Make some changes in the database
		console.log(`Activating subscription for user ${this.userID} and for following details:
			Subscription code: ${this.subscriptionCode}
			Duration: ${this.duration} months
			Amount: ${this.currencyCode} ${this.amount}
			Max Users: ${this.maxUsers}`);
	}

	sendEmail() {
		// Send an email to user stating that the subscription
		// purchase was successful

		console.log("Sending email to user..");
	}

	set user(user) {
		this.users.push(user);
	}

	get user() {
		var str = "Available users: ";

		return str + this.users.toString();
	}
}

var subscription = new Subscription("NETFLIX001", "iamcrazycoder"); // 1 month

// subscription.purchase();

subscription.user = "Nishant"

console.log(subscription.user);


function name(s) {
	
	// Splitting word into letters and storing in Array
	var letters = s.split('');

	// Creating two Arrays for Vowels and Consonants
	var vowelHaystack = ['a', 'e', 'i', 'o', 'u'], vowels = [], consonants = [];

	// Loop through the letters to match for vowels and consonants
	letters.forEach(function(letter) {
		vowelHaystack.indexOf(letter.toLowerCase()) > -1 ? vowels.push(letter): consonants.push(letter);
	});


	//Now merging Vowels to Consonants to show vowels first and then consonants
	var finalArray = vowels.concat(consonants);

	// Printing the arrays
	console.log("Vowels: ",vowels);
	console.log("Consonants: ",consonants);
	console.log("Final Array: ",finalArray);

	//let's print the final array
	finalArray.forEach(function(element) {
		console.log(element);
	});
}

name("Nishant");
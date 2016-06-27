var claim1 = new Claim("John Doe", "Specialist", 1100);

var claim2 = new Claim("Jane Doe", "Optical", 100);

var claim3 = new Claim("Joe Johnson", "Emergency", 31000);

var claim4 = new Claim("Sharon Smith", "Emergency", 1300);

var claim5 = new Claim("Steve Wright", "Primary Care", 770);

var initialList = [claim1, claim2, claim3, claim4, claim5]

var totalPayedOut = 0;

function Claim(name, type, cost){
	this.patientName = name;
	this.visitType = type;
	this.visitCost = cost;
}

//function to determine percent covered
function getPercent(theClaim) {
	var type = theClaim.visitType;
	var percentCovered = null;

	switch(type) {
		case "Optical":
			percentCovered = 0.0;
			break;
		case "Specialist":
			percentCovered = 0.1;
			break;
		case "Primary Care":
			percentCovered = 0.5;
			break;
		case "Emergency":
			percentCovered = 1;
		default:
	}
	return percentCovered;
}
//function to determine amount covered
function getAmount(theClaim) {
	var totalCost = theClaim.visitCost;
	var type = theClaim.visitType;
	var percentCovered = getPercent(theClaim);
	var totalPayedOut = percentCovered * totalCost;
	console.log("Paid out $" + totalPayedOut + " for " + type);
};

getAmount(claim1);
getAmount(claim2);
getAmount(claim3);
getAmount(claim4);
getAmount(claim5);
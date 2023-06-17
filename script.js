class Investor {
	constructor(id, name, link, tradesDay, strategyEfficiency, tradeAmount, highestTradeAmount, gainPercentage, lossPercentage) {
		this.id = id;
		this.name = name;
		this.link = link;
		this.tradesDay = tradesDay;
		this.strategyEfficiency = strategyEfficiency;
		this.tradeAmount = tradeAmount;
		this.highestTradeAmount = highestTradeAmount;
		this.gainPercentage = gainPercentage;
		this.lossPercentage = lossPercentage;
	}
}

let investors = [
	//(id, name, link, tradesDay, strategyEfficiency, tradeAmount, highestTradeAmount, gainPercentage, lossPercentage) 
	new Investor(1, "Lucas", "www.lucas.com", 4.61, 92.69, 8, 1000, 7, -10),
	new Investor(2, "XYZ", "www.xyz.com", 10, 93, 5, 1000, 8, -30)
];




const calculateTrades = () => {

	
let investment = parseFloat(document.getElementById("investment").value);
let tradesDay = parseFloat(document.getElementById("tradesDay").value);
let strategyEfficiency = parseFloat(document.getElementById("strategyEfficiency").value) / 100;
let tradeAmount = parseFloat(document.getElementById("tradeAmount").value) / 100;
let highestTradeAmount = parseFloat(document.getElementById("highestTradeAmount").value);
let gainPercentage = parseFloat(document.getElementById("gainPercentage").value) / 100;
let lossPercentage = -parseFloat(document.getElementById("lossPercentage").value) / 100;
let investmentGoal = parseFloat(document.getElementById("investmentGoal").value);

	let numTrade = 0;
	let highestAmount = investment;
	let result;
	let trades = [];

	const getTradeAmount = () => {
		let _tradeAmount = tradeAmount * investment;
		let actualTradeAmount = Math.min(_tradeAmount, highestTradeAmount);
		return actualTradeAmount;
	};



	const arrayTrades = () => {

		while (investment <= investmentGoal && investment > 0) {
			let tradeResult = Math.random() < strategyEfficiency ? gainPercentage * getTradeAmount() : lossPercentage * getTradeAmount() // avalia se o resultado do trade é ganho ou perda aleatoriamente dentro da efiiciencia da estrategia

			investment += tradeResult;
			highestAmount = Math.max(highestAmount, investment);


			trades.push(tradeResult);
			numTrade++;
		}
		return trades
	}

	arrayTrades()




	document.getElementById("investmentGoalOutput").textContent = "Highest Amount Reached: USD " + Math.floor(highestAmount);

	document.getElementById("title").textContent = 'Journey to USD ' + investmentGoal;
	document.getElementById("numTradesOutput").textContent = "Number of Trades: " + numTrade;
	document.getElementById("yearsOutput").textContent = "Number of years to achieve the goals: " + (numTrade / tradesDay / 252);



	console.log("==========Statistics===========");
	console.log("You total invesment:", highestAmount);
	console.log("Number of trades:", numTrade);
	console.log("Number of years", numTrade / tradesDay / 252);
}


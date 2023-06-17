let investment = 2000; // Initial investment
let tradesDay = 7; // Trades per day
let strategyEfficiency = 0.8; // Win rate
let TradeInvestment = 0.05; // Percentage of investment in each trade
let HighestTradeAmount = 50000;
let investmentGoal = 1000000;

let numTrade = 0;
let highestAmount = investment;
let result;
let trades = [];

const getTradeAmount = () => {
  let tradeAmount = TradeInvestment * investment;
  let actualTradeAmount = Math.min(tradeAmount, HighestTradeAmount);
  return actualTradeAmount;
};

const tradeStgResult = () => {
  if (Math.random() < strategyEfficiency) {
    result = 0.08 * getTradeAmount();
  } else {
    result = -0.30 * getTradeAmount();
  }
  return result;
};

console.log("============Trades and results============");

do {
  result = tradeStgResult();
  const actualTradeAmount = getTradeAmount();
  investment += result;

  if (investment > highestAmount) {
    highestAmount = investment;
  }

  trades.push(result);
  numTrade++;

  switch (numTrade) {
    case tradesDay * 252:
      console.log("-----Total in 1 year: USD ", Math.floor(investment));
      break;
    case tradesDay * 252 * 2:
      console.log("-----Total in 2 years: USD ", Math.floor(investment));
      break;
    case tradesDay * 252 * 3:
      console.log("-----Total in 3 years: USD ", Math.floor(investment));
      break;
    case tradesDay * 252 * 4:
      console.log("-----Total in 4 years: USD ", Math.floor(investment));
      break;
    case 10:
      console.log(
        "10th trade: Traded USD",
        actualTradeAmount,
        "=> Result: USD",
        result
      );
      break;
    case 50:
      console.log(
        "50th trade: Traded USD",
        actualTradeAmount,
        "=> Result: USD",
        result
      );
      break;
    case 100:
      console.log(
        "100th trade: Traded USD",
        actualTradeAmount,
        "=> Result: USD",
        result
      );
      break;
    case 500:
      console.log(
        "500th trade: Traded USD",
        actualTradeAmount,
        "=> Result: USD",
        result
      );
      break;
    case 750:
      console.log(
        "750th trade: Traded USD",
        actualTradeAmount,
        "=> Result: USD",
        result
      );
      break;
    case 1000:
      console.log(
        "1000th trade: Traded USD",
        actualTradeAmount,
        "=> Result: USD",
        result
      );
      break;
    case 1500:
      console.log(
        "1500th trade: Traded USD",
        actualTradeAmount,
        "=> Result: USD",
        result
      );
      break;
    case 2000:
      console.log(
        "2000th trade: Traded USD",
        actualTradeAmount,
        "=> Result: USD",
        result
      );
      break;
    case 2500:
      console.log(
        "2500th trade: Traded USD",
        actualTradeAmount,
        "=> Result: USD",
        result
      );
      break;
    case 3000:
      console.log(
        "3000th trade: Traded USD",
        actualTradeAmount,
        "=> Result: USD",
        result
      );
      break;
    case 5000:
      console.log(
        "5000th trade: Traded USD",
        actualTradeAmount,
        "=> Result: USD",
        result
      );
      break;
    case 10000:
      console.log(
        "10000th trade: Traded USD",
        actualTradeAmount,
        "=> Result: USD",
        result
      );
      break;
    default:
      break;
  }
} while (investment <= investmentGoal);

console.log(" ");
console.log(" ");
console.log("==========Statistics===========");
console.log("Highest Amount Reached: USD", Math.floor(highestAmount));
console.log("Number of trades:", numTrade);
console.log("Number of years", numTrade / tradesDay / 252);

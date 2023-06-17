document.addEventListener("DOMContentLoaded", function() {
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

  const calculateTrades = () => {
    investment = parseFloat(document.getElementById("investment").value);
    tradesDay = parseFloat(document.getElementById("tradesDay").value);
    strategyEfficiency = parseFloat(document.getElementById("strategyEfficiency").value);
    TradeInvestment = parseFloat(document.getElementById("tradeInvestment").value);
    HighestTradeAmount = parseFloat(document.getElementById("highestTradeAmount").value);
    investmentGoal = parseFloat(document.getElementById("investmentGoal").value);

    numTrade = 0;
    highestAmount = investment;
    trades = [];

    const consoleOutput = document.getElementById("consoleOutput");
    consoleOutput.textContent = "============Trades and results============\n";

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
          consoleOutput.textContent += `-----Total in 1 year: USD ${Math.floor(investment)}\n`;
          break;
        case tradesDay * 252 * 2:
          consoleOutput.textContent += `-----Total in 2 years: USD ${Math.floor(investment)}\n`;
          break;
        case tradesDay * 252 * 3:
          consoleOutput.textContent += `-----Total in 3 years: USD ${Math.floor(investment)}\n`;
          break;
        case tradesDay * 252 * 4:
          consoleOutput.textContent += `-----Total in 4 years: USD ${Math.floor(investment)}\n`;
          break;
        case 10:
          consoleOutput.textContent += `10th trade: Traded USD ${actualTradeAmount} => Result: USD ${result}\n`;
          break;
        case 50:
          consoleOutput.textContent += `50th trade: Traded USD ${actualTradeAmount} => Result: USD ${result}\n`;
          break;
        case 100:
          consoleOutput.textContent += `100th trade: Traded USD ${actualTradeAmount} => Result: USD ${result}\n`;
          break;
        case 500:
          consoleOutput.textContent += `500th trade: Traded USD ${actualTradeAmount} => Result: USD ${result}\n`;
          break;
        case 750:
          consoleOutput.textContent += `750th trade: Traded USD ${actualTradeAmount} => Result: USD ${result}\n`;
          break;
        case 1000:
          consoleOutput.textContent += `1000th trade: Traded USD ${actualTradeAmount} => Result: USD ${result}\n`;
          break;
        case 1500:
          consoleOutput.textContent += `1500th trade: Traded USD ${actualTradeAmount} => Result: USD ${result}\n`;
          break;
        case 2000:
          consoleOutput.textContent += `2000th trade: Traded USD ${actualTradeAmount} => Result: USD ${result}\n`;
          break;
        case 2500:
          consoleOutput.textContent += `2500th trade: Traded USD ${actualTradeAmount} => Result: USD ${result}\n`;
          break;
        case 3000:
          consoleOutput.textContent += `3000th trade: Traded USD ${actualTradeAmount} => Result: USD ${result}\n`;
          break;
        case 5000:
          consoleOutput.textContent += `5000th trade: Traded USD ${actualTradeAmount} => Result: USD ${result}\n`;
          break;
        case 10000:
          consoleOutput.textContent += `10000th trade: Traded USD ${actualTradeAmount} => Result: USD ${result}\n`;
          break;
        default:
          break;
      }
    } while (investment <= investmentGoal);

    const statisticsOutput = document.getElementById("statisticsOutput");
    statisticsOutput.textContent = "==========Statistics===========\n";
    statisticsOutput.textContent += `Highest Amount Reached: USD ${Math.floor(highestAmount)}\n`;
    statisticsOutput.textContent += `Number of trades: ${numTrade}\n`;
    statisticsOutput.textContent += `Number of years: ${numTrade / tradesDay / 252}\n`;
  };

  const calculateButton = document.getElementById("calculateButton");
  calculateButton.addEventListener("click", calculateTrades);
});

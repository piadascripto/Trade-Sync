import Chart from 'https://cdn.jsdelivr.net/npm/chart.js';

export function createTradeTable(trades) {
	// Get the table body element
	const tableBody = document.querySelector("#trade-table tbody");

	// Iterate over the trades and generate table rows
	for (const trade in trades) {
		if (trades.hasOwnProperty(trade)) {
			const tradeData = trades[trade];
			const row = document.createElement("tr");

			// Create table cells and populate with trade data
			const symbolCell = document.createElement("td");
			symbolCell.textContent = tradeData.Symbol;
			row.appendChild(symbolCell);

			const tradeTypeCell = document.createElement("td");
			tradeTypeCell.textContent = tradeData.TradeType;
			row.appendChild(tradeTypeCell);

			const resultCell = document.createElement("td");
			resultCell.textContent = tradeData.Result;
			row.appendChild(resultCell);

			const tradeResultCell = document.createElement("td");
			tradeResultCell.textContent = tradeData.TradeResult;
			row.appendChild(tradeResultCell);

			const brokerCommissionCell = document.createElement("td");
			brokerCommissionCell.textContent = tradeData.BrokerCommission;
			row.appendChild(brokerCommissionCell);

			const openOrderDateCell = document.createElement("td");
			openOrderDateCell.textContent = tradeData.OpenOrderDate;
			row.appendChild(openOrderDateCell);

			const closeOrderDateCell = document.createElement("td");
			closeOrderDateCell.textContent = tradeData.CloseOrderDate;
			row.appendChild(closeOrderDateCell);

			// Append the row to the table body
			tableBody.appendChild(row);
		}
	}
}

export function createTradeChart(trades) {
	// Get the chart canvas element
	const chartCanvas = document.querySelector("#trade-chart");

	// Extract TradeResult and CloseOrderDate from trades object
	const tradeResults = Object.values(trades).map(trade => trade.TradeResult);
	const closeOrderDates = Object.values(trades).map(trade => trade.CloseOrderDate);

	// Define the colors for bars below and above zero
	const colors = tradeResults.map(result => result < 0 ? 'rgba(255, 0, 0, 0.5)' : 'rgba(0, 128, 0, 0.5)');

	// Create the chart using Chart.js
	new Chart(chartCanvas, {
		type: 'bar',
		data: {
			labels: closeOrderDates,
			datasets: [{
				label: 'Trade Result',
				data: tradeResults,
				backgroundColor: colors,
				borderColor: 'rgba(0, 0, 0, 1)',
				borderWidth: 1
			}]
		},
		options: {
			scales: {
				x: {
					grid: {
						display: false
					}
				},
				y: {
					beginAtZero: true
				}
			}
		}
	});
}

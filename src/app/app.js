import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
	render() {
		const clientStyle = {
			height: "500px"
		};

		var monthlyIncome = 12000.00;
		var monthlyExpense = 4598.00;
		var monthlySavings = monthlyIncome - monthlyExpense;

		return(
			<div style = {clientStyle} class="jumbotron">
				<div class="container">
					<div class="col-md-4">
						<h3>Monthly Income: ₱ {monthlyIncome}</h3>			
					</div>
					<div id="box-shadow" class="col-md-4">
						<h3>Monthly Expense: ₱ {monthlyExpense}</h3>			
					</div>
					<div id="box-shadow" class="col-md-4">
						<h3>Monthly Savings: ₱ {monthlySavings}</h3>			
					</div>
				</div>
			</div>
		);
	}
}

const app = document.getElementById('client');

ReactDOM.render(<Layout />, app);
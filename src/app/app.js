import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
	render() {
		const clientStyle = {
			height: "500px"
		};

		const otherStyle = {
			backgroundColor: "#FF0000",
			color: "#d2d0d0",
			marginTop: "-30px"
		};

		const otherContainerStyle = {
			marginTop: "-20px"
		};

		var monthlyIncome = 12000.00;
		var monthlyExpense = 4598.00;
		var monthlySavings = monthlyIncome - monthlyExpense;

		return(
			<div>
			
				<div class="jumbotron">
					<div class="container">
						<div class="row">
							<div class="col-md-4">
								<h3><i class="fa fa-money"></i> Monthly Income: ₱ {monthlyIncome}</h3>			
							</div>
							<div id="box-shadow" class="col-md-4">
								<h3><i class="fa fa-line-chart"></i> Monthly Expense: ₱ {monthlyExpense}</h3>			
							</div>
							<div id="box-shadow" class="col-md-4">
								<h3><i class="fa fa-credit-card"></i> Monthly Savings: ₱ {monthlySavings}</h3>			
							</div>
						</div>
						<br/>
						<div class="row">
							<div style={{textAlign:"left"}} class="col-md-8">
								<h2>₱esOf Mind</h2>
								<p>was founded in 2017, focusing on the management of income flow giving
								 people the ability to track their own expenses.</p>
							</div>
							<div class="col-md-4">

							</div>
						</div>
						<div class="row">
							<div class="col-md-4">
								
							</div>
							<div style={{textAlign:"right"}} class="col-md-8">
								<h2>₱esOf Mind</h2>
								<p>was founded in 2017, focusing on the management of income flow giving
								 people the ability to track their own expenses.</p>
							</div>
						</div>
						<div class="row">
							<div class="col-md-4">
								<h2>Contact Us</h2>
								<br/>
								<input type="email" class="form-control" name="contactEmail" placeholder="E-mail Address"></input>
								<br/>
								<input type="text" class="form-control" name="contactName" placeholder="Full Name"></input>
								<br/>
								<input type="text-area" class="form-control" name="contactMessage" placeholder="Message"></input>
								<br/>
								<button class="btn btn-primary">Submit</button>
							</div>
						</div>
					</div>
				</div>

			</div>
		);
	}
}

const app = document.getElementById('client');

ReactDOM.render(<Layout />, app);
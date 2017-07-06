import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
	render() {

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
								<br/>
								<br/>
								<div class="container" id="chartIncome"></div>		
							</div>
							<div id="box-shadow" class="col-md-4">
								<h3><i class="fa fa-line-chart"></i> Monthly Expense: ₱ {monthlyExpense}</h3>
								<br/>
								<br/>
								<div class="container" id="chartExpense"></div>		
							</div>
							<div id="box-shadow" class="col-md-4">
								<h3><i class="fa fa-credit-card"></i> Monthly Savings: ₱ {monthlySavings}</h3>
								<br/>
								<br/>
								<div class="container" id="chartSavings"></div>			
							</div>
						</div>
						<br/>
						<div class="row">
							<div class="col-md-1">

							</div>
							<div class="col-md-8">
								
							</div>
							<div class="col-md-1">

							</div>
						</div>
						<div class="row">
							<div style={{textAlign:"justify"}} class="col-md-8">
								<h2>About Us</h2>
								<p>₱esOf Mind was founded in 2017, focusing on the management of income flow giving
								 people the ability to track their own expenses.</p>
							</div>
						</div>
						<div class="row">
							<div class="col-md-4">
								<h2>Contact Us</h2>
								<br/>
								<form method="post" action="">
									<input type="email" class="form-control" name="contactEmail" placeholder="E-mail Address"></input>
									<br/>
									<input type="text" class="form-control" name="contactName" placeholder="Full Name"></input>
									<br/>
									<textarea class="form-control" rows="5" name="contactMessage" placeholder="Message"></textarea>
									<br/>
									<button class="btn btn-primary">Submit</button>
								</form>
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
// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {item} = props
  const {balance, Income, expense} = item
  console.log(item)
  return (
    <div className="card2">
      <div className="display-card balance-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="logo-image"
        />
        <div className="amount-text">
          <p>Your Balance</p>
          <p className="Number" data-testid="balanceAmount">
            Rs. {balance}
          </p>
        </div>
      </div>
      <div className="display-card income-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="logo-image"
        />
        <div className="amount-text">
          <p>Your Income</p>
          <p className="Number" data-testid="incomeAmount">
            Rs. {Income}
          </p>
        </div>
      </div>
      <div className="display-card expense-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="logo-image"
        />
        <div className="amount-text">
          <p>Your Expenses</p>
          <p className="Number" data-testid="expensesAmount">
            Rs. {expense}
          </p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails

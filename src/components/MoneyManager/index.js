import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import TransactionItem from '../TransactionItem'

import MoneyDetails from '../MoneyDetails'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
const SelectType = props => {
  const {item} = props
  return <option value={item.optionId}>{item.displayText}</option>
}

class MoneyManager extends Component {
  state = {
    transactionList: [],
    TypeTEXT: 'INCOME',
    title: '',
    Amount: '',
    Income: 0,
    expense: 0,
  }

  updateList = event => {
    event.preventDefault()
    const {TypeTEXT, title, Amount} = this.state
    const newList = {
      id: uuidv4(),
      amount: Amount,
      Title: title,
      Type: TypeTEXT,
    }
    this.setState(prevState => {
      if (TypeTEXT === 'INCOME') {
        return {
          transactionList: [...prevState.transactionList, newList],
          Income: parseInt(prevState.Income) + parseInt(Amount),
          title: '',
          Amount: '',
          TypeTEXT: 'INCOME',
        }
      }
      return {
        transactionList: [...prevState.transactionList, newList],
        expense: parseInt(prevState.expense) + parseInt(Amount),
        title: '',
        Amount: '',
        TypeTEXT: 'INCOME',
      }
    })
  }

  updateTitle = event => {
    this.setState({title: event.target.value})
  }

  updateAmount = event => {
    this.setState({Amount: parseInt(event.target.value)})
  }

  upadteSelect = event => {
    this.setState({TypeTEXT: event.target.value})
  }

  deteleDeatils = id => {
    this.setState(prevState => {
      const newFilterLIst = prevState.transactionList.filter(
        eachList => eachList.id !== id,
      )
      const deleteItemList = prevState.transactionList.filter(
        eachList => eachList.id === id,
      )
      if (deleteItemList[0].Type === 'INCOME') {
        return {
          transactionList: newFilterLIst,
          Income:
            parseInt(prevState.Income) - parseInt(deleteItemList[0].amount),
        }
      }
      return {
        transactionList: newFilterLIst,
        expense:
          parseInt(prevState.expense) - parseInt(deleteItemList[0].amount),
      }
    })
  }

  render() {
    const {
      transactionList,
      TypeTEXT,
      title,
      Amount,
      Income,
      expense,
    } = this.state
    console.log(TypeTEXT)
    const balance = parseInt(Income) - parseInt(expense)
    const NumberDetails = {balance, Income, expense}
    return (
      <div className="bgdet">
        <div className="card1">
          <h1 className="name-text">Hi, Richard</h1>
          <p className="welcome">
            Welcome back to your <span className="spanText">Money Manager</span>
          </p>
        </div>
        <MoneyDetails item={NumberDetails} />
        <div className="Card2">
          <div className="formCard subCard2">
            <form onSubmit={this.updateList}>
              <h2>Add Transaction</h2>
              <label htmlFor="title">Title</label>
              <br />
              <input
                id="title"
                type="text"
                placeholder="TITLE"
                value={title}
                onChange={this.updateTitle}
              />
              <br />
              <label htmlFor="amount">AMOUNT</label>
              <br />
              <input
                id="amount"
                type="text"
                value={Amount}
                placeholder="AMOUNT"
                onChange={this.updateAmount}
              />
              <br />
              <label htmlFor="type">Type</label>
              <br />
              <select id="type" value={TypeTEXT} onChange={this.upadteSelect}>
                {transactionTypeOptions.map(eachItem => (
                  <SelectType key={eachItem.optionId} item={eachItem} />
                ))}
              </select>
              <br />
              <button type="submit" className="add-btn">
                Add
              </button>
            </form>
          </div>
          <div className="historyCard subCard2">
            <div>
              <h1 className="history-text">History</h1>
              <div className="text-heading">
                <p className="headtextT">Title</p>
                <p className="headText">Amount</p>
                <p className="headText">Type</p>
              </div>
              <ul>
                {transactionList.map(eachItem => (
                  <TransactionItem
                    key={eachItem.id}
                    details={eachItem}
                    deleteFunc={this.deteleDeatils}
                    typeText={transactionTypeOptions}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager

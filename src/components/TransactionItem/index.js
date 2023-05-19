// Write your code here
import './index.css'

const TransactionItem = props => {
  const {details, deleteFunc, typeText} = props
  const DeleteItem = () => {
    deleteFunc(details.id)
  }
  const typelist = typeText.filter(
    eachItem => eachItem.optionId === details.Type,
  )
  const Texttype = typelist[0].displayText
  return (
    <li className="Text-heading">
      <p className="HeadtextT">{details.Title}</p>
      <p className="HeadText">Rs {details.amount}</p>
      <p className="HeadText">{Texttype}</p>
      <button type="button" className="deleteBtn" onClick={DeleteItem}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-image"
          data-testid="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem

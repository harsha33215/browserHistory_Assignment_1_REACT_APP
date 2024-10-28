import './index.css'

const BrowserHistory = props => {
  const {browserHistoryDetails, onDeleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = browserHistoryDetails

  const onDelete = () => {
    onDeleteHistory(id)
  }
  return (
    <li className="list-container">
      <div className="history-items-container">
        <p className="time">{timeAccessed}</p>
        <img className="logo" src={logoUrl} alt="domain logo" />
        <p className="title">{title}</p>
        <p className="domai-url">{domainUrl}</p>
      </div>
      <button
        data-testid="delete"
        type="button"
        className="delete-button"
        onClick={onDelete}
      >
        <img
          alt="delete"
          className="delete-icon"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
        />
      </button>
    </li>
  )
}

export default BrowserHistory

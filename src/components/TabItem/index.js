import './index.css'

const TabItem = props => {
  const {tabsList, active, toggleTabId} = props
  const {displayText, tabId} = tabsList
  const getTabId = () => {
    toggleTabId(tabId)
  }

  const addClassList = active ? 'underlinetext' : ''
  return (
    <li>
      <button
        onClick={getTabId}
        className={`tab-item-button ${addClassList}`}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem

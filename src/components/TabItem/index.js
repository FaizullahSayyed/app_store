// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, updateTab, activeTab} = props
  const {displayText, tabId} = tabDetails

  const onClickChangeTab = () => {
    updateTab(tabId)
  }

  return (
    <li className={`tab ${activeTab === tabId && 'active-tab-styles'}`}>
      <button type="button" onClick={onClickChangeTab}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem

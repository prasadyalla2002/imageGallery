import "./index.css";

const TabItem = (props) => {
  const { tabDetails, tabId, changeActiveTab } = props;
  const { value, id } = tabDetails;

  const isActiveButton = id === tabId.activeTabId;

  const buttonStyle = isActiveButton ? "active-button" : "normal-button";

  const onChangeTab = () => {
    changeActiveTab(id);
  };

  return (
    <li className="tab-item">
      <button type="button" className={buttonStyle} onClick={onChangeTab}>
        {value}
      </button>
    </li>
  );
};

export default TabItem;

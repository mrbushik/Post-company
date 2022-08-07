import React from 'react'
import PropTypes from 'prop-types'
function GroupList({items, valueProperty, contentPropepty, onItemSelect,selectedItem}) {
  return (
    <ul className="list-group">
      {Object.keys(items).map(item => <li
        onClick={()=> onItemSelect(items[item])} 
        className={'list-group-item'+(items[item] === selectedItem ? ' active' : '')} 
        role="button"
        key={items[item][valueProperty]}>{items[item][contentPropepty]}</li>)} 
    </ul>
  )
}
GroupList.defaultProps={
  valueProperty: '_id',
  contentPropepty: 'name'
}
GroupList.propTypes = {
  items: PropTypes.object.isRequired,
  valueProperty: PropTypes.string.isRequired,
  contentPropepty: PropTypes.string.isRequired,
  onItemSelect: PropTypes.func.isRequired,
  selectedItem: PropTypes.string,
}

export default GroupList
import React from 'react'

function GroupList({items}) {
    console.log(items);
  return (
    <ul className="list-group">
        <li className="list-group-item">first</li>
        <li className="list-group-item">2</li>
        <li className="list-group-item">3</li>
        <li className="list-group-item">4</li>
        <li className="list-group-item">5</li>
    </ul>
  )
}

export default GroupList
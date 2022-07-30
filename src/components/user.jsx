import React from 'react'
import Bookmark from './bookmark';
function User({item, index, onDelete}) {
    // console.log(index);
    const test = ()=>{
        console.log(index);
    }
  return (
    <>
        <tr  key={item._id}>
            <th className="row mb-15">{item.name}</th>
            <th> {item.qualities && item.qualities.map(i => <Bookmark key={i._id} color={i.color} name={i.name} /> )}</th>
            <td>{item.profession.name}</td>
            <td>{item.completedMeetings}</td>
            <td>{item.rate}</td>
            <button className="btn bg-danger  m-1" onClick={() => onDelete(item)}>удалить</button>
          </tr>
    </>
  )
}

export default User
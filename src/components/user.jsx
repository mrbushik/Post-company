import React from 'react'
import Bookmark from './bookmark';
function User({ _id,
  name,
  qualities,
  profession,
  completedMeetings,
  rate,
  onDelete,
  bookmark,
  onToggleBookMark,}) {
    // console.log(index);
 
    // console.log(xyi);
  return (
    <>
        <tr  key={_id}>
            <th className="row mb-15">{name}</th>
            <th> {qualities && qualities.map(i => <Bookmark key={i._id} color={i.color} name={i.name} /> )}</th>
            <td>{profession.name}</td>
            <td>{completedMeetings}</td>
            <td>{rate}</td>
            <td>
          <button className="btn bg-danger  m-1" onClick={() => onDelete(_id)}>удалить</button>

            </td>
          </tr>

    </>
  )
}

export default User
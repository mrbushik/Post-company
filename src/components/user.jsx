import React from 'react'

function User({item}) {
    console.log(item);
  return (
    <>
        <tr  key={item._id}>
            <th className="row mb-15">{item.name}</th>
            <th> {item.qualities && item.qualities.map(i => <span key={i._id} className={`bg-${i.color} text-white  mr-r p-2 badge`}>{i.name}</span>)}</th>
            <td>{item.profession.name}</td>
            <td>{item.completedMeetings}</td>
            <td>{item.rate}</td>
            {/* <button className="btn bg-danger  m-1" onClick={() =>deleteUser(item)}>удалить</button> */}
          </tr>
    </>
  )
}

export default User
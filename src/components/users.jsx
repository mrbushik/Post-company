import React from 'react'
import api from '../API'
import User from './user'
function Users({ users, ...rest }) {
 
  return (
<>
  <table className="table">
    <thead>
      <tr>
        <th className="col m-2">Имя</th>
        <th className="col m-2">Качества</th>
        <th className="col m-2">Проффесия</th>
        <th className="col m-2">Встретился раз</th>
        <th className="col m-2">Оценка</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user) => (
        <User key={user._id} {...rest} {...user} />
      ))}
    </tbody>
  </table>
</>
)
}

export default Users
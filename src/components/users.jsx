import React from 'react'
import api from '../API'
function Users() {
    // const usersArr = api.users.fetchAll()
    // console.log(usersArr);
    const [usersArr, setUsersArr] = React.useState(api.users.fetchAll())
    const deleteUser = (id) =>{
        setUsersArr(usersArr.filter(item => item !== id))
    }
const renderUsers = ()=>{
    return(
        usersArr && usersArr.map((item, index)=>     <tr key={item._id}>
        <th className="row">{item.name}</th>
        <th> {item.qualities && item.qualities.map(i => <span key={i._id} className={`bg-${i.color} text-white  mr-r p-2 badge`}>{i.name}</span>)}</th>
        <td>{item.profession.name}</td>
        <td>{item.completedMeetings}</td>
        <td>{item.rate}</td>
        <td onClick={() =>deleteUser(item)}>удалить</td>
      </tr>)
    
    )
}
  return (
    <table className="table">
  <thead>
    <tr>
      <th className="col mr-2">Имя</th>
      <th className="col mr-2">Качества</th>
      <th className="col mr-2">Проффесия</th>
      <th className="col mr-2">Встретился раз</th>
      <th className="col mr-2">Оценка</th>
    </tr>
  </thead>
  <tbody>
   {renderUsers()}
  </tbody>
</table>
  )
}

export default Users
import React from 'react'
import api from '../API'

function Users() {
    const [usersArr, setUsersArr] = React.useState(api.users.fetchAll())
    const usersCount = usersArr.length
    const deleteUser = (id) => {
        setUsersArr(usersArr.filter(item => item !== id))
    } 
    const correctWordForm = () => {
         const titles = ['человек', 'человека', 'человек']
        const cases = [2, 0, 1, 1, 1, 2];   
        return titles[ (usersCount%100>4 && usersCount%100<20)? 2 : cases[(usersCount%10<5)?usersCount%10:5] ];   
    }
    const renderUsers = () => {
        return(
            usersArr && usersArr.map((item, index)=>     <tr  key={item._id}>
            <th className="row mb-15">{item.name}</th>
            <th> {item.qualities && item.qualities.map(i => <span key={i._id} className={`bg-${i.color} text-white  mr-r p-2 badge`}>{i.name}</span>)}</th>
            <td>{item.profession.name}</td>
            <td>{item.completedMeetings}</td>
            <td>{item.rate}</td>
            <button className="btn bg-danger  m-1" onClick={() =>deleteUser(item)}>удалить</button>
          </tr>)
        
        )
    }
  return (
<>
  {usersCount === 0
  ? <span className='bg-danger p-2 m-2'>С тобой никто не тусанет</span>
  : <span className='bg-primary p-2 m-2'>{usersArr.length} {correctWordForm()} тусанет с тобой сегодня</span>}
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
      {renderUsers()}
    </tbody>
  </table>
</>
)
}

export default Users
import React from 'react'
import api from '../API'

function Users() {
    const [usersArr, setUsersArr] = React.useState(api.users.fetchAll())
    const deleteUser = (id) => {
        setUsersArr(usersArr.filter(item => item !== id))
    } 
    const correctWordForm = () => {
        const number = usersArr.length
         const titles = ['человек', 'человека', 'человек']
        const cases = [2, 0, 1, 1, 1, 2];   
        return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];   
    }
    const renderUsers = () => {
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
        <>
        <div>{usersArr.length} {correctWordForm()} тусанет с тобой сегодня</div>
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
        </>
      )
    }

    export default Users
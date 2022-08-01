import React from 'react'
import api from './API'
import Users from './components/users'
function App() {
    const [usersArr, setUsersArr] = React.useState(api.users.fetchAll())
    const usersCount = usersArr.length
    const test = 'ddd'
    const deleteUser = (userId) => {
        setUsersArr(usersArr.filter((user) => user._id !== userId));
    } 
    const correctWordForm = () => {
         const titles = ['человек', 'человека', 'человек']
        const cases = [2, 0, 1, 1, 1, 2];   
        return titles[ (usersCount % 100 >4 && usersCount%100<20) 
          ? 2
          : cases[(usersCount % 10 < 5) ? usersCount % 10 : 5] ];   
    }
    
  return (
<>
  {usersCount === 0
  ? <span className='bg-danger p-2 m-2'>С тобой никто не тусанет</span>
  : <span className='bg-primary p-2 m-2'>{usersArr.length} {correctWordForm()} тусанет с тобой сегодня</span>}
  
<Users onDelete={deleteUser} users={usersArr} />
</>
)
}

export default App
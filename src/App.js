import React from 'react'
import api from './API'
import Users from './components/users'
import SearchStatus from './components/searchStatus'
function App() {
    const [usersArr, setUsersArr] = React.useState(api.users.fetchAll())
    const deleteUser = (userId) => {
        setUsersArr(usersArr.filter((user) => user._id !== userId));
    } 
   
    
  return (
<>
<SearchStatus count={usersArr.length}/>
<Users onDelete={deleteUser} users={usersArr} />
</>
)
}

export default App
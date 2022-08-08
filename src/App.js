import React from "react";
import api from "./API";
import Users from "./components/users";
function App() {
    const [usersArr, setUsersArr] = React.useState(api.users.fetchAll());
    const deleteUser = (userId) => {
        setUsersArr(usersArr.filter((user) => user._id !== userId));
    };
    const handleToggleBookMark = (id) => {
        setUsersArr(
            usersArr.map((user) => {
                if (user._id === id) {
                    return { ...user, bookmark: !user.bookmark };
                }
                return user;
            })
        );
    };

    return (
        <>
            <Users
                onDelete={deleteUser}
                onToggleBookMark={handleToggleBookMark}
                users={usersArr}
            />
        </>
    );
}

export default App;

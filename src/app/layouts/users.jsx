import React from "react";
import { useParams } from "react-router-dom";
import UserPage from "../components/userPage";
import UsersList from "../components/usersList";
function Users() {
    const params = useParams();
    const { userId } = params;
    console.log(userId);
    return <>{userId ? <UserPage userId={userId} /> : <UsersList />}</>;
}

export default Users;

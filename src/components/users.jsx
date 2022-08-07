import React from "react";
import { paginate } from "../utils/paginate";
import Pagination from "./pagination";
import User from "./user";
import PropTypes from "prop-types";
import GroupList from "./groupList";
import api from "../app/api"

function Users({ users: allUsers, ...rest }) {
    const [currentPage, setCurrentPage] = React.useState(1);
    const [professions, setProfessions] = React.useState()
    const [selectProf, setSelectProf] = React.useState()
    const count = allUsers.length;
    const pageSize = 4;
   
    React.useEffect(() => {
api.professions.fetchAll()
.then((data)=> setProfessions(data))
    },[])

    const handleProfessionSelect = (item) => {
        setSelectProf(item.name)
    }
   
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };
    const filtredUsers = selectProf ? allUsers.filter((user)=>user.profession.name === selectProf) : allUsers
    const fi = allUsers.filter((user)=>user.profession.name)
    console.log(selectProf);
    const userCrop = paginate(filtredUsers, currentPage, pageSize);
    return (
        <>
        {professions && 
        <GroupList
        selectedItem={selectProf} 
        items={professions} 
        onItemSelect={handleProfessionSelect}/>}
        
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
                    {userCrop.map((user) => (
                        <User key={user._id} {...rest} {...user} />
                    ))}
                </tbody>
            </table>
            <Pagination
                itemsCount={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </>
    );
}

Users.propTypes = {
    users: PropTypes.array.isRequired,
    // rest: PropTypes.array.isRequired,
}

export default Users;

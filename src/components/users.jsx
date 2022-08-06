import React from "react";
import { paginate } from "../utils/paginate";
import Pagination from "./pagination";
import User from "./user";
import PropTypes from "prop-types";
import GroupList from "./groupList";
import api from "../app/api"

function Users({ users, ...rest }) {
    const [currentPage, setCurrentPage] = React.useState(1);
    const [profession, setProfession] = React.useState(api.professions.fetchAll())
    
    const count = users.length;
    const pageSize = 4;
   
    const handleProfessionSelect = (params) => {

    }
   
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };
    console.log(api.professions.fetchAll());

    const userCrop = paginate(users, currentPage, pageSize);
    return (
        <>
        <GroupList items={profession} onItemSelect={handleProfessionSelect}/>
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
    // users: PropTypes.array.isRequired,
    // rest: PropTypes.array.isRequired,
}

export default Users;

import React from "react";
import { paginate } from "../utils/paginate";
import Pagination from "./pagination";
import User from "./user";
import PropTypes from "prop-types";
import GroupList from "./groupList";
import api from "../app/api"
import SearchStatus from "./searchStatus";
function Users({ users: allUsers, ...rest }) {
    const [currentPage, setCurrentPage] = React.useState(1);
    const [professions, setProfessions] = React.useState()
    const [selectedProf, setSelectedProf] = React.useState()
    const pageSize = 4;
   
    React.useEffect(() => {
    api.professions.fetchAll()
    .then((data)=> setProfessions(data))
    },[])
    React.useEffect(() => {
        setCurrentPage(1)
    },[selectedProf])
    const handleProfessionSelect = (item) => {
        setSelectedProf(item)
    }
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };
    const filteredUsers = selectedProf 
        ? allUsers.filter(
              (user) =>
                  JSON.stringify(user.profession) ===
                  JSON.stringify(selectedProf)
          )
        : allUsers;
    const count = filteredUsers.length;
    const usersCrop = paginate(filteredUsers, currentPage, pageSize);
   const clearFilter = () => {
    setSelectedProf()
   }
    return (
        <div className="d-flex">
        {professions && (
            <div className="d-flex flex-column flex-shrink-0 p-3">
                <GroupList
                    selectedItem={selectedProf}
                    items={professions}
                    onItemSelect={handleProfessionSelect}
                />
                <button
                    className="btn btn-secondary mt-2"
                    onClick={clearFilter}
                >
                    {" "}
                    Очистить
                </button>
            </div>
        )}
        <div className="d-flex flex-column">
            <SearchStatus length={count} />
            {count > 0 && (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Имя</th>
                            <th scope="col">Качества</th>
                            <th scope="col">Профессия</th>
                            <th scope="col">Встретился, раз</th>
                            <th scope="col">Оценка</th>
                            <th scope="col">Избранное</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {usersCrop.map((user) => (
                            <User {...rest} {...user} key={user._id} />
                        ))}
                    </tbody>
                </table>
            )}
            <div className="d-flex justify-content-center">
                <Pagination
                    itemsCount={count}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    </div>
);
};

Users.propTypes = {
    users: PropTypes.array.isRequired,
    // rest: PropTypes.array.isRequired,
}

export default Users;

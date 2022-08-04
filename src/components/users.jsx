import React from "react";
import { paginate } from "../app/utils/paginate";
import Pagination from "./pagination";
import User from "./user";

function Users({ users, ...rest }) {
    const [currentPage, setCurrentPage] = React.useState(1);
    const count = users.length;
    const pageSize = 4;
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const userCrop = paginate(users, currentPage, pageSize);
    return (
        <>
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

export default Users;

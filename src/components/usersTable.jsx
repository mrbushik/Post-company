import React from "react";
import PropTypes from "prop-types";
// import User from "./user";
import TableHeader from "./tableHeader";
import Qualities from "./qualitie";
import TableBody from "./tableBody";
function UsersTable({ users, onSort, selectedSort, ...rest }) {
    const columns = {
        name: { path: "name", name: "Имя" },
        qualities: { name: "Качества" },
        profession: { path: "profession.name", name: "Профессия" },
        completedMeetings: {
            path: "completedMeetings",
            name: "Встретился, раз"
        },
        rate: { path: "rate", name: "Оценка" },
        bookmark: { path: "bookmark", name: "Избранное" },
        delete: {}
    };
    return (
        <>
            <table className="table">
                <TableHeader {...{ onSort, selectedSort, columns }} />
                <TableBody {...{ columns, data: users }} />
                {/* <tbody>
                    {users.map((user) => (
                        <User {...rest} {...user} key={user._id} />
                    ))}
                </tbody> */}
            </table>
        </>
    );
}
UsersTable.propTypes = {
    users: PropTypes.array.isRequired,
    currentSort: PropTypes.object.isRequired,
    handleSort: PropTypes.func.isRequired
};

export default UsersTable;

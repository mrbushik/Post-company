import React from "react";
import PropTypes from "prop-types";
import User from "./user";
import TableHeader from "./tableHeader";
import Qualities from "./qualitie";
function UsersTable({ users, onSort, selectedSort, ...rest }) {
    const columns = {
        name: { iter: "name", name: "Имя" },
        qualities: { name: "Качества" },
        profession: { iter: "profession.name", name: "Профессия" },
        completedMeetings: {
            iter: "completedMeetings",
            name: "Встретился, раз"
        },
        rate: { iter: "rate", name: "Оценка" },
        bookmark: { iter: "bookmark", name: "Избранное" },
        delete: {}
    };
    return (
        <>
            <table className="table">
                <TableHeader {...{ onSort, selectedSort, columns }} />
                <tbody>
                    {users.map((user) => (
                        <User {...rest} {...user} key={user._id} />
                    ))}
                </tbody>
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

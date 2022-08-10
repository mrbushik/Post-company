import React from "react";
import PropTypes from "prop-types";
// import User from "./user";
import TableHeader from "./tableHeader";
import Qualities from "./qualitie";
import TableBody from "./tableBody";
import Bookmark from "./bookmark";
function UsersTable({
    users,
    onSort,
    selectedSort,
    onToggleBookMark,
    onDelete,
    ...rest
}) {
    const columns = {
        name: { path: "name", name: "Имя" },
        qualities: { name: "Качества" },
        profession: { path: "profession.name", name: "Профессия" },
        completedMeetings: {
            path: "completedMeetings",
            name: "Встретился, раз"
        },
        rate: { path: "rate", name: "Оценка" },
        bookmark: {
            path: "bookmark",
            name: "Избранное",
            component: (user) => (
                <Bookmark
                    status={user.bookmark}
                    onClick={() => onToggleBookMark(user._id)}
                />
            )
        },
        delete: {
            component: (user) => (
                <button
                    className="btn bg-danger  m-1"
                    onClick={() => onDelete(user._id)}
                >
                    удалить
                </button>
            )
        }
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
    handleSort: PropTypes.func.isRequired,
    onToggleBookMark: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default UsersTable;

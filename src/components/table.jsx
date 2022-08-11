import React from "react";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";
import PropTypes from "prop-types";

function Table({ onSort, selectedSort, columns, data, children }) {
    return (
        <table className="table">
            {children || (
                <>
                    <TableHeader {...{ onSort, selectedSort, columns }} />
                    <TableBody {...{ columns, data }} />
                </>
            )}
        </table>
    );
}
Table.propTypes = {
    users: PropTypes.array.isRequired,
    handleSort: PropTypes.func.isRequired,
    onToggleBookMark: PropTypes.func.isRequired,
    onSort: PropTypes.func,
    columns: PropTypes.object.isRequired,
    children: PropTypes.array.isRequired
};

export default Table;

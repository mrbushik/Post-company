import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
function TableBody({ data, columns }) {
    return (
        <tbody>
            {data.map((item) => (
                <tr key={item}>
                    {Object.keys(columns).map((column) => (
                        <td key={column}>
                            {_.get(item, columns[column].path)}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    );
}

TableBody.propTypes = {
    data: PropTypes.array.isRequired,
    columns: PropTypes.object.isRequired
};
export default TableBody;

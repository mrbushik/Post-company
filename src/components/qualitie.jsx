import React from "react";
import PropTypes from "prop-types";

function Qualities(name) {
    return (
        <span className={`bg-${name.color} text-white  mr-r m-2 p-2 badge`}>
            {name.name}
        </span>
    );
}

Qualities.propTypes = {
    name: PropTypes.string.isRequired,
}
export default Qualities;

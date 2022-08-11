import React from "react";
import Qualities from "./qualitie";
import PropTypes from "prop-types";

function QualitiesList({ qualities }) {
    return (
        <>
            {qualities.map((i) => (
                <Qualities key={i._id} color={i.color} name={i.name} />
            ))}
        </>
    );
}
QualitiesList.propTypes = {
    qualities: PropTypes.array.isRequired
};
export default QualitiesList;

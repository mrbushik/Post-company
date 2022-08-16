import React from "react";
import PropTypes from "prop-types";

function UserPage({ userId }) {
    return <div>UserPage {userId}</div>;
}
UserPage.propTypes = {
    userId: PropTypes.string.isRequired
};
export default UserPage;

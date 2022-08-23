import React from "react";
import PropTypes from "prop-types";
function textField({ label, type, name, value, onChange, error }) {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={(e) => onChange(e)}
            />
            {error && <p>{error}</p>}
        </div>
    );
}
textField.defaultProps = {
    type: "text"
};
textField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string
};

export default textField;

import React from "react";
import PropTypes from "prop-types";
function TextFided({ label, type, name, value, onChange }) {
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
        </div>
    );
}
TextFided.defaultProps = {
    type: "text"
};
TextFided.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
};

export default TextFided;

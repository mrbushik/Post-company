import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";

function MultiSelectField({ options, onChange, name, label, defaultValue }) {
    const optionsArray =
        !Array.isArray(options) && typeof options === "object"
            ? Object.keys(options).map((optionName) => ({
                  label: options[optionName].name,
                  value: options[optionName]._id
              }))
            : options;
    const handleChange = (value) => {
        onChange({ name: name, value });
    };
    return (
        <>
            <div className="mb-4">
                <label htmlFor="validationCustom04" className="form-label">
                    {label}
                </label>
                <Select
                    isMulti
                    options={optionsArray}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={handleChange}
                    defaultValue={defaultValue}
                    name={name}
                    closeMenuOnSelect={false}
                />
            </div>
        </>
    );
}
MultiSelectField.propTypes = {
    onChange: PropTypes.func,
    name: PropTypes.string,
    label: PropTypes.string,
    defaultValue: PropTypes.array,
    options: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

export default MultiSelectField;

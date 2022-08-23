export function validator(data, config) {
    const errors = {};
    function validate(validateMethod, data, config) {
        switch (validateMethod) {
            case "isRequired":
                if (data.trim() === "") return config.massage;
                break;
            default:
                break;
        }
    }
    for (const fildName in data) {
        for (const validateMethod in config[fildName]) {
            const error = validate(
                validateMethod,
                data[fildName],
                config[fildName][validateMethod]
            );
            if (error && !errors[fildName]) {
                errors[fildName] = error;
            }
        }
    }
    return errors;
}

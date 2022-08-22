import React from "react";
import TextFided from "../components/textFided";

function Login() {
    const [data, setData] = React.useState({ email: "", password: "" });
    const [errors, setErrors] = React.useState();
    const handleChange = ({ target }) => {
        setData((pervState) => ({
            ...pervState,
            [target.name]: target.value
        }));
    };
    React.useEffect(() => {
        validate();
    }, [data]);

    const validate = () => {
        const errors = {};
        for (const fieldName in data) {
            if (data[fieldName].trim() === "") {
                errors[fieldName] = `${fieldName} обязательно для заполнения`;
            }
        }
        setErrors(errors);
        return Object.keys(errors).length !== 0 || false;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (isValid) return;
        console.log(data);
    };
    return (
        <form onSubmit={handleSubmit}>
            <TextFided
                label="Электронная почта"
                value={data.email}
                name="email"
                onChange={handleChange}
            />
            <TextFided
                label="пароль"
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
            />
            <button type="submit">submit</button>
        </form>
    );
}

export default Login;

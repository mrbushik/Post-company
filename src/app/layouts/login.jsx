import React from "react";
import TextFided from "../components/textFided";

function Login() {
    const [data, setData] = React.useState({ email: "", password: "" });
    const handleChange = ({ target }) => {
        setData((pervState) => ({
            ...pervState,
            [target.name]: target.value
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
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
                name="email"
                value={data.password}
                onChange={handleChange}
            />
            <button type="submit">submit</button>
        </form>
    );
}

export default Login;

import React from "react";

function Login() {
    const [email, setEmail] = React.useState("");
    const handleCange = (e) => {
        setEmail(e.target.value);
    };
    return (
        <form action="">
            <div>
                <label htmlFor="email">email</label>
                <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={(e) => handleCange(e)}
                />
            </div>
            <div>
                <label htmlFor="password">password</label>
                <input type="password" id="password" />
            </div>
        </form>
    );
}

export default Login;

import React from "react";

import "./Login.scss";

const Login: React.FC = () => {
    const apiUrl = import.meta.env.VITE_API_URL;

    const testConnect = async () => {
        try {
            const response = await fetch(apiUrl + "/connection", {
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                "method": "POST",
                "body": JSON.stringify({
                    "mail": "test1@gmail.com",
                    "password": "au4uqbf11-C-J",
                }),
            });
            const responseJSON = await response.json();
            window.parent.postMessage({
                "type": "data",
                "payload": {"response": responseJSON},
            }, "*");
        } catch (error) {
            console.trace(error);
        }
    };

    return (
        <div className="starter">
            <p>
                ICI CA LOGIN
            </p>
            <button
                type="button"
                onClick={testConnect}
            >
                APPUIES
            </button>
        </div>
    );
};

export default Login;

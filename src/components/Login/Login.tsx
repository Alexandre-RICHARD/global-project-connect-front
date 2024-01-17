import React from "react";

import {errorSaver} from "@/IndexImporter";
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
                    "mail": "test@gmail.com",
                    "password": "abcdeFGHIJ1234--$@",
                }),
            });
            const responseJSON = await response.json();
            window.parent.postMessage({
                "type": "data",
                "payload": {"response": responseJSON},
            }, "*");
        } catch (error) {
            const errorF = error as Error;
            await errorSaver(
                "connection-try-failed",
                JSON.stringify(errorF.stack)
            );
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

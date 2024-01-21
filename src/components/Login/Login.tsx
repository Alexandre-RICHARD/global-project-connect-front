import React from "react";
import {Link} from "react-router-dom";

import "./Login.scss";

const Login: React.FC = () => {

    return (
        <p className="not-concerned">
            Pas encore de compte ?
            <Link
                className="not-concerned-button"
                to="/"
            >
                Inscrivez-vous
            </Link>
        </p>
    );
};

export default Login;

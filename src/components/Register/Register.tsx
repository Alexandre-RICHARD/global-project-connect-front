import React from "react";
import {Link} from "react-router-dom";

import "./Register.scss";

const Register: React.FC = () => {

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

export default Register;

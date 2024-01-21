import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import {Login, Register} from "@/IndexImporter";
import "./App.scss";

const allowedOrigins = import.meta.env.VITE_IFRAME_ALLOWED_ORIGINS.split(" ");
const origins = document.referrer;

const allowedIframe = allowedOrigins.includes(origins);

const DefaultRoute: React.FC = () => {
    window.parent.postMessage("close", origins);
    return null;
};

const App: React.FC = () => {
    if (!allowedIframe) {
        return null;
    }

    return (
        <div className="account-global">
            <div className="account-modal">
                <Router>
                    <Routes>
                        <Route
                            element={<Login />}
                            path="/login"
                        />
                        <Route
                            element={<Register />}
                            path="/register"
                        />
                        <Route
                            element={<DefaultRoute />}
                            path="/*"
                        />
                    </Routes>
                </Router>
            </div>
        </div>
    );
};

export default App;

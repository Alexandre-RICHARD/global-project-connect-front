import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import {Login, Register} from "@/IndexImporter";
import "./App.scss";

const App: React.FC = () => {
    return (
        <div className="account-global">
            <Router>
                <Routes>
                    <Route
                        element={<></>}
                        path="/"
                    />
                    <Route
                        element={<Login />}
                        path="/login"
                    />
                    <Route
                        element={<Register />}
                        path="/register"
                    />
                </Routes>
            </Router>
        </div>
    );
};

export default App;

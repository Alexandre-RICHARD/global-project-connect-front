import React from "react";
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";

import {Login, Register} from "@/IndexImporter";
import "./App.scss";

const App: React.FC = () => {
    const router = createBrowserRouter([
        {
            "path": "/",
            "element": <></>,
        },
        {
            "path": "/login",
            "element": <Login />,
        },
        {
            "path": "/register",
            "element": <Register />,
        }
    ]);

    return (
        <div className="starter">
            <RouterProvider router={router} />
        </div>
    );
};

export default App;

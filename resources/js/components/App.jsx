import React, {useEffect, useState} from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import { privateRoutes, publicRoutes } from "./routes";
import { AccessToken } from "./context"

const App = () => {

    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);

        return userToken?.token
    };

    const [token, setToken] = useState(getToken());

    const saveToken = userToken => {
        sessionStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken.token);
    };

    return (
        <AccessToken.Provider value={{token: token, setToken: saveToken}}>
            <div>
                <Navbar/>
                    <Routes>
                        { token
                            ?
                            privateRoutes.map((item, index) => <Route
                                path={item.path}
                                element={item.element}
                                key={index}
                            />)
                            :
                            publicRoutes.map((item, index) => <Route
                                path={item.path}
                                element={item.element}
                                key={index}
                            />)
                        }
                    </Routes>
            </div>
        </AccessToken.Provider>
    );
}

export default App;

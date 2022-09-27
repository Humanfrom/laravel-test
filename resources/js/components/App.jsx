import React from "react";
import { Routes, Route } from "react-router-dom";
import useToken from "./utils/useToken";
import LoginPage from './pages/LoginPage'

const App = () => {
    const { token, setToken } = useToken();

    if (!token) {
        return null//<LoginPage setToken={setToken} />;
    }

    return (
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/about' element={<LoginPage/>}/>
        <Route path='/' element={<LoginPage/>}/>
      </Routes>
    );
}

export default App;

import React, {useContext} from 'react';
import { useNavigate } from "react-router-dom";
import { AccessToken } from "./context";

const Navbar = () => {
    const {token, setToken} = useContext(AccessToken);
    const navigate = useNavigate();

    const gotoPage = (path) => {
        navigate(path);
    }

    const SignOutHandler = () => {
        setToken({token: null});
        navigate('/login');
    }

    return (
        <div className='d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom'>
            {
                token
                    ?
                    <>
                        <div className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                            <a
                                className="nav-link px-2 link-secondary"
                                style={{cursor:'pointer'}}
                                onClick={() => gotoPage('/')}
                            >
                                Главная
                            </a>

                            <a
                                className="nav-link px-2 link-secondary"
                                style={{cursor:'pointer'}}
                                onClick={() => gotoPage('/about')}
                            >
                                О нас
                            </a>
                        </div>
                        <div className="col-md-3 text-end">
                            <button
                                onClick={SignOutHandler}
                                className={"btn btn-outline-primary me-2"}
                            >Выйти</button>
                        </div>
                    </>
                    :
                    <div className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <button onClick={() => gotoPage('/login')} className={"btn btn-primary me-2"}>Войти</button>
                        <button onClick={() => gotoPage('/registration')} className={"btn btn-outline-primary"}>Регистрация</button>
                    </div>
            }
        </div>
    );
}

export default Navbar;

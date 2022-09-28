import React, {useContext, useState} from 'react';
import { AccessToken } from "../context";
import { useNavigate } from "react-router-dom";
import {api} from "../utils";

const Login = () => {
    const {token, setToken} = useContext(AccessToken);
    const navigate = useNavigate();

    const [usermail, setUserMail] = useState();
    const [password, setPassword] = useState();


    const postUser = () => {
        if(!String(usermail)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )){
            alert('Почта указана не верно');
        }

         api.post('/api/auth/login',
            {
                email: usermail,
                password: password
            })
            .then(
            res => {
                if(res.status !== 200) {
                    alert('Ошибка соединения с сервером')
                    return
                }

                if(!res.data?.access_token) {
                    alert('Логин или пароль введён некорректно')
                    return
                }

                setToken({token: res.data.access_token});
                navigate('/');
            }
        )
    }

    return (
        <div className='w-25'>
            <input
                value={usermail}
                onChange={event => setUserMail(event.target.value)}
                type="email"
                className='form-control mt-3 mb-3'
                placeholder={'Email'}
            />

            <input
                value={password}
                onChange={event => setPassword(event.target.value)}
                type="password"
                className='form-control mb-3'
                placeholder={'Пароль'}
            />

            <input
                type="submit"
                className='btn btn-primary'
                onClick={postUser}
            />
        </div>
   )
}

export default Login;

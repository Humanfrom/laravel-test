import React, {useContext, useState} from 'react';
import { useNavigate } from "react-router-dom";
import {api} from "../utils";

const Register = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    })

    const setUserHandler = (accessor, value) => {
        let newUser = { ...user };
        newUser[accessor] = value;
        setUser(newUser);
    }

    const postUser = () => {
        if(user.password !== user.password_confirmation){
            alert('Пароль и подтверждение пароля не совпадают');
            return
        }

        if(!String(user.email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )){
            alert('Почта указана не верно');
            return
        }

        if(!String(user.password)
            .match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/)
        ) {
            alert('Пароль должен содержать от 8 до 15 символов, буквы верхнего и нижнего регистра, а также спецсимволы');
            return
        }

        api.post('/api/users', { ...user }).then(
            res => {

                    alert('Регистрация успешно пройдена. Введите данные в соответствущие поля, чтобы авторизоваться');
                    navigate('/login');
            }
        )
    }

    return (
        <div className='w-25'>
            <input
                type="text"
                className='form-control mb-3 mt-3'
                placeholder={'Имя'}
                onChange={(e) => setUserHandler('name', e.target.value)}
            />

            <input
                type="email"
                className='form-control mb-3'
                placeholder={'Email'}
                onChange={(e) => setUserHandler('email', e.target.value )}
            />

            <input
                type="password"
                className='form-control mb-3'
                placeholder={'Пароль'}
                onChange={(e) => setUserHandler('password', e.target.value )}
            />

            <input
                type="password"
                className='form-control mb-3'
                placeholder={'Подтвердите пароль'}
                onChange={(e) => setUserHandler('password_confirmation', e.target.value )}
            />

            <input
                type="submit"
                className='btn btn-primary'
                onClick={postUser}
            />
        </div>
    );
};

export default Register;

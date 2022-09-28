import React, {useContext, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import {AccessToken} from "../context";
import {api} from "../utils";


const Main = () => {
    const {token} = useContext(AccessToken);
    const [secretWord, setSecretWord] = useState()
    const [userData, setUserData] = useState()
    const navigate = useNavigate();

    useEffect(async () => {
        await api.get('/api/auth/data', {
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            setSecretWord(res.data);
        });

        await api.post('/api/auth/me', {},{
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            setUserData(res.data);
        });
    },[navigate])

    return (
        <div>
           <h3>TOP SECRET</h3>
            <p>Если Вы залогинились и получили корректный токен, то обязательно увидете секретную фразу ниже</p>
            <h2 className='border border-primary border-3 rounded p-2'>{secretWord || 'Загрузка...'}</h2>
            <div>
                <h3>Ваши данные, указанные при регистрации:</h3>
                <p>Имя: {userData?.name || '...'}</p>
                <p>Почта: {userData?.email || '...'}</p>
            </div>
        </div>
    );
};

export default Main;

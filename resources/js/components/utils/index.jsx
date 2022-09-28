import axios from "axios";
import { redirect } from "react-router-dom";

export const api = axios.create();

api.interceptors.request.use(config => config
    , error => {
        if(error.response.data.message === 'Token has expired'){
            return axios.post('api/auth/refresh', {}, {
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8',
                        Authorization: `Bearer ${localStorage.getItem('access_token')}`
                    }
                }).then(res => {
                saveToken({token: res.data.access_token})

                error.config.headers.authorization = `Bearer ${localStorage.getItem('access_token')}`

                return api.request(error.config);
            })
        }

        if(error.response.status === 401){
            redirect("/login");
        }
    })

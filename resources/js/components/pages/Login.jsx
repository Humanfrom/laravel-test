import React from 'react';
import useToken from "../utils/useToken";

const LoginPage = ({}) => {
    const {token, setToken} = useToken();
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        setToken({ token: `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}` });
    }

    return (
      <div>
        Let's login quick!
      </div>
   )
}

export default LoginPage;

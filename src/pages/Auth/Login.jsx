import React, {useState}  from 'react';
import { Navigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/authAction';

const Login = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.isLogged);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function loginIn(){
        if(username === 'versiondo' && password === '123456'){
            dispatch(login());
        }else{
            console.log({username, password})
        }
    }
    
    if(!isLoggedIn){
        return (
            <div>
                <input 
                type="name"
                value={username}
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                />

                <input 
                type="password"
                value={password}
                placeholder="Username"
                onChange={(e) => setPassword(e.target.value)}
                />

                <button onClick={() => loginIn()}>logate</button>
            </div>
        )
    }else{
        return <Navigate to="/" />;
    }
}

export default Login
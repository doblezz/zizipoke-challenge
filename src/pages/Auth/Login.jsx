import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/authAction';

import { fetchItems } from '../../redux/ItemsPokemon/ItemsPokeActions';

// scss
import './Login.scss';

// animation-eye
import eye from '../../assets/images/animation/animated-eye.gif';

const Login = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.isLogged);
    
    if (isLoggedIn.isLogged === false) {
        dispatch(fetchItems());
    }

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    function loginIn() {
        if (username === 'versiondo' && password === '123456') {
            dispatch(login());
        } else {
            console.log({ username, password })
        }
    }

    if (isLoggedIn.isLogged === false) {
        return (
            <div className='container_login'>
                <form onSubmit={handleSubmit}>
                    <div className="icon_eyes">
                        <img src={eye} alt="animation-eye" />
                    </div>

                    <h2>Login to App</h2>
                    <input
                        type="name"
                        value={username}
                        placeholder="User name"
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <input
                        type="password"
                        value={password}
                        placeholder="**********"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button onClick={() => loginIn()}>Login In</button>

                </form>


                <div className="details-login">
                    <p>
                        ¡Bienvenidos a nuestra Web App sobre Pokémon!
                        Aquí encontrarás información crucial sobre tus pokémon favoritos.
                        Descubre detalles esenciales y añade a tus preferidos
                        para tenerlos siempre a mano. ¡Explora el emocionante mundo
                        de los pokémon con ZiziPoke!
                    </p>
                </div>
            </div>
        )
    } else {
        return <Navigate to="/" />;
    }
}

export default Login
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Home = () => {
  const isLoggedIn = useSelector((state) => state.isLogged);

  if(!isLoggedIn){
    return <Navigate to='/login' />
  }else{
    return (
      <div>
        <h2>Welcome!</h2>
      </div>
    )
  }

  
}

export default Home
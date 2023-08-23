import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../redux/ItemsPokemon/ItemsPokeActions';
import { Navigate } from 'react-router-dom';

const Home = () => {
  const isLoggedIn = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  const items = useSelector((state) => state.itemsPoke.items);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const [searchTerm, setSearchTerm] = useState('');
  const [itemsToShow, setItemsToShow] = useState(10);
  const [validatorData, setValidatorData] = useState([]);
  let validator = '';

  useEffect(() => {
    if (items.length > 0) {
      setValidatorData(items);
    }
  }, [items]);

  const handleLoadMore = () => {
    setItemsToShow(prevItems => prevItems + 10);
  };

  const handleShowDefault = () => {
    setItemsToShow(10);
  };

  if (isLoggedIn.isLogged === false) {
    return <Navigate to='/login' />;
  } else {
    const filteredItems = Array.isArray(items)
      ? items.filter(item => item.data1.name.toLowerCase().includes(searchTerm.toLowerCase()))
      : [];

    return (
      <div>
        <h2>Welcome! Zizi Poke challange</h2>
        <input
          type="text"
          placeholder="Buscar Pokémon"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <h1>Pokémon Items</h1>
        <button onClick={handleLoadMore}>Cargar 10 más</button>
        <button onClick={handleShowDefault}>Mostrar 10 por defecto</button>
        <ul>
        { validatorData.length > 0 ? filteredItems.length === 0
            ? <li>{validator}</li>
            : filteredItems.slice(0, itemsToShow).map((item, index) => (
              <li key={index}>
                <strong>Nombre:</strong> {item.data1.name} <br />
                <strong>ID:</strong> {index+1} - {item.data2.base_experience} <br />
                {/* Puedes mostrar más detalles aquí */}
              </li>
            )) : <p>Cargando...</p>}
        </ul>
      </div>
    );
  }
};

export default Home;
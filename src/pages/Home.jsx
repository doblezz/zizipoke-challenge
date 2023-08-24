import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../redux/ItemsPokemon/ItemsPokeActions';
import { Navigate } from 'react-router-dom';

// Modals
import { PokemonDetails } from '../components/Modals/PokemonDetails';

// Styles scss - Home
import './Home.scss';

// icons - react-icons
import { BsSearch } from 'react-icons/bs';

const Home = () => {
  const isLoggedIn = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  const items = useSelector((state) => state.itemsPoke.items);

  useEffect(() => {
    if (!items) {
      dispatch(fetchItems());
    }
  },);

  const [searchTerm, setSearchTerm] = useState('');
  const [itemsToShow, setItemsToShow] = useState(12);
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

  // Show and close modal details pokemon
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState(null);

  const handleOpenModal = (index) => {
    setSelectedIdx(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedIdx(null);
  };

  if (isLoggedIn.isLogged === false) {
    return <Navigate to='/login' />;
  } else {
    const filteredItems = Array.isArray(items)
      ? items.filter(item => item.data1.name.toLowerCase().includes(searchTerm.toLowerCase()))
      : [];

    return (
      <div className='container_home'>
        <h3><span>¡Welcome!</span> You can now look for information about the pokemons.</h3>
        <div className="search">
          <div className="search_">
            <label htmlFor="search"><BsSearch /></label>
            <input
              type="text"
              placeholder="Ej: Pikachu"
              id='search'
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>
          <span>Search among the {validatorData.length} pokemons</span>
        </div>
        <div className="options_show">
          <h4>Pokemon List</h4>
          <div className="button_show">
            <button onClick={handleLoadMore}>Show 10 more</button>
            <button onClick={handleShowDefault}>Show only 10</button>
          </div>
        </div>
        <div className="container_items">
          <ul>
            {validatorData.length > 0 ? filteredItems.length === 0
              ? <li>{validator}</li>
              : filteredItems.slice(0, itemsToShow).map((item, index) => (
                <li
                  key={index}
                  className='pokemon_card'
                  onClick={() => handleOpenModal(item.data2.id)}
                >
                  <div className="card_image">
                    <img src={item.data2.image} alt="pokemon" />
                  </div>
                  <div className="detailsPoke" style={{ textAlign: 'center' }}>
                    <p>#{item.data2.id}</p>
                    <h5>{item.data1.name}</h5>

                    <div className="poke_type">
                      {item.data2.type.map((type, i) => (
                        <button key={i} className={type.type.name}>{type.type.name}</button>
                      ))}
                    </div>
                  </div>
                </li>
              )) : <p>Cargando...</p>}
          </ul>
          {/* Modal Details */}
          <PokemonDetails
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            selectedIdx={selectedIdx}
            data={items}
          />
        </div>
      </div>
    );
  }
};

export default Home;
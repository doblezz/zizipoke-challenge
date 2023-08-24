import React, { useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';

// Remove Items
import { removeFromFavorites } from '../../redux/SetPokeFavorite/FavoriteAction';

// Styles Favorite
import './Favorite.scss';

export const Favorite = () => {
    const favoritePokemon = useSelector(state => state.favoritePokemon.favoritePokemon);
    const dispatch = useDispatch();

    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const handleRemoveFromFavorites = (pokemonId) => {
        dispatch(removeFromFavorites(pokemonId));
      };

    return (
        <div className={`container-favorite ${isVisible ? 'visible' : ''}`}>
            <div className="title_favorite">
                <h2>Favorite Poke</h2>
                <div className="button_show" onClick={toggleVisibility}>
                    {isVisible === false ? 'open favorite' : 'close favorite'}
                </div>
            </div>
            <div className="content_favorite">
                <ul>
                {favoritePokemon.length > 0  || favoritePokemon === [] ?
                favoritePokemon.map((item, index) => (
                <li
                  key={index}
                  className='pokemon_card'
                //   onClick={() => handleOpenModal(item.data2.id)}
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

                  <div className="favorite_option">
                    <button onClick={() => handleRemoveFromFavorites(item.data2.id)}>Remove Favorite</button>
                  </div>
                </li>
               )) : <p>No favorites available</p>}
                </ul>
            </div>
        </div>
    )
}
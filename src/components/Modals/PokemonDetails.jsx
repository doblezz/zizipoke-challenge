import React from 'react';
import './PokemonDetails.scss';

export const PokemonDetails = ({ isOpen, onClose, selectedIdx, data }) => {

  const poke = data.find(Dpoke => Dpoke.data2.id === selectedIdx);

  if (!isOpen) {
    return null;
  }
  console.log(poke)

  return (
    <>
      {data !== [''] ?
        <div className="modal-overlay" onClick={onClose}>
          <div className="modal-content">
            <div className="modal_img">
              <img src={poke.data2.image} alt={poke.data1.name} />
            </div>

            <div className="details_poke">
              <p className="id">#{poke.data2.id}</p>
              <h4>{poke.data1.name}</h4>

              <div className="type_poke">
                <p className="type">Type Pokemon</p>
                <div className="content_type_button">
                {poke.data2.type.map((type, i) => (
                  <button key={i} className={type.type.name}>{type.type.name}</button>
                ))}
                </div>
              </div>

              <div className="abilities_poke">
                <p className="abilities">Abilities</p>
                <div className="content_ability_button">
                {poke.data2.ability.map((abi, i) => (
                  <button key={i}>{abi.ability.name}</button>
                ))}
                </div>
              </div>

              <div className="about_poke">
                <h5>About Pokemon</h5>
                <div className="details_about">

                  <div className="height">
                    <h5>Height</h5>
                    <span>{poke.data2.height} m</span>
                  </div>

                  <div className="weight">
                    <h5>Weight</h5>
                    <span>{poke.data2.weight} Kg</span>
                  </div>

                  <div className="experience">
                    <h5>Base Exp</h5>
                    <span>{poke.data2.experience}</span>
                  </div>

                </div>

                <div className="stats">
                    <h5>Stats</h5>
                    <ul>
                    {poke.data2.stats.map((stats, i) => (
                      <li key={i}>
                        <i className={stats.stat.name}>{stats.base_stat}</i>
                        {stats.stat.name.slice(0,11)}
                      </li>
                    ))}
                    </ul>
                  </div>

              </div>
            </div>
          </div>
        </div> :
        <div className="modal-overlay" onClick={onClose}>
          <div className="modal-content">
            <p>Cargando...</p>
          </div>
        </div>}

    </>
  )
}

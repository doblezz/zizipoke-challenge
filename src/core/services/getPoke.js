import axios from 'axios';

export const getPokemons = async (arr) => {

  const data = [];
  const detailedData = await Promise.all(
    arr.map(async pokemon => {
      const response = await axios.get(pokemon.url);
      data.push(response.data);
    })
  );
  
  try {
    if(detailedData){
      return data;
    }
  } catch (error) {
    console.log(error + 'No se pudieron obtener los datos')
  }
};

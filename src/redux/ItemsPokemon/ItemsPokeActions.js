import axios from "axios";

// Acción para almacenar los items en el estado
export const setItems = (items) => {
  return {
    type: "SET_ITEMS",
    payload: items,
  };
};


export const fetchItems = () => {
  return async (dispatch) => {
    try {
      const responsePokemon = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0"
      );
      const items = responsePokemon.data;

      let details = [];
      if (items && items.results) {
        const dataPoke = await Promise.all(items.results.map(async (urlObj) => {
          try {
            const response = await axios.get(urlObj.url);
            let poke = response.data;
            const detailsPoke = {
              id: poke.id,
              ability: poke.abilities,
              stats: poke.stats,
              experience: poke.base_experience,
              type: poke.types,
              height: poke.height,
              weight: poke.weight,
              image: poke.sprites.front_default
            }
            const combinedData = {
              data1: urlObj,
              data2: detailsPoke
            };
            details.push(combinedData);
            return combinedData;
          } catch (error) {
            return [];
          }
        }));

        details = dataPoke.filter(data => data !== null);
      }

      dispatch(setItems(details));
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };
};




// Acción asincrónica para cargar los items desde la API
// export const fetchItems = () => {
//   return async (dispatch) => {
//     try {
//       const responsePokemon = await axios.get(
//         "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
//       );
//       const items = await responsePokemon.data;

//       let details = [];
//       if (items) {
//         const dataPoke = Object.entries(items.results).map(
//           async ([index, url]) => {
//             try {
//               const response = await axios.get(url.url);

//               const combinedData = await {
//                 data1: url,
//                 data2: response.data
//               };

//               details.push(combinedData);
              
//             } catch (error) {
//               console.error(error);
//             }
//           }
//         );
//       }
//       dispatch(setItems(details));
//     } catch (error) {
//       console.error("Error fetching items:", error);
//     }
//   };
// };

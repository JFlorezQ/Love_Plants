import React from "react";
import { useDispatch } from "react-redux";
import { filterPrice } from "../../reduxToolkit/Filtros/sortByPricethunk";
// import { filterRating } from "../../reduxToolkit/Filtros/sortByRatingThunk"; // Comentado, no usado

const SortByPriceDropdown = () => {
  const dispatch = useDispatch();

  // Maneja el cambio de orden de precio y despacha la acción correspondiente
  const handleSortChange = (order) => {
    // Si en el futuro quieres activar orden por rating, descomenta esta línea
    // if (order === 'rating') {
    //   dispatch(filterRating());
    // }
    dispatch(filterPrice({ order }));
  };

  return (
    <div className="mb-4 w-full flex items-center mt-0">
      {/* Etiqueta del selector */}
      <label
        htmlFor="sortByPrice"
        className="block text-sm font-bold mb-2 mr-2 text-PrimaryColor"
      >
        Ordenar:
      </label>

      {/* Selector para ordenar precios */}
      <select
        id="sortByPrice"
        onChange={(e) => handleSortChange(e.target.value)}
        className="mt-1 block py-2 px-3 border border-LightGray bg-White rounded-md shadow-sm focus:outline-none focus:ring-PrimaryColor focus:border-PrimaryColor sm:text-sm"
      >
        <option value="asc">Precio Asc</option>
        <option value="desc">Precio Desc</option>
        {/* <option value='rating'>Mejor puntuado</option> */}
      </select>
    </div>
  );
};

export default SortByPriceDropdown;


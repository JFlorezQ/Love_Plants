import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBrand } from "../../reduxToolkit/Brand/brandThunks";
import { filterBrand } from "../../reduxToolkit/Filtros/filterBrandThunks";

const API_URL = "https://love-plants.onrender.com/brand";

const BrandFilterComponent = ({ setActualPage }) => {
  const dispatch = useDispatch();
  const [selectedBrand, setSelectedBrand] = useState("");
  const brandList = useSelector((state) => state.brands.brands);

  // Carga la lista de marcas al montar el componente
  useEffect(() => {
    dispatch(getBrand());
  }, [dispatch]);

  // Manejador para seleccionar una marca del select
  const handleBrandChange = (brand) => {
    setSelectedBrand(brand);
  };

  // Manejador para aplicar el filtro de marca
  const handleFilterClick = () => {
    try {
      if (!selectedBrand) return;
      setActualPage(1);
      dispatch(filterBrand(selectedBrand));
    } catch (error) {
      console.error("Error filtering by brand:", error.message);
    }
  };

  return (
    // Contenedor principal del filtro de marca
    <div className="mb-4 w-full">
      <div className="mr-1">
        <h2 className="block text-sm font-bold mb-4 text-PrimaryColor">Cuidados</h2>

        {/* Selector de marcas */}
        <div className="mb-4">
          <label
            htmlFor="brand"
            className="block text-sm font-medium text-SecondaryColor"
          >
            Seleccionar cuidados:
          </label>
          <select
            id="brand"
            value={selectedBrand}
            onChange={(e) => handleBrandChange(e.target.value)}
            className="mt-1 block w-full py-2 px-3 border border-LightGray bg-White rounded-md shadow-sm focus:outline-none focus:ring-PrimaryColor focus:border-PrimaryColor sm:text-sm"
          >
            <option value="">Seleccionar cuidados</option>
            {brandList.map((brand) => (
              <option key={brand.id} value={brand.brand}>
                {brand.brand}
              </option>
            ))}
          </select>
        </div>

        {/* Botón para aplicar el filtro */}
        <button
          onClick={handleFilterClick}
          className="transition duration-300 bg-PrimaryColor hover:bg-SecondaryColor text-White font-bold py-2 px-4 rounded"
        >
          Filtrar
        </button>
      </div>
    </div>
  );
};

export default BrandFilterComponent;


import React from "react";
import Productcards from "../../Components/Productcards/Productcards";
import Banners from "../../Components/Banners/Banners";
import BannersUp from "../../Components/Banners/BannersUp";
import SortByPriceButtons from "../../Components/FilterComponents/sortByPriceComponent";
import Pagination from "../../Components/Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import ProductFilter from "../../Components/FilterComponents/productfilter";
import Searchbar from "../../Components/Searchbar/Searchbar";

function Home({ actualPage, handlePageChange, setActualPage }) {
  // Obtiene la lista completa de productos del estado global
  const { products } = useSelector((state) => state.products);
  
  // Para obtener la ruta actual (por ejemplo, para mostrar u ocultar ciertos elementos)
  const location = useLocation();

  // Para despachar acciones, aunque en este componente no se usa actualmente
  const dispatch = useDispatch();

  // Manejo básico de carga y validación del estado products
  if (!products) {
    return <div>Cargando...</div>;
  }
  if (!Array.isArray(products)) {
    console.error("El estado de los productos no es un array:", products);
    return <div>Error al cargar los productos</div>;
  }

  // Cantidad de productos por página
  const cardsXpage = 9;

  // Cálculo de índices para paginación
  const indexOfLastCard = actualPage * cardsXpage;
  const indexOfFirstCard = indexOfLastCard - cardsXpage;

  // Productos que se mostrarán en la página actual
  const currentCards = products.slice(indexOfFirstCard, indexOfLastCard);

  // Número total de páginas
  const totalPages = Math.ceil(products.length / cardsXpage);

  return (
    <>
      {/* Contenedor principal: diseño flexible para diferentes tamaños de pantalla */}
      <div className="flex flex-col md:flex-row tablet:flex-row tablet:items-start justify-center w-full pt-2 sm:items-center">
        
        {/* Barra de búsqueda solo visible en pantallas pequeñas */}
        <div className="p-8 tablet:hidden shadow-md">
          {location.pathname === "/" && (
            <Searchbar
              className="mx-auto"
              setActualPage={(num) => setActualPage(num)}
            />
          )}
        </div>

        {/* Filtro de productos en barra lateral */}
        <div className="mb-2 tablet:mr-2 tablet:w-56 flex flex-col rounded items-center justify-center shadow-md tablet:sticky tablet:top-4 tablet:z-50">
          <ProductFilter setActualPage={(num) => setActualPage(num)} />
        </div>

        {/* Contenedor principal de productos y componentes relacionados */}
        <div className="w-full md:w-auto bg-White p-2 mb-2 rounded shadow-lg">
          
          {/* Banner superior */}
          <div className="lg:w-full ">
            <BannersUp />
          </div>

          {/* Botones para ordenar por precio */}
          <div className="tablet:ml-[70%] tablet:sticky">
            <SortByPriceButtons setActualPage={(num) => setActualPage(num)} />
          </div>

          {/* Lista de productos y paginación */}
          <div className="w-full md:w-auto bg-White p-2 mb-2 rounded shadow-lg">
            <Productcards products={currentCards} />
            <Pagination
              handlePage={handlePageChange}
              actualPage={actualPage}
              totalPages={totalPages}
            />
          </div>
        </div>
      </div>

      {/* Banner inferior */}
      <div className="lg:w-full ">
        <Banners />
      </div>
    </>
  );
}

export default Home;

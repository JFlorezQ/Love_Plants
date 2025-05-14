import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";

import addToCartIcon from "../../icons/add-to-cart.png";
import addedToCartIcon from "../../icons/added-to-cart.png";
import emptyHeartIcon from "../../icons/emptyHeart.png";
import filledHeartIcon from "../../icons/filledHeart.png";
import Swal from 'sweetalert2';

function Productcard({
  id,
  name,
  description,
  price,
  realPrice,
  discount,
  specifications,
  stock,
  category,
  color,
  images,
  brand,
  images
}) {
  // Estados para controlar si el producto está en carrito o favoritos y loaders
  const [addedToCart, setAddedToCart] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingFavorites, setLoadingFavorites] = useState(false);
  const [addedToFavorites, setAddedToFavorites] = useState(false);

  // Obtención de sesiones de usuario desde cookies y redux
  const userSessionFromCookies = Cookies.get("userSession");
  const userGoogleFromCookies = Cookies.get("userGoogle");
  const userSession = userSessionFromCookies ? JSON.parse(userSessionFromCookies) : null;
  const userGoogleSession = userGoogleFromCookies ? JSON.parse(userGoogleFromCookies) : null;
  const { login } = useSelector((state) => state.login);
  const { usersGoogle } = useSelector((state) => state.users);

  // Determina el ID del usuario según sesión disponible
  const userId =
    (userSession && userSession.userId) ||
    (login && login.userSession.userId) ||
    (usersGoogle && usersGoogle.id) ||
    (userGoogleSession && userGoogleSession.id);

  // Función para agregar producto al carrito
  const handleAddToCart = async () => {
    try {
      if (!userId) {
        // Alerta si no hay sesión y pregunta si quiere iniciar sesión
        const choice = await Swal.fire({
          title: 'Error',
          text: 'Para agregar productos al carrito, por favor inicia sesión o regístrate. ¿Quieres iniciar sesión?',
          icon: 'error',
          showCancelButton: true,
          confirmButtonText: 'Continuar',
          cancelButtonText: 'Cancelar',
          confirmButtonColor: 'var(--AccentColor)',
          cancelButtonColor: 'var(--SecondaryColor)'
        });

        if (choice.isConfirmed) {
          window.location.href = "/userlogin";
          return;
        } else {
          return;
        }
      }

      setLoading(true);

      await axios.post(
        "https://drewili-pf-back.onrender.com/salesCart/addToSalesCart",
        {
          productId: id,
          userId,
          quantity: 1,
        }
      );

      setAddedToCart(true);
    } catch (error) {
      console.error("Error en la solicitud:", error);
    } finally {
      setLoading(false);
    }
  };

  // Función para agregar producto a favoritos
  const handleAddToFavorites = async () => {
    try {
      setLoadingFavorites(true);

      if (!userId) {
        // Alerta si no hay sesión y pregunta si quiere iniciar sesión
        const choice = await Swal.fire({
          title: 'Error',
          text: 'Para continuar, por favor inicia sesión o regístrate. ¿Quieres iniciar sesión?',
          icon: 'error',
          showCancelButton: true,
          confirmButtonText: 'Continuar',
          cancelButtonText: 'Cancelar',
          confirmButtonColor: 'var(--AccentColor)',
          cancelButtonColor: 'var(--SecondaryColor)'
        });

        if (choice.isConfirmed) {
          window.location.href = "/userlogin";
          return;
        } else {
          return;
        }
      }

      await axios.post(
        "https://drewili-pf-back.onrender.com/favorites",
        {
          product_id: id,
          user_id: userId,
        }
      );

      setAddedToFavorites(true);
    } catch (error) {
      console.error("Error en la solicitud de favoritos:", error);
    } finally {
      setLoadingFavorites(false);
    }
  };

  // Constante para truncar el texto si es muy largo
  const MAX_NAME_LENGTH = 25;

  const TruncateText = ({ text, maxLength }) => {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };

  return (
    <div className="m-4 p-4 rounded shadow-lg hover:shadow-xl h-auto w-80 bg-White flex flex-col items-center justify-evenly">
      <NavLink
        to={`/detail/${id}`}
        className="flex flex-col items-center justify-center"
      >
        <div className="tablet:w-48">
          <img
            src={images?.[0]}
            className="w-full h-52 object-contain object-center rounded-t"
            alt={name}
          />
        </div>
        <div className="mt-4 text-center">
          <h2 className="text-lg font-semibold text-PrimaryColor">
            {TruncateText({ text: name.toUpperCase(), maxLength: MAX_NAME_LENGTH })}
          </h2>
          <div className="flex justify-between items-center mt-2 flex-col">
            {realPrice && discount > 0 ? (
              <>
                <h3 className="line-through text-NeutralColor">$ {realPrice}</h3>
                <h3 className="text-SecondaryColor font-bold">$ {price}</h3>
              </>
            ) : (
              <h3 className="text-SecondaryColor font-bold">$ {price}</h3>
            )}
            <h3 className="text-NeutralColor">{color}</h3>
          </div>
        </div>
      </NavLink>

      <div className="flex gap-4 mt-4">
        {stock === 0 ? (
          <button
            className="bg-SecondaryColor text-White font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
            disabled
          >
            <img
              src={addedToCart ? addedToCartIcon : addToCartIcon}
              alt={addedToCart ? "Agregado al carrito" : "Agregar al carrito"}
              className="w-6 h-6"
            />
          </button>
        ) : (
          <button
            onClick={handleAddToCart}
            className={`transition duration-300 ${addedToCart ? "bg-White" : "bg-PrimaryColor"
              } hover:bg-SecondaryColor text-White font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline`}
            disabled={loading || addedToCart}
          >
            <img
              src={addedToCart ? addedToCartIcon : addToCartIcon}
              alt={addedToCart ? "Agregado al carrito" : "Agregar al carrito"}
              className="w-6 h-6"
            />
          </button>
        )}

        <button
          onClick={handleAddToFavorites}
          className={`transition duration-300 ${addedToFavorites ? "bg-White" : "bg-PrimaryColor"
            } hover:bg-SecondaryColor text-White font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline`}
          disabled={loadingFavorites || addedToFavorites}
        >
          <img
            src={addedToFavorites ? filledHeartIcon : emptyHeartIcon}
            alt={addedToFavorites ? "Agregado a favoritos" : "Agregar a favoritos"}
            className="w-6 h-6"
          />
        </button>
      </div>
    </div>
  );
}

export default Productcard;


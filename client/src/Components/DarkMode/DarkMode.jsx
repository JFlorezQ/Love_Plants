
import React, { useState, useEffect } from "react";
import { MdOutlineLightMode } from "react-icons/md";
import { MdNightlight } from "react-icons/md";

// Componente para alternar entre modo claro y oscuro
const DarkModeToggle = () => {
  const [theme, setTheme] = useState("light"); // Estado inicial: claro

  useEffect(() => {
    // Al cambiar el tema, agrega o quita la clase "dark" del elemento HTML principal
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  // Función que cambia entre modo claro y oscuro
  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    // Botón que alterna el tema, con margen derecho y colores adaptables según el modo
    <button
      className="mr-8 text-PrimaryColor dark:text-White hover:text-AccentColor transition-colors duration-300"
      onClick={handleChangeTheme}
    >
      {/* Icono cambia según el tema actual */}
      {theme === "light" ? <MdNightlight /> : <MdOutlineLightMode />}      
    </button>
  );
};

export default DarkModeToggle;

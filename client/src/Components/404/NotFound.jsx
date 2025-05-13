import React from "react";
import logo from "../../icons/logoOriginal.png";

// Componente funcional para la página de error 404 (No encontrada)
const NotFound = () => {
  return (
    // Contenedor principal centrado vertical y horizontalmente
    <div className="flex items-center justify-center h-screen flex-col bg-White">

      {/* Imagen del logo centrada, con margen inferior y padding alrededor */}
      <img src={logo} alt="Logo" className="mb-4 max-w-1/2 p-4" />

      {/* Título de error 404 con tamaño grande, texto centrado, negrita, y color principal */}
      <h2 className="text-4xl font-bold mb-2 text-PrimaryColor">
        404 - Página no encontrada
      </h2>
    </div>
  );
};

export default NotFound;

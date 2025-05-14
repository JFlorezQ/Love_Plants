function BannersUp() {
  return (
    // Contenedor principal con márgenes, ancho máximo y sin desbordamiento
    <div className="m-4 max-w-full overflow-hidden bg-White">

      {/* Contenedor para imágenes alineadas horizontalmente, centradas vertical y horizontalmente */}
      <div className="flex flex-wrap mb-4 justify-center items-center gap-4">

        {/* Imagen "Nuestros Productos" con tamaño máximo definido y bordes redondeados */}
        <img
          src="/Imagen4.png"
          alt="Nuestros Productos"
          className="max-h-[21rem] w-[40rem] rounded-lg shadow-md"
        />

        {/* Imagen secundaria adicional con dimensiones específicas, bordes redondeados */}
        <img
          src="./Frame1.png"
          alt="bannersUp"
          className="max-h-[21rem] w-[20rem] rounded-lg shadow-md"
        />

      </div>
    </div>
  );
}

export default BannersUp;
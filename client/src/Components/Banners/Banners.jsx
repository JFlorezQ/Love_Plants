function Banners() {
  return (
    // Contenedor principal con márgenes, padding, ancho máximo y sin desbordamiento
    <div className="m-4 p-8 max-w-full overflow-hidden bg-White">
      
      {/* Banner principal centrado con margen inferior y padding horizontal */}
      <div className="flex justify-center items-center mb-4 px-20">
        <img
          src="/banner1.png"
          alt="banner1"
          className="w-full h-[30rem] object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Contenedor secundario para banners 2 y 3, alineados horizontalmente */}
      <div className="flex justify-center items-stretch gap-4 px-20">
        {/* Banner 2: ocupa la mitad del ancho disponible */}
        <div className="w-1/2 h-[30rem] overflow-hidden rounded-lg shadow-md">
          <img
            src="/banner2.png"
            alt="banner2"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Banner 3: ocupa la otra mitad del ancho disponible */}
        <div className="w-1/2 h-[30rem] overflow-hidden rounded-lg shadow-md">
          <img
            src="/banner3.png"
            alt="banner3"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Banners;

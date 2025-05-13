/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Activa soporte de modo oscuro mediante clase
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Archivos que Tailwind analizará

  theme: {
    colors: {
      // Colores principales (modificar solo estos para cambiar toda la UI)
      PrimaryColor: "#A5B68D",      // Color principal (botones principales, elementos destacados)
      SecondaryColor: "#404145",    // Color secundario (botones secundarios, fondos alternos)
      AccentColor: "#E50046",       // Color de acento (alertas, enlaces)
      NeutralColor: "#ECDFCC",      // Color neutro para fondos secundarios

      // Básicos (blanco y negro)
      White: "#FFFFFF",             // Blanco estándar
      Black: "#1A1A1A",             // Negro estándar

      // Colores adicionales para estados específicos
      Success: "#15803d",           // Éxito (verde)
      Warning: "#facc15",           // Advertencia (amarillo)
      Info: "#0000ff",              // Información (azul)
      LightGray: "#c8c8c8",         // Gris claro adicional
      PinkAccent: "#FDAB9E",        // Color adicional decorativo
    },

    extend: {
      // Extensiones personalizadas para tamaños específicos
      width: {
        "16vw": "16vw",
        "40vw": "40vw",
        "60vw": "70vw",
        "90vw": "80vw",
      },
      height: {
        "40vh": "50vh",
        "90vh": "89.7vh",
      },

      // Breakpoints personalizados
      screens: {
        tablet: "769px", // Breakpoint personalizado para tablet
      },
    },
  },

  plugins: [], // Plugins adicionales (añadir aquí si se necesitan)
};

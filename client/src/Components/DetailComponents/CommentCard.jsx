import React from "react";
import {
  TiStarFullOutline,
  TiStarHalfOutline,
  TiStarOutline,
} from "react-icons/ti";

// Componente para mostrar una reseña de usuario
function CommentCard({ username, comment, createdAt, rating }) {
  // Función para renderizar estrellas según la calificación (entera, media o vacía)
  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      const isHalfStar = i - 0.5 === rating;
      const isFullStar = i <= rating;

      stars.push(
        <span key={i} style={{ display: "inline-block", marginRight: "3px" }}>
          {isFullStar ? (
            <TiStarFullOutline color="var(--AccentColor)" />
          ) : isHalfStar ? (
            <TiStarHalfOutline color="var(--AccentColor)" />
          ) : (
            <TiStarOutline color="var(--AccentColor)" />
          )}
        </span>
      );
    }

    return stars;
  };

  return (
    // Contenedor principal con bordes y padding
    <div className="border border-PrimaryColor rounded-md p-4 w-3/4 bg-White text-Black">
      <div className="flex">
        {/* Columna izquierda con nombre, fecha y estrellas */}
        <div className="border-r border-PrimaryColor pr-4">
          <h2 className="text-left font-bold">{username}</h2>
          <h3 className="text-left text-SecondaryColor">{createdAt}</h3>
          {rating !== undefined && (
            <div className="text-left mt-1">{renderStars()}</div>
          )}
        </div>

        {/* Columna derecha con el comentario */}
        <div className="pl-4">
          <p className="text-left text-NeutralColor">{comment}</p>
        </div>
      </div>
    </div>
  );
}

export default CommentCard;

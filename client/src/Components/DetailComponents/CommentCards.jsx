import React from "react";
import CommentCard from "./CommentCard";

// Componente para mostrar una lista de comentarios relacionados a un producto específico
function CommentCards({ comments, detailId, averageStars }) {
  // Filtra los comentarios que coinciden con el ID del producto
  const filteredComments = comments.filter((comment) => comment.productId == detailId);

  return (
    // Contenedor principal de los comentarios
    <div className="bg-White text-Black p-4 rounded-md">
      {/* Muestra la calificación promedio si está disponible */}
      {averageStars !== null && averageStars !== undefined && (
        <p className="mb-4 text-SecondaryColor">
          Calificación promedio: {averageStars.toFixed(2)} estrellas
        </p>
      )}

      {/* Muestra cada comentario filtrado si hay resultados */}
      {filteredComments && Array.isArray(filteredComments) && filteredComments.length > 0 ? (
        filteredComments.map((comment) => (
          <CommentCard
            key={comment.id}
            id={comment.id}
            productId={comment.productId}
            username={comment.username}
            comment={comment.comment}
            rating={comment.rating}
            createdAt={comment.createdAt}
            updatedAt={comment.updatedAt}
          />
        ))
      ) : (
        // Mensaje alternativo si no hay comentarios disponibles
        <p className="text-NeutralColor">No hay comentarios disponibles.</p>
      )}
    </div>
  );
}

export default CommentCards;

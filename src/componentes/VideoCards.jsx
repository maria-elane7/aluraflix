// src/componentes/VideoCards.jsx
import React, { useState } from "react";
import "/src/componentes/pages/VideoCards.css";



function VideoCard({ video, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(video.titulo);
  const [newDescription, setNewDescription] = useState(video.descricao);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    onEdit(video.id, newTitle, newDescription);
    setIsEditing(false);
  };

  const videoId = video.url.split("v=")[1]?.split("&")[0];

  return (
    <div className="video-card">
      {!isEditing ? (
        <>
          <h3>{video.titulo}</h3>
          <p>{video.descricao}</p>
          {videoId ? (
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${videoId}`}
              title={video.titulo}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <p>Vídeo inválido</p>
          )}
          <div className="video-actions">
            <button onClick={() => setIsEditing(true)}>Editar</button>
            <button onClick={() => onDelete(video.id)}>Excluir</button>
          </div>
        </>
      ) : (
        <form onSubmit={handleEditSubmit} className="edit-form">
          <label>
            Título:
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
          </label>
          <label>
            Descrição:
            <textarea
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
            ></textarea>
          </label>
          <div className="edit-actions">
            <button type="submit">Salvar</button>
            <button type="button" onClick={() => setIsEditing(false)}>
              Cancelar
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default VideoCard;

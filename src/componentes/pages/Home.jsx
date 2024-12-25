import React, { useContext } from 'react';
import { VideoContext } from './VideoContext';


function Home() {
  const { videos } = useContext(VideoContext); // Obtém os vídeos do contexto

  return (
    <div className="conteudo-pricipal">
      <div className="video-cards">
        {videos.map((video) => (
          <div key={video.id} className="video-card">
            <img src={video.imagem} alt={video.titulo} />
            <h3>{video.titulo}</h3>
            <p>{video.descricao}</p>
            <button>Editar</button>
            <button>Excluir</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

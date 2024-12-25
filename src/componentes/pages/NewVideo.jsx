
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useVideos } from "../../context/VideoContext";
import { validateYouTubeURL } from "../../utils/validateYouTubeURL"; 

import "./NewVideo.css"
function NewVideo() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [url, setUrl] = useState("");
  const { addVideo } = useVideos();  
  const navigate = useNavigate(); 

  
  const handleSubmit = (e) => {
    e.preventDefault();

   
    if (!validateYouTubeURL(url)) {
      alert("URL do YouTube inválida!"); 
      return;
    }

   
    const newVideo = {
      id: Date.now(), 
      titulo,
      descricao,
      url,
    };

    
    addVideo(newVideo);

    
    navigate("/");
  };

  return (
    <div className="novo-video-container">
      <h2>Adicionar Novo Vídeo</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título</label>
          <input 
            type="text" 
            value={titulo} 
            onChange={(e) => setTitulo(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Descrição</label>
          <textarea 
            value={descricao} 
            onChange={(e) => setDescricao(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>URL do YouTube</label>
          <input 
            type="url" 
            value={url} 
            onChange={(e) => setUrl(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Adicionar Vídeo</button>
      </form>
    </div>
  );
}

export default NewVideo;

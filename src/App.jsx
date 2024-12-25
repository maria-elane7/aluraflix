// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useVideos } from "./context/VideoContext";
import Header from "./componentes/Cabecalho/Header";
import Footer from "./componentes/footer/rodape";
import VideoCard from "./componentes/VideoCards";
import NewVideo from "./componentes/pages/NewVideo";
import "./index.css";

function App() {
  const { videos, editVideo, deleteVideo } = useVideos();

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div className="conteudo">
              <h2>Vídeos</h2>
              <div className="video-list">
                {videos.length > 0 ? (
                  videos.map((video) => (
                    <VideoCard
                      key={video.id}
                      video={video}
                      onEdit={editVideo}
                      onDelete={deleteVideo}
                    />
                  ))
                ) : (
                  <p>Não há vídeos para exibir.</p>
                )}
              </div>
            </div>
          }
        />
        <Route path="/new-video" element={<NewVideo />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

// src/components/VideoList.jsx
import React, { useEffect } from "react";
import { useVideos } from "../VideoContext";

function VideoList() {
  const { videos, setVideos } = useVideos();

  useEffect(() => {
    // Carregar dados ou vídeos para o estado
    setVideos([
      { id: 1, title: "Video 1" },
      { id: 2, title: "Video 2" },
    ]);
  }, [setVideos]);

  return (
    <div>
      <h2>Lista de Vídeos</h2>
      <ul>
        {videos.map(video => (
          <li key={video.id}>{video.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default VideoList;

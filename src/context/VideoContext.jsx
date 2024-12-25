// src/context/VideoContext.jsx
import React, { createContext, useContext, useState } from "react";

const VideoContext = createContext();

export const useVideos = () => useContext(VideoContext);

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);

  const addVideo = (video) => {
    setVideos((prevVideos) => [...prevVideos, video]);
  };

  const editVideo = (id, newTitle, newDescription) => {
    setVideos((prevVideos) =>
      prevVideos.map((video) =>
        video.id === id
          ? { ...video, titulo: newTitle, descricao: newDescription }
          : video
      )
    );
  };

  const deleteVideo = (id) => {
    setVideos((prevVideos) => prevVideos.filter((video) => video.id !== id));
  };

  return (
    <VideoContext.Provider
      value={{ videos, addVideo, editVideo, deleteVideo }}
    >
      {children}
    </VideoContext.Provider>
  );
};

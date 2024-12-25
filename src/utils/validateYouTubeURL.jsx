// src/utils/validateYouTubeURL.js
export const validateYouTubeURL = (url) => {
    const youtubeRegex = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.be)\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S+)([a-zA-Z0-9\-_]{11})$/;
    return youtubeRegex.test(url);
  };
  
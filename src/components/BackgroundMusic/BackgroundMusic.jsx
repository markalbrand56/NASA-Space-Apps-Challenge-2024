import { useState, useRef } from "react";
import { TbPlaylist, TbPlaylistOff } from "react-icons/tb";


const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const playMusic = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/sound/space.mp3");
      audioRef.current.loop = true;
      audioRef.current.volume = 0.5;

      audioRef.current.addEventListener("error", (e) => {
        console.error("Error al cargar el archivo de audio:", e);
        console.error("Detalles del error:", e.target.error);
      });
    }

    audioRef.current
      .play()
      .then(() => setIsPlaying(true))
      .catch((error) => {
        console.error("Error al reproducir música:", error);
      });
  };

  const pauseMusic = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="absolute top-0 right-0 p-4">
      <button
        className=" text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          if (isPlaying) {
            pauseMusic();
          } else {
            playMusic();
          }
        }}
      >
        {isPlaying ? <TbPlaylistOff className="text-xl"/> : <TbPlaylist className="text-xl" />}
      </button>
    </div>
  );
};

export default BackgroundMusic;
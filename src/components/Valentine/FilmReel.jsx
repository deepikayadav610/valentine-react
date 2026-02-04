import { useEffect, useRef } from "react";
import "./FilmReel.css";

const photos = [
  "/image/maitri1.jpg",
  "/image/maitri2.jpg",
  "/image/maitri3.jpg",
  "/image/maitri4.jpg",
  "/image/maitri5.jpg",
  "/image/maitri6.jpg",
  "/image/maitri7.jpg",
  "/image/maitri8.jpg",
];

export default function FilmReel({ playing, explode }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (playing && audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
  }, [playing]);

  // 🔁 duplicate photos for seamless loop
  const loopPhotos = [...photos, ...photos];

  return (
    <>
      <audio ref={audioRef} src="/music/love.mp3" loop />

      {/* TOP REEL */}
      <div className={`film-reel top ${explode ? "explode" : ""}`}>
        <div className="film-strip">
          {loopPhotos.map((img, i) => (
            <div
              key={i}
              className="frame"
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>
      </div>

      {/* BOTTOM REEL */}
      <div className={`film-reel bottom ${explode ? "explode" : ""}`}>
        <div className="film-strip reverse">
          {loopPhotos.map((img, i) => (
            <div
              key={i}
              className="frame"
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>
      </div>
    </>
  );
}

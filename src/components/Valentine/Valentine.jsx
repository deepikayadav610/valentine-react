import { useState } from "react";
import "./Valentine.css";
import FloatingHearts from "./FloatingHearts";
import FloatingPhotos from "./FloatingPhotos";
import FilmReel from "./FilmReel";
import HeartBurst from "./HeartBurst";

export default function Valentine() {
  const [celebrate, setCelebrate] = useState(false);
  const [explode, setExplode] = useState(false);
  const [tries, setTries] = useState(0);

  const handleYes = () => {
    setCelebrate(true);
    setExplode(true);
  };
  const escapeNo = (e) => {
    e.preventDefault();
    setTries((t) => t + 1);

    const x = (Math.random() - 0.5) * 320;
    const y = (Math.random() - 0.5) * 180;
    const r = (Math.random() - 0.5) * 25;

    e.target.style.transform = `translate(${x}px, ${y}px) rotate(${r}deg)`;
  };

  return (
    <div className="valentine-wrapper d-flex align-items-center justify-content-center">
      <FilmReel playing={!celebrate} explode={explode} />

      {celebrate && <HeartBurst />}
      <FloatingHearts />
      <FloatingPhotos />

      <div className="valentine-card text-center p-4 p-md-5">
        <p className="sub-text fade-in">
          Life is better with you in it… so I have a very important question 🥺
        </p>

        <h1 className="main-question bounce-in">
          Will you be my Valentine? ❤️
        </h1>

        <div className="d-flex  flex-sm-row gap-4 justify-content-center mt-4">
          <button className=" btn-yes" onClick={() => setCelebrate(true)}>
            YES 💖
          </button>

          <button
            className=" btn-no"
            onMouseEnter={escapeNo}
            onClick={escapeNo}
          >
            NO 🙈
          </button>
        </div>

        {tries > 0 && (
          <p className="hint-text mt-3">Hmm… that button is shy 😏</p>
        )}
      </div>

      {celebrate && (
        <div className="celebration-overlay">
          <div className="celebration-box">
            <div className="fs-1 mb-3">🎉💖🎉</div>
            <h2 className="pop-text">YAY!!!</h2>
            <p className="fs-5 mt-2">
              Best decision ever 🥰 I can’t wait to be your Valentine ❤️
            </p>
            <p className="mt-2">Get ready for kisses & cuddles 😘</p>
          </div>
        </div>
      )}
    </div>
  );
}

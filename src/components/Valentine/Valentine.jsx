import { useState } from "react";
import "./Valentine.css";
import FloatingHearts from "./FloatingHearts";
import FloatingPhotos from "./FloatingPhotos";
import FilmReel from "./FilmReel";
import HeartBurst from "./HeartBurst";

export default function Valentine() {
  const hints = [
    "Hmm… that button is shy 😏",
    "Oops! It ran away again 🏃‍♂️💨",
    "Nice try 😜 but NO isn’t an option",
    "The NO button is scared of love 💕",
    "It really doesn’t want to be clicked 🙈",
    "Come on… just say YES already 😍",
  ];

  const [celebrate, setCelebrate] = useState(false);
  const [explode, setExplode] = useState(false);
  const [tries, setTries] = useState(0);
  const [hint, setHint] = useState("");

  const handleYes = () => {
    setCelebrate(true);
    setExplode(true);
  };

  const escapeNo = (e) => {
    e.preventDefault();

    setTries((t) => t + 1);
    setHint(hints[Math.floor(Math.random() * hints.length)]);

    const btn = e.currentTarget;
    if (!btn) return;

    const x = (Math.random() - 0.5) * 320;
    const y = (Math.random() - 0.5) * 180;
    const r = (Math.random() - 0.5) * 25;

    btn.style.transform = `translate(${x}px, ${y}px) rotate(${r}deg)`;
  };

  return (
    <div className="valentine-wrapper d-flex align-items-center justify-content-center">
      {!celebrate && (
        <FilmReel
          key={Date.now()} // force remount so animation/audio restarts
          playing={!celebrate}
          explode={explode}
        />
      )}

      {celebrate && <HeartBurst />}
      <FloatingHearts />
      <FloatingPhotos />

      <div className="valentine-card text-center mx-auto p-4 p-md-5">
        <p className="sub-text fade-in">
          Life is better with you in it… so I have a very important question 🥺
        </p>

        <h1 className="main-question bounce-in">
          Will you be my Valentine? ❤️
        </h1>

        <div className="d-flex flex-sm-row gap-4 justify-content-center mt-4 position-relative">
          <button className="btn-yes" onClick={handleYes}>
            YES 💖
          </button>

          <button
            className="btn-no"
            onMouseEnter={escapeNo} // desktop
            onTouchStart={escapeNo} // mobile
            onClick={escapeNo}
          >
            NO 🙈
          </button>
        </div>

        {tries > 0 && (
          <p key={tries} className="hint-text mt-3 fade-in">
            {hint}
          </p>
        )}
      </div>

      {celebrate && (
        <div className="celebration-overlay">
          <div className="celebration-box">
            {/* Close Button */}
            <button
              className="close-btn"
              onClick={() => {
                setCelebrate(false);
                setExplode(false);
              }}
            >
              &times;
            </button>

            <div className="fs-1 mb-3">🎉💖🎉</div>
            <h2 className="pop-text">Yayyyyy!!!</h2>
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

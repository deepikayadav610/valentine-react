export default function FloatingPhotos() {
  const handleLoop = (e) => {
    e.currentTarget.play(); // restart video when it ends
  };

  return (
    <div className="floating-photos">
      {/* VIDEO – TOP LEFT */}
      <div
        className="photo-card"
        style={{ top: "12%", left: "8%", "--r": "-8deg" }}
      >
        <div className="photo-img">
          <video
            src="/video/maitri1.mp4"
            autoPlay
            loop
            muted
            playsInline
            onEnded={handleLoop}
          />
        </div>
      </div>

      {/* VIDEO – TOP RIGHT */}
      <div
        className="photo-card"
        style={{ top: "14%", right: "8%", "--r": "6deg" }}
      >
        <div className="photo-img">
          <video
            src="/video/maitri2.mp4"
            autoPlay
            loop
            muted
            playsInline
            onEnded={handleLoop}
          />
        </div>
      </div>

      {/* VIDEO – BOTTOM LEFT */}
      <div
        className="photo-card"
        style={{ bottom: "12%", left: "6%", "--r": "-6deg" }}
      >
        <div className="photo-img">
          <video
            src="/video/maitri3.mp4"
            autoPlay
            loop
            muted
            playsInline
            onEnded={handleLoop}
          />
        </div>
      </div>

      {/* VIDEO – BOTTOM RIGHT */}
      <div
        className="photo-card"
        style={{ bottom: "10%", right: "10%", "--r": "8deg" }}
      >
        <div className="photo-img">
          <video
            src="/video/maitri4.mp4"
            autoPlay
            loop
            muted
            playsInline
            onEnded={handleLoop}
          />
        </div>
      </div>
    </div>
  );
}

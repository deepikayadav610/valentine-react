export default function FloatingPhotos() {
  return (
    <div className="floating-photos">
      {/* IMAGE – TOP LEFT */}
      <div
        className="photo-card"
        style={{ top: "12%", left: "8%", "--r": "-8deg" }}
      >
        <div className="photo-img">
          <img src="/image/maitri7.jpg" alt="Us" />
        </div>
      </div>

      {/* IMAGE – BOTTOM RIGHT */}
      <div
        className="photo-card"
        style={{ bottom: "10%", right: "10%", "--r": "8deg" }}
      >
        <div className="photo-img">
          <img src="/image/maitri8.jpg" alt="You" />
        </div>
      </div>

      {/* VIDEO – TOP RIGHT */}
      <div
        className="photo-card"
        style={{ top: "14%", right: "8%", "--r": "6deg" }}
      >
        <div className="photo-img">
          <video src="/video/maitri1.mp4" autoPlay loop muted playsInline />
        </div>
      </div>

      {/* VIDEO – BOTTOM LEFT */}
      <div
        className="photo-card"
        style={{ bottom: "12%", left: "6%", "--r": "-6deg" }}
      >
        <div className="photo-img">
          <video src="/video/maitri2.mp4" autoPlay loop muted playsInline />
        </div>
      </div>
    </div>
  );
}

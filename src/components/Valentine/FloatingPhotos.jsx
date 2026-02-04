export default function FloatingPhotos() {
  return (
    <div className="floating-photos">
      {/* VIDEO 1 */}
      <div
        className="photo-card"
        style={{ top: "60%", left: "6%", "--r": "6deg" }}
      >
        <div className="photo-img">
          <video src="/video/maitri1.mp4" autoPlay loop muted playsInline />
        </div>
      </div>
      
      {/* IMAGE 1 */}
      <div
        className="photo-card"
        style={{ top: "14%", left: "8%", "--r": "-8deg" }}
      >
        <div className="photo-img">
          <img src="/image/maitri7.jpg" alt="Us" />
        </div>
      </div>

      {/* IMAGE 2 */}
      <div
        className="photo-card"
        style={{ top: "18%", right: "8%", "--r": "8deg" }}
      >
        <div className="photo-img">
          <img src="/image/maitri8.jpg" alt="You" />
        </div>
      </div>

      {/* VIDEO 2 */}
      <div
        className="photo-card"
        style={{ top: "65%", right: "12%", "--r": "-6deg" }}
      >
        <div className="photo-img">
          <video src="/video/maitri2.mp4" autoPlay loop muted playsInline />
        </div>
      </div>
    </div>
  );
}

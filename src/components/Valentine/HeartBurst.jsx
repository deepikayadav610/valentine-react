import "./HeartBurst.css";

export default function HeartBurst() {
  return (
    <div className="heart-burst">
      {Array.from({ length: 30 }).map((_, i) => (
        <span key={i}>❤️</span>
      ))}
    </div>
  );
}

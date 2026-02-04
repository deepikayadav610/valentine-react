export default function FloatingHearts() {
  const hearts = Array.from({ length: 18 });

  return (
    <div className="floating-bg">
      {hearts.map((_, i) => (
        <span
          key={i}
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${6 + Math.random() * 6}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          💖
        </span>
      ))}
    </div>
  );
}

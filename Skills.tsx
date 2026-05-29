export default function FloatingElements() {
  const elements = [
    { emoji: '✨', delay: '0s', duration: '8s', left: '10%', top: '20%' },
    { emoji: '🌸', delay: '1s', duration: '10s', left: '80%', top: '15%' },
    { emoji: '⭐', delay: '2s', duration: '7s', left: '15%', top: '60%' },
    { emoji: '💖', delay: '0.5s', duration: '9s', left: '85%', top: '70%' },
    { emoji: '✨', delay: '3s', duration: '11s', left: '50%', top: '40%' },
    { emoji: '🌸', delay: '1.5s', duration: '8.5s', left: '70%', top: '50%' },
    { emoji: '⭐', delay: '2.5s', duration: '9.5s', left: '25%', top: '85%' }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((el, index) => (
        <div
          key={index}
          className="absolute text-3xl opacity-30 animate-float"
          style={{
            left: el.left,
            top: el.top,
            animationDelay: el.delay,
            animationDuration: el.duration
          }}
        >
          {el.emoji}
        </div>
      ))}

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          25% {
            transform: translateY(-20px) rotate(5deg);
          }
          50% {
            transform: translateY(-40px) rotate(-5deg);
          }
          75% {
            transform: translateY(-20px) rotate(3deg);
          }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

import { useEffect } from "react";

interface ConfettiEffectProps {
  trigger: boolean;
}

export default function ConfettiEffect({ trigger }: ConfettiEffectProps) {
  useEffect(() => {
    if (!trigger) return;

    const colors = ['#8B5CF6', '#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#EC4899', '#06B6D4', '#84CC16'];
    const shapes = ['●', '★', '♦', '■', '▲', '♠', '♥', '♣'];
    const confettiContainer = document.getElementById('confetti-container');
    
    if (!confettiContainer) return;

    // Create multiple bursts for more spectacular effect
    for (let burst = 0; burst < 3; burst++) {
      setTimeout(() => {
        for (let i = 0; i < 80; i++) {
          setTimeout(() => {
            const confetti = document.createElement('div');
            const isShape = Math.random() > 0.5;
            
            if (isShape) {
              // Text-based shapes
              confetti.textContent = shapes[Math.floor(Math.random() * shapes.length)];
              confetti.className = 'absolute text-lg animate-confetti pointer-events-none select-none';
              confetti.style.color = colors[Math.floor(Math.random() * colors.length)];
            } else {
              // Geometric shapes
              confetti.className = 'absolute animate-confetti pointer-events-none';
              confetti.style.width = Math.random() * 8 + 4 + 'px';
              confetti.style.height = Math.random() * 8 + 4 + 'px';
              confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
              confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            }
            
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.animationDelay = Math.random() * 1 + 's';
            confetti.style.animationDuration = (Math.random() * 2 + 3) + 's';
            confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
            
            confettiContainer.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 6000);
          }, i * 30);
        }
      }, burst * 500);
    }

    // Add sparkle effects
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        const sparkle = document.createElement('div');
        sparkle.textContent = '✨';
        sparkle.className = 'absolute text-2xl animate-confetti pointer-events-none select-none';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.animationDelay = Math.random() * 2 + 's';
        sparkle.style.animationDuration = (Math.random() * 3 + 2) + 's';
        
        confettiContainer.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 5000);
      }, i * 100);
    }
  }, [trigger]);

  return <div id="confetti-container" className="fixed inset-0 pointer-events-none z-50"></div>;
}

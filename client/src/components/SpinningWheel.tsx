import { useEffect, useState } from "react";

interface SpinningWheelProps {
  isSpinning: boolean;
  min: number;
  max: number;
}

export default function SpinningWheel({ isSpinning, min, max }: SpinningWheelProps) {
  const [displayText, setDisplayText] = useState(`${min}-${max}`);

  useEffect(() => {
    setDisplayText(`${min}-${max}`);
  }, [min, max]);

  return (
    <div className="relative mb-8">
      <div 
        className={`w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 border-8 border-white/20 flex items-center justify-center relative overflow-hidden ${
          isSpinning ? 'animate-spin' : ''
        }`}
        style={{
          animation: isSpinning ? 'spin 2s ease-out' : 'none'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform rotate-45"></div>
        <div className="relative z-10 text-white font-black text-2xl md:text-4xl opacity-60">
          <div className={isSpinning ? '' : 'animate-spin-slow'}>
            {displayText}
          </div>
        </div>
      </div>
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-yellow-400">
        <i className="fas fa-caret-down text-3xl drop-shadow-lg"></i>
      </div>
    </div>
  );
}

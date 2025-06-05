import { useEffect, useState } from "react";

interface NumberDisplayProps {
  numbers: number[];
  luckyMode: boolean;
  onCopy: () => void;
  onRegenerate: () => void;
}

export default function NumberDisplay({ numbers, luckyMode, onCopy, onRegenerate }: NumberDisplayProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const text = numbers.join(', ');
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      onCopy();
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  if (numbers.length === 0) {
    return (
      <div className="w-full max-w-md">
        <div className="glass-card p-8 min-h-[200px] flex items-center justify-center">
          <div className="text-center text-purple-300">
            <i className="fas fa-arrow-up text-4xl mb-4 animate-bounce"></i>
            <p className="text-lg">Click Generate to get your random numbers!</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md">
      <div className="glass-card p-8 min-h-[200px] flex flex-col justify-center animate-slide-up">
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {numbers.map((num, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-r from-purple-500 to-blue-500 text-white font-black text-2xl md:text-3xl px-6 py-4 rounded-xl shadow-lg animate-number-pop"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {num}
              {luckyMode && (
                <div className="absolute -top-1 -right-1 text-yellow-400 text-xs animate-ping">
                  ✨
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleCopy}
            className="bg-green-500/20 hover:bg-green-500/40 border border-green-500/30 text-green-300 hover:text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-300"
          >
            <i className={`fas ${copied ? 'fa-check' : 'fa-copy'}`}></i>
            <span>{copied ? 'Copied!' : 'Copy'}</span>
          </button>
          <button
            onClick={onRegenerate}
            className="bg-purple-500/20 hover:bg-purple-500/40 border border-purple-500/30 text-purple-300 hover:text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-300"
          >
            <i className="fas fa-redo"></i>
            <span>Again</span>
          </button>
        </div>
      </div>
    </div>
  );
}

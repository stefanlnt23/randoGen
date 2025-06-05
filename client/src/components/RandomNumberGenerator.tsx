import { useState } from "react";
import SpinningWheel from "./SpinningWheel";
import NumberDisplay from "./NumberDisplay";
import ConfettiEffect from "./ConfettiEffect";
import { useRandomGenerator } from "@/hooks/useRandomGenerator";
import { useLocalStorage } from "@/hooks/useLocalStorage";

interface GenerationHistory {
  numbers: number[];
  timestamp: string;
}

export default function RandomNumberGenerator() {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(10);
  const [quantity, setQuantity] = useState(1);
  const [noDuplicates, setNoDuplicates] = useState(false);
  const [evenOnly, setEvenOnly] = useState(false);
  const [luckyMode, setLuckyMode] = useState(false);
  const [activePreset, setActivePreset] = useState('1-10');
  const [confettiTrigger, setConfettiTrigger] = useState(false);
  
  const [history, setHistory] = useLocalStorage<GenerationHistory[]>('numberHistory', []);
  
  const { 
    numbers, 
    isGenerating, 
    generateNumbers 
  } = useRandomGenerator();

  const presets = [
    { label: '1-10', min: 1, max: 10 },
    { label: '1-100', min: 1, max: 100 },
    { label: '1-1000', min: 1, max: 1000 },
  ];

  const diceOptions = [
    { label: '1D6', count: 1, sides: 6 },
    { label: '2D6', count: 2, sides: 6 },
    { label: '3D6', count: 3, sides: 6 },
  ];

  const handlePresetClick = (preset: typeof presets[0]) => {
    setMin(preset.min);
    setMax(preset.max);
    setActivePreset(preset.label);
  };

  const handleDiceClick = async (dice: typeof diceOptions[0]) => {
    const result = await generateNumbers({
      type: 'dice',
      count: dice.count,
      sides: dice.sides
    });
    
    addToHistory(result);
    checkForSpecialNumbers(result);
  };

  const handleGenerate = async () => {
    const result = await generateNumbers({
      type: 'range',
      min,
      max,
      quantity,
      noDuplicates,
      evenOnly
    });
    
    addToHistory(result);
    checkForSpecialNumbers(result);
  };

  const addToHistory = (newNumbers: number[]) => {
    const historyItem: GenerationHistory = {
      numbers: newNumbers,
      timestamp: new Date().toLocaleTimeString()
    };
    
    const newHistory = [historyItem, ...history.slice(0, 9)];
    setHistory(newHistory);
  };

  const checkForSpecialNumbers = (numbers: number[]) => {
    const specialNums = [7, 13, 21, 42, 69, 77, 88, 99, 111, 777, 888, 999];
    const hasSpecial = numbers.some(num => specialNums.includes(num));
    const hasRepeatingDigits = numbers.some(num => {
      const str = num.toString();
      return str.length > 1 && str.split('').every(digit => digit === str[0]);
    });
    const hasSequence = numbers.length > 1 && numbers.every((num, index) => 
      index === 0 || num === numbers[index - 1] + 1
    );
    const allEven = numbers.every(num => num % 2 === 0);
    const allOdd = numbers.every(num => num % 2 === 1);
    
    // Trigger confetti for special numbers, repeating digits, sequences, or all even/odd
    if (hasSpecial || hasRepeatingDigits || hasSequence || (numbers.length > 1 && (allEven || allOdd))) {
      setConfettiTrigger(prev => !prev);
    }
    
    // Also trigger confetti randomly for any generation (10% chance for extra fun)
    if (Math.random() < 0.1) {
      setConfettiTrigger(prev => !prev);
    }
  };

  return (
    <section className="mb-20">
      <ConfettiEffect trigger={confettiTrigger} />
      
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Side - Controls */}
        <div className="lg:col-span-1 space-y-6 animate-slide-up">
          
          {/* Range Selection */}
          <div className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <i className="fas fa-sliders-h text-purple-400 mr-3"></i>
              Range Settings
            </h3>
            
            {/* Quick Presets */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-purple-200 mb-3">Quick Presets</label>
              <div className="grid grid-cols-3 gap-2">
                {presets.map((preset) => (
                  <button
                    key={preset.label}
                    onClick={() => handlePresetClick(preset)}
                    className={`preset-button ${activePreset === preset.label ? 'active' : ''}`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Range */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-purple-200 mb-3">Custom Range</label>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-purple-300 mb-1">Min</label>
                  <input
                    type="number"
                    value={min}
                    onChange={(e) => {
                      setMin(parseInt(e.target.value) || 1);
                      setActivePreset('');
                    }}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs text-purple-300 mb-1">Max</label>
                  <input
                    type="number"
                    value={max}
                    onChange={(e) => {
                      setMax(parseInt(e.target.value) || 10);
                      setActivePreset('');
                    }}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-purple-200 mb-3">
                Quantity (1-20)
              </label>
              <input
                type="range"
                min="1"
                max="20"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-xs text-purple-300 mt-1">
                <span>1</span>
                <span className="font-semibold text-white">{quantity}</span>
                <span>20</span>
              </div>
            </div>

            {/* Special Options */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-purple-200">No Duplicates</span>
                <label className="toggle-switch">
                  <input
                    type="checkbox"
                    checked={noDuplicates}
                    onChange={(e) => setNoDuplicates(e.target.checked)}
                  />
                  <div className="toggle-bg"></div>
                  <div className="toggle-dot"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-purple-200">Even Numbers Only</span>
                <label className="toggle-switch">
                  <input
                    type="checkbox"
                    checked={evenOnly}
                    onChange={(e) => setEvenOnly(e.target.checked)}
                  />
                  <div className="toggle-bg"></div>
                  <div className="toggle-dot"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-purple-200">Lucky Mode ✨</span>
                <label className="toggle-switch">
                  <input
                    type="checkbox"
                    checked={luckyMode}
                    onChange={(e) => setLuckyMode(e.target.checked)}
                  />
                  <div className="toggle-bg"></div>
                  <div className="toggle-dot"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Dice Mode */}
          <div className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <i className="fas fa-dice text-green-400 mr-3"></i>
              Dice Mode
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {diceOptions.map((dice) => (
                <button
                  key={dice.label}
                  onClick={() => handleDiceClick(dice)}
                  className="dice-button"
                  disabled={isGenerating}
                >
                  {dice.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Center - Main Generator */}
        <div className="lg:col-span-2 flex flex-col items-center justify-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
          
          {/* Spinning Wheel Visual */}
          <SpinningWheel isSpinning={isGenerating} min={min} max={max} generatedNumbers={numbers} />

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className={`group relative mb-8 gradient-button text-xl md:text-2xl px-12 py-6 ${
              isGenerating ? 'opacity-50 cursor-not-allowed' : 'animate-pulse-custom'
            }`}
          >
            <div className="flex items-center space-x-3">
              <i className={`fas ${isGenerating ? 'fa-spinner animate-spin' : 'fa-magic group-hover:animate-spin'} text-2xl`}></i>
              <span>{isGenerating ? 'Generating...' : 'GENERATE'}</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
          </button>

          {/* Results Display */}
          <NumberDisplay
            numbers={numbers}
            luckyMode={luckyMode}
            onCopy={() => {}}
            onRegenerate={handleGenerate}
          />

          {/* History */}
          <div className="w-full max-w-md mt-6">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10">
              <h4 className="text-sm font-semibold text-purple-200 mb-3 flex items-center">
                <i className="fas fa-history text-purple-400 mr-2"></i>
                Recent Results
              </h4>
              <div className="space-y-2 text-sm text-purple-300">
                {history.length === 0 ? (
                  <div className="text-center py-4 opacity-50">No history yet</div>
                ) : (
                  history.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-1">
                      <span className="font-mono">{Array.isArray(item.numbers) ? item.numbers.join(', ') : String(item.numbers)}</span>
                      <span className="text-xs opacity-75">{item.timestamp}</span>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

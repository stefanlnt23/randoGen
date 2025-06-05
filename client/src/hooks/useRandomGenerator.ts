import { useState } from 'react';
import { generateSecureRandomNumbers, generateDiceRoll } from '@/lib/randomGenerator';

interface GenerateOptions {
  type: 'range' | 'dice';
  min?: number;
  max?: number;
  quantity?: number;
  noDuplicates?: boolean;
  evenOnly?: boolean;
  count?: number;
  sides?: number;
}

export function useRandomGenerator() {
  const [numbers, setNumbers] = useState<number[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateNumbers = async (options: GenerateOptions): Promise<number[]> => {
    setIsGenerating(true);
    
    // Simulate animation delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    let result: number[] = [];
    
    if (options.type === 'dice' && options.count && options.sides) {
      result = generateDiceRoll(options.count, options.sides);
    } else if (options.type === 'range') {
      result = generateSecureRandomNumbers({
        min: options.min || 1,
        max: options.max || 10,
        quantity: options.quantity || 1,
        noDuplicates: options.noDuplicates || false,
        evenOnly: options.evenOnly || false
      });
    }
    
    setNumbers(result);
    setIsGenerating(false);
    
    return result;
  };

  return {
    numbers,
    isGenerating,
    generateNumbers
  };
}

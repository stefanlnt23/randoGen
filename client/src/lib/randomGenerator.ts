interface RandomOptions {
  min: number;
  max: number;
  quantity: number;
  noDuplicates: boolean;
  evenOnly: boolean;
}

export function generateSecureRandomNumbers(options: RandomOptions): number[] {
  const { min, max, quantity, noDuplicates, evenOnly } = options;
  const numbers: number[] = [];
  const used = new Set<number>();
  
  for (let i = 0; i < quantity; i++) {
    let num: number;
    let attempts = 0;
    
    do {
      // Use crypto.getRandomValues for cryptographically secure random numbers
      const array = new Uint32Array(1);
      crypto.getRandomValues(array);
      const randomFloat = array[0] / (0xffffffff + 1);
      
      num = Math.floor(randomFloat * (max - min + 1)) + min;
      
      if (evenOnly && num % 2 !== 0) {
        num = num < max ? num + 1 : num - 1;
      }
      
      attempts++;
    } while (noDuplicates && used.has(num) && attempts < 1000);
    
    if (!noDuplicates || !used.has(num)) {
      numbers.push(num);
      used.add(num);
    }
  }
  
  return numbers;
}

export function generateDiceRoll(count: number, sides: number): number[] {
  const results: number[] = [];
  
  for (let i = 0; i < count; i++) {
    const array = new Uint32Array(1);
    crypto.getRandomValues(array);
    const randomFloat = array[0] / (0xffffffff + 1);
    const roll = Math.floor(randomFloat * sides) + 1;
    results.push(roll);
  }
  
  return results;
}

export function isSpecialNumber(num: number): boolean {
  const specialNumbers = [7, 13, 21, 42, 69, 77, 88, 99, 111, 777, 888, 999];
  return specialNumbers.includes(num);
}

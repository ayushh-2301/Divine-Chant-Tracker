// Interface for CounterCard component

export interface CounterCardProps {
  deityName: string;
  count: number;
  onClick?: () => void;
}

// Simple function to format large numbers
export const formatCount = (count: number): string => {
  if (count >= 1000000) {
    return `${(count / 1000000).toFixed(1)}M`;
  }
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}K`;
  }
  return count.toString();
};

// Function to get a random spiritual color
export const getRandomColor = (): string => {
  const colors = [
    '#FF9933', // Saffron
    '#000080', // Navy Blue
    '#4B0082', // Indigo
    '#FFD700', // Gold
    '#800080', // Purple
    '#006400', // Dark Green
  ];
  
  return colors[Math.floor(Math.random() * colors.length)];
};
// Utility functions for the Divine Chant Tracker

export const divineNames = [
  'Ram',
  'Krishna',
  'Shiva',
  'Durga',
  'Hanuman',
  'Lakshmi',
  'Ganesh',
  'Vishnu',
  'Parvati',
  'Saraswati',
  'Radha',
  'Kali',
  'Rama',
  'Govinda',
  'Hare'
];

export const formatCount = (count: number): string => {
  if (count >= 1000000) {
    return `${(count / 1000000).toFixed(1)}M`;
  }
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}K`;
  }
  return count.toString();
};

export const getMotivationalQuote = (): string => {
  const quotes = [
    "The repetition of the divine name is the simplest and most direct path to spiritual realization.",
    "In the silence of the heart, the divine name resonates eternally.",
    "Each utterance of the divine name purifies the soul and brings you closer to the divine.",
    "Chant the name of the Lord and be free from all worldly attachments.",
    "The name of God is the treasure of all treasures.",
    "Regular recitation of divine names brings peace, prosperity, and spiritual growth.",
    "The divine name is the bridge between the human and the divine.",
    "Through constant remembrance, the devotee becomes one with the divine."
  ];
  
  return quotes[Math.floor(Math.random() * quotes.length)];
};

export const calculateStreak = (lastActiveDates: Date[]): number => {
  if (lastActiveDates.length === 0) return 0;
  
  // Sort dates in descending order
  const sortedDates = [...lastActiveDates].sort((a, b) => b.getTime() - a.getTime());
  
  let streak = 1;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  // Check if the last activity was today
  const lastActivity = new Date(sortedDates[0]);
  lastActivity.setHours(0, 0, 0, 0);
  
  if (lastActivity.getTime() !== today.getTime()) {
    // If last activity wasn't today, check if it was yesterday
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    if (lastActivity.getTime() !== yesterday.getTime()) {
      return 0; // No streak
    }
  }
  
  // Calculate consecutive days
  for (let i = 0; i < sortedDates.length - 1; i++) {
    const currentDate = new Date(sortedDates[i]);
    currentDate.setHours(0, 0, 0, 0);
    
    const nextDate = new Date(sortedDates[i + 1]);
    nextDate.setHours(0, 0, 0, 0);
    
    const diffTime = currentDate.getTime() - nextDate.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) {
      streak++;
    } else {
      break;
    }
  }
  
  return streak;
};
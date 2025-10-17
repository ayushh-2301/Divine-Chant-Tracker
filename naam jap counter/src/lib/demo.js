// Demo file to showcase functionality

// Import our utility functions
const { divineNames, formatCount, getMotivationalQuote, calculateStreak } = require('./utils');

// Demonstrate divine names
console.log('Divine Names in the system:');
divineNames.forEach((name, index) => {
  console.log(`${index + 1}. ${name}`);
});

console.log('\n---\n');

// Demonstrate count formatting
console.log('Count Formatting Examples:');
console.log(`50 -> ${formatCount(50)}`);
console.log(`1500 -> ${formatCount(1500)}`);
console.log(`2500000 -> ${formatCount(2500000)}`);

console.log('\n---\n');

// Demonstrate motivational quotes
console.log('Motivational Quotes:');
for (let i = 0; i < 3; i++) {
  console.log(`${i + 1}. "${getMotivationalQuote()}"`);
}

console.log('\n---\n');

// Demonstrate streak calculation
console.log('Streak Calculation:');
const today = new Date();
const yesterday = new Date(today);
yesterday.setDate(yesterday.getDate() - 1);
const dates = [today, yesterday];
console.log(`Streak for ${dates.length} consecutive days: ${calculateStreak(dates)}`);
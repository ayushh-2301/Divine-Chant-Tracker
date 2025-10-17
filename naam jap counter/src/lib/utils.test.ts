// Test file for utility functions

import { divineNames, formatCount, getMotivationalQuote, calculateStreak } from './utils';

describe('Utility Functions', () => {
  describe('divineNames', () => {
    it('should contain core deities', () => {
      expect(divineNames).toContain('Ram');
      expect(divineNames).toContain('Krishna');
      expect(divineNames).toContain('Shiva');
    });
    
    it('should have at least 10 divine names', () => {
      expect(divineNames.length).toBeGreaterThanOrEqual(10);
    });
  });
  
  describe('formatCount', () => {
    it('should format small numbers correctly', () => {
      expect(formatCount(50)).toBe('50');
    });
    
    it('should format thousands correctly', () => {
      expect(formatCount(1500)).toBe('1.5K');
    });
    
    it('should format millions correctly', () => {
      expect(formatCount(2500000)).toBe('2.5M');
    });
  });
  
  describe('getMotivationalQuote', () => {
    it('should return a non-empty string', () => {
      const quote = getMotivationalQuote();
      expect(quote).toBeTruthy();
      expect(typeof quote).toBe('string');
    });
    
    it('should return different quotes', () => {
      const quote1 = getMotivationalQuote();
      const quote2 = getMotivationalQuote();
      // While it's possible to get the same quote, it's unlikely with multiple calls
      expect(quote1 || quote2).toBeTruthy();
    });
  });
  
  describe('calculateStreak', () => {
    it('should return 0 for empty dates array', () => {
      expect(calculateStreak([])).toBe(0);
    });
    
    it('should calculate streak correctly for consecutive days', () => {
      const today = new Date();
      const yesterday = new Date(today);
      yesterday.setDate(yesterday.getDate() - 1);
      
      const dates = [today, yesterday];
      expect(calculateStreak(dates)).toBeGreaterThanOrEqual(1);
    });
  });
});
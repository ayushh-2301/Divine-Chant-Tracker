// Theme service for Divine Chant Tracker

export type Theme = 'light' | 'dark';

export interface ThemeColors {
  primary: string;
  secondary: string;
  background: string;
  text: string;
  accent: string;
}

// Spiritual color schemes
export const spiritualThemes = {
  light: {
    primary: '#FF9933',    // Saffron
    secondary: '#FFFFFF',  // White
    background: '#F8F9FA', // Light gray
    text: '#333333',       // Dark gray
    accent: '#000080',     // Navy blue
  },
  dark: {
    primary: '#FF9933',    // Saffron
    secondary: '#1A1A1A',  // Dark gray
    background: '#000000', // Black
    text: '#FFFFFF',       // White
    accent: '#4B0082',     // Indigo
  }
};

// Mock implementation of theme service
export const themeService = {
  // Get current theme
  getCurrentTheme: (): Theme => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as Theme) || 'light';
    }
    return 'light';
  },
  
  // Set theme
  setTheme: (theme: Theme): void => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
      document.documentElement.setAttribute('data-theme', theme);
    }
  },
  
  // Toggle between light and dark themes
  toggleTheme: (): void => {
    const currentTheme = themeService.getCurrentTheme();
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    themeService.setTheme(newTheme);
  },
  
  // Get theme colors
  getColors: (theme: Theme): ThemeColors => {
    return spiritualThemes[theme];
  },
  
  // Apply theme to document
  applyTheme: (theme: Theme): void => {
    const colors = themeService.getColors(theme);
    
    if (typeof document !== 'undefined') {
      document.documentElement.style.setProperty('--primary-color', colors.primary);
      document.documentElement.style.setProperty('--secondary-color', colors.secondary);
      document.documentElement.style.setProperty('--background-color', colors.background);
      document.documentElement.style.setProperty('--text-color', colors.text);
      document.documentElement.style.setProperty('--accent-color', colors.accent);
    }
  }
};

// Initialize theme on app start
export const initializeTheme = (): void => {
  const theme = themeService.getCurrentTheme();
  themeService.applyTheme(theme);
};
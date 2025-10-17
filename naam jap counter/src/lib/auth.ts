// Authentication service for Divine Chant Tracker

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

// Mock authentication functions
export const authService = {
  // Simulate user login
  login: async (email: string, password: string): Promise<User | null> => {
    // In a real app, this would call an API
    if (email && password) {
      return {
        id: '1',
        name: 'Devotee',
        email: email,
      };
    }
    return null;
  },
  
  // Simulate user signup
  signup: async (name: string, email: string, password: string): Promise<User | null> => {
    // In a real app, this would call an API
    if (name && email && password) {
      return {
        id: '1',
        name: name,
        email: email,
      };
    }
    return null;
  },
  
  // Simulate logout
  logout: async (): Promise<void> => {
    // In a real app, this would clear tokens and session data
    console.log('User logged out');
  },
  
  // Get current user
  getCurrentUser: async (): Promise<User | null> => {
    // In a real app, this would check session/token validity
    return {
      id: '1',
      name: 'Devotee',
      email: 'devotee@example.com',
    };
  },
  
  // Check if user is authenticated
  isAuthenticated: (): boolean => {
    // In a real app, this would check for valid tokens
    return true;
  }
};

// JWT token simulation
export const tokenService = {
  generateToken: (user: User): string => {
    // In a real app, this would generate a JWT token
    return `mock-jwt-token-for-${user.id}`;
  },
  
  verifyToken: (token: string): User | null => {
    // In a real app, this would verify the JWT token
    if (token.startsWith('mock-jwt-token-for-')) {
      const userId = token.replace('mock-jwt-token-for-', '');
      return {
        id: userId,
        name: 'Devotee',
        email: 'devotee@example.com',
      };
    }
    return null;
  }
};
// Database models and types for Divine Chant Tracker

export interface User {
  id: string;
  name: string;
  email: string;
  password_hash: string;
  created_at: Date;
}

export interface Recitation {
  id: string;
  user_id: string;
  god_name: string;
  count: number;
  date: Date;
}

export interface Goal {
  id: string;
  user_id: string;
  god_name: string;
  daily_goal: number;
  streak: number;
  last_active: Date;
}

// Mock data for development
export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Devotee',
    email: 'devotee@example.com',
    password_hash: 'hashed_password_here',
    created_at: new Date(),
  }
];

export const mockRecitations: Recitation[] = [
  {
    id: '1',
    user_id: '1',
    god_name: 'Ram',
    count: 108,
    date: new Date(),
  },
  {
    id: '2',
    user_id: '1',
    god_name: 'Krishna',
    count: 54,
    date: new Date(),
  },
  {
    id: '3',
    user_id: '1',
    god_name: 'Shiva',
    count: 76,
    date: new Date(),
  }
];

export const mockGoals: Goal[] = [
  {
    id: '1',
    user_id: '1',
    god_name: 'Ram',
    daily_goal: 108,
    streak: 5,
    last_active: new Date(),
  },
  {
    id: '2',
    user_id: '1',
    god_name: 'Krishna',
    daily_goal: 108,
    streak: 3,
    last_active: new Date(),
  }
];

// Database operations (to be implemented with Prisma or other ORM)
export const dbOperations = {
  getUserById: async (id: string): Promise<User | null> => {
    // Mock implementation
    return mockUsers.find(user => user.id === id) || null;
  },
  
  getRecitationsByUser: async (userId: string): Promise<Recitation[]> => {
    // Mock implementation
    return mockRecitations.filter(recitation => recitation.user_id === userId);
  },
  
  getGoalsByUser: async (userId: string): Promise<Goal[]> => {
    // Mock implementation
    return mockGoals.filter(goal => goal.user_id === userId);
  },
  
  updateRecitationCount: async (userId: string, godName: string, increment: number): Promise<void> => {
    // Mock implementation
    console.log(`Updating ${godName} count for user ${userId} by ${increment}`);
  },
  
  updateGoalStreak: async (userId: string, godName: string): Promise<void> => {
    // Mock implementation
    console.log(`Updating streak for ${godName} goal for user ${userId}`);
  }
};
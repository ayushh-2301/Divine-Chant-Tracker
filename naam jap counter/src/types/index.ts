// Type definitions for Divine Chant Tracker

export interface DivineName {
  id: string;
  name: string;
  transliteration?: string;
  meaning?: string;
  significance?: string;
}

export interface RecitationSession {
  id: string;
  userId: string;
  startTime: Date;
  endTime?: Date;
  totalCount: number;
  deityCounts: Record<string, number>;
}

export interface UserGoal {
  id: string;
  userId: string;
  deityName: string;
  dailyTarget: number;
  currentStreak: number;
  lastActiveDate?: Date;
  isActive: boolean;
}

export interface UserPreference {
  id: string;
  userId: string;
  language: 'en' | 'hi';
  theme: 'light' | 'dark';
  notifications: {
    dailyReminder: boolean;
    goalAchievement: boolean;
    streakReminder: boolean;
  };
  voiceRecognition: {
    enabled: boolean;
    language: string;
  };
}

export interface ReportData {
  period: 'daily' | 'weekly' | 'monthly' | 'yearly';
  startDate: Date;
  endDate: Date;
  totalRecitations: number;
  deityBreakdown: Record<string, number>;
  progress: {
    currentValue: number;
    targetValue: number;
    percentage: number;
  };
}

export interface AnalyticsData {
  totalRecitations: number;
  topDeity: string;
  currentStreak: number;
  longestStreak: number;
  weeklyAverage: number;
  monthlyTotal: number;
  yearlyTotal: number;
}

export interface ExportData {
  format: 'pdf' | 'csv';
  data: ReportData | AnalyticsData;
  filename: string;
}

// Application state types
export interface AppState {
  currentUser: User | null;
  isAuthenticated: boolean;
  isListening: boolean;
  currentSession: RecitationSession | null;
  preferences: UserPreference | null;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  createdAt: Date;
  lastLoginAt?: Date;
}
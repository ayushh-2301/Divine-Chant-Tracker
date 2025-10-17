// Notification service for Divine Chant Tracker

export type NotificationType = 'success' | 'error' | 'warning' | 'info';

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
}

// Mock implementation of notification service
export const notificationService = {
  // Show a notification
  show: (type: NotificationType, title: string, message: string): void => {
    console.log(`[${type.toUpperCase()}] ${title}: ${message}`);
    // In a real implementation, this would display a toast notification or similar UI element
    
    // Example implementation with browser notifications:
    // if ('Notification' in window && Notification.permission === 'granted') {
    //   new Notification(title, { body: message, icon: '/favicon.ico' });
    // }
  },
  
  // Show a success notification
  success: (title: string, message: string): void => {
    notificationService.show('success', title, message);
  },
  
  // Show an error notification
  error: (title: string, message: string): void => {
    notificationService.show('error', title, message);
  },
  
  // Show a warning notification
  warning: (title: string, message: string): void => {
    notificationService.show('warning', title, message);
  },
  
  // Show an info notification
  info: (title: string, message: string): void => {
    notificationService.show('info', title, message);
  },
  
  // Request permission for browser notifications
  requestPermission: async (): Promise<boolean> => {
    if (!('Notification' in window)) {
      console.log('This browser does not support desktop notification');
      return false;
    }
    
    if (Notification.permission === 'granted') {
      return true;
    }
    
    const permission = await Notification.requestPermission();
    return permission === 'granted';
  }
};

// Predefined spiritual notifications
export const spiritualNotifications = {
  dailyReminder: {
    title: 'Daily Practice Reminder',
    message: 'It\'s time for your daily recitation practice. May your devotion grow stronger each day.'
  },
  
  goalAchieved: {
    title: 'Goal Achieved!',
    message: 'Congratulations on reaching your daily recitation goal. Your dedication is inspiring.'
  },
  
  streakMaintained: {
    title: 'Streak Maintained',
    message: 'You\'ve maintained your recitation streak for another day. Consistency is key on the spiritual path.'
  },
  
  newWeek: {
    title: 'New Week, New Blessings',
    message: 'As this new week begins, may your practice bring you peace and spiritual growth.'
  },
  
  milestone: {
    title: 'Spiritual Milestone',
    message: 'You\'ve reached a significant milestone in your recitation practice. Celebrate this achievement!'
  }
};
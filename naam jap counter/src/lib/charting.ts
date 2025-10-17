// Charting service for Divine Chant Tracker

export interface ChartData {
  labels: string[];
  datasets: ChartDataset[];
}

export interface ChartDataset {
  label: string;
  data: number[];
  backgroundColor: string;
  borderColor?: string;
  borderWidth?: number;
}

// Generate mock chart data for different time ranges
export const generateChartData = (
  timeRange: 'daily' | 'weekly' | 'monthly' | 'yearly',
  deity: string
): ChartData => {
  switch (timeRange) {
    case 'daily':
      return generateDailyData(deity);
    case 'weekly':
      return generateWeeklyData(deity);
    case 'monthly':
      return generateMonthlyData(deity);
    case 'yearly':
      return generateYearlyData(deity);
    default:
      return generateWeeklyData(deity);
  }
};

const generateDailyData = (deity: string): ChartData => {
  return {
    labels: ['12AM', '4AM', '8AM', '12PM', '4PM', '8PM'],
    datasets: [
      {
        label: deity,
        data: [5, 12, 18, 25, 30, 15],
        backgroundColor: '#FF9933',
        borderColor: '#E67300',
        borderWidth: 1
      }
    ]
  };
};

const generateWeeklyData = (deity: string): ChartData => {
  return {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: deity,
        data: [15, 22, 18, 30, 25, 40, 35],
        backgroundColor: '#FF9933',
      }
    ]
  };
};

const generateMonthlyData = (deity: string): ChartData => {
  return {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: deity,
        data: [85, 120, 95, 150],
        backgroundColor: '#FF9933',
      }
    ]
  };
};

const generateYearlyData = (deity: string): ChartData => {
  return {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: deity,
        data: [240, 280, 320, 290, 350, 400, 380, 420, 390, 360, 310, 280],
        backgroundColor: '#FF9933',
      }
    ]
  };
};

// Calculate statistics for the reports
export const calculateStatistics = (data: ChartData) => {
  const total = data.datasets[0].data.reduce((sum, value) => sum + value, 0);
  const average = total / data.datasets[0].data.length;
  const max = Math.max(...data.datasets[0].data);
  const min = Math.min(...data.datasets[0].data);
  
  return {
    total,
    average: Math.round(average * 100) / 100,
    max,
    min
  };
};

// Generate comparison data for multiple deities
export const generateComparisonData = (timeRange: 'daily' | 'weekly' | 'monthly' | 'yearly'): ChartData => {
  const labels = timeRange === 'daily' 
    ? ['12AM', '4AM', '8AM', '12PM', '4PM', '8PM']
    : timeRange === 'weekly'
    ? ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    : timeRange === 'monthly'
    ? ['Week 1', 'Week 2', 'Week 3', 'Week 4']
    : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
  return {
    labels,
    datasets: [
      {
        label: 'Ram',
        data: timeRange === 'daily' 
          ? [5, 12, 18, 25, 30, 15]
          : timeRange === 'weekly'
          ? [15, 22, 18, 30, 25, 40, 35]
          : timeRange === 'monthly'
          ? [85, 120, 95, 150]
          : [240, 280, 320, 290, 350, 400, 380, 420, 390, 360, 310, 280],
        backgroundColor: '#FF9933',
      },
      {
        label: 'Krishna',
        data: timeRange === 'daily' 
          ? [3, 8, 12, 20, 25, 10]
          : timeRange === 'weekly'
          ? [10, 15, 12, 20, 18, 25, 22]
          : timeRange === 'monthly'
          ? [70, 95, 80, 120]
          : [200, 240, 280, 250, 300, 350, 320, 380, 340, 310, 270, 240],
        backgroundColor: '#000080',
      },
      {
        label: 'Shiva',
        data: timeRange === 'daily' 
          ? [2, 5, 10, 15, 20, 8]
          : timeRange === 'weekly'
          ? [8, 12, 10, 18, 15, 22, 20]
          : timeRange === 'monthly'
          ? [60, 85, 70, 100]
          : [180, 220, 250, 230, 280, 320, 290, 350, 310, 280, 240, 210],
        backgroundColor: '#4B0082',
      }
    ]
  };
};
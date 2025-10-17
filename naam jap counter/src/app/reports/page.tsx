'use client';

import { useState } from 'react';
import { mockRecitations } from '@/lib/database';
import { divineNames } from '@/lib/utils';

export default function ReportsPage() {
  const [timeRange, setTimeRange] = useState<'daily' | 'weekly' | 'monthly' | 'yearly'>('weekly');
  
  // Mock data for charts
  const chartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Ram',
        data: [15, 22, 18, 30, 25, 40, 35],
        backgroundColor: '#FF9933',
      },
      {
        label: 'Krishna',
        data: [10, 15, 12, 20, 18, 25, 22],
        backgroundColor: '#000080',
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Recitation Reports</h1>
          <p className="mt-2 text-gray-600">Track your spiritual progress over time</p>
        </div>
        
        {/* Time Range Selector */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="flex flex-wrap gap-4 mb-6">
            <button 
              onClick={() => setTimeRange('daily')}
              className={`px-4 py-2 rounded-lg ${timeRange === 'daily' ? 'bg-saffron text-white' : 'bg-gray-100 text-gray-700'}`}
            >
              Daily
            </button>
            <button 
              onClick={() => setTimeRange('weekly')}
              className={`px-4 py-2 rounded-lg ${timeRange === 'weekly' ? 'bg-saffron text-white' : 'bg-gray-100 text-gray-700'}`}
            >
              Weekly
            </button>
            <button 
              onClick={() => setTimeRange('monthly')}
              className={`px-4 py-2 rounded-lg ${timeRange === 'monthly' ? 'bg-saffron text-white' : 'bg-gray-100 text-gray-700'}`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setTimeRange('yearly')}
              className={`px-4 py-2 rounded-lg ${timeRange === 'yearly' ? 'bg-saffron text-white' : 'bg-gray-100 text-gray-700'}`}
            >
              Yearly
            </button>
          </div>
          
          {/* Chart Placeholder */}
          <div className="bg-gray-100 border-2 border-dashed rounded-xl w-full h-80 flex items-center justify-center">
            <div className="text-center">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-gray-700">Recitation Chart</h3>
              <p className="text-gray-500 mt-2">Interactive chart showing your recitation progress</p>
              <p className="text-sm text-gray-400 mt-4">(Chart.js implementation would go here)</p>
            </div>
          </div>
        </div>
        
        {/* Summary Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900">Total Recitations</h3>
            <p className="mt-2 text-3xl font-bold text-saffron">1,247</p>
            <p className="mt-1 text-sm text-gray-500">+12% from last week</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900">Current Streak</h3>
            <p className="mt-2 text-3xl font-bold text-saffron">12 days</p>
            <p className="mt-1 text-sm text-gray-500">Keep it up!</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900">Top Deity</h3>
            <p className="mt-2 text-3xl font-bold text-saffron">Ram</p>
            <p className="mt-1 text-sm text-gray-500">523 recitations</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900">Goal Completion</h3>
            <p className="mt-2 text-3xl font-bold text-saffron">87%</p>
            <p className="mt-1 text-sm text-gray-500">This week</p>
          </div>
        </div>
        
        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">Recent Activity</h2>
          </div>
          <ul className="divide-y divide-gray-200">
            {mockRecitations.map((recitation) => (
              <li key={recitation.id} className="px-6 py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-medium text-gray-900">
                      Recited <span className="text-saffron">{recitation.god_name}</span>
                    </p>
                    <p className="text-gray-500">{recitation.date.toLocaleDateString()}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-saffron">{recitation.count}</p>
                    <p className="text-gray-500">times</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
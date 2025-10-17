// Goals page for Divine Chant Tracker

export default function GoalsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Spiritual Goals</h1>
          <p className="mt-2 text-gray-600">Set and track your daily recitation goals</p>
        </div>
        
        {/* Goal Setting Form */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Set New Goal</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Deity Name</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-saffron focus:border-saffron">
                <option>Select a deity</option>
                <option>Ram</option>
                <option>Krishna</option>
                <option>Shiva</option>
                <option>Durga</option>
                <option>Hanuman</option>
                <option>Lakshmi</option>
                <option>Ganesh</option>
                <option>Vishnu</option>
                <option>Parvati</option>
                <option>Saraswati</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Daily Goal</label>
              <input 
                type="number" 
                min="1" 
                defaultValue="108" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-saffron focus:border-saffron"
              />
            </div>
            <div className="flex items-end">
              <button className="w-full bg-saffron hover:bg-orange-500 text-white py-2 px-4 rounded-md transition duration-300">
                Set Goal
              </button>
            </div>
          </div>
        </div>
        
        {/* Current Goals */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">Your Current Goals</h2>
          </div>
          <ul className="divide-y divide-gray-200">
            <li className="px-6 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg font-medium text-gray-900">Ram</p>
                  <p className="text-gray-500">Daily goal: 108 recitations</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-saffron">5</p>
                  <p className="text-gray-500">day streak</p>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex justify-between text-sm text-gray-500 mb-1">
                  <span>Progress today</span>
                  <span>76/108</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-saffron h-2.5 rounded-full" style={{ width: '70%' }}></div>
                </div>
              </div>
            </li>
            <li className="px-6 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg font-medium text-gray-900">Krishna</p>
                  <p className="text-gray-500">Daily goal: 108 recitations</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-saffron">3</p>
                  <p className="text-gray-500">day streak</p>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex justify-between text-sm text-gray-500 mb-1">
                  <span>Progress today</span>
                  <span>42/108</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-saffron h-2.5 rounded-full" style={{ width: '39%' }}></div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        
        {/* Motivational Section */}
        <div className="mt-8 bg-gradient-to-r from-saffron to-orange-400 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Continue Your Spiritual Journey</h3>
          <p className="text-lg mb-6">"The repetition of the divine name is the simplest and most direct path to spiritual realization."</p>
          <div className="bg-white bg-opacity-20 rounded-lg px-4 py-2 inline-block">
            <p className="text-sm">Current Streak</p>
            <p className="text-2xl font-bold">5 🔥</p>
          </div>
        </div>
      </div>
    </div>
  );
}
// Settings page for Divine Chant Tracker

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="mt-2 text-gray-600">Customize your Divine Chant Tracker experience</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Settings */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800">Profile Settings</h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      defaultValue="Devotee Name" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-saffron focus:border-saffron"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      defaultValue="devotee@example.com" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-saffron focus:border-saffron"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Language</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-saffron focus:border-saffron">
                      <option>English</option>
                      <option>हिंदी (Hindi)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Theme</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-saffron focus:border-saffron">
                      <option>Light</option>
                      <option>Dark</option>
                    </select>
                  </div>
                </div>
                <div className="mt-6">
                  <button className="bg-saffron hover:bg-orange-500 text-white py-2 px-4 rounded-md transition duration-300">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
            
            {/* Notification Settings */}
            <div className="bg-white rounded-lg shadow overflow-hidden mt-8">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800">Notifications</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Daily Reminder</p>
                      <p className="text-sm text-gray-500">Get reminded to chant daily</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-saffron"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Goal Achievement</p>
                      <p className="text-sm text-gray-500">Notify when you reach your goals</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-saffron"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Streak Reminder</p>
                      <p className="text-sm text-gray-500">Remind to maintain your streak</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-saffron"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div>
            {/* Microphone Settings */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800">Voice Recognition</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-900 mb-2">Microphone Access</p>
                    <button className="w-full bg-saffron hover:bg-orange-500 text-white py-2 px-4 rounded-md transition duration-300">
                      Check Permission
                    </button>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 mb-2">Voice Language</p>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-saffron focus:border-saffron">
                      <option>English (US)</option>
                      <option>English (UK)</option>
                      <option>Hindi</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Account Actions */}
            <div className="bg-white rounded-lg shadow overflow-hidden mt-8">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800">Account</h2>
              </div>
              <div className="p-6 space-y-4">
                <button className="w-full text-left text-sm font-medium text-gray-900 hover:text-saffron">
                  Change Password
                </button>
                <button className="w-full text-left text-sm font-medium text-gray-900 hover:text-saffron">
                  Download Data
                </button>
                <button className="w-full text-left text-sm font-medium text-red-600 hover:text-red-800">
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
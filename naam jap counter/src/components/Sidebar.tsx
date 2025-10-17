export default function Sidebar() {
  return (
    <div className="hidden md:block md:w-64 bg-white shadow-md">
      <div className="py-4">
        <nav>
          <a 
            href="/" 
            className="block py-2 px-4 text-gray-700 hover:bg-saffron hover:text-white transition duration-300"
          >
            Dashboard
          </a>
          <a 
            href="/reports" 
            className="block py-2 px-4 text-gray-700 hover:bg-saffron hover:text-white transition duration-300"
          >
            Reports
          </a>
          <a 
            href="/goals" 
            className="block py-2 px-4 text-gray-700 hover:bg-saffron hover:text-white transition duration-300"
          >
            Goals
          </a>
          <a 
            href="/settings" 
            className="block py-2 px-4 text-gray-700 hover:bg-saffron hover:text-white transition duration-300"
          >
            Settings
          </a>
        </nav>
      </div>
    </div>
  );
}
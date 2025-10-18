'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isListening, setIsListening] = useState(false);
  const [recitations, setRecitations] = useState<{[key: string]: number}>({
    'Ram': 0,
    'Krishna': 0,
    'Shiva': 0,
    'Durga': 0,
    'Hanuman': 0,
    'Lakshmi': 0,
    'Ganesh': 0,
    'Vishnu': 0,
    'Parvati': 0,
    'Saraswati': 0,
  });

  // Initialize Web Speech API
  const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
  const recognition = SpeechRecognition ? new SpeechRecognition() : null;

  useEffect(() => {
    console.log('Home page loaded successfully');
    if (recognition) {
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'en-US';

      recognition.onresult = (event: any) => {
        const transcript = Array.from(event.results)
          .map((result: any) => result[0])
          .map(result => result.transcript)
          .join('');
        
        // Check for divine names in the transcript
        updateRecitations(transcript);
      };

      recognition.onerror = (event: any) => {
        console.error('Speech recognition error', event.error);
      };
    }
  }, []);

  const updateRecitations = (text: string) => {
    const divineNames = Object.keys(recitations);
    const updatedRecitations = {...recitations};
    
    divineNames.forEach(name => {
      const regex = new RegExp(`\\b${name}\\b`, 'gi');
      const matches = text.match(regex);
      if (matches) {
        updatedRecitations[name] += matches.length;
      }
    });
    
    setRecitations(updatedRecitations);
  };

  const toggleListening = () => {
    if (!recognition) {
      alert('Speech recognition is not supported in your browser. Please try Chrome or Edge.');
      return;
    }

    if (isListening) {
      recognition.stop();
    } else {
      recognition.start();
    }
    setIsListening(!isListening);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-saffron">🕉️ Divine Chant Tracker</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">Namaste, devotee!</span>
            <button className="bg-saffron hover:bg-orange-500 text-white px-4 py-2 rounded-lg transition duration-300">
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Your Spiritual Journey</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Track your recitations of divine names and deepen your spiritual practice
          </p>
        </div>

        {/* Voice Recognition Control */}
        <div className="flex justify-center mb-12">
          <button
            onClick={toggleListening}
            className={`px-8 py-4 rounded-full text-xl font-semibold transition duration-300 transform hover:scale-105 ${
              isListening 
                ? 'bg-red-500 hover:bg-red-600 text-white' 
                : 'bg-saffron hover:bg-orange-500 text-white'
            }`}
          >
            {isListening ? '⏹️ Stop Reciting' : '🎙️ Start Reciting'}
          </button>
        </div>

        {/* Recitation Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {Object.entries(recitations).map(([name, count]) => (
            <div 
              key={name} 
              className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-100 hover:shadow-xl transition duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{name}</h3>
              <p className="text-5xl font-bold text-saffron mb-2">{count}</p>
              <p className="text-gray-600">times recited</p>
            </div>
          ))}
        </div>

        {/* Motivational Section */}
        <div className="bg-gradient-to-r from-saffron to-orange-400 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Continue Your Spiritual Journey</h3>
          <p className="text-lg mb-6">"The repetition of the divine name is the simplest and most direct path to spiritual realization."</p>
          <div className="flex justify-center space-x-4">
            <div className="bg-white bg-opacity-20 rounded-lg px-4 py-2">
              <p className="text-sm">Current Streak</p>
              <p className="text-2xl font-bold">5 🔥</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg px-4 py-2">
              <p className="text-sm">Today's Goal</p>
              <p className="text-2xl font-bold">108/108 ✓</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500">
            Divine Chant Tracker - Your companion on the spiritual path
          </p>
        </div>
      </footer>
    </div>
  );
}
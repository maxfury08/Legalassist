import React from 'react';

const Home = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <nav className="flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">Legal Mind Assist</h1>
        <div>
          <a href="#" className="text-gray-300 hover:text-white px-3">Home</a>
          <a href="#" className="text-gray-300 hover:text-white px-3">About</a>
          <a href="#" className="text-gray-300 hover:text-white px-3">Features</a>
          <a href="#" className="text-gray-300 hover:text-white px-3">Contact</a>
          <button className="bg-transparent border border-white py-2 px-4 ml-4 rounded">
            Sign In
          </button>
          <button className="bg-green-500 py-2 px-4 ml-4 rounded">
            Get Started
            </button>
        </div>
      </nav>

      <header className="flex flex-col items-center justify-center min-h-screen bg-pattern bg-cover bg-center text-center p-8">
        {/* Background pattern can be added via Tailwind CSS or as an external image */}
        <img src="path-to-your-scale-image.png" alt="Scale" className="w-full max-w-md h-auto mb-8" />
        
        <h1 className="text-4xl font-bold mb-4">Your Legal Assistant</h1>
        <p className="text-lg mb-2">Start your free trial today</p>
        <p className="text-lg mb-8">Trusted AI-powered legal advisor tailored for the Sri Lankan legal system.</p>
        
        <div>
          <button className="bg-green-500 py-2 px-4 mr-4 rounded">Get Started</button>
          <button className="bg-transparent border border-white py-2 px-4 rounded">Documentation</button>
        </div>
      </header>
    </div>
  );
};

export default Home;

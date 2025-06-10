
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Video Section */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-purple-900/40 via-orange-500/30 to-pink-600/40"></div>
        {/* Placeholder for video - using gradient for now */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/60 via-transparent to-purple-900/40"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between p-6 lg:px-12">
        {/* Logo */}
        <div className="text-2xl lg:text-3xl font-bold text-white">
          <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
            Scene Sariba
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-white hover:text-purple-300 transition-all duration-300 font-semibold hover:scale-105">
            Home
          </Link>
          <Link to="/events" className="text-white hover:text-purple-300 transition-all duration-300 font-semibold hover:scale-105">
            Events
          </Link>
          <Link to="/crew" className="text-white hover:text-purple-300 transition-all duration-300 font-semibold hover:scale-105">
            Crew
          </Link>
          <Link to="/join" className="text-white hover:text-purple-300 transition-all duration-300 font-semibold hover:scale-105">
            Join Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-purple-900/95 z-40 flex flex-col items-center justify-center space-y-8">
          <Link 
            to="/" 
            className="text-white text-2xl font-semibold hover:text-purple-300 transition-all duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/events" 
            className="text-white text-2xl font-semibold hover:text-purple-300 transition-all duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Events
          </Link>
          <Link 
            to="/crew" 
            className="text-white text-2xl font-semibold hover:text-purple-300 transition-all duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Crew
          </Link>
          <Link 
            to="/join" 
            className="text-white text-2xl font-semibold hover:text-purple-300 transition-all duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Join Us
          </Link>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative z-10 flex items-center justify-center min-h-[80vh] text-center px-6">
        <div className="max-w-4xl">
          <h1 className="text-6xl lg:text-8xl font-black text-white mb-6 leading-tight">
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent animate-pulse">
              SCENE
            </span>
            <span className="block bg-gradient-to-r from-orange-400 via-yellow-400 to-purple-400 bg-clip-text text-transparent">
              SARIBA
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-purple-200 mb-8 font-medium">
            Where Culture Meets Rhythm in Puri
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/events" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Upcoming Events
            </Link>
            <Link 
              to="/join" 
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 hover:scale-105"
            >
              Join the Battle
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute top-1/3 right-10 w-8 h-8 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-25 animate-bounce" style={{ animationDelay: '1s' }}></div>
    </div>
  );
};

export default Index;

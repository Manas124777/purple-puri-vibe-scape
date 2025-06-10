
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Calendar, MapPin, Clock, Users } from 'lucide-react';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToEvents = () => {
    const eventsSection = document.getElementById('events');
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const upcomingEvents = [
    {
      id: 1,
      title: "Scene Sariba Summer Jam",
      date: "July 15, 2024",
      time: "6:00 PM - 11:00 PM",
      location: "Puri Beach, Odisha",
      participants: "50+ Dancers",
      description: "The biggest dance battle of the summer featuring crews from across Odisha and beyond."
    },
    {
      id: 2,
      title: "Monsoon Madness",
      date: "August 20, 2024",
      time: "5:00 PM - 10:00 PM",
      location: "Cultural Center, Puri",
      participants: "30+ Dancers",
      description: "Indoor battle session during monsoon season with special cultural performances."
    },
    {
      id: 3,
      title: "Festival of Beats",
      date: "September 10, 2024",
      time: "7:00 PM - 12:00 AM",
      location: "Puri Beach Amphitheater",
      participants: "80+ Dancers",
      description: "Grand celebration combining traditional Odissi with modern street dance styles."
    }
  ];

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
          <button 
            onClick={scrollToEvents}
            className="text-white hover:text-purple-300 transition-all duration-300 font-semibold hover:scale-105"
          >
            Events
          </button>
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
          <button 
            onClick={scrollToEvents}
            className="text-white text-2xl font-semibold hover:text-purple-300 transition-all duration-300"
          >
            Events
          </button>
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
            <button 
              onClick={scrollToEvents}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Upcoming Events
            </button>
            <Link 
              to="/join" 
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 hover:scale-105"
            >
              Join the Battle
            </Link>
          </div>
        </div>
      </div>

      {/* Events Section */}
      <section id="events" className="relative z-10 py-20 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Events Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
                EVENTS
              </span>
            </h2>
            <p className="text-xl text-purple-200 max-w-2xl mx-auto">
              Experience the rhythm of Puri through our electrifying dance battles and cultural celebrations
            </p>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">{event.title}</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-purple-200">
                    <Calendar className="w-5 h-5 mr-3" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-purple-200">
                    <Clock className="w-5 h-5 mr-3" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-purple-200">
                    <MapPin className="w-5 h-5 mr-3" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-purple-200">
                    <Users className="w-5 h-5 mr-3" />
                    <span>{event.participants}</span>
                  </div>
                </div>
                
                <p className="text-white/80 mb-6 leading-relaxed">{event.description}</p>
                
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-full font-bold hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                  Register Now
                </button>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Link 
              to="/join" 
              className="inline-block bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-12 py-4 rounded-full font-bold text-xl hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 hover:scale-105"
            >
              Join Our Next Event
            </Link>
          </div>
        </div>
      </section>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute top-1/3 right-10 w-8 h-8 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-25 animate-bounce" style={{ animationDelay: '1s' }}></div>
    </div>
  );
};

export default Index;

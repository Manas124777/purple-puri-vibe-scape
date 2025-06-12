
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';

const Index = () => {
  const scrollToEvents = () => {
    const eventsSection = document.getElementById('events');
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const upcomingEvents = [
    {
      id: 1,
      title: "Scene Sariba Summer",
      date: "July 15, 2024",
      time: "6:00 PM - 11:00 PM",
      location: "Puri Beach, Odisha",
      participants: "50+ Dancers",
      description: "The biggest dance battle of the summer featuring crews from across Odisha and beyond."
    },
    {
      id: 2,
      title: "Concert",
      date: "August 20, 2024",
      time: "5:00 PM - 10:00 PM",
      location: "Cultural Center, Puri",
      participants: "30+ Dancers",
      description: "Indoor battle session during monsoon season with special cultural performances."
    },
    {
      id: 3,
      title: "Scene Sariba Jam",
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
        <div className="w-full h-full bg-gradient-to-br from-purple-600 via-gray-700 to-purple-700"></div>
        {/* Video Background - placeholder for now */}
        <div className="absolute inset-0 bg-gray-800/40">
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-30"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-purple-700/60 via-gray-800/40 to-purple-600/60"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between p-6 lg:px-12">
        {/* Logo */}
        <div className="text-2xl lg:text-3xl font-bold">
          <span className="bg-gradient-to-r from-purple-300 to-gray-200 bg-clip-text text-transparent">
            Scene Sariba
          </span>
        </div>

        {/* Navigation Links - Always Visible */}
        <div className="flex space-x-4 md:space-x-8">
          <Link to="/" className="text-gray-100 hover:text-purple-300 transition-all duration-300 font-semibold hover:scale-105 text-sm md:text-base">
            Home
          </Link>
          <button 
            onClick={scrollToEvents}
            className="text-gray-100 hover:text-purple-300 transition-all duration-300 font-semibold hover:scale-105 text-sm md:text-base"
          >
            Events
          </button>
          <Link to="/crew" className="text-gray-100 hover:text-purple-300 transition-all duration-300 font-semibold hover:scale-105 text-sm md:text-base">
            Crew
          </Link>
          <Link to="/join" className="text-gray-100 hover:text-purple-300 transition-all duration-300 font-semibold hover:scale-105 text-sm md:text-base">
            Join Us
          </Link>
        </div>
      </nav>

      {/* Hero Section with Video */}
      <div className="relative z-10 flex items-center justify-center min-h-[80vh] text-center px-6">
        {/* Video Placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-4xl aspect-video bg-gray-800/60 rounded-2xl border border-purple-400/40 backdrop-blur-sm flex items-center justify-center">
            <div className="text-gray-200 text-lg font-medium">
              Scene Sariba Dance Battle Video
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl relative z-10">
          <h1 className="text-6xl lg:text-8xl font-black mb-6 leading-tight">
            <span className="block bg-gradient-to-r from-purple-400 via-purple-300 to-gray-300 bg-clip-text text-transparent animate-pulse drop-shadow-lg">
              SCENE
            </span>
            <span className="block bg-gradient-to-r from-gray-300 via-purple-300 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
              SARIBA
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-200 mb-8 font-medium drop-shadow-lg">
            Where Culture Meets Rhythm in Puri
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToEvents}
              className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-purple-700 hover:to-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Upcoming Events
            </button>
            <Link 
              to="/join" 
              className="border-2 border-purple-400 text-gray-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-105"
            >
              Join the Battle
            </Link>
          </div>
        </div>
      </div>

      {/* Events Section */}
      <section id="events" className="relative z-10 py-20 px-6 lg:px-12 bg-gray-800/70 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          {/* Events Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-gray-300 bg-clip-text text-transparent drop-shadow-lg">
                EVENTS
              </span>
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto drop-shadow-lg">
              Experience the rhythm of Puri through our electrifying dance battles and cultural celebrations
            </p>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-gray-700/70 backdrop-blur-md rounded-2xl p-6 hover:bg-gray-600/80 transition-all duration-300 hover:scale-105 border border-purple-400/40">
                <h3 className="text-2xl font-bold text-gray-100 mb-4 drop-shadow-lg">{event.title}</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-purple-300">
                    <Calendar className="w-5 h-5 mr-3" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-purple-300">
                    <Clock className="w-5 h-5 mr-3" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-purple-300">
                    <MapPin className="w-5 h-5 mr-3" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-purple-300">
                    <Users className="w-5 h-5 mr-3" />
                    <span>{event.participants}</span>
                  </div>
                </div>
                
                <p className="text-gray-200 mb-6 leading-relaxed drop-shadow-lg">{event.description}</p>
                
                <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 rounded-full font-bold hover:from-purple-700 hover:to-gray-700 transition-all duration-300">
                  Register Now
                </button>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Link 
              to="/join" 
              className="inline-block bg-gradient-to-r from-purple-500 to-purple-600 text-white px-12 py-4 rounded-full font-bold text-xl hover:from-purple-600 hover:to-gray-600 transition-all duration-300 hover:scale-105"
            >
              Join Our Next Event
            </Link>
          </div>
        </div>
      </section>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute top-1/3 right-10 w-8 h-8 bg-gradient-to-r from-purple-600 to-gray-600 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full opacity-25 animate-bounce" style={{ animationDelay: '1s' }}></div>
    </div>
  );
};

export default Index;

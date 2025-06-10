
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';

const Events = () => {
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
    <div className="min-h-screen relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-orange-600"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/70 via-transparent to-purple-900/50"></div>

      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between p-6 lg:px-12">
        <Link to="/" className="text-2xl lg:text-3xl font-bold text-white">
          <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
            Scene Sariba
          </span>
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-white hover:text-purple-300 transition-all duration-300 font-semibold">Home</Link>
          <Link to="/events" className="text-purple-300 font-semibold">Events</Link>
          <Link to="/crew" className="text-white hover:text-purple-300 transition-all duration-300 font-semibold">Crew</Link>
          <Link to="/join" className="text-white hover:text-purple-300 transition-all duration-300 font-semibold">Join Us</Link>
        </div>
      </nav>

      {/* Content */}
      <div className="relative z-10 px-6 lg:px-12 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-7xl font-black text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
              EVENTS
            </span>
          </h1>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Experience the rhythm of Puri through our electrifying dance battles and cultural celebrations
          </p>
        </div>

        {/* Events Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-16 h-16 bg-gradient-to-r from-orange-400/30 to-yellow-400/30 rounded-full animate-bounce"></div>
    </div>
  );
};

export default Events;

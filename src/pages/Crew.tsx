
import { Link } from 'react-router-dom';
import { Instagram, Youtube, Music } from 'lucide-react';

const Crew = () => {
  const crewMembers = [
    {
      id: 1,
      name: "Arjun Das",
      role: "Founder & Head Choreographer",
      specialty: "Hip-Hop, Krumping",
      bio: "Pioneer of Puri's street dance scene with 8+ years of experience",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Creative Director",
      specialty: "Contemporary, Odissi Fusion",
      bio: "Blending traditional Odissi with modern expressions",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b193?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      name: "Rahul Patra",
      role: "Battle Coordinator",
      specialty: "Breaking, Popping",
      bio: "National level B-boy representing Odisha across India",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 4,
      name: "Sneha Mishra",
      role: "Community Manager",
      specialty: "House, Waacking",
      bio: "Building bridges between dancers and the Puri community",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-800 to-orange-600"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20"></div>
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
          <Link to="/events" className="text-white hover:text-purple-300 transition-all duration-300 font-semibold">Events</Link>
          <Link to="/crew" className="text-purple-300 font-semibold">Crew</Link>
          <Link to="/join" className="text-white hover:text-purple-300 transition-all duration-300 font-semibold">Join Us</Link>
        </div>
      </nav>

      {/* Content */}
      <div className="relative z-10 px-6 lg:px-12 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-7xl font-black text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
              THE CREW
            </span>
          </h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Meet the passionate artists who bring Scene Sariba to life, blending traditional Odia culture with contemporary dance
          </p>
        </div>

        {/* Crew Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {crewMembers.map((member) => (
            <div key={member.id} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-purple-400"
                />
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-purple-300 font-semibold mb-2">{member.role}</p>
                  <p className="text-orange-300 text-sm mb-3">{member.specialty}</p>
                  <p className="text-white/80 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-8">
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Our Community
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-black text-purple-300 mb-2">150+</div>
              <div className="text-white font-semibold">Active Dancers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-orange-300 mb-2">25+</div>
              <div className="text-white font-semibold">Events Organized</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-pink-300 mb-2">5+</div>
              <div className="text-white font-semibold">Years Strong</div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Follow Our Journey</h3>
          <div className="flex justify-center space-x-6">
            <a href="#" className="bg-white/20 p-4 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110">
              <Instagram className="w-6 h-6 text-white" />
            </a>
            <a href="#" className="bg-white/20 p-4 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110">
              <Youtube className="w-6 h-6 text-white" />
            </a>
            <a href="#" className="bg-white/20 p-4 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110">
              <Music className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/3 left-10 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-20 h-20 bg-gradient-to-r from-orange-400/20 to-yellow-400/20 rounded-full animate-bounce"></div>
    </div>
  );
};

export default Crew;

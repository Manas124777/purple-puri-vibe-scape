
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, User, MessageSquare, Send } from 'lucide-react';

const JoinUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    style: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-orange-800 to-pink-600"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-25"></div>
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
          <Link to="/crew" className="text-white hover:text-purple-300 transition-all duration-300 font-semibold">Crew</Link>
          <Link to="/join" className="text-purple-300 font-semibold">Join Us</Link>
        </div>
      </nav>

      {/* Content */}
      <div className="relative z-10 px-6 lg:px-12 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-7xl font-black text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
              JOIN US
            </span>
          </h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Ready to be part of Puri's most vibrant dance community? Whether you're a beginner or a pro, there's a place for you at Scene Sariba
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Info */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Why Join Scene Sariba?</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-purple-400 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Learn from the Best</h3>
                    <p className="text-purple-200">Train with experienced dancers and choreographers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-orange-400 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Cultural Fusion</h3>
                    <p className="text-purple-200">Experience the unique blend of traditional and modern dance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-pink-400 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Performance Opportunities</h3>
                    <p className="text-purple-200">Showcase your skills at events and battles</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Community</h3>
                    <p className="text-purple-200">Be part of a supportive and creative family</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">What We Offer</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-300">Weekly</div>
                  <div className="text-white text-sm">Training Sessions</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-300">Monthly</div>
                  <div className="text-white text-sm">Battles & Events</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-300">Free</div>
                  <div className="text-white text-sm">Workshops</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-300">All Levels</div>
                  <div className="text-white text-sm">Welcome</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6">Get Started Today</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white font-semibold mb-2">
                  <User className="inline w-4 h-4 mr-2" />
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-purple-400"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  <Mail className="inline w-4 h-4 mr-2" />
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-purple-400"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  <Phone className="inline w-4 h-4 mr-2" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-purple-400"
                  placeholder="+91 XXXXX XXXXX"
                  required
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Dance Experience</label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:border-purple-400"
                  required
                >
                  <option value="">Select your level</option>
                  <option value="beginner">Beginner (0-1 years)</option>
                  <option value="intermediate">Intermediate (1-3 years)</option>
                  <option value="advanced">Advanced (3+ years)</option>
                  <option value="professional">Professional</option>
                </select>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Preferred Dance Style</label>
                <input
                  type="text"
                  name="style"
                  value={formData.style}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-purple-400"
                  placeholder="Hip-hop, Contemporary, Breaking, etc."
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  <MessageSquare className="inline w-4 h-4 mr-2" />
                  Tell us about yourself
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-purple-400 resize-none"
                  placeholder="Why do you want to join Scene Sariba? What are your dance goals?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-lg font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-16 h-16 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/3 right-10 w-20 h-20 bg-gradient-to-r from-orange-400/30 to-yellow-400/30 rounded-full animate-bounce"></div>
    </div>
  );
};

export default JoinUs;

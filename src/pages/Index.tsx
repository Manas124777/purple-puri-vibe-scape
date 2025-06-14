import { useState } from 'react';
import { MapPin, Instagram, Youtube, Music, Mail, Phone } from 'lucide-react';
import React from 'react';
import VideoPlayer from '../components/ui/VideoPlayer';

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [selectedArtist, setSelectedArtist] = useState<number | null>(null);
  const [selectedGallery, setSelectedGallery] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const artists = [
    {
      id: 1,
      name: "Adarsh Mishra",
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

  const galleryImages = [
    {
      id: 1,
      title: "Scene Sariba Jam 2023",
      description: "Epic battle moments from our flagship event",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      title: "Summer Concert",
      description: "Energetic performances under the stars",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      title: "Community Gathering",
      description: "Bringing dancers together from across India",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 4,
      title: "Street Battles",
      description: "Raw energy and pure talent on display",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 5,
      title: "Cultural Fusion",
      description: "Traditional meets contemporary dance",
      image: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 6,
      title: "Beach Vibes",
      description: "Dancing with the waves at Puri Beach",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900">
      {/* Video Background covering top corners and extending down */}
      <VideoPlayer />
      
      {/* Overlay for better readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-gray-900/20 via-gray-900/40 to-gray-900/70"></div>

      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between p-8 lg:px-16">
        <div className="text-3xl lg:text-4xl font-black tracking-tight">
          <span className="bg-gradient-to-r from-orange-400 via-orange-300 to-gray-100 bg-clip-text text-transparent">
            Scene Sariba
          </span>
        </div>
        <div className="flex space-x-6 md:space-x-10">
          {['home','about','artists','gallery','contact'].map(sec => (
            <button
              key={sec}
              onClick={() => scrollToSection(sec)}
              className="text-gray-100 hover:text-orange-300 transition-all duration-500 font-semibold hover:scale-110 text-base md:text-lg tracking-wide uppercase letterspacing-wider"
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1).replace('-', ' ')}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative z-20 flex items-center justify-center min-h-screen text-center px-8">
        <div className="max-w-5xl relative z-30">
          <div className="mb-8">
            <img
              src="/lovable-uploads/744ee8a6-9231-478c-96ee-9e02ce62a74f.png"
              alt="Scene Sariba Logo"
              className="mx-auto w-80 h-auto relative z-40 drop-shadow-2xl"
            />
          </div>
          <p className="text-2xl lg:text-3xl text-gray-100 mt-4 mb-8 font-light tracking-wide drop-shadow-lg relative z-40 max-w-3xl mx-auto leading-relaxed">
            Where Culture Meets Rhythm in Puri
          </p>
          <div className="relative z-40 mt-12">
            <button 
              onClick={() => scrollToSection('about')}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/30 tracking-wide"
            >
              Discover Our Story
            </button>
          </div>
        </div>
      </section>

      {/* Professional Transition Section */}
      <div className="relative z-10 h-16 bg-gradient-to-b from-transparent via-purple-900/60 to-gray-700/80">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-2 right-20 w-16 h-16 bg-gradient-to-r from-purple-500/10 to-orange-500/10 rounded-full animate-pulse transform rotate-12"></div>
          <div className="absolute bottom-2 right-20 w-10 h-10 bg-gradient-to-r from-orange-500/15 to-purple-500/15 rounded-full animate-bounce transform -rotate-45" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-gradient-to-r from-purple-400/20 to-orange-400/20 rounded-full animate-pulse transform rotate-180" style={{ animationDelay: '2.5s' }}></div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="relative z-10 py-12 px-8 lg:px-16 bg-gray-700/70 backdrop-blur-md">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-12 left-10 w-24 h-24 bg-gradient-to-r from-orange-500/10 to-purple-500/10 rounded-full animate-pulse transform rotate-45"></div>
          <div className="absolute bottom-12 right-10 w-20 h-20 bg-gradient-to-r from-purple-500/15 to-orange-500/15 rounded-full animate-bounce transform -rotate-12" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-12 h-12 bg-gradient-to-r from-orange-400/20 to-purple-400/20 rounded-full animate-pulse transform rotate-90" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-orange-400 font-semibold text-lg tracking-widest uppercase">Our Story</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-orange-400 via-orange-300 to-gray-100 bg-clip-text text-transparent">
                ABOUT US
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Pioneering the dance revolution in Puri, where tradition meets innovation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gray-700/80 backdrop-blur-lg rounded-3xl p-8 border border-purple-400/30 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-rotate-1">
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-gray-100 mb-2">The Addyction</h3>
                <p className="text-orange-300 font-semibold text-lg">Adarsh Mishra - Founder</p>
              </div>
              <div className="space-y-4 text-gray-200 leading-relaxed">
                <p>
                  Adarsh Mishra, known as "The Addyction," is the visionary founder of Scene Sariba. With over 8 years of professional experience, he has revolutionized street dance culture in Puri, Odisha.
                </p>
                <p>
                  His innovative approach blends traditional Odia cultural elements with contemporary dance forms, creating a unique movement that resonates with artists across Eastern India.
                </p>
                <p>
                  Under his leadership, Scene Sariba has evolved from a local crew to one of the most respected dance communities in the region.
                </p>
              </div>
            </div>

            <div className="bg-gray-700/80 backdrop-blur-lg rounded-3xl p-8 border border-purple-400/30 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20 hover:rotate-1">
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-gray-100 mb-2">Scene Sariba Jam</h3>
                <p className="text-orange-300 font-semibold text-lg">Our Flagship Event</p>
              </div>
              <div className="space-y-4 text-gray-200 leading-relaxed">
                <p>
                  Scene Sariba Jam transcends traditional dance battles - it's a cultural celebration uniting India's finest dancers with Odisha's rich heritage.
                </p>
                <p>
                  Featuring multiple battle categories including Hip-Hop, Breaking, Popping, Locking, and Contemporary fusion, each performance tells a story rooted in Odia culture.
                </p>
                <p>
                  Set against the stunning backdrop of Puri Beach, this annual event attracts dancers, artists, and culture enthusiasts from across the nation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artists Section */}
      <section id="artists" className="relative z-10 py-12 px-8 lg:px-16 bg-gradient-to-br from-gray-800/80 via-purple-900/60 to-gray-700/70 backdrop-blur-md">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-8 right-16 w-32 h-32 bg-gradient-to-r from-purple-500/10 to-orange-500/10 rounded-full animate-pulse transform rotate-12"></div>
          <div className="absolute bottom-16 right-16 w-20 h-20 bg-gradient-to-r from-orange-500/15 to-purple-500/15 rounded-full animate-bounce transform -rotate-45" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-gradient-to-r from-purple-400/20 to-orange-400/20 rounded-full animate-pulse transform rotate-180" style={{ animationDelay: '2.5s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-orange-400 font-semibold text-lg tracking-widest uppercase">Meet Our Team</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-orange-400 via-orange-300 to-gray-100 bg-clip-text text-transparent">
                ARTISTS
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              The passionate artists who bring Scene Sariba's vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {artists.map((artist, index) => (
              <div 
                key={artist.id} 
                className="relative group cursor-pointer transform hover:scale-110 transition-all duration-500"
                onClick={() => setSelectedArtist(selectedArtist === artist.id ? null : artist.id)}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden rounded-2xl bg-slate-800/90 border border-purple-400/40 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500">
                  <div className="w-full h-72 bg-gradient-to-br from-slate-900 to-slate-800"></div>
                  
                  <div className={`absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent transition-all duration-300 ${
                    selectedArtist === artist.id ? 'opacity-95' : 'opacity-70 group-hover:opacity-85'
                  }`}>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{artist.name}</h3>
                      <p className="text-orange-300 text-base font-semibold">{artist.role}</p>
                    </div>
                  </div>

                  <div className={`absolute inset-0 bg-slate-900/95 backdrop-blur-sm transform transition-transform duration-500 ${
                    selectedArtist === artist.id ? 'translate-y-0' : 'translate-y-full'
                  }`}>
                    <div className="p-8 h-full flex flex-col justify-center">
                      <h3 className="text-3xl font-bold text-white mb-4">{artist.name}</h3>
                      <p className="text-orange-300 font-semibold mb-3 text-lg">{artist.role}</p>
                      <p className="text-purple-200 text-base mb-6 font-medium">{artist.specialty}</p>
                      <p className="text-gray-200 leading-relaxed">{artist.bio}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="relative z-10 py-12 px-8 lg:px-16 bg-gradient-to-bl from-purple-900/70 via-gray-800/60 to-gray-700/70 backdrop-blur-md">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-12 left-10 w-28 h-28 bg-gradient-to-r from-orange-500/10 to-purple-500/10 rounded-full animate-pulse transform -rotate-12"></div>
          <div className="absolute bottom-12 right-16 w-20 h-20 bg-gradient-to-r from-purple-500/15 to-orange-500/15 rounded-full animate-bounce transform rotate-45" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-2/3 left-1/4 w-12 h-12 bg-gradient-to-r from-orange-400/20 to-purple-400/20 rounded-full animate-pulse transform rotate-90" style={{ animationDelay: '3s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-orange-400 font-semibold text-lg tracking-widest uppercase">Our Moments</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-orange-400 via-orange-300 to-gray-100 bg-clip-text text-transparent">
                GALLERY
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Capturing the energy, passion, and cultural fusion of Scene Sariba events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((item, index) => (
              <div 
                key={item.id} 
                className="relative group cursor-pointer transform hover:scale-110 transition-all duration-500"
                onClick={() => setSelectedGallery(selectedGallery === item.id ? null : item.id)}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative overflow-hidden rounded-2xl bg-slate-800/90 border border-purple-400/40 hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-500">
                  <div className="w-full h-72 bg-gradient-to-br from-slate-900 to-slate-800"></div>
                  
                  <div className={`absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent transition-all duration-300 ${
                    selectedGallery === item.id ? 'opacity-95' : 'opacity-60 group-hover:opacity-80'
                  }`}>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                    </div>
                  </div>

                  <div className={`absolute inset-0 bg-slate-900/95 backdrop-blur-sm transform transition-transform duration-500 ${
                    selectedGallery === item.id ? 'translate-y-0' : 'translate-y-full'
                  }`}>
                    <div className="p-8 h-full flex flex-col justify-center text-center">
                      <h3 className="text-2xl font-bold text-white mb-6">{item.title}</h3>
                      <p className="text-gray-200 leading-relaxed text-lg">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="relative z-10 py-12 px-8 lg:px-16 bg-gradient-to-tr from-gray-900/80 via-purple-800/60 to-gray-700/70 backdrop-blur-md">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-16 right-12 w-24 h-24 bg-gradient-to-r from-purple-500/10 to-orange-500/10 rounded-full animate-pulse transform rotate-30"></div>
          <div className="absolute bottom-12 left-16 w-22 h-22 bg-gradient-to-r from-orange-500/15 to-purple-500/15 rounded-full animate-bounce transform -rotate-30" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-r from-purple-400/20 to-orange-400/20 rounded-full animate-pulse transform rotate-45" style={{ animationDelay: '0.5s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-orange-400 font-semibold text-lg tracking-widest uppercase">Get In Touch</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-orange-400 via-orange-300 to-gray-100 bg-clip-text text-transparent">
                CONTACT US
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Ready to join the movement? Let's connect and create something extraordinary together
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-gray-700/80 backdrop-blur-lg rounded-2xl p-8 border border-purple-400/40 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:rotate-1">
                <h3 className="text-2xl font-bold text-gray-100 mb-6">Send Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 font-medium mb-2">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-700/70 border border-slate-600 text-gray-100 placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all duration-300"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 font-medium mb-2">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-700/70 border border-slate-600 text-gray-100 placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all duration-300"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-700/70 border border-slate-600 text-gray-100 placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all duration-300"
                      placeholder="+91 XXXXX XXXXX"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 font-medium mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-slate-700/70 border border-slate-600 text-gray-100 placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 resize-none transition-all duration-300"
                      placeholder="Tell us about your interest in Scene Sariba..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-xl font-bold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/40"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-700/80 backdrop-blur-lg rounded-2xl p-6 border border-purple-400/40 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20 hover:-rotate-1">
                <h3 className="text-2xl font-bold text-gray-100 mb-4">Join The Movement</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">Ready to be part of Puri's most vibrant dance community?</p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3 transition-all duration-300 hover:transform hover:translate-x-2">
                    <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-orange-400" />
                    </div>
                    <span className="text-gray-300">scenesariba@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3 transition-all duration-300 hover:transform hover:translate-x-2">
                    <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-orange-400" />
                    </div>
                    <span className="text-gray-300">+91 98765 43210</span>
                  </div>
                  <div className="flex items-center space-x-3 transition-all duration-300 hover:transform hover:translate-x-2">
                    <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-orange-400" />
                    </div>
                    <span className="text-gray-300">Puri Beach, Odisha</span>
                  </div>
                </div>

                <div className="flex space-x-3 mb-6">
                  <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-600 p-2 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/50">
                    <Instagram className="w-5 h-5 text-white" />
                  </a>
                  <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-600 p-2 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/50">
                    <Youtube className="w-5 h-5 text-white" />
                  </a>
                  <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-600 p-2 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/50">
                    <Music className="w-5 h-5 text-white" />
                  </a>
                </div>

                <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-xl font-bold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/40">
                  Join Scene Sariba
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Floating Elements */}
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute top-1/3 right-10 w-8 h-8 bg-gradient-to-r from-purple-600 to-gray-600 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full opacity-25 animate-bounce" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/4 left-1/3 w-6 h-6 bg-gradient-to-r from-orange-500 to-purple-500 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/4 left-1/5 w-10 h-10 bg-gradient-to-r from-purple-400 to-orange-400 rounded-full opacity-30 animate-bounce" style={{ animationDelay: '3s' }}></div>
    </div>
  );
};

export default Index;

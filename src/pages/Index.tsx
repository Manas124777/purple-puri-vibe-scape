
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, Users, Instagram, Youtube, Music, Mail, Phone, User, MessageSquare } from 'lucide-react';

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
    "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Video Section */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="absolute inset-0 bg-gray-800/40">
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-30"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-800/40 to-gray-900/60"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between p-6 lg:px-12">
        <div className="text-2xl lg:text-3xl font-bold">
          <span className="bg-gradient-to-r from-purple-400 to-gray-200 bg-clip-text text-transparent">
            Scene Sariba
          </span>
        </div>

        <div className="flex space-x-4 md:space-x-8">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-gray-100 hover:text-purple-300 transition-all duration-300 font-semibold hover:scale-105 text-sm md:text-base"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-gray-100 hover:text-purple-300 transition-all duration-300 font-semibold hover:scale-105 text-sm md:text-base"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('artists')}
            className="text-gray-100 hover:text-purple-300 transition-all duration-300 font-semibold hover:scale-105 text-sm md:text-base"
          >
            Artists
          </button>
          <button 
            onClick={() => scrollToSection('gallery')}
            className="text-gray-100 hover:text-purple-300 transition-all duration-300 font-semibold hover:scale-105 text-sm md:text-base"
          >
            Gallery
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-gray-100 hover:text-purple-300 transition-all duration-300 font-semibold hover:scale-105 text-sm md:text-base"
          >
            Contact Us
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative z-10 flex items-center justify-center min-h-[80vh] text-center px-6">
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
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-20 px-6 lg:px-12 bg-gray-800/70 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-gray-300 bg-clip-text text-transparent drop-shadow-lg">
                ABOUT
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gray-700/70 backdrop-blur-md rounded-2xl p-8 border border-purple-400/40">
              <h3 className="text-3xl font-bold text-gray-100 mb-6">The Addyction - Adarsh Mishra</h3>
              <p className="text-gray-200 leading-relaxed mb-4">
                Adarsh Mishra, known as "The Addyction," is the visionary founder of Scene Sariba. With over 8 years of experience in the dance industry, he has revolutionized the street dance culture in Puri, Odisha.
              </p>
              <p className="text-gray-200 leading-relaxed mb-4">
                His passion for blending traditional Odia culture with contemporary dance forms has created a unique movement that resonates with dancers across the region. Adarsh's choreography style combines raw energy with cultural storytelling.
              </p>
              <p className="text-gray-200 leading-relaxed">
                Under his leadership, Scene Sariba has grown from a small local crew to one of the most respected dance communities in Eastern India.
              </p>
            </div>

            <div className="bg-gray-700/70 backdrop-blur-md rounded-2xl p-8 border border-purple-400/40">
              <h3 className="text-3xl font-bold text-gray-100 mb-6">Scene Sariba Jam</h3>
              <p className="text-gray-200 leading-relaxed mb-4">
                Scene Sariba Jam is more than just a dance battle - it's a cultural celebration that brings together the best dancers from across India. This flagship event showcases the perfect fusion of traditional Odissi dance with modern street styles.
              </p>
              <p className="text-gray-200 leading-relaxed mb-4">
                The jam features multiple battle categories including Hip-Hop, Breaking, Popping, Locking, and Contemporary fusion. What makes it special is the integration of Odia cultural elements, making each battle a storytelling experience.
              </p>
              <p className="text-gray-200 leading-relaxed">
                Held annually at the beautiful Puri Beach, the jam attracts dancers, artists, and culture enthusiasts from all over the country, creating an unforgettable experience of rhythm, culture, and community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Artists Section */}
      <section id="artists" className="relative z-10 py-20 px-6 lg:px-12 bg-gray-900/70 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-gray-300 bg-clip-text text-transparent drop-shadow-lg">
                ARTISTS
              </span>
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Meet the passionate artists who bring Scene Sariba to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {artists.map((artist) => (
              <div key={artist.id} className="bg-gray-800/70 backdrop-blur-md rounded-2xl p-6 hover:bg-gray-700/80 transition-all duration-300 hover:scale-105 border border-purple-400/40">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  <img 
                    src={artist.image} 
                    alt={artist.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-purple-400"
                  />
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-2xl font-bold text-gray-100 mb-2">{artist.name}</h3>
                    <p className="text-purple-300 font-semibold mb-2">{artist.role}</p>
                    <p className="text-orange-300 text-sm mb-3">{artist.specialty}</p>
                    <p className="text-gray-200 leading-relaxed">{artist.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="relative z-10 py-20 px-6 lg:px-12 bg-gray-800/70 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-gray-300 bg-clip-text text-transparent drop-shadow-lg">
                GALLERY
              </span>
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Capturing the energy and passion of Scene Sariba Jam
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl border border-purple-400/40">
                <img 
                  src={image}
                  alt={`Scene Sariba Jam ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold">Scene Sariba Jam {index + 1}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="relative z-10 py-20 px-6 lg:px-12 bg-gray-900/70 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-gray-300 bg-clip-text text-transparent drop-shadow-lg">
                CONTACT US
              </span>
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Ready to be part of Puri's most vibrant dance community?
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-gray-800/70 backdrop-blur-md rounded-2xl p-8 border border-purple-400/40">
                <h3 className="text-3xl font-bold text-gray-100 mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-100">Email</h4>
                      <p className="text-gray-300">scenesariba@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-100">Phone</h4>
                      <p className="text-gray-300">+91 98765 43210</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-100">Location</h4>
                      <p className="text-gray-300">Puri Beach, Odisha, India</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-xl font-bold text-gray-100 mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-purple-600 p-3 rounded-full hover:bg-purple-700 transition-all duration-300 hover:scale-110">
                      <Instagram className="w-6 h-6 text-white" />
                    </a>
                    <a href="#" className="bg-purple-600 p-3 rounded-full hover:bg-purple-700 transition-all duration-300 hover:scale-110">
                      <Youtube className="w-6 h-6 text-white" />
                    </a>
                    <a href="#" className="bg-purple-600 p-3 rounded-full hover:bg-purple-700 transition-all duration-300 hover:scale-110">
                      <Music className="w-6 h-6 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/70 backdrop-blur-md rounded-2xl p-8 border border-purple-400/40">
              <h3 className="text-3xl font-bold text-gray-100 mb-6">Send Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-100 font-semibold mb-2">
                    <User className="inline w-4 h-4 mr-2" />
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-700/70 border border-gray-600 text-gray-100 placeholder-gray-400 focus:outline-none focus:border-purple-400"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-100 font-semibold mb-2">
                    <Mail className="inline w-4 h-4 mr-2" />
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-700/70 border border-gray-600 text-gray-100 placeholder-gray-400 focus:outline-none focus:border-purple-400"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-100 font-semibold mb-2">
                    <Phone className="inline w-4 h-4 mr-2" />
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-700/70 border border-gray-600 text-gray-100 placeholder-gray-400 focus:outline-none focus:border-purple-400"
                    placeholder="+91 XXXXX XXXXX"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-100 font-semibold mb-2">
                    <MessageSquare className="inline w-4 h-4 mr-2" />
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-gray-700/70 border border-gray-600 text-gray-100 placeholder-gray-400 focus:outline-none focus:border-purple-400 resize-none"
                    placeholder="Your message..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-4 rounded-lg font-bold text-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
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

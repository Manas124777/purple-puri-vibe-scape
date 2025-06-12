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
      image: ""
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Creative Director",
      specialty: "Contemporary, Odissi Fusion",
      bio: "Blending traditional Odissi with modern expressions",
      image: ""
    },
    {
      id: 3,
      name: "Rahul Patra",
      role: "Battle Coordinator",
      specialty: "Breaking, Popping",
      bio: "National level B-boy representing Odisha across India",
      image: ""
    },
    {
      id: 4,
      name: "Sneha Mishra",
      role: "Community Manager",
      specialty: "House, Waacking",
      bio: "Building bridges between dancers and the Puri community",
      image: ""
    }
  ];

  const galleryImages = [
    {
      id: 1,
      title: "Scene Sariba Jam 2023",
      description: "Epic battle moments from our flagship event",
      image: ""
    },
    {
      id: 2,
      title: "Summer Concert",
      description: "Energetic performances under the stars",
      image: ""
    },
    {
      id: 3,
      title: "Community Gathering",
      description: "Bringing dancers together from across India",
      image: ""
    },
    {
      id: 4,
      title: "Street Battles",
      description: "Raw energy and pure talent on display",
      image: ""
    },
    {
      id: 5,
      title: "Cultural Fusion",
      description: "Traditional meets contemporary dance",
      image: ""
    },
    {
      id: 6,
      title: "Beach Vibes",
      description: "Dancing with the waves at Puri Beach",
      image: ""
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-purple-700 via-purple-800 to-gray-900"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/60 via-purple-800/30 to-gray-900/50"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between p-6 lg:px-12">
        <div className="text-2xl lg:text-3xl font-bold">
          <span className="bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
            Scene Sariba
          </span>
        </div>
        <div className="flex space-x-4 md:space-x-8">
          {['home','about','artists','gallery','contact'].map(sec => (
            <button
              key={sec}
              onClick={() => scrollToSection(sec)}
              className="text-gray-100 hover:text-purple-300 transition-all duration-300 font-semibold hover:scale-105 text-sm md:text-base"
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1).replace('-', ' ')}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative z-10 flex items-center justify-center min-h-[80vh] text-center px-6">
        <div className="max-w-4xl relative z-10">
          <div className="mb-8">
            <img
              src="/lovable-uploads/744ee8a6-9231-478c-96ee-9e02ce62a74f.png"
              alt="Scene Sariba Logo"
              className="mx-auto w-96 h-auto"
            />
          </div>
          <p className="text-xl lg:text-2xl text-gray-200 mb-8 font-medium drop-shadow-lg">
            Where Culture Meets Rhythm in Puri
          </p>
          
          {/* Video Background Area */}
          <div className="mt-12 flex items-center justify-center">
            <div className="w-full max-w-4xl h-64 bg-gray-700/70 backdrop-blur-md rounded-xl border border-purple-400/40 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <Youtube className="w-8 h-8 text-purple-400" />
                </div>
                <p className="text-gray-300 text-lg font-medium">Video Placeholder</p>
                <p className="text-gray-400 text-sm mt-2">Scene Sariba Jam Highlights</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-20 px-6 lg:px-12 bg-gray-700/70 backdrop-blur-md">
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
      <section id="artists" className="relative z-10 py-20 px-6 lg:px-12 bg-gray-700/70 backdrop-blur-md">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {artists.map((artist) => (
              <div 
                key={artist.id} 
                className="relative group cursor-pointer"
                onClick={() => setSelectedArtist(selectedArtist === artist.id ? null : artist.id)}
              >
                <div className="relative overflow-hidden rounded-xl bg-slate-800/80 border border-purple-400/40 transition-all duration-300 hover:scale-105">
                  <div className="w-full h-64 bg-black"></div>
                  
                  <div className={`absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent transition-all duration-300 ${
                    selectedArtist === artist.id ? 'opacity-95' : 'opacity-70 group-hover:opacity-85'
                  }`}>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-xl font-bold text-white mb-1">{artist.name}</h3>
                      <p className="text-purple-300 text-sm font-semibold">{artist.role}</p>
                    </div>
                  </div>

                  <div className={`absolute inset-0 bg-slate-900/95 backdrop-blur-sm transform transition-transform duration-300 ${
                    selectedArtist === artist.id ? 'translate-y-0' : 'translate-y-full'
                  }`}>
                    <div className="p-6 h-full flex flex-col justify-center">
                      <h3 className="text-2xl font-bold text-white mb-3">{artist.name}</h3>
                      <p className="text-purple-300 font-semibold mb-2">{artist.role}</p>
                      <p className="text-purple-200 text-sm mb-4">{artist.specialty}</p>
                      <p className="text-gray-200 text-sm leading-relaxed">{artist.bio}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="relative z-10 py-20 px-6 lg:px-12 bg-gray-700/70 backdrop-blur-md">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-gray-300 bg-clip-text text-transparent drop-shadow-lg">
                GALLERY
              </span>
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Capturing the energy and passion of Scene Sariba events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((item) => (
              <div 
                key={item.id} 
                className="relative group cursor-pointer"
                onClick={() => setSelectedGallery(selectedGallery === item.id ? null : item.id)}
              >
                <div className="relative overflow-hidden rounded-xl bg-slate-800/80 border border-purple-400/40 transition-all duration-300 hover:scale-105">
                  <div className="w-full h-64 bg-black"></div>
                  
                  <div className={`absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent transition-all duration-300 ${
                    selectedGallery === item.id ? 'opacity-95' : 'opacity-60 group-hover:opacity-80'
                  }`}>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                    </div>
                  </div>

                  <div className={`absolute inset-0 bg-slate-900/95 backdrop-blur-sm transform transition-transform duration-300 ${
                    selectedGallery === item.id ? 'translate-y-0' : 'translate-y-full'
                  }`}>
                    <div className="p-6 h-full flex flex-col justify-center text-center">
                      <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                      <p className="text-gray-200 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="relative z-10 py-20 px-6 lg:px-12 bg-gray-700/70 backdrop-blur-md">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-gray-300 bg-clip-text text-transparent drop-shadow-lg">
                CONTACT US
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-gray-700/70 backdrop-blur-md rounded-xl p-6 border border-purple-400/40">
                <h3 className="text-2xl font-bold text-gray-100 mb-6">Send Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-slate-700/70 border border-slate-600 text-gray-100 placeholder-gray-400 focus:outline-none focus:border-purple-400"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-slate-700/70 border border-slate-600 text-gray-100 placeholder-gray-400 focus:outline-none focus:border-purple-400"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-slate-700/70 border border-slate-600 text-gray-100 placeholder-gray-400 focus:outline-none focus:border-purple-400"
                      placeholder="+91 XXXXX XXXXX"
                      required
                    />
                  </div>

                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-slate-700/70 border border-slate-600 text-gray-100 placeholder-gray-400 focus:outline-none focus:border-purple-400 resize-none"
                      placeholder="Your message..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-3 rounded-lg font-bold text-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-700/70 backdrop-blur-md rounded-xl p-6 border border-purple-400/40">
                <h3 className="text-2xl font-bold text-gray-100 mb-4">Join The Movement</h3>
                <p className="text-gray-300 mb-6">Ready to be part of Puri's most vibrant dance community?</p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300 text-sm">scenesariba@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300 text-sm">+91 98765 43210</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300 text-sm">Puri Beach, Odisha</span>
                  </div>
                </div>

                <div className="flex space-x-3 mb-6">
                  <a href="#" className="bg-purple-500 p-2 rounded-lg hover:bg-purple-600 transition-all duration-300">
                    <Instagram className="w-5 h-5 text-white" />
                  </a>
                  <a href="#" className="bg-purple-500 p-2 rounded-lg hover:bg-purple-600 transition-all duration-300">
                    <Youtube className="w-5 h-5 text-white" />
                  </a>
                  <a href="#" className="bg-purple-500 p-2 rounded-lg hover:bg-purple-600 transition-all duration-300">
                    <Music className="w-5 h-5 text-white" />
                  </a>
                </div>

                <button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-3 rounded-lg font-bold hover:from-purple-600 hover:to-purple-700 transition-all duration-300">
                  Join Now
                </button>
              </div>
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

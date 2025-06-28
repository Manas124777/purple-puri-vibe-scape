import { useEffect,useState } from 'react';
import { MapPin, Instagram, Youtube, Music, Mail, Phone, Menu, X, RollerCoaster } from 'lucide-react';
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Dialog, DialogContent, DialogClose } from '../components/ui/dialog';
import VideoPlayer from '@/components/ui/VideoPlayer';

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setMobileMenuOpen(false);
  };
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY < lastScrollY || currentScrollY < 100) {
          // Scrolling up or at top
          setNavVisible(true); 
        } else {
          // Scrolling down
          setNavVisible(false);
          setMobileMenuOpen(false); // Close mobile menu when hiding nav
        }
        
        setLastScrollY(currentScrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  // Scroll animation hooks
  const aboutTitle = useScrollAnimation(0.3, 0);
  const aboutDesc = useScrollAnimation(0.3, 200);
  const aboutGrid = useScrollAnimation(0.3, 400);
  const artistsTitle = useScrollAnimation(0.3, 0);
  const galleryTitle = useScrollAnimation(0.3, 0);
  const contactTitle = useScrollAnimation(0.3, 0);
  const contactDesc = useScrollAnimation(0.3, 200);

  const artists = [
    {
      id: 1,
      name: "MAiKA",
      specialty: "Hip-Hop",
      bio: "MAiKA is a Japanese hip-hop dancer and choreographer from Osaka, co-founder of the crew RushBall. She’s earned top titles at DANCE@LIVE Kids, Juste Debout, WDC, and DanceAlive All-Styles. Known for her groovy yet powerful style, she creates choreography for music videos, theme-park shows, and trains youth teams. In 2025, she signed with streetwear brands G-shock, X-girl and XLARGE to inspire the next generation of Japanese female hip-hop dancers",
      image: "/ma1.jpg"
    },
    {
      id: 2,
      name: "Nextion",
      specialty: "Hip-Hop",
      bio: "Nextion is a dynamic hip-hop artist from Bhubaneswar, known for his fierce battles and powerful stage presence. He won the Red Bull Dance Your Style India 2025 finals in Delhi, earning a spot at the World Final in Los Angeles. A two-time national finalist (2022, 2025) and runner-up on India’s Best Dancer Season 4, his mix of raw energy and emotional storytelling makes him a standout in the street dance scene.",
      image: "/nex1.jpg"
    },
    {
      id: 3,
      name: "Varun Dagar",
      specialty: "Street-Busking & balletic dance",
      bio: "Varun Dagar, a street dancer, singer, and choreographer from Palwal now based in Delhi, rose to fame with his soulful, balletic performances at Connaught Place. He won World of Dance Chennai in 2021 and gained national attention on India’s Best Dancer Season 2. Known for his expressive style and heartfelt artistry, Varun continues to inspire India’s street-dance scene.",
      image: "/va1.jpg"
    },
    {
      id: 4,
      name: "Faria Abdullah",
      specialty: "Actress",
      bio: "Faria Abdullah is an actress, dancer, and visual performer from Hyderabad, trained in Kathak, hip-hop, waacking, house, and belly dance. Starting with over 50 theatre plays, she rose to fame as “Chitti” in *Jathi Ratnalu* (2021). In 2025, she judged *Dance IKON 2: WildFire*, applauding diverse talent. Also a painter, poet, and activist, Faria channels her passion through many forms of expression.",
      image: "/fa.jpg"
    },
    {
      id: 5,
      name: "Nepo",
      specialty: "Hip-Hop",
      bio: "Deepak Shahi, aka Nepo, is a hip-hop dancer and choreographer from Haldwani, Uttarakhand. A two-time Red Bull Dance Your Style India champion (2021, 2023), he represented India at the World Finals in Germany. In 2024, he impressed on India’s Best Dancer Season 4 with choreographer Vartika Jha. Known for his dynamic style and infectious presence, Nepo is a leading force in India’s street-dance scene.",
      image: "/nepo1.jpg"
    },
    {
      id: 6,
      name: "Alik",
      specialty: "Hip-hop",
      bio: "Alik Kim, known as Alik, is a hip-hop dancer from Almaty, Kazakhstan. A member of Zone 51 and instructor at Skillz Dance Studio, he’s known for his locking and freestyle flow. Gaining attention through viral videos and battle wins, Alik is steadily rising in Kazakhstan’s street-dance scene, with goals to grow through workshops, competitions, and digital content.",
      image: "/al1.jpg"
    },
    {
      id: 7,
      name: "Kama",
      specialty: "Hip-Hop",
      bio: "Kama (Kamila) is a leading hip-hop artist from Almaty, Kazakhstan, active as a choreographer and performer. She leads Flow Keeperz, offering workshops in groove, hip-hop and freestyle. Featured as a “Hip Hop Pro” at Almaty Dance Fest 2024 and headliner of Kazakhstan’s first Hip-Hop Base Camp in 2025. As both educator and artist, Kama continues to invigorate and inspire Central Asia’s growing street-dance community.",
      image: "/ka1.jpg"
    },
    {
      id: 8,
      name: "Peot",
      specialty: "Hip-Hop, DJ",
      bio: "Amirul Hafiz, known as Peot, is a Malaysian hip-hop dancer and DJ. A seasoned competitor, he won the Judgment Day World Dance Games qualifier in 2019 and represented Malaysia in China. Featured on the podcast *Shoes Off, No Cap*, he speaks on hip-hop fundamentals, crew life (Walawei, BeatMyBois), and battle mindset. Through workshops, performances, and music, Peot stands as a key figure in Malaysia’s street dance culture.",
      image: "/peot.jpg"
    },
    {
      id: 9,
      name: "Paal Dabba",
      specialty: "Hip-Hop, Rapper",
      bio: "Paal Dabba, born Anish in 2000 in Chennai, is a dancer-turned-rapper, singer, songwriter, and choreographer. Rising with Bfab crew and winning Breezer Vivid Shuffle in 2019, he debuted in music with “3SHA” and “Ai,” followed by hits like “Chikkama,” “170CM,” “SAB,” and “Galatta.” In 2025, he stepped into acting with Vijay Milton’s bilingual film. Named in Rolling Stone India’s “Future Top 25 Artists 2024”",
      image: "/paal.jpg"
    },
    {
      id: 10,
      name: "Boogie LLB",
      specialty: "Popping",
      bio: "Boogie LLB (Anish Mitra) is a Kolkata-based popper known for his raw, street-driven style and underground roots. Rising from battles in barges and basements, he gained national attention on India’s Best Dancer Season 3 with heartfelt performances—like a thumri piece with Saumya Kamble that moved judge Sonali Bendre to dance. Blending underground grit with emotional depth, Boogie stands out as a powerful force in India’s urban dance scene.",
      image: "/boogie.jpg"
    },
    {
      id: 11,
      name: "B-Boy Tornado",
      role: "Content Creator",
      specialty: "B-Boying",
      bio: "B-Boy Tornado (Ramesh Anandabhushan Yadav) is a powerhouse breaker from Mumbai, known for his explosive style and signature “2000” spin. Starting at 14, he rose from underground jams to win the Red Bull BC One Cypher India in 2019, becoming the first Indian to reach the Top-16 at the Last Chance Cypher. Founder of Young Rebelz and a 2023 Asia Breaking Championship contender, Tornado leads both on the floor and in building India’s breaking community.",
      image: "/tornado.jpg"
    },
    {
      id: 12,
      name: "B-Boy WildChild",
      specialty: "B-Boying",
      bio: "B-Boy Wildchild (Eshwar Tiwari) is a standout breaker from Mumbai who began his journey in 2012 through underground battles. He gained recognition after winning 16 straight local comps in 2014 and debuted internationally in Korea in 2017. His “Wild Spin” went viral in 2019, and in 2021, he won Red Bull BC One Cypher India, earning a wildcard for the World Finals—becoming one of the first Indian breakers on the global stage.",
      image: "/wildchild.jpg"
    },
    {
      id: 13,
      name: "Vengayo",
      specialty: "Hip-Hop",
      bio: "B-Boy Wildchild (Eshwar Tiwari) is a standout breaker from Mumbai who began his journey in 2012 through underground battles. He gained recognition after winning 16 straight local comps in 2014 and debuted internationally in Korea in 2017. His “Wild Spin” went viral in 2019, and in 2021, he won Red Bull BC One Cypher India, earning a wildcard for the World Finals—becoming one of the first Indian breakers on the global stage.",
      image: "/vengayo.jpg"
    },
    {
      id: 14,
      name: "Instinct",
      specialty: "Hip-Hop",
      bio: "B-Boy Wildchild (Eshwar Tiwari) is a standout breaker from Mumbai who began his journey in 2012 through underground battles. He gained recognition after winning 16 straight local comps in 2014 and debuted internationally in Korea in 2017. His “Wild Spin” went viral in 2019, and in 2021, he won Red Bull BC One Cypher India, earning a wildcard for the World Finals—becoming one of the first Indian breakers on the global stage.",
      image: "/instinct.jpg"
    },
    {
      id: 15,
      name: "Supriya Nayak",
      specialty: "Hip-Hop",
      bio: "B-Boy Wildchild (Eshwar Tiwari) is a standout breaker from Mumbai who began his journey in 2012 through underground battles. He gained recognition after winning 16 straight local comps in 2014 and debuted internationally in Korea in 2017. His “Wild Spin” went viral in 2019, and in 2021, he won Red Bull BC One Cypher India, earning a wildcard for the World Finals—becoming one of the first Indian breakers on the global stage.",
      image: "/supriya.jpg"
    },
    {
      id: 16,
      name: "Deepak Yadav",
      specialty: "Hip-Hop",
      bio: "B-Boy Wildchild (Eshwar Tiwari) is a standout breaker from Mumbai who began his journey in 2012 through underground battles. He gained recognition after winning 16 straight local comps in 2014 and debuted internationally in Korea in 2017. His “Wild Spin” went viral in 2019, and in 2021, he won Red Bull BC One Cypher India, earning a wildcard for the World Finals—becoming one of the first Indian breakers on the global stage.",
      image: "/deepak.png"
    }
  ];

  const galleryItems = [
    {
      id: 1,
      title: "Scene Sariba Jam 2023"
    },
    {
      id: 2,
      title: "Summer Concert"
    },
    {
      id: 3,
      title: "Community Gathering"
    },
    {
      id: 4,
      title: "Street Battles"
    },
    {
      id: 5,
      title: "Cultural Fusion"
    },
    {
      id: 6,
      title: "Beach Vibes"
    },
    {
      id: 7,
      title: "Workshop Session"
    },
    {
      id: 8,
      title: "Night Performance"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900">
      <VideoPlayer />
      {/* Background Video */}

      {/* Overlay for better readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-transparent z-10 transition duration-700"></div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between p-4 lg:px-8 bg-gray-800/60 shadow-md">
      <div className="flex items-center space-x-3">
        <div className="text-xl lg:text-2xl font-theronked font-medium tracking-normal">
          <span className="font-heading bg-gradient-to-r from-orange-400 via-orange-300 to-orange-300 bg-clip-text text-transparent">
            Scene Sariba
          </span>
      </div>

      {/* Social Media Icons */}
      <div className="flex space-x-2">
        <a 
          href="https://www.instagram.com/scene_sariba?igsh=MW12cXBlcDM0dmkycg==" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-orange-500 to-orange-600 p-1 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/50"
        >
          <Instagram className="w-5 h-5 text-white" />
        </a>
        <a 
          href="https://m.youtube.com/watch?v=1FRffuAUjUc&fbclid=PAQ0xDSwK6hKVleHRuA2FlbQIxMAABp5D3U4lnn7-coqsBZvfNP1BbroDDH__uDCD8XyZvVhrUTWClFwPA4cIf_dc2_aem_z8NGrW2IDuVvMJypULe-NQ" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-orange-500 to-orange-600 p-1 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/50"
        >
          <Youtube className="w-5 h-5 text-white" />
        </a>
      </div>
    </div>
    
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-3">
          {['home','about','artists','gallery','contact'].map(sec => (
            <button
              key={sec}
              onClick={() => scrollToSection(sec)}
              className="text-gray-100 hover:text-orange-300 transition-all duration-500 font-semibold hover:scale-110 text-sm tracking-wide uppercase px-3 py-2 rounded-lg hover:bg-gray-800/30"
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1).replace('-', ' ')}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-100 hover:text-orange-300 transition-all duration-300 p-2 hover:scale-110 hover:bg-gray-800/30 rounded-lg"
        >
          <div className="relative w-6 h-6">
            <Menu className={`w-6 h-6 absolute transition-all duration-300 ${mobileMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`} />
            <X className={`w-6 h-6 absolute transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`} />
          </div>
        </button>

        {/* Mobile Menu Dropdown */}
        <div className={`absolute top-full right-4 mt-2 bg-gray-800/95 backdrop-blur-lg border border-gray-600/50 rounded-xl shadow-2xl md:hidden transition-all duration-500 origin-top-right ${mobileMenuOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}>
          <div className="py-2">
            {['home','about','artists','gallery','contact'].map((sec, index) => (
              <button
                key={sec}
                onClick={() => handleNavClick(sec)}
                className={`w-full text-left text-gray-100 hover:text-orange-300 transition-all duration-300 font-semibold text-sm tracking-wide uppercase px-4 py-3 hover:bg-gray-700/50 first:rounded-t-xl last:rounded-b-xl ${mobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
                style={{ transitionDelay: mobileMenuOpen ? `${index * 50}ms` : '0ms' }}
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1).replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>
      </nav>
      
      <div className="pt-16"></div>

      {/* Hero Section */}
      <section id="home" className="relative z-20 flex items-center justify-center min-h-screen text-center px-4 sm:px-8">
        <div className="max-w-5xl relative z-30">
          <div className="mb-8">
            <img
              src="/lovable-uploads/744ee8a6-9231-478c-96ee-9e02ce62a74f.png"
              alt="Scene Sariba Logo"
              className="mx-auto w-64 sm:w-80 h-auto relative z-40 drop-shadow-2xl"
            />
          </div>
          <p className="text-lg sm:text-2xl lg:text-3xl text-gray-100 mt-4 mb-8 font-light tracking-wide drop-shadow-lg relative z-40 max-w-3xl mx-auto leading-relaxed">
            Where Culture Meets Hip-Hop in East India
          </p>
        </div>
      </section>

      {/* Smooth Professional Transition Section */}
      <div className="relative z-10 h-16 bg-gradient-to-b from-transparent via-gray-800/30 to-gray-800/60">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-2 right-20 w-16 h-16 bg-gradient-to-r from-purple-500/5 to-orange-500/5 rounded-full animate-pulse transform rotate-12"></div>
          <div className="absolute bottom-2 right-20 w-10 h-10 bg-gradient-to-r from-orange-500/8 to-purple-500/8 rounded-full animate-bounce transform -rotate-45" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-gradient-to-r from-purple-400/10 to-orange-400/10 rounded-full animate-pulse transform rotate-180" style={{ animationDelay: '2.5s' }}></div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="relative z-10 py-8 px-8 lg:px-16 bg-gray-800/60 backdrop-blur-md">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-12 left-10 w-24 h-24 bg-gradient-to-r from-orange-500/10 to-purple-500/10 rounded-full animate-pulse transform rotate-45"></div>
          <div className="absolute bottom-12 right-10 w-20 h-20 bg-gradient-to-r from-purple-500/15 to-orange-500/15 rounded-full animate-bounce transform -rotate-12" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-12 h-12 bg-gradient-to-r from-orange-400/20 to-purple-400/20 rounded-full animate-pulse transform rotate-90" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div ref={aboutTitle.ref} className={`text-center mb-8 transition-all duration-1000 ${aboutTitle.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl lg:text-6xl font-theronked font-heading font-medium mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
                ABOUT US
              </span>
            </h2>
          </div>

          <div ref={aboutGrid.ref} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 transition-all duration-1000 ${aboutGrid.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gray-700/60 backdrop-blur-lg rounded-3xl p-8 border border-purple-400/20">
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-gray-100 mb-2">The Addyction</h3>
                <p className="text-orange-300 font-semibold text-lg">Adarsh Mishra - Founder | Dancer | Rap Artist</p>
              </div>
              <div className="space-y-4 text-gray-200 leading-relaxed">
                <p>
                  Adarsh Mishra, widely known as The Addyction, is a dynamic force in India’s street culture scene. A underground Hip-Hop dancer and Odia rap , he fuses local Odia spirit with global hip-hop energy.
                </p>
                <p>
                  His innovative approach blends traditional Odia cultural elements with contemporary dance forms, creating a unique movement that resonates with artists across Eastern India.
                </p>
                <p>
                  Under his leadership, Scene Sariba has evolved from a local crew to one of the most respected dance communities in the region.
                </p>
              </div>
            </div>

            <div className="bg-gray-700/60 backdrop-blur-lg rounded-3xl p-8 border border-purple-400/20">
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
      <section id="artists" className="relative z-10 py-8 px-8 lg:px-16 bg-gray-800/60 backdrop-blur-md">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-8 right-16 w-32 h-32 bg-gradient-to-r from-purple-500/10 to-orange-500/10 rounded-full animate-pulse transform rotate-12"></div>
          <div className="absolute bottom-16 right-16 w-20 h-20 bg-gradient-to-r from-orange-500/15 to-purple-500/15 rounded-full animate-bounce transform -rotate-45" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-gradient-to-r from-purple-400/20 to-orange-400/20 rounded-full animate-pulse transform rotate-180" style={{ animationDelay: '2.5s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div ref={artistsTitle.ref} className={`text-center mb-12 transition-all duration-1000 ${artistsTitle.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl lg:text-6xl font-theronked font-heading font-medium mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
                ARTISTS
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Artist 1 - Maika Rush */}
            <div className="relative transition-all duration-700 opacity-100 translate-y-0">
              <div 
                className={`relative group cursor-pointer transform hover:scale-105 transition-all duration-500 ${selectedArtist === 1 ? 'h-80' : 'h-64'}`}
                onClick={() => setSelectedArtist(selectedArtist === 1 ? null : 1)}
              >
                <div className={`relative w-full h-full bg-gray-700/60 border border-purple-400/20 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 rounded-2xl overflow-hidden ${selectedArtist === 1 ? 'transform scale-105 z-30' : ''}`}>
                  <div className={`w-full bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center rounded-2xl transition-all duration-500 ${selectedArtist === 1 ? 'h-1/2' : 'h-full'}`}>
                    <img 
                      src="/ma1.jpg" 
                      alt="Maika Rush"
                      className="w-full h-64 object-cover rounded-t-xl"
                    />
                    <img 
                      src="/jp.png" 
                      alt="Japan Logo"
                      className="absolute top-2 right-2 w-10 h-6 object-contain opacity-90 transition-opacity duration-300 hover:opacity-100"
                    />
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent transition-all duration-500 rounded-2xl ${selectedArtist === 1 ? 'opacity-85' : 'opacity-70 group-hover:opacity-85'}`}>
                    <div className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-500 ${selectedArtist === 1 ? 'transform translate-y-0' : ''}`}>
                      <h3 className="text-lg font-bold text-white text-center mb-1">MAiKA</h3>
                    </div>
                  </div>
                  <div className={`absolute bottom-0 left-0 right-0 bg-gray-800/95 backdrop-blur-lg border-t border-orange-400/30 p-4 transition-all duration-500 rounded-b-2xl ${selectedArtist === 1 ? 'transform translate-y-0 opacity-100' : 'transform translate-y-full opacity-0'}`}>
                    <div className="space-y-2">
                      <p className="text-orange-300 text-sm font-semibold">Hip-Hop</p>
                      <p className="text-gray-200 text-xs leading-relaxed">MAiKA is a Japanese hip-hop dancer and choreographer from Osaka, co-founder of the crew RushBall. She's earned top titles at DANCE@LIVE Kids, Juste Debout, WDC, and DanceAlive All-Styles. Known for her groovy yet powerful style, she creates choreography for music videos, theme-park shows, and trains youth teams. In 2025, she signed with streetwear brands G-shock, X-girl and XLARGE to inspire the next generation of Japanese female hip-hop dancers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Artist 2 - Nextion */}
            <div className="relative transition-all duration-700 opacity-100 translate-y-0">
              <div 
                className={`relative group cursor-pointer transform hover:scale-105 transition-all duration-500 ${selectedArtist === 2 ? 'h-80' : 'h-64'}`}
                onClick={() => setSelectedArtist(selectedArtist === 2 ? null : 2)}
              >
                <div className={`relative w-full h-full bg-gray-700/60 border border-purple-400/20 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 rounded-2xl overflow-hidden ${selectedArtist === 2 ? 'transform scale-105 z-30' : ''}`}>
                  <div className={`w-full bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center rounded-2xl transition-all duration-500 ${selectedArtist === 2 ? 'h-1/2' : 'h-full'}`}>
                    <img 
                      src="/nex1.jpg" 
                      alt="Nextion"
                      className="w-full h-64 object-cover rounded-t-xl"
                    />
                    <img 
                      src="/in.png" 
                      alt="India Logo"
                      className="absolute top-2 right-2 w-10 h-6 object-contain opacity-90 transition-opacity duration-300 hover:opacity-100"
                    />
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent transition-all duration-500 rounded-2xl ${selectedArtist === 2 ? 'opacity-85' : 'opacity-70 group-hover:opacity-85'}`}>
                    <div className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-500 ${selectedArtist === 2 ? 'transform translate-y-0' : ''}`}>
                      <h3 className="text-lg font-bold text-white text-center mb-1">Nextion</h3>
                    </div>
                  </div>
                  <div className={`absolute bottom-0 left-0 right-0 bg-gray-800/95 backdrop-blur-lg border-t border-orange-400/30 p-4 transition-all duration-500 rounded-b-2xl ${selectedArtist === 2 ? 'transform translate-y-0 opacity-100' : 'transform translate-y-full opacity-0'}`}>
                    <div className="space-y-2">
                      <p className="text-orange-300 text-sm font-semibold">Hip-Hop</p>
                      <p className="text-gray-200 text-xs leading-relaxed">Nextion is a dynamic hip-hop artist from Bhubaneswar, known for his fierce battles and powerful stage presence. He won the Red Bull Dance Your Style India 2025 finals in Delhi, earning a spot at the World Final in Los Angeles. A two-time national finalist (2022, 2025) and runner-up on India's Best Dancer Season 4, his mix of raw energy and emotional storytelling makes him a standout in the street dance scene.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Artist 3 - Varun Dagar */}
            <div className="relative transition-all duration-700 opacity-100 translate-y-0">
              <div 
                className={`relative group cursor-pointer transform hover:scale-105 transition-all duration-500 ${selectedArtist === 3 ? 'h-80' : 'h-64'}`}
                onClick={() => setSelectedArtist(selectedArtist === 3 ? null : 3)}
              >
                <div className={`relative w-full h-full bg-gray-700/60 border border-purple-400/20 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 rounded-2xl overflow-hidden ${selectedArtist === 3 ? 'transform scale-105 z-30' : ''}`}>
                  <div className={`w-full bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center rounded-2xl transition-all duration-500 ${selectedArtist === 3 ? 'h-1/2' : 'h-full'}`}>
                    <img 
                      src="/va1.jpg" 
                      alt="Varun Dagar"
                      className="w-full h-64 object-cover rounded-t-xl"
                    />
                    <img 
                      src="/in.png" 
                      alt="India Logo"
                      className="absolute top-2 right-2 w-10 h-6 object-contain opacity-90 transition-opacity duration-300 hover:opacity-100"
                    />
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent transition-all duration-500 rounded-2xl ${selectedArtist === 3 ? 'opacity-85' : 'opacity-70 group-hover:opacity-85'}`}>
                    <div className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-500 ${selectedArtist === 3 ? 'transform translate-y-0' : ''}`}>
                      <h3 className="text-lg font-bold text-white text-center mb-1">Varun Dagar</h3>
                    </div>
                  </div>
                  <div className={`absolute bottom-0 left-0 right-0 bg-gray-800/95 backdrop-blur-lg border-t border-orange-400/30 p-4 transition-all duration-500 rounded-b-2xl ${selectedArtist === 3 ? 'transform translate-y-0 opacity-100' : 'transform translate-y-full opacity-0'}`}>
                    <div className="space-y-2">
                      <p className="text-orange-300 text-sm font-semibold">Street-Busking & balletic dance</p>
                      <p className="text-gray-200 text-xs leading-relaxed">Varun Dagar, a street dancer, singer, and choreographer from Palwal now based in Delhi, rose to fame with his soulful, balletic performances at Connaught Place. He won World of Dance Chennai in 2021 and gained national attention on India's Best Dancer Season 2. Known for his expressive style and heartfelt artistry, Varun continues to inspire India's street-dance scene.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Artist 4 - Faria Abdullah */}
            <div className="relative transition-all duration-700 opacity-100 translate-y-0">
              <div 
                className={`relative group cursor-pointer transform hover:scale-105 transition-all duration-500 ${selectedArtist === 4 ? 'h-80' : 'h-64'}`}
                onClick={() => setSelectedArtist(selectedArtist === 4 ? null : 4)}
              >
                <div className={`relative w-full h-full bg-gray-700/60 border border-purple-400/20 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 rounded-2xl overflow-hidden ${selectedArtist === 4 ? 'transform scale-105 z-30' : ''}`}>
                  <div className={`w-full bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center rounded-2xl transition-all duration-500 ${selectedArtist === 4 ? 'h-1/2' : 'h-full'}`}>
                    <img 
                      src="/fa.jpg" 
                      alt="Faria Abdullah"
                      className="w-full h-64 object-cover rounded-t-xl"
                    />
                    <img 
                      src="/in.png" 
                      alt="India Logo"
                      className="absolute top-2 right-2 w-10 h-6 object-contain opacity-90 transition-opacity duration-300 hover:opacity-100"
                    />
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent transition-all duration-500 rounded-2xl ${selectedArtist === 4 ? 'opacity-85' : 'opacity-70 group-hover:opacity-85'}`}>
                    <div className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-500 ${selectedArtist === 4 ? 'transform translate-y-0' : ''}`}>
                      <h3 className="text-lg font-bold text-white text-center mb-1">Faria Abdullah</h3>

                    </div>
                  </div>
                  <div className={`absolute bottom-0 left-0 right-0 bg-gray-800/95 backdrop-blur-lg border-t border-orange-400/30 p-4 transition-all duration-500 rounded-b-2xl ${selectedArtist === 4 ? 'transform translate-y-0 opacity-100' : 'transform translate-y-full opacity-0'}`}>
                    <div className="space-y-2">
                      <p className="text-orange-300 text-sm font-semibold">Actress</p>
                      <p className="text-gray-200 text-xs leading-relaxed">Faria Abdullah is an actress, dancer, and visual performer from Hyderabad, trained in Kathak, hip-hop, waacking, house, and belly dance. Starting with over 50 theatre plays, she rose to fame as "Chitti" in *Jathi Ratnalu* (2021). In 2025, she judged *Dance IKON 2: WildFire*, applauding diverse talent. Also a painter, poet, and activist, Faria channels her passion through many forms of expression.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Artist 5 - Nepo */}
            <div className="relative transition-all duration-700 opacity-100 translate-y-0">
              <div 
                className={`relative group cursor-pointer transform hover:scale-105 transition-all duration-500 ${selectedArtist === 5 ? 'h-80' : 'h-64'}`}
                onClick={() => setSelectedArtist(selectedArtist === 5 ? null : 5)}
              >
                <div className={`relative w-full h-full bg-gray-700/60 border border-purple-400/20 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 rounded-2xl overflow-hidden ${selectedArtist === 5 ? 'transform scale-105 z-30' : ''}`}>
                  <div className={`w-full bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center rounded-2xl transition-all duration-500 ${selectedArtist === 5 ? 'h-1/2' : 'h-full'}`}>
                    <img 
                      src="/nepo1.jpg" 
                      alt="Nepo"
                      className="w-full h-64 object-cover rounded-t-xl"
                    />
                    <img 
                      src="/in.png" 
                      alt="India Logo"
                      className="absolute top-2 right-2 w-10 h-6 object-contain opacity-90 transition-opacity duration-300 hover:opacity-100"
                    />
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent transition-all duration-500 rounded-2xl ${selectedArtist === 5 ? 'opacity-85' : 'opacity-70 group-hover:opacity-85'}`}>
                    <div className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-500 ${selectedArtist === 5 ? 'transform translate-y-0' : ''}`}>
                      <h3 className="text-lg font-bold text-white text-center mb-1">Nepo</h3>
                    </div>
                  </div>
                  <div className={`absolute bottom-0 left-0 right-0 bg-gray-800/95 backdrop-blur-lg border-t border-orange-400/30 p-4 transition-all duration-500 rounded-b-2xl ${selectedArtist === 5 ? 'transform translate-y-0 opacity-100' : 'transform translate-y-full opacity-0'}`}>
                    <div className="space-y-2">
                      <p className="text-orange-300 text-sm font-semibold">Hip-Hop</p>
                      <p className="text-gray-200 text-xs leading-relaxed">Deepak Shahi, aka Nepo, is a hip-hop dancer and choreographer from Haldwani, Uttarakhand. A two-time Red Bull Dance Your Style India champion (2021, 2023), he represented India at the World Finals in Germany. In 2024, he impressed on India's Best Dancer Season 4 with choreographer Vartika Jha. Known for his dynamic style and infectious presence, Nepo is a leading force in India's street-dance scene.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Artist 6 - Alik */}
            <div className="relative transition-all duration-700 opacity-100 translate-y-0">
              <div 
                className={`relative group cursor-pointer transform hover:scale-105 transition-all duration-500 ${selectedArtist === 6 ? 'h-80' : 'h-64'}`}
                onClick={() => setSelectedArtist(selectedArtist === 6 ? null : 6)}
              >
                <div className={`relative w-full h-full bg-gray-700/60 border border-purple-400/20 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 rounded-2xl overflow-hidden ${selectedArtist === 6 ? 'transform scale-105 z-30' : ''}`}>
                  <div className={`w-full bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center rounded-2xl transition-all duration-500 ${selectedArtist === 6 ? 'h-1/2' : 'h-full'}`}>
                    <img 
                      src="/al1.jpg" 
                      alt="Alik"
                      className="w-full h-64 object-cover rounded-t-xl"
                    />
                    <img 
                      src="/kz.png" 
                      alt="Kazakhstan Logo"
                      className="absolute top-2 right-2 w-10 h-6 object-contain opacity-90 transition-opacity duration-300 hover:opacity-100"
                    />
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent transition-all duration-500 rounded-2xl ${selectedArtist === 6 ? 'opacity-85' : 'opacity-70 group-hover:opacity-85'}`}>
                    <div className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-500 ${selectedArtist === 6 ? 'transform translate-y-0' : ''}`}>
                      <h3 className="text-lg font-bold text-white text-center mb-1">Alik</h3>
                    </div>
                  </div>
                  <div className={`absolute bottom-0 left-0 right-0 bg-gray-800/95 backdrop-blur-lg border-t border-orange-400/30 p-4 transition-all duration-500 rounded-b-2xl ${selectedArtist === 6 ? 'transform translate-y-0 opacity-100' : 'transform translate-y-full opacity-0'}`}>
                    <div className="space-y-2">
                      <p className="text-orange-300 text-sm font-semibold">Hip-hop</p>
                      <p className="text-gray-200 text-xs leading-relaxed">Alik Kim, known as Alik, is a hip-hop dancer from Almaty, Kazakhstan. A member of Zone 51 and instructor at Skillz Dance Studio, he's known for his locking and freestyle flow. Gaining attention through viral videos and battle wins, Alik is steadily rising in Kazakhstan's street-dance scene, with goals to grow through workshops, competitions, and digital content.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Artist 7 - Kama */}
            <div className="relative transition-all duration-700 opacity-100 translate-y-0">
              <div 
                className={`relative group cursor-pointer transform hover:scale-105 transition-all duration-500 ${selectedArtist === 7 ? 'h-80' : 'h-64'}`}
                onClick={() => setSelectedArtist(selectedArtist === 7 ? null : 7)}
              >
                <div className={`relative w-full h-full bg-gray-700/60 border border-purple-400/20 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 rounded-2xl overflow-hidden ${selectedArtist === 7 ? 'transform scale-105 z-30' : ''}`}>
                  <div className={`w-full bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center rounded-2xl transition-all duration-500 ${selectedArtist === 7 ? 'h-1/2' : 'h-full'}`}>
                    <img 
                      src="/ka1.jpg" 
                      alt="Kama"
                      className="w-full h-64 object-cover rounded-t-xl"
                    />
                    <img 
                      src="/kz.png" 
                      alt="Kazakhstan Logo"
                      className="absolute top-2 right-2 w-10 h-6 object-contain opacity-90 transition-opacity duration-300 hover:opacity-100"
                    />
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent transition-all duration-500 rounded-2xl ${selectedArtist === 7 ? 'opacity-85' : 'opacity-70 group-hover:opacity-85'}`}>
                    <div className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-500 ${selectedArtist === 7 ? 'transform translate-y-0' : ''}`}>
                      <h3 className="text-lg font-bold text-white text-center mb-1">Kama</h3>
                    </div>
                  </div>
                  <div className={`absolute bottom-0 left-0 right-0 bg-gray-800/95 backdrop-blur-lg border-t border-orange-400/30 p-4 transition-all duration-500 rounded-b-2xl ${selectedArtist === 7 ? 'transform translate-y-0 opacity-100' : 'transform translate-y-full opacity-0'}`}>
                    <div className="space-y-2">
                      <p className="text-orange-300 text-sm font-semibold">Hip-Hop</p>
                      <p className="text-gray-200 text-xs leading-relaxed">Kama (Kamila) is a leading hip-hop artist from Almaty, Kazakhstan, active as a choreographer and performer. She leads Flow Keeperz, offering workshops in groove, hip-hop and freestyle. Featured as a "Hip Hop Pro" at Almaty Dance Fest 2024 and headliner of Kazakhstan's first Hip-Hop Base Camp in 2025. As both educator and artist, Kama continues to invigorate and inspire Central Asia's growing street-dance community.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Artist 8 - Peot */}
            <div className="relative transition-all duration-700 opacity-100 translate-y-0">
              <div 
                className={`relative group cursor-pointer transform hover:scale-105 transition-all duration-500 ${selectedArtist === 8 ? 'h-80' : 'h-64'}`}
                onClick={() => setSelectedArtist(selectedArtist === 8 ? null : 8)}
              >
                <div className={`relative w-full h-full bg-gray-700/60 border border-purple-400/20 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 rounded-2xl overflow-hidden ${selectedArtist === 8 ? 'transform scale-105 z-30' : ''}`}>
                  <div className={`w-full bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center rounded-2xl transition-all duration-500 ${selectedArtist === 8 ? 'h-1/2' : 'h-full'}`}>
                    <img 
                      src="/peot.jpg" 
                      alt="Peot"
                      className="w-full h-64 object-cover rounded-t-xl"
                    />
                    <img 
                      src="/my.png" 
                      alt="Malaysia Logo"
                      className="absolute top-2 right-2 w-10 h-6 object-contain opacity-90 transition-opacity duration-300 hover:opacity-100"
                    />
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent transition-all duration-500 rounded-2xl ${selectedArtist === 8 ? 'opacity-85' : 'opacity-70 group-hover:opacity-85'}`}>
                    <div className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-500 ${selectedArtist === 8 ? 'transform translate-y-0' : ''}`}>
                      <h3 className="text-lg font-bold text-white text-center mb-1">Peot</h3>
                    </div>
                  </div>
                  <div className={`absolute bottom-0 left-0 right-0 bg-gray-800/95 backdrop-blur-lg border-t border-orange-400/30 p-4 transition-all duration-500 rounded-b-2xl ${selectedArtist === 8 ? 'transform translate-y-0 opacity-100' : 'transform translate-y-full opacity-0'}`}>
                    <div className="space-y-2">
                      <p className="text-orange-300 text-sm font-semibold">Hip-Hop, DJ</p>
                      <p className="text-gray-200 text-xs leading-relaxed">Amirul Hafiz, known as Peot, is a Malaysian hip-hop dancer and DJ. A seasoned competitor, he won the Judgment Day World Dance Games qualifier in 2019 and represented Malaysia in China. Featured on the podcast *Shoes Off, No Cap*, he speaks on hip-hop fundamentals, crew life (Walawei, BeatMyBois), and battle mindset. Through workshops, performances, and music, Peot stands as a key figure in Malaysia's street dance culture.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Artist 9 - Paal Dabba */}
            <div className="relative transition-all duration-700 opacity-100 translate-y-0">
              <div 
                className={`relative group cursor-pointer transform hover:scale-105 transition-all duration-500 ${selectedArtist === 9 ? 'h-80' : 'h-64'}`}
                onClick={() => setSelectedArtist(selectedArtist === 9 ? null : 9)}
              >
                <div className={`relative w-full h-full bg-gray-700/60 border border-purple-400/20 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 rounded-2xl overflow-hidden ${selectedArtist === 9 ? 'transform scale-105 z-30' : ''}`}>
                  <div className={`w-full bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center rounded-2xl transition-all duration-500 ${selectedArtist === 9 ? 'h-1/2' : 'h-full'}`}>
                    <img 
                      src="/paal.jpg" 
                      alt="Paal Dabba"
                      className="w-full h-64 object-cover rounded-t-xl"
                    />
                    <img 
                      src="/in.png" 
                      alt="India Logo"
                      className="absolute top-2 right-2 w-10 h-6 object-contain opacity-90 transition-opacity duration-300 hover:opacity-100"
                    />
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent transition-all duration-500 rounded-2xl ${selectedArtist === 9 ? 'opacity-85' : 'opacity-70 group-hover:opacity-85'}`}>
                    <div className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-500 ${selectedArtist === 9 ? 'transform translate-y-0' : ''}`}>
                      <h3 className="text-lg font-bold text-white text-center mb-1">Paal Dabba</h3>
                    </div>
                  </div>
                  <div className={`absolute bottom-0 left-0 right-0 bg-gray-800/95 backdrop-blur-lg border-t border-orange-400/30 p-4 transition-all duration-500 rounded-b-2xl ${selectedArtist === 9 ? 'transform translate-y-0 opacity-100' : 'transform translate-y-full opacity-0'}`}>
                    <div className="space-y-2">
                      <p className="text-orange-300 text-sm font-semibold">Hip-Hop, Rapper</p>
                      <p className="text-gray-200 text-xs leading-relaxed">Paal Dabba, born Anish in 2000 in Chennai, is a dancer-turned-rapper, singer, songwriter, and choreographer. Rising with Bfab crew and winning Breezer Vivid Shuffle in 2019, he debuted in music with "3SHA" and "Ai," followed by hits like "170CM," "SAB," and "Galatta." In 2025, he stepped into acting with Vijay Milton's bilingual film. Named in Rolling Stone India's "Future Top 25 Artists 2024"</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Artist 10 - Boogie LLB */}
            <div className="relative transition-all duration-700 opacity-100 translate-y-0">
              <div 
                className={`relative group cursor-pointer transform hover:scale-105 transition-all duration-500 ${selectedArtist === 10 ? 'h-80' : 'h-64'}`}
                onClick={() => setSelectedArtist(selectedArtist === 10 ? null : 10)}
              >
                <div className={`relative w-full h-full bg-gray-700/60 border border-purple-400/20 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 rounded-2xl overflow-hidden ${selectedArtist === 10 ? 'transform scale-105 z-30' : ''}`}>
                  <div className={`w-full bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center rounded-2xl transition-all duration-500 ${selectedArtist === 10 ? 'h-1/2' : 'h-full'}`}>
                    <img 
                      src="/boogie.jpg" 
                      alt="Boogie LLB"
                      className="w-full h-64 object-cover rounded-t-xl"
                    />
                    <img 
                      src="/in.png" 
                      alt="India Logo"
                      className="absolute top-2 right-2 w-10 h-6 object-contain opacity-90 transition-opacity duration-300 hover:opacity-100"
                    />
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent transition-all duration-500 rounded-2xl ${selectedArtist === 10 ? 'opacity-85' : 'opacity-70 group-hover:opacity-85'}`}>
                    <div className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-500 ${selectedArtist === 10 ? 'transform translate-y-0' : ''}`}>
                      <h3 className="text-lg font-bold text-white text-center mb-1">Boogie LLB</h3>
                    </div>
                  </div>
                  <div className={`absolute bottom-0 left-0 right-0 bg-gray-800/95 backdrop-blur-lg border-t border-orange-400/30 p-4 transition-all duration-500 rounded-b-2xl ${selectedArtist === 10 ? 'transform translate-y-0 opacity-100' : 'transform translate-y-full opacity-0'}`}>
                    <div className="space-y-2">
                      <p className="text-orange-300 text-sm font-semibold">Popping</p>
                      <p className="text-gray-200 text-xs leading-relaxed">Boogie LLB (Anish Mitra) is a Kolkata-based popper known for his raw, street-driven style and underground roots. Rising from battles in barges and basements, he gained national attention on India's Best Dancer Season 3 with heartfelt performances—like a thumri piece with Saumya Kamble that moved judge Sonali Bendre to dance. Blending underground grit with emotional depth, Boogie stands out as a powerful force in India's urban dance scene.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Artist 11 - B-Boy Tornado */}
            <div className="relative transition-all duration-700 opacity-100 translate-y-0">
              <div 
                className={`relative group cursor-pointer transform hover:scale-105 transition-all duration-500 ${selectedArtist === 11 ? 'h-80' : 'h-64'}`}
                onClick={() => setSelectedArtist(selectedArtist === 11 ? null : 11)}
              >
                <div className={`relative w-full h-full bg-gray-700/60 border border-purple-400/20 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 rounded-2xl overflow-hidden ${selectedArtist === 11 ? 'transform scale-105 z-30' : ''}`}>
                  <div className={`w-full bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center rounded-2xl transition-all duration-500 ${selectedArtist === 11 ? 'h-1/2' : 'h-full'}`}>
                    <img 
                      src="/tornado.jpg" 
                      alt="B-Boy Tornado"
                      className="w-full h-64 object-cover rounded-t-xl"
                    />
                    <img 
                      src="/in.png" 
                      alt="India Logo"
                      className="absolute top-2 right-2 w-10 h-6 object-contain opacity-90 transition-opacity duration-300 hover:opacity-100"
                    />
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent transition-all duration-500 rounded-2xl ${selectedArtist === 11 ? 'opacity-85' : 'opacity-70 group-hover:opacity-85'}`}>
                    <div className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-500 ${selectedArtist === 11 ? 'transform translate-y-0' : ''}`}>
                      <h3 className="text-lg font-bold text-white text-center mb-1">B-Boy Tornado</h3>
                    </div>
                  </div>
                  <div className={`absolute bottom-0 left-0 right-0 bg-gray-800/95 backdrop-blur-lg border-t border-orange-400/30 p-4 transition-all duration-500 rounded-b-2xl ${selectedArtist === 11 ? 'transform translate-y-0 opacity-100' : 'transform translate-y-full opacity-0'}`}>
                    <div className="space-y-2">
                      <p className="text-orange-300 text-sm font-semibold">B-Boying</p>
                      <p className="text-gray-200 text-xs leading-relaxed">B-Boy Tornado (Ramesh Anandabhushan Yadav) is a powerhouse breaker from Mumbai, known for his explosive style and signature "2000" spin. Starting at 14, he rose from underground jams to win the Red Bull BC One Cypher India in 2019, becoming the first Indian to reach the Top-16 at the Last Chance Cypher. Founder of Young Rebelz and a 2023 Asia Breaking Championship contender, Tornado leads both on the floor and in building India's breaking community.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Artist 12 - B-Boy WildChild */}
            <div className="relative transition-all duration-700 opacity-100 translate-y-0">
              <div 
                className={`relative group cursor-pointer transform hover:scale-105 transition-all duration-500 ${selectedArtist === 12 ? 'h-80' : 'h-64'}`}
                onClick={() => setSelectedArtist(selectedArtist === 12 ? null : 12)}
              >
                <div className={`relative w-full h-full bg-gray-700/60 border border-purple-400/20 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 rounded-2xl overflow-hidden ${selectedArtist === 12 ? 'transform scale-105 z-30' : ''}`}>
                  <div className={`w-full bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center rounded-2xl transition-all duration-500 ${selectedArtist === 12 ? 'h-1/2' : 'h-full'}`}>
                    <img 
                      src="/wildchild.jpg" 
                      alt="B-Boy WildChild"
                      className="w-full h-64 object-cover rounded-t-xl"
                    />
                    <img 
                      src="/in.png" 
                      alt="India Logo"
                      className="absolute top-2 right-2 w-10 h-6 object-contain opacity-90 transition-opacity duration-300 hover:opacity-100"
                    />
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent transition-all duration-500 rounded-2xl ${selectedArtist === 12 ? 'opacity-85' : 'opacity-70 group-hover:opacity-85'}`}>
                    <div className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-500 ${selectedArtist === 12 ? 'transform translate-y-0' : ''}`}>
                      <h3 className="text-lg font-bold text-white text-center mb-1">B-Boy WildChild</h3>
                    </div>
                  </div>
                  <div className={`absolute bottom-0 left-0 right-0 bg-gray-800/95 backdrop-blur-lg border-t border-orange-400/30 p-4 transition-all duration-500 rounded-b-2xl ${selectedArtist === 12 ? 'transform translate-y-0 opacity-100' : 'transform translate-y-full opacity-0'}`}>
                    <div className="space-y-2">
                      <p className="text-orange-300 text-sm font-semibold">B-Boying</p>
                      <p className="text-gray-200 text-xs leading-relaxed">B-Boy Wildchild (Eshwar Tiwari) is a standout breaker from Mumbai who began his journey in 2012 through underground battles. He gained recognition after winning 16 straight local comps in 2014 and debuted internationally in Korea in 2017. His "Wild Spin" went viral in 2019, and in 2021, he won Red Bull BC One Cypher India, earning a wildcard for the World Finals—becoming one of the first Indian breakers on the global stage.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Artist 13 - Vengayo */}
            <div className="relative transition-all duration-700 opacity-100 translate-y-0">
              <div 
                className={`relative group cursor-pointer transform hover:scale-105 transition-all duration-500 ${selectedArtist === 13 ? 'h-80' : 'h-64'}`}
                onClick={() => setSelectedArtist(selectedArtist === 13 ? null : 13)}
              >
                <div className={`relative w-full h-full bg-gray-700/60 border border-purple-400/20 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 rounded-2xl overflow-hidden ${selectedArtist === 13 ? 'transform scale-105 z-30' : ''}`}>
                  <div className={`w-full bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center rounded-2xl transition-all duration-500 ${selectedArtist === 13 ? 'h-1/2' : 'h-full'}`}>
                    <img 
                      src="/vengayo.jpg" 
                      alt="Venagayo"
                      className="w-full h-64 object-cover rounded-t-xl"
                    />
                    <img 
                      src="/in.png" 
                      alt="India Logo"
                      className="absolute top-2 right-2 w-10 h-6 object-contain opacity-90 transition-opacity duration-300 hover:opacity-100"
                    />
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent transition-all duration-500 rounded-2xl ${selectedArtist === 13 ? 'opacity-85' : 'opacity-70 group-hover:opacity-85'}`}>
                    <div className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-500 ${selectedArtist === 13 ? 'transform translate-y-0' : ''}`}>
                      <h3 className="text-lg font-bold text-white text-center mb-1">Vengayo</h3>
                    </div>
                  </div>
                  <div className={`absolute bottom-0 left-0 right-0 bg-gray-800/95 backdrop-blur-lg border-t border-orange-400/30 p-4 transition-all duration-500 rounded-b-2xl ${selectedArtist === 13 ? 'transform translate-y-0 opacity-100' : 'transform translate-y-full opacity-0'}`}>
                    <div className="space-y-2">
                      <p className="text-orange-300 text-sm font-semibold">Hip-Hop, Rapper</p>
                      <p className="text-gray-200 text-xs leading-relaxed">Vengayo is a genre-blending dancer, rapper, and director known for his high-energy hip-hop style and viral street choreos. Based in India, he gained fame through Instagram (@vengayo__) with explosive “Chikkama” routines and striking visuals. Blending desi rhythm with global footwork, he directs his own music videos—pushing street culture forward through bold movement and storytelling.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Artist 14 - Supriya Nayak */}
            <div className="relative transition-all duration-700 opacity-100 translate-y-0">
              <div 
                className={`relative group cursor-pointer transform hover:scale-105 transition-all duration-500 ${selectedArtist === 14 ? 'h-80' : 'h-64'}`}
                onClick={() => setSelectedArtist(selectedArtist === 14 ? null : 14)}
              >
                <div className={`relative w-full h-full bg-gray-700/60 border border-purple-400/20 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 rounded-2xl overflow-hidden ${selectedArtist === 14 ? 'transform scale-105 z-30' : ''}`}>
                  <div className={`w-full bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center rounded-2xl transition-all duration-500 ${selectedArtist === 14 ? 'h-1/2' : 'h-full'}`}>
                    <img 
                      src="/supriya.jpg" 
                      alt="Supriya"
                      className="w-full h-64 object-cover rounded-t-xl"
                    />
                    <img 
                      src="/in.png" 
                      alt="India Logo"
                      className="absolute top-2 right-2 w-10 h-6 object-contain opacity-90 transition-opacity duration-300 hover:opacity-100"
                    />
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent transition-all duration-500 rounded-2xl ${selectedArtist === 14 ? 'opacity-85' : 'opacity-70 group-hover:opacity-85'}`}>
                    <div className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-500 ${selectedArtist === 14 ? 'transform translate-y-0' : ''}`}>
                      <h3 className="text-lg font-bold text-white text-center mb-1">Supriya Nayak</h3>
                    </div>
                  </div>
                  <div className={`absolute bottom-0 left-0 right-0 bg-gray-800/95 backdrop-blur-lg border-t border-orange-400/30 p-4 transition-all duration-500 rounded-b-2xl ${selectedArtist === 14 ? 'transform translate-y-0 opacity-100' : 'transform translate-y-full opacity-0'}`}>
                    <div className="space-y-2">
                      <p className="text-orange-300 text-sm font-semibold">Actress</p>
                      <p className="text-gray-200 text-xs leading-relaxed">Supriya Nayak is a rising Ollywood actress and former Miss Odisha runner-up (2014), known for her charm and screen presence. She debuted with Love Pain Kuchh Bhi Karega (2016) and gained recognition through films like Only Pyaar (2018) and Biju Babu (2019). Recently seen in Astika Nastika (2022), Pushkara (2023), and Kuhudi (2024). With her versatile performances, Supriya continues to shine in Odisha’s film industry.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Artist 15 - Instinct */}
            <div className="relative transition-all duration-700 opacity-100 translate-y-0">
              <div 
                className={`relative group cursor-pointer transform hover:scale-105 transition-all duration-500 ${selectedArtist === 15 ? 'h-80' : 'h-64'}`}
                onClick={() => setSelectedArtist(selectedArtist === 15 ? null : 15)}
              >
                <div className={`relative w-full h-full bg-gray-700/60 border border-purple-400/20 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 rounded-2xl overflow-hidden ${selectedArtist === 15 ? 'transform scale-105 z-30' : ''}`}>
                  <div className={`w-full bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center rounded-2xl transition-all duration-500 ${selectedArtist === 15 ? 'h-1/2' : 'h-full'}`}>
                    <img 
                      src="/instinct.jpg" 
                      alt="Instinct"
                      className="w-full h-64 object-cover rounded-t-xl"
                    />
                    <img 
                      src="/lu.png" 
                      alt="Luxembourg Logo"
                      className="absolute top-2 right-2 w-10 h-6 object-contain opacity-90 transition-opacity duration-300 hover:opacity-100"
                    />
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent transition-all duration-500 rounded-2xl ${selectedArtist === 15 ? 'opacity-85' : 'opacity-70 group-hover:opacity-85'}`}>
                    <div className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-500 ${selectedArtist === 15 ? 'transform translate-y-0' : ''}`}>
                      <h3 className="text-lg font-bold text-white text-center mb-1">Instinct Prime</h3>
                    </div>
                  </div>
                  <div className={`absolute bottom-0 left-0 right-0 bg-gray-800/95 backdrop-blur-lg border-t border-orange-400/30 p-4 transition-all duration-500 rounded-b-2xl ${selectedArtist === 15 ? 'transform translate-y-0 opacity-100' : 'transform translate-y-full opacity-0'}`}>
                    <div className="space-y-2">
                      <p className="text-orange-300 text-sm font-semibold">Hip-Hop, Beat Maker</p>
                      <p className="text-gray-200 text-xs leading-relaxed">Instinct.Prime (aka Ruff Killah) is a hip-hop dancer and beat-maker from Luxembourg, known for his explosive energy and rhythmic movement. A regular at events like LADC, he blends street dance with musicality inspired by global influences. As Ruff Killah on SoundCloud, he also crafts original tracks rooted in hip-hop and groove-heavy beats.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Artist 16 - Deepak Yadav */}
            <div className="relative transition-all duration-700 opacity-100 translate-y-0">
              <div 
                className={`relative group cursor-pointer transform hover:scale-105 transition-all duration-500 ${selectedArtist === 16 ? 'h-80' : 'h-64'}`}
                onClick={() => setSelectedArtist(selectedArtist === 16 ? null : 16)}
              >
                <div className={`relative w-full h-full bg-gray-700/60 border border-purple-400/20 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 rounded-2xl overflow-hidden ${selectedArtist === 16 ? 'transform scale-105 z-30' : ''}`}>
                  <div className={`w-full bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center rounded-2xl transition-all duration-500 ${selectedArtist === 16 ? 'h-1/2' : 'h-full'}`}>
                    <img 
                      src="/deepak.png" 
                      alt="Deepak Yadav"
                      className="w-full h-64 object-cover rounded-t-xl"
                    />
                    <img 
                      src="/in.png" 
                      alt="India Logo"
                      className="absolute top-2 right-2 w-10 h-6 object-contain opacity-90 transition-opacity duration-300 hover:opacity-100"
                    />
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent transition-all duration-500 rounded-2xl ${selectedArtist === 16 ? 'opacity-85' : 'opacity-70 group-hover:opacity-85'}`}>
                    <div className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-500 ${selectedArtist === 16 ? 'transform translate-y-0' : ''}`}>
                      <h3 className="text-lg font-bold text-white text-center mb-1">Deepak Yadav</h3>
                    </div>
                  </div>
                  <div className={`absolute bottom-0 left-0 right-0 bg-gray-800/95 backdrop-blur-lg border-t border-orange-400/30 p-4 transition-all duration-500 rounded-b-2xl ${selectedArtist === 16 ? 'transform translate-y-0 opacity-100' : 'transform translate-y-full opacity-0'}`}>
                    <div className="space-y-2">
                      <p className="text-orange-300 text-sm font-semibold">Emcee</p>
                      <p className="text-gray-200 text-xs leading-relaxed">Deepak Yadav is the vibrant emcee of Red Bull Dance Your Style India, known for his smooth crowd work and deep roots in hip-hop culture. Based in Lucknow, he balances life as a software engineer with his passion for hosting battles, jams, and cyphers across India. With sharp mic control and captivating energy, he brings dancers, DJs, and audiences together on every stage he commands.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="relative z-10 py-8 px-8 lg:px-16 bg-gray-800/60 backdrop-blur-md">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-12 left-10 w-28 h-28 bg-gradient-to-r from-orange-500/10 to-purple-500/10 rounded-full animate-pulse transform -rotate-12"></div>
          <div className="absolute bottom-12 right-16 w-20 h-20 bg-gradient-to-r from-purple-500/15 to-orange-500/15 rounded-full animate-bounce transform rotate-45" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-2/3 left-1/4 w-12 h-12 bg-gradient-to-r from-orange-400/20 to-purple-400/20 rounded-full animate-pulse transform rotate-90" style={{ animationDelay: '3s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div ref={galleryTitle.ref} className={`text-center mb-12 transition-all duration-1000 ${galleryTitle.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl lg:text-6xl font-theronked font-heading font-medium mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
                GALLERY
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {galleryItems.map((item, index) => {
              const galleryAnimation = useScrollAnimation(0.3, index * 100);
              
              return (
                <div 
                  key={item.id} 
                  ref={galleryAnimation.ref}
                  className={`relative transition-all duration-700 ${galleryAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                  <div 
                    className="relative group cursor-pointer h-64 transform transition-all duration-300 hover:scale-105"
                    onClick={() => setSelectedImage(`gallery-${item.id}`)}
                  >
                    <div className="relative w-full h-full bg-black border border-purple-400/20 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 rounded-2xl overflow-hidden">
                      {/* Completely black container */}
                      <div className="w-full h-full bg-black rounded-2xl"></div>
                      
                      {/* Title overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100 transition-all duration-500 rounded-2xl flex items-end justify-center">
                        <div className="p-4 text-center">
                          <h3 className="text-lg font-bold text-white">{item.title}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Image Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl w-full h-auto p-0 bg-transparent border-none">
          <div className="relative">
            <div className="w-full h-96 bg-black rounded-lg flex items-center justify-center">
              <p className="text-white text-xl">Gallery Image Placeholder</p>
            </div>
            <DialogClose className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-200">
              <X className="w-6 h-6" />
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>

      {/* Contact Us Section */}
      <section id="contact" className="relative z-10 py-16 px-8 lg:px-16 bg-gray-800/60 backdrop-blur-md">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-16 right-12 w-24 h-24 bg-gradient-to-r from-purple-500/5 to-orange-500/5 rounded-full animate-pulse transform rotate-30"></div>
          <div className="absolute bottom-12 left-16 w-22 h-22 bg-gradient-to-r from-orange-500/8 to-purple-500/8 rounded-full animate-bounce transform -rotate-30" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div ref={contactTitle.ref} className={`text-center mb-16 transition-all duration-1000 ${contactTitle.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl lg:text-6xl font-theronked font-heading font-medium mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
                CONTACT US
              </span>
            </h2>
          </div>

          <div ref={contactDesc.ref} className={`transition-all duration-1000 ${contactDesc.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              
              {/* Scene Sariba Brand Column */}
              <div className="lg:col-span-1">
                <div className="mb-6">
                  <h3 className="text-3xl font-marker font-black mb-4">
                    <span className="bg-gradient-to-r from-orange-400 via-orange-300 to-orange-200 bg-clip-text text-transparent">
                      SCENE SARIBA
                    </span>
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Pioneering the dance revolution in Puri, where tradition meets innovation. Join our vibrant community of artists.
                  </p>
                </div>
              </div>

              {/* Join The Movement */}
              <div className="lg:col-span-1">
                <h4 className="text-orange-400 font-marker font-bold text-lg mb-6 uppercase tracking-wide">Join The Movement</h4>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-orange-400" />
                    <span className="text-gray-300 text-sm">scenesariba@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-orange-400" />
                    <span className="text-gray-300 text-sm">+91 98765 43210</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-orange-400" />
                    <span className="text-gray-300 text-sm">Puri Beach, Odisha</span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-6 rounded-xl font-bold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/40">
                  Join Scene Sariba
                </button>
              </div>
            </div>

            {/* Bottom Copyright */}
            <div className="border-t border-gray-700/50 pt-8 text-center">
              <p className="text-gray-400 text-sm">
                © 2025 Scene Sariba. All rights reserved. | Puri's Dance Community
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Floating Elements */}
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute top-1/3 right-10 w-8 h-8 bg-gradient-to-r from-purple-600 to-gray-600 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full opacity-25 animate-bounce" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/4 left-1/3 w-6 h-6 bg-gradient-to-r from-orange-500 to-purple-500 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/4 left-1/5 w-10 h-10 bg-gradient-to-r from-purple-400 to-orange-400 rounded-full opacity-25 animate-bounce" style={{ animationDelay: '3s' }}></div>

      <style>
        {`
          .transform-style-preserve-3d {
            transform-style: preserve-3d;
          }
          .backface-hidden {
            backface-visibility: hidden;
          }
          .rotate-y-180 {
            transform: rotateY(180deg);
          }
        `}
      </style>
    </div>
  );
};

export default Index;
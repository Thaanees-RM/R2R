import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Phone, 
  Mail, 
  MapPin,
  ChevronDown,
  Music
} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // TikTok icon component since Lucide doesn't have it
  const TikTokIcon = ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V7.83a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.26z"/>
    </svg>
  );

  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Linkedin, href: '#' },
    { icon: Youtube, href: '#' },
    { icon: Music, href: '#' },
    { icon: TikTokIcon, href: '#' },
  ];

  const navItems = [
    { name: 'HOME', href: '#' },
    { name: 'WHO WE ARE', href: '#', hasDropdown: true },
    { name: 'WHAT WE DO', href: '#', hasDropdown: true },
    { name: 'WE ARE GLOBAL', href: '#', hasDropdown: true },
    { name: 'MEDIA', href: '#', hasDropdown: true },
    { name: 'GET INVOLVED', href: '#', hasDropdown: true },
    { name: 'PROJECTS', href: '#', hasDropdown: true },
    { name: 'CONTACT US', href: '#' },
  ];

  return (
    <header className="w-full">
      {/* Top Bar with Social Icons */}
      <div className="bg-[#0076A1] py-2">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-end space-x-1">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-white p-2 rounded-full bg-purple-800 hover:bg-purple-600 transition-colors duration-300"
              >
                <social.icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Header - Desktop */}
      <div className="hidden lg:block bg-white">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <div className="relative mr-4">
                {/* Purple curved element */}
                <div className="w-16 h-16 relative">
                  <div className="absolute inset-0 bg-purple-800 rounded-full transform rotate-45"></div>
                  <div className="absolute inset-2 bg-white rounded-full"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-purple-800 font-bold text-2xl transform -rotate-45">R</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-cyan-500 font-bold text-3xl leading-tight">THE ROAD</div>
                <div className="text-gray-600 text-lg font-medium">TO RIGHTS</div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex items-start space-x-12">
              {/* Mail */}
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Mail className="text-cyan-500 mr-2" size={20} />
                  <span className="font-bold text-gray-800 text-lg">Mail Us Today</span>
                </div>
                <div className="text-gray-600 text-sm">road2rights@gmail.com</div>
                <div className="text-gray-600 text-sm">info@roadtorights.org</div>
              </div>
              
              {/* Phone */}
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Phone className="text-cyan-500 mr-2" size={20} />
                  <span className="font-bold text-gray-800 text-lg">+(094) 71 9496 557</span>
                </div>
                <div className="text-gray-600 text-sm">Call us for more details!</div>
              </div>
              
              {/* Location */}
              <div className="text-center">
                <div className="flex items-center justify-end mb-2">
                  <MapPin className="text-cyan-500 mr-2" size={20} />
                  <span className="font-bold text-gray-800 text-lg">Location</span>
                </div>
                <div className="text-gray-600 text-sm">Apartment 11 B Sky Gardens # 39, Perera</div>
                <div className="text-gray-600 text-sm">Mawatte Kotuwegoda Rajagiriya Sri Lanka</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden bg-white">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Mobile Logo */}
            <div className="flex items-center">
              <div className="relative mr-2">
                <div className="w-10 h-10 relative">
                  <div className="absolute inset-0 bg-purple-600 rounded-full transform rotate-45"></div>
                  <div className="absolute inset-1 bg-white rounded-full"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-purple-600 font-bold text-sm transform -rotate-45">R</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-cyan-500 font-bold text-lg">THE ROAD</div>
                <div className="text-gray-600 text-sm font-medium">TO RIGHTS</div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-purple-600 p-2"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-purple-800">
        <div className="max-w-full mx-auto px-10">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center gap-10">
            <ul className="flex">
              {navItems.map((item, index) => (
                <li key={index} className="relative">
                  <a
                    href={item.href}
                    className="flex items-center text-white hover:bg-purple-600 py-4 px-4 text-sm font-medium transition-colors duration-300"
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && <ChevronDown size={16} className="ml-1" />}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center space-x-0">
              <button className="text-white border-r border-purple-600 px-6 py-4 text-sm font-medium hover:bg-purple-800 transition-colors duration-300">
                My R2R Login
              </button>
              <button className="bg-green-700 text-white px-6 py-4 text-sm font-medium hover:bg-green-600 transition-colors duration-300">
                APPLY NOW
                <ChevronDown size={16} className="ml-1 inline" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-purple-700">
          <ul className="py-4">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="flex items-center justify-between text-white hover:bg-purple-800 py-3 px-4 text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && <ChevronDown size={16} />}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="px-4 pb-4 space-y-2">
            <button className="w-full text-white border border-white px-4 py-2 text-sm hover:bg-white hover:text-purple-700 transition-colors duration-300">
              My R2R Login
            </button>
            <button className="w-full bg-green-500 text-white px-4 py-2 text-sm font-medium hover:bg-green-600 transition-colors duration-300">
              APPLY NOW
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
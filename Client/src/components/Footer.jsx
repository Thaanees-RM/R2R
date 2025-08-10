import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const SDGWheel = () => (
    <div className="w-12 h-12 rounded-full relative overflow-hidden flex-shrink-0">
      <div 
        className="w-full h-full rounded-full"
        style={{
          background: `conic-gradient(
            #e60012 0deg 21.6deg,
            #dda73a 21.6deg 43.2deg,
            #4c9f38 43.2deg 64.8deg,
            #c5192d 64.8deg 86.4deg,
            #ff3a21 86.4deg 108deg,
            #26bde2 108deg 129.6deg,
            #fcc30b 129.6deg 151.2deg,
            #a21942 151.2deg 172.8deg,
            #fd6925 172.8deg 194.4deg,
            #dd1367 194.4deg 216deg,
            #fd9d24 216deg 237.6deg,
            #bf8d2c 237.6deg 259.2deg,
            #00689d 259.2deg 280.8deg,
            #19486a 280.8deg 302.4deg,
            #bf9b37 302.4deg 324deg,
            #00689d 324deg 345.6deg,
            #19486a 345.6deg 360deg
          )`
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-6 h-6 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );

   
  const socialIcons = [
    { 
      name: 'Facebook', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    { 
      name: 'Twitter', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    },
    { 
      name: 'Instagram', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 1.5h8.5c2.31 0 4.25 1.94 4.25 4.25v8.5c0 2.31-1.94 4.25-4.25 4.25h-8.5C5.44 20.5 3.5 18.56 3.5 16.25v-8.5C3.5 5.44 5.44 3.5 7.75 3.5zm8.75 2.25a.75.75 0 0 0 0 1.5h.007a.75.75 0 0 0 0-1.5H16.5zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 1.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7z"/>
        </svg>
      )
    },
    { 
      name: 'LinkedIn', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    { 
      name: 'YouTube', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    { 
      name: 'Medium', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
        </svg>
      )
    },
    { 
      name: 'TikTok', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      )
    },
  ];

  return (
    <>
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            
            {/* Left Section - Logo, Contact Info, and Award */}
            <div className="flex flex-col space-y-8">
              {/* Logo */}
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 relative">
                    {/* Person icon with gradient background */}
                    <div className="w-full h-full bg-gradient-to-br from-purple-500 to-cyan-400 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2M21 9V7L15 6.5V7.5C15 8.3 14.3 9 13.5 9S12 8.3 12 7.5V6L6 7V9H7V15H6V16C6 17.1 6.9 18 8 18V22H16V18C17.1 18 18 17.1 18 16V15H17V9H21Z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-cyan-400 leading-tight">THE ROAD</div>
                  <div className="text-sm text-gray-300 leading-tight">TO RIGHTS</div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="text-gray-300 space-y-2">
                <p className="text-sm leading-relaxed">
                  Apartment 11 B Sky Gardens # 39, Perera Mawatte<br />
                  Kotuwegoda Rajagiriya Sri Lanka
                </p>
                <div className="space-y-1 pt-4">
                  <p className="text-cyan-400 text-sm flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                    <a href="tel:+94717496557" className="hover:underline">+(094) 71 9496 557</a>
                  </p>
                  <p className="text-cyan-400 text-sm flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                    <a href="mailto:road2rights@gmail.com" className="hover:underline">road2rights@gmail.com</a>
                  </p>
                </div>
              </div>

              {/* UN SDG Award Badge */}
              <div className="bg-white p-6 rounded-lg">
                <div className="text-gray-600 text-xs text-center font-medium mb-4 leading-tight">
                  WINNER OF<br />
                  THE UNITED NATIONS<br />
                  SDG ACTION AWARD 2018<br />
                  PEOPLES CHOICE
                </div>
                <div className="flex items-center justify-center gap-4">
                  <SDGWheel />
                  <div className="flex items-center gap-3">
                    {/* UN Logo */}
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
                        <path d="M2 17L12 22L22 17"/>
                        <path d="M2 12L12 17L22 12"/>
                      </svg>
                    </div>
                    <div className="text-xs text-gray-700">
                      <div className="font-semibold text-gray-800 leading-tight">SUSTAINABLE DEVELOPMENT GOALS</div>
                      <div className="text-lg font-bold text-gray-900 leading-tight">ACTION</div>
                      <div className="text-yellow-600 font-bold text-lg leading-tight">AWARDS</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Section - Opening Hours and Contact */}
            <div className="space-y-8">
              {/* Opening Hours */}
              <div>
                <h3 className="text-xl font-bold text-white mb-6">Opening Hours</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-base">Mon - Fri :</span>
                    <span className="text-white text-base">8.00 am - 8.00 pm</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-base">Sat - Sun :</span>
                    <span className="text-white text-base">8.00 am - 8.00 pm</span>
                  </div>
                </div>
              </div>

              {/* Call Us Now */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Call Us Now</h3>
                <div className="text-cyan-400 text-lg font-medium">+(094) 71 9496 557</div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-bold text-white mb-6">Connect With Us</h3>
                <div className="flex gap-4">
                  {socialIcons.map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className="w-10 h-10 bg-gray-600 hover:bg-cyan-500 rounded-sm flex items-center justify-center text-white text-sm font-bold transition-colors duration-300"
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Section - Badges */}
            <div className="space-y-6">
              {/* SDG 17 Badge */}
              <div className="bg-white p-6 rounded-lg">
                <div className="flex items-center justify-center">
                  <div className="relative">
                    {/* Outer decorative border */}
                    <div className="absolute -inset-3 rounded-full border-4 border-yellow-400"></div>
                    <div className="absolute -inset-2 rounded-full">
                      <div className="w-full h-full rounded-full border-2 border-yellow-400 opacity-60"></div>
                    </div>
                    {/* Main circle */}
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full flex items-center justify-center relative">
                      <span className="text-white text-2xl font-bold">17</span>
                      {/* Stars decoration */}
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 flex gap-1">
                        <span className="text-yellow-400 text-xs">★</span>
                        <span className="text-yellow-400 text-xs">★</span>
                        <span className="text-yellow-400 text-xs">★</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <div className="text-blue-900 text-xs font-semibold leading-tight">
                    UNIVERSITY AMBASSADORS CONSORTIUM
                  </div>
                </div>
              </div>

              {/* Action to Impact Badge */}
              <div className="bg-black text-white p-6 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold leading-tight">#ACTION TO</div>
                    <div className="text-3xl font-bold leading-tight">IMPACT</div>
                  </div>
                  <SDGWheel />
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-12 pt-6 border-t border-gray-600">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
              <div className="text-gray-400 text-sm">
                Copyright ©2016 The Road to Rights. All Rights Reserved | Powered by Apply Bright Solutions
              </div>
              <div className="flex gap-6">
                <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">FAQ</a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">Help Desk</a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">Support</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-cyan-500 hover:bg-cyan-600 text-white rounded-sm flex items-center justify-center shadow-lg hover:-translate-y-1 transition-all duration-300 z-50"
          aria-label="Back to top"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd"/>
          </svg>
        </button>
      )}
    </>
  );
};

export default Footer;
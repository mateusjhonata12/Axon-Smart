import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navLinks = [
    { name: 'Inovação', href: isHome ? '#inovacao' : '/#inovacao' },
    { name: 'Consultoria', href: isHome ? '#consultoria' : '/#consultoria' },
    { name: 'Coleções', href: '/colecoes' },
  ];

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md px-6 py-8 md:px-12 flex justify-between items-center"
    >
      <Link to="/" className="block hover:opacity-70 transition-opacity">
        <img 
          src="/logo.png" 
          alt="AXON SMART" 
          className="h-8 w-auto brightness-0" 
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            e.currentTarget.parentElement!.innerHTML = '<span class="text-xl font-bold tracking-luxury uppercase">AXON SMART</span>';
          }}
        />
      </Link>
      
      <div className="hidden md:flex gap-12 items-center">
        {navLinks.map((link) => (
          link.href.startsWith('#') || (link.href.startsWith('/') && link.href.includes('#')) ? (
            <a 
              key={link.name} 
              href={link.href}
              className="text-[11px] uppercase tracking-luxury font-medium hover:text-cold-gray transition-colors"
            >
              {link.name}
            </a>
          ) : (
            <Link 
              key={link.name} 
              to={link.href}
              className="text-[11px] uppercase tracking-luxury font-medium hover:text-cold-gray transition-colors"
            >
              {link.name}
            </Link>
          )
        ))}
        <a 
          href="https://wa.me/yournumber" 
          target="_blank" 
          rel="noopener noreferrer"
          className="ml-4 bg-nero text-white px-6 py-3 text-[10px] uppercase tracking-widest font-bold hover:bg-cold-gray transition-all shadow-lg"
        >
          Especialista
        </a>
      </div>

      {/* Mobile Menu Icon (Simplified for pure minimalism) */}
      <div className="md:hidden">
        <div className="w-6 h-[1px] bg-nero mb-1.5"></div>
        <div className="w-6 h-[1px] bg-nero"></div>
      </div>
    </motion.nav>
  );
}

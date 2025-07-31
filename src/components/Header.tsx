'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  
  // Determinar si estamos en una página con fondo oscuro
  const isDarkPage = pathname.startsWith('/pokemon/');
  
  const headerClasses = isDarkPage 
    ? "bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white border-b-2 border-gray-700 py-1"
    : "bg-gradient-to-r from-red-600 via-red-700 to-red-600 text-white border-b-2 border-red-800 py-1";
    
  const hoverClasses = isDarkPage 
    ? "hover:bg-gray-800 hover:text-yellow-300"
    : "hover:bg-red-700 hover:text-yellow-200";
    
  const titleClasses = isDarkPage
    ? "bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent hover:from-yellow-300 hover:to-yellow-200"
    : "bg-gradient-to-r from-yellow-300 to-yellow-200 bg-clip-text text-transparent hover:from-yellow-200 hover:to-yellow-100";

  return (
    <nav className={`${headerClasses} shadow-2xl sticky top-0 z-50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo/Título */}
          <div className="flex items-center">
            <Link
              href="/"
              className={`text-lg sm:text-xl md:text-2xl font-bold ${titleClasses} transition-all duration-300 font-mono flex items-center space-x-2`}
            >
              🎮 POKÉDEX
            </Link>
          </div>
          
          {/* Navigation Links */}
          <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-6">
            <Link
              href="/"
              className={`flex flex-col items-center transition-all duration-300 px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-full font-medium text-xs sm:text-sm font-mono ${hoverClasses}`}
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mb-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </svg>
              <span className="hidden sm:inline">INICIO</span>
            </Link>
            <Link
              href="/random"
              className={`flex flex-col items-center transition-all duration-300 px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-full font-medium text-xs sm:text-sm font-mono ${hoverClasses}`}
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mb-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
              <span className="hidden sm:inline">ALEATORIOS</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 
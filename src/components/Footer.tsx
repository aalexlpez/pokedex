'use client';

import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  
  // Determinar si estamos en una página con fondo oscuro
  const isDarkPage = pathname.startsWith('/pokemon/');
  
  const footerClasses = isDarkPage 
    ? "bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white"
    : "bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 text-white";
    
  const textClasses = isDarkPage
    ? "text-gray-300"
    : "text-white";
    
  const subTextClasses = isDarkPage
    ? "text-gray-500"
    : "text-blue-200";

  return (
    <footer className={`${footerClasses} py-6 sm:py-8`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 sm:space-y-4">
          <div className="flex justify-center space-x-2 sm:space-x-4 mb-3 sm:mb-4">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full animate-pulse"></div>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
          <p className={`text-sm sm:text-lg font-medium font-mono ${textClasses}`}>
            Desarrollado con Next.js y Pokeapi
          </p>
        </div>
      </div>
    </footer>
  );
} 
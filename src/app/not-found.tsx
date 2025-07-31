import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="text-center space-y-8">
        {/* Pokemon-style 404 */}
        <div className="relative">
          <div className="text-9xl font-bold text-gray-200">404</div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl">🤖</div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-gray-800">
            ¡Pokémon no encontrado!
          </h1>
          <p className="text-lg text-gray-600 max-w-md mx-auto">
            Parece que este Pokémon se ha escapado del laboratorio. 
            Vamos a buscar en otra parte.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-full font-medium hover:from-purple-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Volver al Inicio
          </Link>
          
          <div className="text-sm text-gray-500">
            O intenta con un Pokémon que sí exista
          </div>
        </div>

        {/* Decorative elements */}
        <div className="flex justify-center space-x-4 mt-8">
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
} 
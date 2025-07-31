import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-600 via-gray-900 to-gray-600 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full mx-auto bg-black rounded-3xl shadow-2xl border-4 border-gray-800 overflow-hidden">
        {/* Screen Header */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 border-b-2 border-gray-700 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
          <div className="text-green-400 font-mono text-sm">POKÉDEX v2.0</div>
          <div className="text-yellow-400 font-mono text-xs">SCANNING...</div>
        </div>

        {/* Main Content */}
        <div className="p-8 flex flex-col items-center space-y-6">
          <div className="text-8xl font-bold text-gray-700 select-none">404</div>
          <div className="text-6xl mb-2">🤖</div>
          <h1 className="text-3xl font-bold text-yellow-400 font-mono">¡Pokémon no encontrado!</h1>
          <p className="text-lg text-green-400 font-mono text-center max-w-md">
            Parece que este Pokémon se ha escapado del laboratorio.<br />
            Intenta buscar otro o vuelve al inicio.
          </p>
          <Link
            href="/"
            className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-full shadow-lg transition-colors text-lg"
          >
            Volver al inicio
          </Link>
        </div>

        {/* Screen Footer */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 border-t-2 border-gray-700 text-xs text-gray-400 font-mono flex justify-between">
          <div>SCAN ERROR</div>
          <div>NO DATA</div>
          <div>RETRY</div>
        </div>
      </div>
    </div>
  );
}
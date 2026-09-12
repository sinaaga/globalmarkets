import { ArrowRight, BarChart3, Globe, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-purple-900/10 to-transparent" />
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute top-40 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300">Data Real-time Pasar Global</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">Pantau </span>
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Crypto & Saham
            </span>
            <br />
            <span className="text-white">Internasional</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Platform terlengkap untuk memantau pergerakan pasar cryptocurrency dan saham global.
            Analisis real-time, berita terkini, dan data pasar dari seluruh dunia.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#crypto"
              className="px-8 py-3.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white font-semibold hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg shadow-blue-500/25 flex items-center gap-2"
            >
              Jelajahi Crypto
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#stocks"
              className="px-8 py-3.5 bg-gray-800 border border-gray-700 rounded-xl text-white font-semibold hover:bg-gray-700 transition-all flex items-center gap-2"
            >
              <Globe className="w-4 h-4" />
              Saham Global
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-3xl mx-auto">
            {[
              { label: 'Total Market Cap', value: '$2.56T', icon: BarChart3 },
              { label: 'Volume 24 Jam', value: '$89.4B', icon: Globe },
              { label: 'BTC Dominance', value: '52.3%', icon: Zap },
              { label: 'Crypto Aktif', value: '12,847', icon: BarChart3 },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-gray-900/50 border border-gray-800 backdrop-blur-sm"
              >
                <stat.icon className="w-5 h-5 text-blue-400 mb-2 mx-auto" />
                <div className="text-xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

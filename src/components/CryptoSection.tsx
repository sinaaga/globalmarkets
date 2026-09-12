import { TrendingUp, TrendingDown, Star } from 'lucide-react';
import { cryptoData } from '../data/mockData';
import { useState } from 'react';

export default function CryptoSection() {
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (id: string) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  const formatPrice = (price: number) => {
    if (price >= 1) return `$${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    return `$${price.toFixed(4)}`;
  };

  return (
    <section id="crypto" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Pasar Cryptocurrency</h2>
            <p className="text-gray-400">Top cryptocurrency berdasarkan market capitalization</p>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <span className="text-sm text-gray-500">Top</span>
            <div className="flex gap-1">
              {['7H', '1M', '3M', '1T'].map((period, idx) => (
                <button
                  key={period}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg ${idx === 0 ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' : 'text-gray-500 hover:text-gray-300'}`}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Crypto Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {cryptoData.map((crypto) => (
            <div
              key={crypto.id}
              className="p-5 rounded-2xl bg-gray-900/60 border border-gray-800 hover:border-gray-700 transition-all hover:shadow-lg hover:shadow-blue-500/5 group cursor-pointer"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-gray-700 flex items-center justify-center text-lg">
                    {crypto.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{crypto.name}</div>
                    <div className="text-sm text-gray-500">{crypto.symbol}</div>
                  </div>
                </div>
                <button
                  onClick={(e) => { e.stopPropagation(); toggleFavorite(crypto.id); }}
                  className={`p-1.5 rounded-lg transition-colors ${favorites.includes(crypto.id) ? 'text-yellow-400' : 'text-gray-600 hover:text-gray-400'}`}
                >
                  <Star className="w-4 h-4" fill={favorites.includes(crypto.id) ? 'currentColor' : 'none'} />
                </button>
              </div>

              {/* Price */}
              <div className="mb-3">
                <div className="text-2xl font-bold text-white">{formatPrice(crypto.price)}</div>
                <div className={`flex items-center gap-1 text-sm font-medium ${crypto.change24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {crypto.change24h >= 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                  {crypto.change24h >= 0 ? '+' : ''}{crypto.change24h}%
                </div>
              </div>

              {/* Mini Chart */}
              <div className="h-12 mb-3">
                <svg viewBox="0 0 100 30" className="w-full h-full" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id={`grad-${crypto.id}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={crypto.change24h >= 0 ? '#22c55e' : '#ef4444'} stopOpacity="0.3" />
                      <stop offset="100%" stopColor={crypto.change24h >= 0 ? '#22c55e' : '#ef4444'} stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {(() => {
                    const min = Math.min(...crypto.sparkline);
                    const max = Math.max(...crypto.sparkline);
                    const range = max - min || 1;
                    const points = crypto.sparkline.map((v, i) => {
                      const x = (i / (crypto.sparkline.length - 1)) * 100;
                      const y = 30 - ((v - min) / range) * 28;
                      return `${x},${y}`;
                    }).join(' ');
                    const areaPoints = `0,30 ${points} 100,30`;
                    return (
                      <>
                        <polygon points={areaPoints} fill={`url(#grad-${crypto.id})`} />
                        <polyline points={points} fill="none" stroke={crypto.change24h >= 0 ? '#22c55e' : '#ef4444'} strokeWidth="1.5" />
                      </>
                    );
                  })()}
                </svg>
              </div>

              {/* Footer info */}
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>MCap: {crypto.marketCap}</span>
                <span>Vol: {crypto.volume}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

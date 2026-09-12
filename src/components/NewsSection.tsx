import { Clock, ArrowRight, ExternalLink } from 'lucide-react';
import { newsData } from '../data/mockData';

export default function NewsSection() {
  const categoryColors: Record<string, string> = {
    Crypto: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    Saham: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    Forex: 'bg-green-500/10 text-green-400 border-green-500/20',
    DeFi: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    Analisis: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
  };

  return (
    <section id="news" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Berita Terkini</h2>
            <p className="text-gray-400">Update terbaru dari pasar crypto dan saham global</p>
          </div>
          <button className="hidden md:flex items-center gap-2 px-4 py-2 text-sm text-blue-400 hover:text-blue-300 transition-colors">
            Lihat Semua
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsData.map((news, idx) => (
            <article
              key={news.id}
              className={`group rounded-2xl bg-gray-900/60 border border-gray-800 hover:border-gray-700 transition-all hover:shadow-lg hover:shadow-blue-500/5 overflow-hidden cursor-pointer ${idx === 0 ? 'md:col-span-2 lg:col-span-2' : ''}`}
            >
              {/* Image placeholder */}
              <div className={`relative ${idx === 0 ? 'h-48' : 'h-36'} bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center`}>
                <span className={`${idx === 0 ? 'text-6xl' : 'text-4xl'} opacity-50`}>{news.image}</span>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium border ${categoryColors[news.category] || 'bg-gray-500/10 text-gray-400 border-gray-500/20'}`}>
                  {news.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className={`font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors ${idx === 0 ? 'text-xl' : 'text-base'}`}>
                  {news.title}
                </h3>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-gray-400">{news.source}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {news.time}
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-blue-400 transition-colors" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="md:hidden mt-6 text-center">
          <button className="flex items-center gap-2 px-6 py-3 mx-auto text-sm text-blue-400 hover:text-blue-300 transition-colors border border-gray-800 rounded-xl">
            Lihat Semua Berita
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

import { TrendingUp, TrendingDown, Search } from 'lucide-react';
import { stockData } from '../data/mockData';
import { useState } from 'react';

export default function StockSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeRegion, setActiveRegion] = useState('all');

  const regions = [
    { id: 'all', label: 'Semua' },
    { id: 'USA', label: '🇺🇸 Amerika' },
    { id: 'Europe', label: '🇪🇺 Eropa' },
    { id: 'Asia', label: '🌏 Asia' },
  ];

  const filteredStocks = stockData.filter(stock => {
    const matchesSearch = stock.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      stock.symbol.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (activeRegion === 'all') return matchesSearch;
    if (activeRegion === 'USA') return matchesSearch && stock.country === 'USA';
    if (activeRegion === 'Europe') return matchesSearch && (stock.country === 'Netherlands' || stock.country === 'France' || stock.country === 'Switzerland');
    if (activeRegion === 'Asia') return matchesSearch && (stock.country === 'Japan' || stock.country === 'South Korea');
    return matchesSearch;
  });

  return (
    <section id="stocks" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Saham Internasional</h2>
            <p className="text-gray-400">Perusahaan terbesar di bursa saham dunia</p>
          </div>
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Cari saham..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2.5 bg-gray-900 border border-gray-800 rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500/50 w-64"
            />
          </div>
        </div>

        {/* Region Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {regions.map((region) => (
            <button
              key={region.id}
              onClick={() => setActiveRegion(region.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                activeRegion === region.id
                  ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                  : 'text-gray-500 hover:text-gray-300 border border-gray-800'
              }`}
            >
              {region.label}
            </button>
          ))}
        </div>

        {/* Stock Table */}
        <div className="rounded-2xl bg-gray-900/60 border border-gray-800 overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 px-6 py-3 border-b border-gray-800 text-sm text-gray-500 font-medium">
            <div className="col-span-1">#</div>
            <div className="col-span-4">Nama</div>
            <div className="col-span-2 text-right">Harga</div>
            <div className="col-span-2 text-right">Perubahan</div>
            <div className="col-span-3 text-right">Market Cap</div>
          </div>

          {/* Table Rows */}
          {filteredStocks.map((stock, idx) => (
            <div
              key={stock.id}
              className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors cursor-pointer items-center"
            >
              <div className="col-span-1 text-sm text-gray-500">{idx + 1}</div>
              <div className="col-span-4 flex items-center gap-3">
                <span className="text-2xl">{stock.flag}</span>
                <div>
                  <div className="font-semibold text-white text-sm">{stock.name}</div>
                  <div className="text-xs text-gray-500">{stock.symbol}</div>
                </div>
              </div>
              <div className="col-span-2 text-right font-semibold text-white">
                {stock.price.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 })}
              </div>
              <div className="col-span-2 text-right">
                <div className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-sm font-medium ${
                  stock.changePercent >= 0
                    ? 'bg-green-500/10 text-green-400'
                    : 'bg-red-500/10 text-red-400'
                }`}>
                  {stock.changePercent >= 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                  {stock.changePercent >= 0 ? '+' : ''}{stock.changePercent}%
                </div>
              </div>
              <div className="col-span-3 text-right text-sm text-gray-400">{stock.marketCap}</div>
            </div>
          ))}

          {filteredStocks.length === 0 && (
            <div className="px-6 py-12 text-center text-gray-500">
              Tidak ada saham yang ditemukan
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

import { TrendingUp, TrendingDown, Activity, DollarSign, PieChart, Clock } from 'lucide-react';
import { globalMarketStats } from '../data/mockData';

export default function MarketOverview() {
  const stats = [
    {
      label: 'Total Market Cap',
      value: globalMarketStats.totalMarketCap,
      change: '+3.2%',
      positive: true,
      icon: DollarSign,
      color: 'from-green-500 to-emerald-600',
    },
    {
      label: 'Volume 24 Jam',
      value: globalMarketStats.totalVolume,
      change: '+12.5%',
      positive: true,
      icon: Activity,
      color: 'from-blue-500 to-cyan-600',
    },
    {
      label: 'BTC Dominance',
      value: globalMarketStats.btcDominance,
      change: '-0.3%',
      positive: false,
      icon: PieChart,
      color: 'from-orange-500 to-amber-600',
    },
    {
      label: 'Fear & Greed Index',
      value: `${globalMarketStats.fearGreedIndex} - ${globalMarketStats.fearGreedLabel}`,
      change: '+5',
      positive: true,
      icon: Clock,
      color: 'from-purple-500 to-pink-600',
    },
  ];

  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-gray-900/60 border border-gray-800 hover:border-gray-700 transition-all hover:shadow-lg hover:shadow-blue-500/5 group"
            >
              <div className="flex items-start justify-between mb-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}>
                  <stat.icon className="w-5 h-5 text-white" />
                </div>
                <div className={`flex items-center gap-1 text-sm font-medium ${stat.positive ? 'text-green-400' : 'text-red-400'}`}>
                  {stat.positive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                  {stat.change}
                </div>
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

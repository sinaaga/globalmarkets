import { useState, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { generateChartData } from '../data/mockData';

export default function ChartSection() {
  const [activeChart, setActiveChart] = useState<'BTC' | 'ETH' | 'SP500'>('BTC');
  const chartData = useMemo(() => generateChartData(), []);

  const chartConfig = {
    BTC: { color: '#f7931a', label: 'Bitcoin (USD)' },
    ETH: { color: '#627eea', label: 'Ethereum (USD)' },
    SP500: { color: '#22c55e', label: 'S&P 500' },
  };

  return (
    <section id="chart" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Analisis Pasar</h2>
          <p className="text-gray-400">Grafik pergerakan harga 30 hari terakhir</p>
        </div>

        {/* Chart Card */}
        <div className="p-6 rounded-2xl bg-gray-900/60 border border-gray-800">
          {/* Chart Tabs */}
          <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
            <div className="flex gap-2">
              {(Object.keys(chartConfig) as Array<keyof typeof chartConfig>).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveChart(key)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeChart === key
                      ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      : 'text-gray-500 hover:text-gray-300 border border-transparent'
                  }`}
                >
                  {key}
                </button>
              ))}
            </div>
            <div className="text-sm text-gray-500">
              {chartConfig[activeChart].label} • 30 Hari
            </div>
          </div>

          {/* Chart */}
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={chartConfig[activeChart].color} stopOpacity={0.3} />
                    <stop offset="95%" stopColor={chartConfig[activeChart].color} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
                <XAxis
                  dataKey="date"
                  stroke="#4b5563"
                  tick={{ fill: '#6b7280', fontSize: 12 }}
                  tickLine={false}
                />
                <YAxis
                  stroke="#4b5563"
                  tick={{ fill: '#6b7280', fontSize: 12 }}
                  tickLine={false}
                  domain={['auto', 'auto']}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#111827',
                    border: '1px solid #374151',
                    borderRadius: '12px',
                    padding: '12px',
                  }}
                  labelStyle={{ color: '#9ca3af' }}
                  itemStyle={{ color: chartConfig[activeChart].color }}
                />
                <Area
                  type="monotone"
                  dataKey={activeChart}
                  stroke={chartConfig[activeChart].color}
                  strokeWidth={2}
                  fill="url(#colorGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Chart Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-gray-800">
            <div>
              <div className="text-sm text-gray-500 mb-1">Harga Tertinggi</div>
              <div className="text-lg font-semibold text-green-400">
                ${Math.max(...chartData.map(d => d[activeChart])).toLocaleString()}
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Harga Terendah</div>
              <div className="text-lg font-semibold text-red-400">
                ${Math.min(...chartData.map(d => d[activeChart])).toLocaleString()}
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Rata-rata</div>
              <div className="text-lg font-semibold text-white">
                ${Math.round(chartData.reduce((a, b) => a + b[activeChart], 0) / chartData.length).toLocaleString()}
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Perubahan 30H</div>
              <div className={`text-lg font-semibold ${chartData[chartData.length - 1][activeChart] > chartData[0][activeChart] ? 'text-green-400' : 'text-red-400'}`}>
                {((chartData[chartData.length - 1][activeChart] - chartData[0][activeChart]) / chartData[0][activeChart] * 100).toFixed(2)}%
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

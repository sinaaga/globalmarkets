export interface CryptoData {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change24h: number;
  marketCap: string;
  volume: string;
  icon: string;
  sparkline: number[];
}

export interface StockData {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
  marketCap: string;
  country: string;
  flag: string;
}

export interface NewsItem {
  id: string;
  title: string;
  source: string;
  time: string;
  category: string;
  image: string;
}

export const cryptoData: CryptoData[] = [
  {
    id: '1',
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 67432.50,
    change24h: 2.34,
    marketCap: '$1.32T',
    volume: '$28.5B',
    icon: '₿',
    sparkline: [65000, 65500, 66000, 65800, 66500, 67000, 67200, 67432]
  },
  {
    id: '2',
    name: 'Ethereum',
    symbol: 'ETH',
    price: 3521.80,
    change24h: -1.12,
    marketCap: '$423.5B',
    volume: '$15.2B',
    icon: 'Ξ',
    sparkline: [3600, 3580, 3550, 3520, 3540, 3510, 3530, 3521]
  },
  {
    id: '3',
    name: 'BNB',
    symbol: 'BNB',
    price: 598.40,
    change24h: 0.87,
    marketCap: '$89.7B',
    volume: '$1.8B',
    icon: '◆',
    sparkline: [590, 592, 595, 593, 596, 597, 599, 598]
  },
  {
    id: '4',
    name: 'Solana',
    symbol: 'SOL',
    price: 172.35,
    change24h: 5.62,
    marketCap: '$76.8B',
    volume: '$3.4B',
    icon: '◎',
    sparkline: [160, 162, 165, 168, 170, 171, 173, 172]
  },
  {
    id: '5',
    name: 'XRP',
    symbol: 'XRP',
    price: 0.5234,
    change24h: -0.45,
    marketCap: '$28.4B',
    volume: '$1.2B',
    icon: '✕',
    sparkline: [0.53, 0.528, 0.525, 0.527, 0.524, 0.522, 0.523, 0.523]
  },
  {
    id: '6',
    name: 'Cardano',
    symbol: 'ADA',
    price: 0.4521,
    change24h: 3.21,
    marketCap: '$16.1B',
    volume: '$0.5B',
    icon: '♦',
    sparkline: [0.43, 0.435, 0.44, 0.442, 0.445, 0.448, 0.45, 0.452]
  },
  {
    id: '7',
    name: 'Avalanche',
    symbol: 'AVAX',
    price: 35.67,
    change24h: -2.15,
    marketCap: '$13.2B',
    volume: '$0.4B',
    icon: '▲',
    sparkline: [37, 36.5, 36, 35.8, 35.5, 35.7, 35.6, 35.67]
  },
  {
    id: '8',
    name: 'Dogecoin',
    symbol: 'DOGE',
    price: 0.0834,
    change24h: 1.56,
    marketCap: '$11.8B',
    volume: '$0.8B',
    icon: 'Ð',
    sparkline: [0.081, 0.082, 0.081, 0.083, 0.082, 0.083, 0.084, 0.083]
  }
];

export const stockData: StockData[] = [
  {
    id: '1',
    name: 'Apple Inc.',
    symbol: 'AAPL',
    price: 189.45,
    change: 3.21,
    changePercent: 1.72,
    marketCap: '$2.95T',
    country: 'USA',
    flag: '🇺🇸'
  },
  {
    id: '2',
    name: 'Microsoft Corp.',
    symbol: 'MSFT',
    price: 378.92,
    change: -2.15,
    changePercent: -0.56,
    marketCap: '$2.81T',
    country: 'USA',
    flag: '🇺🇸'
  },
  {
    id: '3',
    name: 'Alphabet Inc.',
    symbol: 'GOOGL',
    price: 141.80,
    change: 1.95,
    changePercent: 1.39,
    marketCap: '$1.78T',
    country: 'USA',
    flag: '🇺🇸'
  },
  {
    id: '4',
    name: 'Amazon.com',
    symbol: 'AMZN',
    price: 178.25,
    change: 4.32,
    changePercent: 2.48,
    marketCap: '$1.86T',
    country: 'USA',
    flag: '🇺🇸'
  },
  {
    id: '5',
    name: 'NVIDIA Corp.',
    symbol: 'NVDA',
    price: 875.30,
    change: 22.45,
    changePercent: 2.63,
    marketCap: '$2.16T',
    country: 'USA',
    flag: '🇺🇸'
  },
  {
    id: '6',
    name: 'Toyota Motor',
    symbol: '7203.T',
    price: 2845.00,
    change: -15.50,
    changePercent: -0.54,
    marketCap: '¥38.5T',
    country: 'Japan',
    flag: '🇯🇵'
  },
  {
    id: '7',
    name: 'ASML Holding',
    symbol: 'ASML',
    price: 712.40,
    change: 8.90,
    changePercent: 1.26,
    marketCap: '€295B',
    country: 'Netherlands',
    flag: '🇳🇱'
  },
  {
    id: '8',
    name: 'Samsung Electronics',
    symbol: '005930.KS',
    price: 72400,
    change: 1200,
    changePercent: 1.68,
    marketCap: '₩432T',
    country: 'South Korea',
    flag: '🇰🇷'
  },
  {
    id: '9',
    name: 'LVMH',
    symbol: 'MC.PA',
    price: 685.30,
    change: -4.20,
    changePercent: -0.61,
    marketCap: '€342B',
    country: 'France',
    flag: '🇫🇷'
  },
  {
    id: '10',
    name: 'Nestlé S.A.',
    symbol: 'NESN.SW',
    price: 92.45,
    change: 0.85,
    changePercent: 0.93,
    marketCap: 'CHF 245B',
    country: 'Switzerland',
    flag: '🇨🇭'
  }
];

export const marketIndices = [
  { name: 'S&P 500', value: '5,021.84', change: '+0.87%', positive: true },
  { name: 'NASDAQ', value: '15,942.37', change: '+1.14%', positive: true },
  { name: 'DOW JONES', value: '38,654.42', change: '+0.35%', positive: true },
  { name: 'NIKKEI 225', value: '38,487.90', change: '-0.42%', positive: false },
  { name: 'FTSE 100', value: '7,985.32', change: '+0.21%', positive: true },
  { name: 'DAX', value: '17,842.65', change: '+0.56%', positive: true },
  { name: 'HANG SENG', value: '16,724.38', change: '-1.23%', positive: false },
  { name: 'KOSPI', value: '2,687.45', change: '+0.78%', positive: true },
];

export const newsData: NewsItem[] = [
  {
    id: '1',
    title: 'Bitcoin Tembus $67,000 Seiring Adopsi Institusional Meningkat',
    source: 'CryptoNews',
    time: '2 jam lalu',
    category: 'Crypto',
    image: '📈'
  },
  {
    id: '2',
    title: 'NVIDIA Laporkan Pendapatan Rekor, Saham Naik 2.6%',
    source: 'MarketWatch',
    time: '3 jam lalu',
    category: 'Saham',
    image: '💹'
  },
  {
    id: '3',
    title: 'Ethereum ETF Spot Disetujui SEC, Harga ETH Melonjak',
    source: 'CoinDesk',
    time: '5 jam lalu',
    category: 'Crypto',
    image: '🚀'
  },
  {
    id: '4',
    title: 'Bank Sentral Eropa Pertahankan Suku Bunga, Euro Stabil',
    source: 'Reuters',
    time: '6 jam lalu',
    category: 'Forex',
    image: '🏦'
  },
  {
    id: '5',
    title: 'Solana DeFi TVL Capai Rekor Baru $12 Miliar',
    source: 'DeFi Pulse',
    time: '8 jam lalu',
    category: 'DeFi',
    image: '🔗'
  },
  {
    id: '6',
    title: 'Pasar Saham Asia Diprediksi Menguat di Kuartal Berikutnya',
    source: 'Bloomberg',
    time: '10 jam lalu',
    category: 'Analisis',
    image: '🌏'
  }
];

export const generateChartData = () => {
  const data = [];
  let btcPrice = 62000;
  let ethPrice = 3200;
  let sp500 = 4800;

  for (let i = 0; i < 30; i++) {
    btcPrice += (Math.random() - 0.45) * 1500;
    ethPrice += (Math.random() - 0.45) * 100;
    sp500 += (Math.random() - 0.45) * 50;

    data.push({
      date: `${i + 1} Mar`,
      BTC: Math.round(btcPrice),
      ETH: Math.round(ethPrice),
      SP500: Math.round(sp500 * 10) / 10,
    });
  }
  return data;
};

export const globalMarketStats = {
  totalMarketCap: '$2.56T',
  totalVolume: '$89.4B',
  btcDominance: '52.3%',
  activeCryptos: '12,847',
  fearGreedIndex: 72,
  fearGreedLabel: 'Greed',
};

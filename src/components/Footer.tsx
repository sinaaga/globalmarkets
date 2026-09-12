import { TrendingUp, Github, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    Produk: ['Crypto Tracker', 'Stock Screener', 'Portfolio Manager', 'Alert System'],
    Perusahaan: ['Tentang Kami', 'Karir', 'Blog', 'Press Kit'],
    Sumber: ['Dokumentasi API', 'Panduan', 'FAQ', 'Status'],
    Legal: ['Kebijakan Privasi', 'Syarat Layanan', 'Cookie Policy', 'Disclaimer'],
  };

  return (
    <footer className="border-t border-gray-800 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                CryptoVerse
              </span>
            </div>
            <p className="text-gray-500 text-sm mb-6 max-w-xs">
              Platform terlengkap untuk memantau pergerakan pasar cryptocurrency dan saham internasional secara real-time.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-gray-800 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">Dapatkan Update Harian</h3>
              <p className="text-sm text-gray-400">Berlangganan newsletter untuk mendapatkan analisis pasar terbaru</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="email@contoh.com"
                className="px-4 py-2.5 bg-gray-900 border border-gray-700 rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500/50 w-full md:w-64"
              />
              <button className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white text-sm font-medium hover:from-blue-600 hover:to-purple-700 transition-all whitespace-nowrap">
                Berlangganan
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-gray-800">
          <p className="text-sm text-gray-500">
            © 2026 CryptoVerse. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Disclaimer: Data yang ditampilkan hanya untuk tujuan informasi dan bukan merupakan saran investasi.
          </p>
        </div>
      </div>
    </footer>
  );
}

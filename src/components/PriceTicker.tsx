import { marketIndices } from '../data/mockData';

export default function PriceTicker() {
  return (
    <div className="fixed top-16 left-0 right-0 z-40 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 overflow-hidden">
      <div className="animate-marquee flex items-center gap-8 py-2 px-4 whitespace-nowrap">
        {[...marketIndices, ...marketIndices].map((index, idx) => (
          <div key={idx} className="flex items-center gap-2 text-sm">
            <span className="text-gray-400 font-medium">{index.name}</span>
            <span className="text-white font-semibold">{index.value}</span>
            <span className={`font-medium ${index.positive ? 'text-green-400' : 'text-red-400'}`}>
              {index.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

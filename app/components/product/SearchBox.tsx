import { Search } from 'lucide-react';

interface SearchBoxProps {
  value: string;
  onChange: (val: string) => void;
}

export default function SearchBox({ value, onChange }: SearchBoxProps) {
  return (
    <div className="flex-1 relative">
      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
        <Search size={20} className="text-gray-400" />
      </div>
      <input 
        type="text" 
        placeholder="Cari produk cetak..." 
        maxLength={60}
        autoComplete="off"
        className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-12 pr-4 py-3.5 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-sm font-medium text-primary"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

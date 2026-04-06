"use client";

import { useState, useRef, useEffect } from 'react';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onChange: (val: string) => void;
}

export default function CategoryFilter({ categories, selectedCategory, onChange }: CategoryFilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative min-w-[200px]" ref={dropdownRef}>
      {/* Trigger Button */}
      <button 
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-12 pr-10 py-3.5 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-sm font-bold text-gray-700 uppercase tracking-wider text-left flex items-center justify-between shadow-sm"
      >
        <span className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <SlidersHorizontal size={18} className="text-gray-400" />
        </span>
        <span className="truncate">{selectedCategory}</span>
        <span className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
          <ChevronDown size={16} className={`text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </span>
      </button>

      {/* Floating Dropdown List */}
      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-white border border-gray-100 rounded-xl shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
          {/* Scrollable list with hidden scrollbar for a clean look */}
          <ul className="py-1 max-h-64 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(cat);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-5 py-3 text-sm font-bold uppercase tracking-wider transition-colors ${
                    selectedCategory === cat 
                      ? 'bg-primary text-white' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-primary'
                  }`}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

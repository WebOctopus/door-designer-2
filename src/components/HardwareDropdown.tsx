import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Hardware } from '../types';

interface HardwareOption {
  id: string;
  type: Hardware;
  name: string;
  image: string;
  price: number;
}

export const HARDWARE_OPTIONS: Record<Hardware, HardwareOption[]> = {
  'Handle': [
    {
      id: 'handle-1',
      type: 'Handle',
      name: 'Modern Bar Handle',
      image: 'https://images.unsplash.com/photo-1601761297661-3f19c31d8a0f?w=200&h=200&fit=crop',
      price: 45.99
    },
    {
      id: 'handle-2',
      type: 'Handle',
      name: 'Traditional Lever Handle',
      image: 'https://images.unsplash.com/photo-1578898395216-78dae5d29344?w=200&h=200&fit=crop',
      price: 39.99
    }
  ],
  'Knocker': [
    {
      id: 'knocker-1',
      type: 'Knocker',
      name: 'Lion Head Knocker',
      image: 'https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?w=200&h=200&fit=crop',
      price: 29.99
    },
    {
      id: 'knocker-2',
      type: 'Knocker',
      name: 'Ring Knocker',
      image: 'https://images.unsplash.com/photo-1591271955631-4a0f60f5af45?w=200&h=200&fit=crop',
      price: 24.99
    }
  ],
  'Letter Plate': [
    {
      id: 'letterplate-1',
      type: 'Letter Plate',
      name: 'Modern Letterplate',
      image: 'https://images.unsplash.com/photo-1586105449897-20b5efeb3233?w=200&h=200&fit=crop',
      price: 34.99
    },
    {
      id: 'letterplate-2',
      type: 'Letter Plate',
      name: 'Traditional Letterplate',
      image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=200&h=200&fit=crop',
      price: 29.99
    }
  ],
  'Spy Hole': [
    {
      id: 'spyhole-1',
      type: 'Spy Hole',
      name: 'Digital Spy Hole',
      image: 'https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?w=200&h=200&fit=crop',
      price: 49.99
    },
    {
      id: 'spyhole-2',
      type: 'Spy Hole',
      name: 'Classic Spy Hole',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=200&h=200&fit=crop',
      price: 19.99
    }
  ],
  'Doorbell': [
    {
      id: 'doorbell-1',
      type: 'Doorbell',
      name: 'Smart Video Doorbell',
      image: 'https://images.unsplash.com/photo-1558589338-22b40869c4f9?w=200&h=200&fit=crop',
      price: 149.99
    },
    {
      id: 'doorbell-2',
      type: 'Doorbell',
      name: 'Classic Push Button',
      image: 'https://images.unsplash.com/photo-1582557172669-86ae14fae5cf?w=200&h=200&fit=crop',
      price: 29.99
    }
  ]
};

interface HardwareDropdownProps {
  type: Hardware;
  selectedId: string | null;
  onSelect: (option: HardwareOption) => void;
}

function HardwareDropdown({ type, selectedId, onSelect }: HardwareDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const options = HARDWARE_OPTIONS[type];
  const selected = options.find(opt => opt.id === selectedId);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-3 rounded-lg border border-gray-600 hover:border-gray-400 bg-gray-800"
      >
        <div className="flex items-center gap-3">
          {selected && (
            <img
              src={selected.image}
              alt={selected.name}
              className="w-10 h-10 rounded-md object-cover"
            />
          )}
          <div className="text-left">
            <div className="font-medium">{selected ? selected.name : `Select ${type}`}</div>
            {selected && <div className="text-sm text-gray-400">£{selected.price}</div>}
          </div>
        </div>
        <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-2 rounded-lg border border-gray-600 bg-gray-800 shadow-xl">
          {options.map((option) => (
            <button
              key={option.id}
              className="w-full flex items-center gap-3 p-3 hover:bg-gray-700 transition-colors"
              onClick={() => {
                onSelect(option);
                setIsOpen(false);
              }}
            >
              <img
                src={option.image}
                alt={option.name}
                className="w-10 h-10 rounded-md object-cover"
              />
              <div className="text-left">
                <div className="font-medium">{option.name}</div>
                <div className="text-sm text-gray-400">£{option.price}</div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default HardwareDropdown;
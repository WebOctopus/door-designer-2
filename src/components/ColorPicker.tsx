import React from 'react';

interface ColorPickerProps {
  color: string;
  onChange: (color: string) => void;
}

const COLORS = [
  '#000000', // Black
  '#FFFFFF', // White
  '#808080', // Gray
  '#C0C0C0', // Silver
  '#800000', // Maroon
  '#FF0000', // Red
  '#808000', // Olive
  '#FFFF00', // Yellow
  '#008000', // Green
  '#00FF00', // Lime
  '#008080', // Teal
  '#00FFFF', // Aqua
  '#000080', // Navy
  '#0000FF', // Blue
  '#800080', // Purple
  '#FF00FF', // Fuchsia
];

function ColorPicker({ color, onChange }: ColorPickerProps) {
  return (
    <div className="grid grid-cols-8 gap-2">
      {COLORS.map((c) => (
        <button
          key={c}
          className={`w-6 h-6 rounded-full border-2 ${
            c === color ? 'border-blue-500' : 'border-transparent'
          }`}
          style={{ backgroundColor: c }}
          onClick={() => onChange(c)}
        />
      ))}
    </div>
  );
}

export default ColorPicker;
import React from 'react';
import { useDoorStore } from '../store/doorStore';
import { HARDWARE_OPTIONS } from './HardwareDropdown';

function DoorModel() {
  const { slabColor, frameColor, glassType, doorStyle, selectedHardware } = useDoorStore();

  const renderHardware = () => {
    return Object.entries(selectedHardware).map(([type, id]) => {
      if (!id) return null;
      
      const option = HARDWARE_OPTIONS[type as keyof typeof HARDWARE_OPTIONS].find(opt => opt.id === id);
      if (!option) return null;

      switch (type) {
        case 'Handle':
          return (
            <g key={type} transform="translate(320, 380)">
              <rect
                width="30"
                height="80"
                fill="#C0C0C0"
                rx="2"
              />
              <text
                x="15"
                y="100"
                textAnchor="middle"
                className="text-[8px]"
                fill="white"
              >
                {option.name}
              </text>
            </g>
          );
        
        case 'Knocker':
          return (
            <g key={type} transform="translate(200, 200)">
              <circle
                r="15"
                fill="#C0C0C0"
              />
              <text
                y="35"
                textAnchor="middle"
                className="text-[8px]"
                fill="white"
              >
                {option.name}
              </text>
            </g>
          );
        
        case 'Letter Plate':
          return (
            <g key={type} transform="translate(140, 500)">
              <rect
                x="0"
                y="0"
                width="120"
                height="30"
                fill="#C0C0C0"
                rx="2"
              />
              <text
                x="60"
                y="45"
                textAnchor="middle"
                className="text-[8px]"
                fill="white"
              >
                {option.name}
              </text>
            </g>
          );
        
        case 'Spy Hole':
          return (
            <g key={type} transform="translate(200, 300)">
              <circle
                r="8"
                fill="#C0C0C0"
              />
              <text
                y="25"
                textAnchor="middle"
                className="text-[8px]"
                fill="white"
              >
                {option.name}
              </text>
            </g>
          );
        
        case 'Doorbell':
          return (
            <g key={type} transform="translate(280, 300)">
              <rect
                width="25"
                height="25"
                fill="#C0C0C0"
                rx="12.5"
              />
              <text
                x="12.5"
                y="40"
                textAnchor="middle"
                className="text-[8px]"
                fill="white"
              >
                {option.name}
              </text>
            </g>
          );
      }
    });
  };

  const renderDoorContent = () => {
    if (doorStyle === 'Broadfields') {
      return (
        <>
          {/* Vertical Lines */}
          {[...Array(7)].map((_, i) => (
            <line
              key={i}
              x1={60 + (i * 45)}
              y1="40"
              x2={60 + (i * 45)}
              y2="760"
              stroke="#374151"
              strokeWidth="1"
              opacity="0.5"
            />
          ))}
          
          {/* Center Glass Panel */}
          <rect
            x="140"
            y="120"
            width="120"
            height="280"
            fill={glassType === 'Frosted' ? '#E5E7EB' : '#F3F4F6'}
            stroke="#374151"
            strokeWidth="2"
          />
          
          {/* Decorative Arch Line */}
          <path
            d="M40,40 Q200,60 360,40"
            fill="none"
            stroke="#374151"
            strokeWidth="1"
            opacity="0.5"
          />
        </>
      );
    }
    
    return (
      <>
        {/* Default Door Style (Millbrook) */}
        <rect
          x="60"
          y="60"
          width="120"
          height="300"
          fill={glassType === 'Frosted' ? '#E5E7EB' : '#F3F4F6'}
          stroke="#374151"
          strokeWidth="2"
        />
        <rect
          x="220"
          y="60"
          width="120"
          height="300"
          fill={glassType === 'Frosted' ? '#E5E7EB' : '#F3F4F6'}
          stroke="#374151"
          strokeWidth="2"
        />
        <rect
          x="60"
          y="400"
          width="120"
          height="300"
          fill={slabColor.external}
          stroke="#374151"
          strokeWidth="2"
        />
        <rect
          x="220"
          y="400"
          width="120"
          height="300"
          fill={slabColor.external}
          stroke="#374151"
          strokeWidth="2"
        />
      </>
    );
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 400 800"
        className="w-full h-full max-w-md"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Door Frame */}
        <rect
          x="0"
          y="0"
          width="400"
          height="800"
          fill={frameColor.external}
          rx="4"
        />
        
        {/* Door Slab */}
        <rect
          x="20"
          y="20"
          width="360"
          height="760"
          fill={slabColor.external}
          rx="2"
        />

        {/* Door Style Content */}
        {renderDoorContent()}

        {/* Hardware Items */}
        {renderHardware()}
      </svg>
    </div>
  );
}

export default DoorModel;
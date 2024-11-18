import React from 'react';
import { useDoorStore } from '../store/doorStore';
import ColorPicker from './ColorPicker';
import HardwareDropdown from './HardwareDropdown';
import { DoorType, DoorStyle, Hardware } from '../types';

interface ConfiguratorProps {
  className?: string;
}

function Configurator({ className = '' }: ConfiguratorProps) {
  const {
    doorType,
    setDoorType,
    doorStyle,
    setDoorStyle,
    frameColor,
    setFrameColor,
    slabColor,
    setSlabColor,
    glassType,
    setGlassType,
    selectedHardware,
    setSelectedHardware,
    measurements,
    setMeasurements,
  } = useDoorStore();

  const hardwareTypes: Hardware[] = [
    'Handle',
    'Knocker',
    'Letter Plate',
    'Spy Hole',
    'Doorbell'
  ];

  return (
    <div className={`p-6 overflow-y-auto ${className}`}>
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-4">Door Type</h2>
          <div className="grid grid-cols-3 gap-3">
            {['Modern', 'Traditional', 'Cottage'].map((type) => (
              <button
                key={type}
                className={`p-3 rounded-lg border ${
                  doorType === type
                    ? 'border-blue-500 bg-blue-500/20'
                    : 'border-gray-600 hover:border-gray-400'
                }`}
                onClick={() => setDoorType(type as DoorType)}
              >
                {type}
              </button>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Door Style</h2>
          <div className="grid grid-cols-2 gap-3">
            {['Millbrook', 'Broadfields', 'Abby Square'].map((style) => (
              <button
                key={style}
                className={`p-3 rounded-lg border ${
                  doorStyle === style
                    ? 'border-blue-500 bg-blue-500/20'
                    : 'border-gray-600 hover:border-gray-400'
                }`}
                onClick={() => setDoorStyle(style as DoorStyle)}
              >
                {style}
              </button>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Colors</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium mb-2">Frame Color</h3>
              <ColorPicker
                color={frameColor.external}
                onChange={(color) =>
                  setFrameColor({ ...frameColor, external: color })
                }
              />
            </div>
            <div>
              <h3 className="text-sm font-medium mb-2">Slab Color</h3>
              <ColorPicker
                color={slabColor.external}
                onChange={(color) =>
                  setSlabColor({ ...slabColor, external: color })
                }
              />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Hardware</h2>
          <div className="space-y-4">
            {hardwareTypes.map((type) => (
              <div key={type}>
                <h3 className="text-sm font-medium mb-2">{type}</h3>
                <HardwareDropdown
                  type={type}
                  selectedId={selectedHardware[type]}
                  onSelect={(option) => setSelectedHardware(type, option.id)}
                />
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Measurements</h2>
          <div className="space-y-3">
            <div>
              <label className="block text-sm mb-1">Width (mm)</label>
              <input
                type="number"
                value={measurements.width}
                onChange={(e) =>
                  setMeasurements({
                    ...measurements,
                    width: parseInt(e.target.value),
                  })
                }
                className="w-full bg-gray-800 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Height (mm)</label>
              <input
                type="number"
                value={measurements.height}
                onChange={(e) =>
                  setMeasurements({
                    ...measurements,
                    height: parseInt(e.target.value),
                  })
                }
                className="w-full bg-gray-800 rounded px-3 py-2"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Configurator;
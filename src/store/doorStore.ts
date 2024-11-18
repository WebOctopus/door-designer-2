import { create } from 'zustand';
import { DoorType, DoorStyle, Hardware } from '../types';

interface DoorState {
  doorType: DoorType;
  setDoorType: (type: DoorType) => void;
  doorStyle: DoorStyle;
  setDoorStyle: (style: DoorStyle) => void;
  frameColor: {
    internal: string;
    external: string;
  };
  setFrameColor: (color: { internal: string; external: string }) => void;
  slabColor: {
    internal: string;
    external: string;
  };
  setSlabColor: (color: { internal: string; external: string }) => void;
  hingeSide: 'left' | 'right';
  setHingeSide: (side: 'left' | 'right') => void;
  glassType: 'Frosted' | 'Clear';
  setGlassType: (type: 'Frosted' | 'Clear') => void;
  selectedHardware: Record<Hardware, string | null>;
  setSelectedHardware: (type: Hardware, id: string | null) => void;
  measurements: {
    width: number;
    height: number;
  };
  setMeasurements: (measurements: { width: number; height: number }) => void;
}

export const useDoorStore = create<DoorState>((set) => ({
  doorType: 'Modern',
  setDoorType: (type) => set({ doorType: type }),
  doorStyle: 'Millbrook',
  setDoorStyle: (style) => set({ doorStyle: style }),
  frameColor: {
    internal: '#FFFFFF',
    external: '#000000',
  },
  setFrameColor: (color) => set({ frameColor: color }),
  slabColor: {
    internal: '#FFFFFF',
    external: '#000000',
  },
  setSlabColor: (color) => set({ slabColor: color }),
  hingeSide: 'left',
  setHingeSide: (side) => set({ hingeSide: side }),
  glassType: 'Clear',
  setGlassType: (type) => set({ glassType: type }),
  selectedHardware: {
    'Handle': null,
    'Knocker': null,
    'Letter Plate': null,
    'Spy Hole': null,
    'Doorbell': null
  },
  setSelectedHardware: (type, id) =>
    set((state) => ({
      selectedHardware: {
        ...state.selectedHardware,
        [type]: id
      }
    })),
  measurements: {
    width: 900,
    height: 2100,
  },
  setMeasurements: (measurements) => set({ measurements }),
}));
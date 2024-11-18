import React from 'react';
import { Settings, Home } from 'lucide-react';
import DoorModel from './components/DoorModel';
import Configurator from './components/Configurator';

function App() {
  const [showConfigurator, setShowConfigurator] = React.useState(true);

  return (
    <div className="h-screen w-full bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <nav className="absolute top-0 left-0 right-0 z-10 p-4 flex justify-between items-center bg-black/20 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <Home className="w-6 h-6" />
          <h1 className="text-xl font-bold">Door Designer Pro</h1>
        </div>
        <button
          onClick={() => setShowConfigurator(!showConfigurator)}
          className="p-2 rounded-full hover:bg-white/10 transition-colors"
        >
          <Settings className="w-6 h-6" />
        </button>
      </nav>

      <div className="relative h-full flex">
        <div className="flex-1 p-8">
          <DoorModel />
        </div>

        <Configurator
          className={`w-96 bg-black/30 backdrop-blur-md transform transition-transform duration-300 ${
            showConfigurator ? 'translate-x-0' : 'translate-x-full'
          }`}
        />
      </div>
    </div>
  );
}

export default App;
import React from 'react';
import { RefreshCcw } from 'lucide-react';

interface ControlsProps {
  showPunchline: boolean;
  isRotating: boolean;
  onReveal: () => void;
  onNext: () => void;
}

export function Controls({ showPunchline, isRotating, onReveal, onNext }: ControlsProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-8">
      {!showPunchline && (
        <button
          onClick={onReveal}
          className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
        >
          Reveal Punchline
        </button>
      )}
      
      <button
        onClick={onNext}
        className="flex-1 flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200"
      >
        <RefreshCcw className={`w-4 h-4 ${isRotating ? 'animate-spin' : ''}`} />
        Next Joke
      </button>
    </div>
  );
}
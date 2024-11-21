import React from 'react';
import { Header } from './components/Header';
import { JokeCard } from './components/JokeCard';
import { Controls } from './components/Controls';
import { useJokes } from './hooks/useJokes';

function App() {
  const { currentJoke, showPunchline, isRotating, getNextJoke, revealPunchline } = useJokes();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full">
        <Header />

        <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-xl min-h-[16rem] flex flex-col justify-between">
          <JokeCard 
            joke={currentJoke} 
            showPunchline={showPunchline} 
          />
          
          <Controls 
            showPunchline={showPunchline}
            isRotating={isRotating}
            onReveal={revealPunchline}
            onNext={getNextJoke}
          />
        </div>

        <p className="text-center text-gray-400 mt-6 text-sm">
          Bringing smiles to developers, one joke at a time 😊
        </p>
      </div>
    </div>
  );
}

export default App;
import React from 'react';
import { Joke } from '../types/joke';

interface JokeCardProps {
  joke: Joke;
  showPunchline: boolean;
}

export function JokeCard({ joke, showPunchline }: JokeCardProps) {
  return (
    <div className="space-y-6">
      <p className="text-xl font-medium leading-relaxed">
        {joke.setup}
      </p>
      
      <p className={`text-lg text-emerald-400 transition-all duration-300 transform ${
        showPunchline ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
      }`}>
        {joke.punchline}
      </p>
    </div>
  );
}
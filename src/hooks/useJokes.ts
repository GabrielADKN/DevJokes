import { useState, useCallback } from 'react';
import { jokes } from '../data/jokes';

export function useJokes() {
  const [currentJoke, setCurrentJoke] = useState(0);
  const [showPunchline, setShowPunchline] = useState(false);
  const [isRotating, setIsRotating] = useState(false);

  const getNextJoke = useCallback(() => {
    setIsRotating(true);
    setShowPunchline(false);
    
    // Add a small delay before changing the joke to ensure smooth transition
    setTimeout(() => {
      setCurrentJoke((prev) => (prev + 1) % jokes.length);
      setIsRotating(false);
    }, 300);
  }, []);

  const revealPunchline = useCallback(() => {
    setShowPunchline(true);
  }, []);

  return {
    currentJoke: jokes[currentJoke],
    showPunchline,
    isRotating,
    getNextJoke,
    revealPunchline
  };
}
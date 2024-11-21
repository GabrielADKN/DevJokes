import React from 'react';
import { Code2 } from 'lucide-react';

export function Header() {
  return (
    <div className="flex items-center justify-center mb-8">
      <Code2 className="w-8 h-8 mr-2 text-emerald-400" />
      <h1 className="text-2xl font-bold text-emerald-400">Dev Jokes</h1>
    </div>
  );
}
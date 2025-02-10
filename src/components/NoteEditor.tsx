
import React from 'react';
import { Card } from './ui/card';

export const NoteEditor = () => {
  return (
    <Card className="p-4 h-full bg-white/50 backdrop-blur-sm animate-fade-up">
      <textarea
        className="w-full h-full min-h-[500px] p-4 bg-transparent border-none focus:outline-none resize-none"
        placeholder="Start writing your note here..."
      />
    </Card>
  );
};

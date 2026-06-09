import React from 'react';

// We define exactly what data this component needs to render
export interface EventHeaderProps {
  title: string;
  date: Date; 
  teacher: string;
  venue: string;
}

export default function EventHeader({
  title,
  date,
  teacher,
  venue
}: EventHeaderProps) {
  
  // Extract the date and time strings from the single Date object
  const formattedDate = date.toLocaleDateString();
  const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <header className="flex flex-col items-center justify-center py-10 px-6 max-w-full mx-auto text-center space-y-5">
      
      <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-800">
        {title}
      </h1>

      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm md:text-base font-medium text-slate-500">
        <span className="flex items-center">
          {formattedDate} • {formattedTime}
        </span>

        <span className="hidden md:inline text-slate-300">|</span>

        <span className="flex items-center">
          Teacher: <span className="ml-1 text-slate-700">{teacher}</span>
        </span>

        <span className="hidden md:inline text-slate-300">|</span>

        <span className="flex items-center">
          Venue: <span className="ml-1 text-slate-700">{venue}</span>
        </span>
      </div>
    </header>
  );
}
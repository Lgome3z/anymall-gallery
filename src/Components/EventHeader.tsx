import React from 'react';

// We define exactly what data this component needs to render
export interface EventHeaderProps {
  title: string;
  date: string;
  time: string;
  teacher: string;
  venue: string;
}

export default function EventHeader({
  title,
  date,
  time,
  teacher,
  venue
}: EventHeaderProps) {
  return (
    <header className="flex flex-col items-center justify-center py-10 px-6 w-full max-w-5xl mx-auto text-center space-y-5">
      {/* Title: Uses dark charcoal (slate-800) and tight tracking 
        for that punchy, modern Japanese event aesthetic 
      */}
      <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-800">
        {title}
      </h1>

      {/* Meta Info: Uses a softer gray (slate-500) to create visual hierarchy,
        with flex-wrap so it stacks beautifully on mobile screens.
      */}
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm md:text-base font-medium text-slate-500">
        <span className="flex items-center">
          {date} • {time}
        </span>

        {/* Vertical divider that disappears on mobile */}
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
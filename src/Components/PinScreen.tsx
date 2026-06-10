import React, { useState } from 'react';

export interface PinScreenProps {
  onUnlock: (pin: string) => void;
  errorMessage?: string;
}

export default function PinScreen({ onUnlock, errorMessage }: PinScreenProps) {
  const [pin, setPin] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevents the page from refreshing
    onUnlock(pin);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 font-sans">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-sm border border-slate-200 p-8 text-center space-y-6">
        
        <div className="flex justify-center-safe">
        <img
          src="/images/logo.png"
          alt="AnyMall"
          className="h-9 w-auto "
        />
        </div>
        
        <div>
          <h2 className="text-xl font-semibold text-slate-800">Private Event Gallery</h2>
          <p className="text-sm text-slate-500 mt-2">
            Please enter the PIN provided by the event organizer to view these photos.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          <input 
            type="password" 
            maxLength={6}
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            placeholder="Enter PIN"
            className="w-full text-center text-2xl tracking-widest px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-transparent transition-all"
            autoFocus
          />
          
          {/* Only shows up if they type the wrong password */}
          {errorMessage && (
            <p className="text-red-500 text-sm font-medium">{errorMessage}</p>
          )}

          <button 
            type="submit"
            className="w-full bg-slate-900 text-white font-medium py-3 rounded-xl hover:bg-slate-800 transition-colors active:scale-[0.98]"
          >
            Unlock Gallery
          </button>
        </form>
        
      </div>
    </div>
  );
}
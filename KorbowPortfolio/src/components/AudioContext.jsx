import { createContext, useContext, useState, useEffect } from "react";

// Création du contexte
const AudioContext = createContext();

// Fournisseur du contexte
export function AudioProvider({ children }) {
  const [audioUnlocked, setAudioUnlocked] = useState(false);

  useEffect(() => {
    if (audioUnlocked) return;

    const unlock = () => setAudioUnlocked(true);
    document.addEventListener("click", unlock);

    return () => document.removeEventListener("click", unlock);
  }, [audioUnlocked]);

  return (
    <AudioContext.Provider value={{ audioUnlocked, setAudioUnlocked }}>
      {children}
    </AudioContext.Provider>
  );
}

// Creation du hook pour le contexte
export const useAudio = () => useContext(AudioContext);
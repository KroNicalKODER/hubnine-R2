import React, { createContext, useState } from 'react';

export const WordContext = createContext();

export const WordProvider = ({ children }) => {
  const [clickedWord, setClickedWord] = useState(null);
  const [occurrenceIds, setOccurrenceIds] = useState([]);
  const [currentOccurrenceIndex, setCurrentOccurrenceIndex] = useState(0);

  return (
    <WordContext.Provider value={{
      clickedWord,
      setClickedWord,
      occurrenceIds,
      setOccurrenceIds,
      currentOccurrenceIndex,
      setCurrentOccurrenceIndex,
    }}>
      {children}
    </WordContext.Provider>
  );
};

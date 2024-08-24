import React, { useContext } from 'react';
import { WordContext } from '../context/WordContext';

const OutputBox = ({ outputText }) => {
  const { setClickedWord, setCurrentOccurrenceIndex } = useContext(WordContext);

  const handleWordClick = (word) => {
    setClickedWord(word.toLowerCase());
    setCurrentOccurrenceIndex(0); // Reset to the first occurrence
  };

  const renderTextWithClick = (text) => {
    const words = text.split(/(\s+)/).filter(word => word.trim().length > 0);

    return words.map((word, index) => (
      <span 
        key={index}
        onClick={() => handleWordClick(word)}
        className="text-primary"
        style={{ cursor: 'pointer' }}
      >
        {word}{' '}
      </span>
    ));
  };

  return (
    <div className="output-box border p-3 bg-light" style={{ height: '300px', overflowY: 'scroll' }}>
      {renderTextWithClick(outputText)}
    </div>
  );
};

export default OutputBox;

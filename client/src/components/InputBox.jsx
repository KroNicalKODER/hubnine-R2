import React, { useContext, useEffect, useRef } from 'react';
import { WordContext } from '../context/WordContext';

const InputBox = ({ inputText }) => {
  const { clickedWord, setOccurrenceIds, currentOccurrenceIndex } = useContext(WordContext);
  const inputRef = useRef(null);

  useEffect(() => {
    const newOccurrenceIds = [];
    let highlightedText;

    if (clickedWord) {
      const regex = new RegExp(`\\b${clickedWord}\\b`, 'gi');
      highlightedText = inputText.replace(regex, (match, index) => {
        const id = `occurrence-${index}-${Math.random().toString(36).substring(7)}`;
        newOccurrenceIds.push(id);
        return `<span id="${id}" class="highlighted" style="color: blue; font-weight: 600;">${match}</span>`;
      });      
    } else {
      highlightedText = inputText;
    }

    inputRef.current.innerHTML = highlightedText;
    setOccurrenceIds(newOccurrenceIds);

    if (clickedWord && newOccurrenceIds.length > 0) {
      document.getElementById(newOccurrenceIds[currentOccurrenceIndex])?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

  }, [clickedWord, currentOccurrenceIndex]);

  return (
    <div ref={inputRef} className="input-box border p-3 bg-light" style={{ height: '300px', overflowY: 'scroll' }}></div>
  );
};

export default InputBox;

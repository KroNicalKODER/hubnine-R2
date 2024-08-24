import React, { useContext, useEffect } from 'react';
import { WordContext } from '../context/WordContext';

const NavigationButtons = () => {
  const { occurrenceIds, currentOccurrenceIndex, setCurrentOccurrenceIndex } = useContext(WordContext);

  useEffect(() => {
    occurrenceIds.forEach((id, index) => {
      const spanElement = document.getElementById(id);
      if (spanElement) {
        spanElement.style.backgroundColor = index === currentOccurrenceIndex ? 'yellow' : 'transparent';
      }
    });
  }, [occurrenceIds, currentOccurrenceIndex]);

  const handleNext = () => {
    if (currentOccurrenceIndex < occurrenceIds.length - 1) {
      setCurrentOccurrenceIndex(currentOccurrenceIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentOccurrenceIndex > 0) {
      setCurrentOccurrenceIndex(currentOccurrenceIndex - 1);
    }
  };

  return (
    <div className="d-flex justify-content-center my-3">
      <button onClick={handlePrevious} className="btn btn-primary mx-2" disabled={currentOccurrenceIndex === 0}>
        Previous
      </button>
      <button onClick={handleNext} className="btn btn-primary mx-2" disabled={currentOccurrenceIndex === occurrenceIds.length - 1}>
        Next
      </button>
    </div>
  );
};

export default NavigationButtons;

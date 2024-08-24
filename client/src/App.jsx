import React from 'react';
import InputBox from './components/InputBox';
import OutputBox from './components/OutputBox';
import NavigationButtons from './components/NavigationButtons';
import { WordProvider } from './context/WordContext';

function App() {
  const inputText = `
    Mr. John Doe is a 90-year-old male with a history of chronic kidney disease, hypertension, 
    and type 2 diabetes. He was admitted with worsening abdominal pain that had started 
    three days prior to admission. He reported no bowel movements in the last two days 
    and was experiencing significant discomfort and bloating. A CT scan of the abdomen revealed 
    a large bowel obstruction likely due to a volvulus. The patient underwent exploratory laparotomy, 
    during which a right hemicolectomy was performed due to ischemia of the cecum. Postoperatively, 
    the patient was transferred to the ICU for further monitoring. Over the next few days, 
    he experienced episodes of hypoglycemia, hypotension, and respiratory distress, but eventually 
    stabilized and was discharged to a rehabilitation facility.
    In the following days, the patient's condition was closely monitored by the medical team. 
    Despite initial improvements, he developed a fever and signs of a potential infection, 
    prompting further investigations. Antibiotics were initiated, and cultures were taken to identify 
    the source of the infection. Over the course of a week, the patient responded well to treatment 
    and his vital signs stabilized. By the end of his hospital stay, he had regained partial mobility 
    and was able to begin physical therapy. The decision was made to transfer him to a rehabilitation 
    center where he could continue his recovery with specialized care and support. The family was 
    updated regularly on his progress and was involved in discharge planning to ensure a smooth 
    transition to the next phase of his recovery.
    transferred to a rehabilitation center where he could continue his recovery with specialized care and support.
  `;

  const outputText = `
    Patient is a 90-year-old male who was admitted with worsening abdominal pain, 
    constipation, and no bowel movements for two days. Imaging showed a large bowel obstruction. 
    He underwent surgery to remove the affected bowel segment, and the postoperative course 
    was complicated by hypoglycemia and respiratory distress. The patient was eventually stabilized 
    and discharged to a rehabilitation facility for further care. In the subsequent days, the patient 
    showed signs of infection and was treated with antibiotics. After a week of intensive care, 
    his condition improved, and he was transferred to a rehabilitation center to continue his recovery.
  `;

  return (
    <WordProvider>
      <div className="App container d-flex flex-column align-items-center justify-content-center" style={{width: '100vw'}}>
        <h1 className="my-4">Word Highlighter</h1>
        <div className="row">
          <div className="col-md-6">
            <InputBox inputText={inputText} />
          </div>
          <div className="col-md-6">
            <OutputBox outputText={outputText} />
          </div>
        </div>
        <NavigationButtons />
      </div>
    </WordProvider>
  );
}

export default App;

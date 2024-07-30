import React, { useState } from 'react';
import CVForm from './components/CVFormik';
import CVPreview from './components/CVPreview';
import { PDFDownloadLink } from '@react-pdf/renderer';

interface CVData {
  // Define the structure of your CV data here
  // For example:
  name: string;
  email: string;
  // Add other fields as needed
}

const App: React.FC = () => {
  const [cvData, setCvData] = useState<CVData | null>(null);

  const handleFormSubmit = (data: CVData) => {
    setCvData(data);
  };

  return (
    <div>
      <CVForm onSubmit={handleFormSubmit} />
      {cvData && (
        <PDFDownloadLink document={<CVPreview data={cvData} />} fileName="cprueba.pdf">
          {({ loading }) => (loading ? 'Generando PDF...' : 'Descargar PDF')}
        </PDFDownloadLink>
      )}
    </div>
  );
};

export default App;

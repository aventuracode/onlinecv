import React, { useState } from 'react';
import CVForm from './components/CVFormik';
import CVPreview from './components/CVPreview';
import { PDFDownloadLink } from '@react-pdf/renderer';
import CVPreview2 from './components/CVPreview2';

interface CVData {
  name: string;
  email: string;
  phone: string;
}

const App: React.FC = () => {
  const [cvData, setCvData] = useState<CVData | null>(null);

  const handleFormSubmit = (data: CVData) => {
    setCvData(data);
  };

  const datacv= {
    name: 'ariel',
    email: 'venturaq@gmai.com',
    phone: '381555555'
  }

  return (
    <div>
      {/* <CVForm onSubmit={handleFormSubmit} /> */}
      
      {/* {cvData && ( */}
        {/* <PDFDownloadLink document={<CVPreview data={cvData} />} fileName="cprueba.pdf"> */}
        <PDFDownloadLink document={<CVPreview2 />} fileName="cprueba.pdf">
          {({ loading }) => (loading ? 'Generando PDF...' : 'Descargar PDF')}
        </PDFDownloadLink>
      {/* )} */}
    </div>
  );
};

export default App;

import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: { padding: 30 },
  section: { margin: 10, padding: 10, flexGrow: 1 },
});

interface CVPreviewProps {
  data: {
    name: string;
    email: string;
    phone: string;
    // Añade más campos según sea necesario
  };
}

const CVPreview: React.FC<CVPreviewProps> = ({ data }) => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.section}>
        <Text>{data.name}</Text>
        <Text>{data.email}</Text>
        <Text>{data.phone}</Text>
        
      </View>
    </Page>
  </Document>
);

export default CVPreview;

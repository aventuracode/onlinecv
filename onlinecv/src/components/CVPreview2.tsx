import React from 'react';
import { Document, Page, Text, View, Image, StyleSheet } from '@react-pdf/renderer';

// Estilos
const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  section: {
    marginBottom: 10,
  },
  header: {
    fontSize: 24,
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 18,
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
});

// Componente principal
const CVPreview2 = () => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.section}>
        <Image style={styles.image} src="profile_picture_url" />
        <Text style={styles.header}>Ventura</Text>
        <Text style={styles.subHeader}>Developer</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subHeader}>Acerca de mí</Text>
        <Text style={styles.text}>
          Soy una persona emprendedora, proactiva, creativa con gran iniciativa y mucha actitud positiva. Me gustan los retos y aprender continuamente. Entre las fortalezas que he desarrollado están mi trabajo en equipo, adaptación al cambio, atención al detalle y creatividad.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subHeader}>Experiencia Laboral</Text>
        <Text style={styles.text}>
          <Text style={{ fontWeight: 'bold' }}>Full Stack Developer - Edenred-AR</Text> (Agosto 2022 - Actualmente)
          {'\n'}- Analizar, desarrollar y probar nuevas funcionalidades.
          {'\n'}- Mantenimiento y actualización de las apps.
          {'\n'}- Trabajo siguiendo la metodología SCRUM.
          {'\n'}- Tecnologías: React, Redux, .NET Core, APIs REST, Azure DevOps, SQL, JIRA.
        </Text>
        <Text style={styles.text}>
          <Text style={{ fontWeight: 'bold' }}>Full Stack Developer - Diloog</Text> (Octubre 2021 - Julio 2022)
          {'\n'}- Implementación de contenido inteligente en sitios e-commerce.
          {'\n'}- Tecnologías: JavaScript, React, JQuery, HTML, CSS, .NET Core, API REST, SQL, Entity Framework, MySQL.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subHeader}>Skills</Text>
        <Text style={styles.text}>JavaScript, React, React Native, Redux, .NET, C#, MySQL, SQL, HTML, CSS, Scrum, Git, Inglés.</Text>
      </View>
    </Page>
  </Document>
);

export default CVPreview2;

import React from 'react';
import { useFormik } from 'formik';

interface CVFormProps {
  onSubmit: (formData: FormData) => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  // Añade más campos según sea necesario
}

const CVForm: React.FC<CVFormProps> = ({ onSubmit }) => {
  const formik = useFormik<FormData>({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      // Añade más campos según sea necesario
    },
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Nombre"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <input
        type="tel"
        name="phone"
        placeholder="Teléfono"
        onChange={formik.handleChange}
        value={formik.values.phone}
      />
      {/* Añade más campos según sea necesario */}
      <button type="submit">Generar CV</button>
    </form>
  );
};

export default CVForm;

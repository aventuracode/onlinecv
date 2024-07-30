import React, { useState, ChangeEvent, FormEvent } from 'react';

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
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    // Añade más campos según sea necesario
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Nombre" onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
      <input type="tel" name="phone" placeholder="Teléfono" onChange={handleChange} />
      {/* Añade más campos según sea necesario */}
      <button type="submit">Generar CV</button>
    </form>
  );
};

export default CVForm;

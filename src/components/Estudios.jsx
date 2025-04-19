import React from 'react';

function Estudios() {
  const estudios = [
    { title: 'Tecnicatura Universitaria en Programación', institution: 'Universidad Tecnológica Nacional - Facultad Regional Tucumán', year: '2024-Presente' },
    { title: 'POO en C#', institution: 'Roling Code', year: '2022' },
    { title: 'Google IT Automation with Python', institution: 'Google', year: '2023' },
    {title: 'The Complete Web Developer Bootcamp', institution: 'Udemy', year: '2024' },
  ];

  return (
    <div>
      {estudios.map((estudio, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-lg font-medium">{estudio.title}</h3>
          <p className="text-yellow-300">{estudio.institution} - {estudio.year}</p>
        </div>
      ))}
    </div>
  );
}

export default Estudios;
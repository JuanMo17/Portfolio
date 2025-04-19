import React from 'react';

function SoftSkills() {
  const skills = [
    { name: 'Trabajo en equipo', description: 'Disposición para colaborar con otros en entornos multidisciplinarios, aportando y recibiendo ideas con actitud constructiva.' },
    { name: 'Resolución de problemas', description: 'Enfoque analítico y creativo para enfrentar desafíos técnicos y buscar soluciones funcionales e innovadoras.' },
    { name: 'Comunicación efectiva', description: 'Capacidad para transmitir ideas y conceptos técnicos de manera clara y comprensible, tanto de forma oral como escrita.' },
    { name: 'Adaptabilidad', description: 'Flexibilidad para ajustarse a nuevas tecnologías, metodologías y entornos de trabajo en constante evolución.' },
  ];

  return (
    <div>
      {skills.map((skill, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-lg font-medium">{skill.name}</h3>
          <p className="text-yellow-300">{skill.description}</p>
        </div>
      ))}
    </div>
  );
}

export default SoftSkills;
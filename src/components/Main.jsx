import React from 'react';
import Estudios from './Estudios';
import SoftSkills from './SoftSkills';

function Main() {
  const sections = [
    { id: 'estudios', title: 'Estudios', component: <Estudios /> },
    { id: 'soft-skills', title: 'Soft Skills', component: <SoftSkills /> },
    { id: 'proyectos', title: 'Proyectos Realizados', content: [
      { 
        name: 'Recetario de comidas típicas de Argentina', 
        description: 'Aplicación web desarrollada con React que recopila recetas tradicionales de distintas regiones de Argentina. Permite a los usuarios navegar por categorías, ver ingredientes, instrucciones paso a paso e imágenes ilustrativas. El diseño es responsive y pensado para una experiencia de usuario simple e intuitiva.',
        imageUrl: 'https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-9364-622f-af63-1b41b6ee0c47/raw?se=2025-04-19T08%3A44%3A16Z&sp=r&sv=2024-08-04&sr=b&scid=625aac13-0d60-5a46-9d57-00749c1af4d2&skoid=51916beb-8d6a-49b8-8b29-ca48ed86557e&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-19T06%3A09%3A07Z&ske=2025-04-20T06%3A09%3A07Z&sks=b&skv=2024-08-04&sig=yEtmVKOlUoIblmDs/z1ZKu5NOuN4PXG%2Br8dBRK%2BMDSU%3D'
      },
      { 
        name: 'Carreras de Caballos virtuales', 
        description: 'Aplicación de escritorio en formato de juego, donde los usuarios pueden apostar en carreras de caballos virtuales. Las posiciones y resultados son generados de forma aleatoria mediante un algoritmo simple de programación. Este proyecto permitió afianzar conocimientos en lógica, control de eventos y manipulación de interfaces gráficas con C#.',
        imageUrl: 'https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-f01c-622f-8fa4-a0c75315b11e/raw?se=2025-04-19T08%3A44%3A16Z&sp=r&sv=2024-08-04&sr=b&scid=2d2060a2-4c0f-5eda-bf99-d23c8ce5286c&skoid=51916beb-8d6a-49b8-8b29-ca48ed86557e&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-18T19%3A27%3A00Z&ske=2025-04-19T19%3A27%3A00Z&sks=b&skv=2024-08-04&sig=XwjjNsIP9JJXbwpyApTlwkVl4n%2BK83REWRSPPl41Nn0%3D'
      }
    ]},
    { id: 'experiencia', title: 'Experiencia Laboral', content: [
      { role: 'Desarrollador Web Frontend', company: 'Globant.', duration: 'Enero 2025 – Actualidad' }
    ]},
    { id: 'idiomas', title: 'Idiomas', content: [
      { language: 'Español', level: 'Nativo' },
      { language: 'Inglés', level: 'Intermedio' },
      { language: 'Francés', level: 'Avanzado' },
      { language: 'Portugués', level: 'Intermedio' }
    ]},
    { id: 'certificados', title: 'Certificados', content: [
      { 
        name: 'POO en C#', 
        issuer: 'Roling Code', 
        year: '2022', 
        imageUrl: 'https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-8fa0-622f-9f48-f451216bd75d/raw?se=2025-04-19T07%3A46%3A43Z&sp=r&sv=2024-08-04&sr=b&scid=232fdc6f-e592-5875-b806-349b79e7269d&skoid=de76bc29-7017-43d4-8d90-7a49512bae0f&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-18T19%3A28%3A50Z&ske=2025-04-19T19%3A28%3A50Z&sks=b&skv=2024-08-04&sig=id7TcjY5eWgDyJ/9hUrUD0HyVbnLsXujd00hkz3PyIA%3D' 
      },
      { 
        name: 'Google IT Automation with Python', 
        issuer: 'Google', 
        year: '2023', 
        imageUrl: 'https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-6f68-622f-8d47-b5900d85d819/raw?se=2025-04-19T07%3A49%3A30Z&sp=r&sv=2024-08-04&sr=b&scid=63b491e5-8bbc-5f4d-8c48-4734d8f305ca&skoid=de76bc29-7017-43d4-8d90-7a49512bae0f&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-18T19%3A26%3A30Z&ske=2025-04-19T19%3A26%3A30Z&sks=b&skv=2024-08-04&sig=CZGIXWvWGHSgBPdeS9HWldHpd%2BewdgqWMWKDakrySso%3D' 
      },
      { 
        name: 'The Complete Web Developer Bootcamp', 
        issuer: 'Udemy', 
        year: '2024', 
        imageUrl: 'https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-3c10-622f-86f7-a571e0fbd127/raw?se=2025-04-19T07%3A54%3A15Z&sp=r&sv=2024-08-04&sr=b&scid=1af8f298-c77a-5bd6-aaf7-a61c3cc25658&skoid=de76bc29-7017-43d4-8d90-7a49512bae0f&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-18T19%3A25%3A18Z&ske=2025-04-19T19%3A25%3A18Z&sks=b&skv=2024-08-04&sig=0FpVjOcDu9awDewNbhCj9ChxthCelgDnMuyB4Li55CE%3D' 
      }
    ]}
  ];

  return (
    <main className="flex-grow container mx-auto p-6">
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Presentación</h2>
        <p className="text-yellow-300 mb-4">
          Soy Juan Daniel Morales, estudiante de Programación en la Universidad Tecnológica Nacional - Facultad Regional Tucumán. Apasionado por el desarrollo web y enfocado en la creación de soluciones tecnológicas innovadoras que aporten valor y mejoren la experiencia del usuario. Siempre en búsqueda de nuevos desafíos para seguir creciendo profesionalmente en el mundo de la tecnología.
        </p>
      </section>

      <nav className="mb-8">
        <ul className="flex space-x-4">
          {sections.map(section => (
            <li key={section.id}>
              <a href={`#${section.id}`} className="text-blue-500 hover:underline">
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {sections.map(section => (
        <section key={section.id} id={section.id} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
          {section.component ? (
            section.component
          ) : (
            <ul className="list-disc pl-6">
              {section.content.map((item, index) => (
                <li key={index} className="mb-2 flex items-center">
                  <span>
                    {item.name || item.role || item.language
                      ? `${item.name || item.role || item.language}: ${item.description || item.company || item.level || item.issuer} ${item.duration || item.year || ''}`
                      : item}
                  </span>
                  {(section.id === 'certificados' || section.id === 'proyectos') && item.imageUrl && (
                    <a
                      href={item.imageUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={section.id === 'certificados' ? 'certificado-button ml-4' : 'proyecto-button ml-4'}
                    >
                      {section.id === 'certificados' ? 'Ver Certificado' : 'Ver Proyecto'}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </main>
  );
}

export default Main;
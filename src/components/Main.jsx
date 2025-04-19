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
        imageUrl: 'https://scontent.ftuc4-1.fna.fbcdn.net/v/t39.30808-6/492128243_29152320384414389_8066807051794215474_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeERrnSV--lfCGE-rGCMhDuyGtf1MikUafwa1_UyKRRp_CqfCONqWdPkJ1L9OCSZtwVniVsgnirsv23tOtUP0m4r&_nc_ohc=c25i8EbDHvAQ7kNvwGGKM-O&_nc_oc=AdnJTc0iclSOMDJlDVZy8E9Pu6jBQx9jrPX_pn0jrrkdDqFNUWZnxN14HVrf7ZQc1IyETrfDr21MNRK17ulgN3S-&_nc_zt=23&_nc_ht=scontent.ftuc4-1.fna&_nc_gid=HOMyoKWsoPUWogK5UjBGDQ&oh=00_AfFYImAHkM-LWCpDU5hL0HD3-bA8oeGgHr5Ni7sD-oeY5Q&oe=680937B7'
      },
      { 
        name: 'Carreras de Caballos virtuales', 
        description: 'Aplicación de escritorio en formato de juego, donde los usuarios pueden apostar en carreras de caballos virtuales. Las posiciones y resultados son generados de forma aleatoria mediante un algoritmo simple de programación. Este proyecto permitió afianzar conocimientos en lógica, control de eventos y manipulación de interfaces gráficas con C#.',
        imageUrl: 'https://scontent.ftuc4-1.fna.fbcdn.net/v/t39.30808-6/492371308_29152320504414377_4784955553017897037_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGMHRUOLSZqVY-9l2ejRbwAQJ2Y0Ik4I-dAnZjQiTgj58lns9S2aPNqLp3_krzhdEiVPySoh1_F5evQRjTeSb65&_nc_ohc=f-yTlZIbON0Q7kNvwEAqfni&_nc_oc=AdlRAYqnuDB2nemU1q9PwpMj-Xad8I4E4njDrE9KNP4142OZW9N90Y9ou9r2RHEKI_3dGAhFxicUx-56fyi97xbI&_nc_zt=23&_nc_ht=scontent.ftuc4-1.fna&_nc_gid=jqiBGgKqMGgPOnfrKZulKA&oh=00_AfGb6LJT8Yw4nh4GDR04qxjayo0oC0m91GI6piR-STH-Lg&oe=6809421A'
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
        imageUrl: 'https://scontent.ftuc4-2.fna.fbcdn.net/v/t39.30808-6/492002159_29152320797747681_2536491191593249900_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFZ28vnXCLwrLNgn_lI34sO_VdfDpI8duH9V18Okjx24RwYgNiEbWCqKqprFCXAQLFSvJjzrYDmNxVvIJEdFbX5&_nc_ohc=xbf0YjKqq7sQ7kNvwHJLgYg&_nc_oc=AdnkPeND1zrsAcUyRADrHrCY5KhTT_Qnys507mBr4GMhY2xABGR8tepCxDgNKeOyw92m_ZkvrocedqU2mRuOL8cc&_nc_zt=23&_nc_ht=scontent.ftuc4-2.fna&_nc_gid=jsSVAXaKtc9rCEjhGNmUDA&oh=00_AfHFz-Rq1sBe9HxibCs1yoVr2wWvZl-gzklba-H8tFEJVQ&oe=68093621'
      },
      { 
        name: 'Google IT Automation with Python', 
        issuer: 'Google', 
        year: '2023', 
        imageUrl: 'https://scontent.ftuc4-2.fna.fbcdn.net/v/t39.30808-6/492202049_29152320541081040_4610880832527251986_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH9xQvBJPdtRQWVFf5X0K306UJt0aH_iQTpQm3Rof-JBIl62a-y-WqcDr2QOpI8q6Mn2j2GfytxWvmqsBhxdkG0&_nc_ohc=NWJW23sIzFEQ7kNvwF0RCAQ&_nc_oc=AdkRcL4e8QQ_jdK2AMwiKkAafN713-S0SXarvlGaoJ8LiJr5UxNtAJDxxrI774wOV9e2Go74gL0gy4bErg_oSE_R&_nc_zt=23&_nc_ht=scontent.ftuc4-2.fna&_nc_gid=j71zi0pLW95bxVMyaTeGHw&oh=00_AfE31UzClqHARs-AyraPcl26JLZN7-pExTf2vo3hV76xlQ&oe=6809200F' 
      },
      { 
        name: 'The Complete Web Developer Bootcamp', 
        issuer: 'Udemy', 
        year: '2024', 
        imageUrl: 'https://scontent.ftuc4-2.fna.fbcdn.net/v/t39.30808-6/492074036_29152321081080986_1868369518731368424_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEE3n6XDC5dQ444BE3kLIup8b_xVG9TG5bxv_FUb1MblkjOLXRIAg_wbIhCygGJwpuiO2rIV4Z1XpJxqX9yt-LS&_nc_ohc=QUtyhJa6CjgQ7kNvwEgMNta&_nc_oc=AdnnseTzZC90b6fRBSqLqJbfaDlT8de3zn8g0G8ddY3RGiOvylmJAy8JiL4B9YLLUKsPPMvK2ssDJiXEhbPLfaXI&_nc_zt=23&_nc_ht=scontent.ftuc4-2.fna&_nc_gid=sZ9PWUKqNdrZk96LmSfZwg&oh=00_AfE3xIztFhSWByOLcpYLbTFIU4ZOMhEexb_hKfmg_a0qHg&oe=68093157' 
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
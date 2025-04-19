import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <div className="social">
          <ul className="flex justify-center gap-8">
            <li>
              <a href="https://www.facebook.com/JDMxD/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/juanlannister17/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://x.com/jmlapesadilla/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-x-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://wa.me/543816655296/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex justify-center space-x-6 mt-4 mb-4">
          <a href="https://linkedin.com" className="hover:text-blue-400">LinkedIn
          <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/JuanMo17/Portfolio.git" className="hover:text-blue-400">GitHub
          <i class="fa-brands fa-github-alt"></i></a>
        </div>
        <p>© 2025 Juan Daniel Morales. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
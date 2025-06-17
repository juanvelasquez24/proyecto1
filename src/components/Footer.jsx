import React from 'react';

export default function Footer() {
  return (
    <footer className="text-center py-4 mt-5" style={{backgroundColor: '#000000', color: '#ffffff'}}>
      <div className="container">
        <p className="mb-2"></p>
        <p className="mb-2">© 2025 Coctel One. Todos los derechos reservados.</p>
        <p className="mb-2">WhatsApp: 3052457865 - Direccion: Cra 50#76sur98</p>
        <div>
          <a href="#" style={{color: '#ffeb3b', margin: '0 10px', fontWeight: 'bold', textDecoration: 'none', transition: 'color 0.3s ease'}}>Facebook</a>
          <a href="#" style={{color: '#ffeb3b', margin: '0 10px', fontWeight: 'bold', textDecoration: 'none', transition: 'color 0.3s ease'}}>Twitter</a>
          <a href="#" style={{color: '#ffeb3b', margin: '0 10px', fontWeight: 'bold', textDecoration: 'none', transition: 'color 0.3s ease'}}>Instagram</a>
        </div>
      </div>
    </footer>
  );
}

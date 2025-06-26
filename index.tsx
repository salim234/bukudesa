import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
// import { HashRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);

const Maintenance: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      flexDirection: 'column',
      backgroundColor: '#f2f4f8',
      color: '#333',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      padding: '20px'
    }}>
      <img
        src="https://cdn.brandfetch.io/pasuruankab.go.id/fallback/lettermark/theme/dark/h/256/w/256/icon?c=1bfwsmEH20zzEfSNTed"
        alt="Logo Pasuruan"
        style={{ width: '80px', marginBottom: '1rem', borderRadius: '10px' }}
      />
      <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', animation: 'fadeIn 1s ease-out' }}>
        🚧 Situs dinonaktifkan
      </h1>
      <p style={{ fontSize: '1.1rem', maxWidth: '500px' }}>
        Untuk mendapatkan Aplikasi hubungi Pengembang Aplikasi.
      </p>

      <a
        href="https://wa.me/6282141097776"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          marginTop: '2rem',
          padding: '10px 20px',
          backgroundColor: '#25D366',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: '8px',
          fontWeight: 'bold',
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
        }}
      >
        Hubungi Admin via WhatsApp
      </a>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

root.render(
  <React.StrictMode>
    <Maintenance />
  </React.StrictMode>
);

/*
// 👇 Kode aplikasi asli (nonaktifkan sementara)
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
*/

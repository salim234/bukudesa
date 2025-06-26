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
      background: 'linear-gradient(135deg, #f8fafc, #e2e8f0)',
      color: '#333',
      fontFamily: 'Segoe UI, Arial, sans-serif',
      textAlign: 'center',
      padding: '20px',
      overflow: 'hidden'
    }}>
      <img
        src="https://cdn.brandfetch.io/pasuruankab.go.id/fallback/lettermark/theme/dark/h/256/w/256/icon?c=1bfwsmEH20zzEfSNTed"
        alt="Logo Pasuruan"
        style={{
          width: '100px',
          marginBottom: '1rem',
          borderRadius: '12px',
          animation: 'fadeSlide 1s ease-out'
        }}
      />
      <h1 style={{
        fontSize: '2.5rem',
        marginBottom: '0.5rem',
        animation: 'fadeInUp 1.2s ease-out'
      }}>
        🚧 Situs Dinonaktifkan
      </h1>
      <p style={{
        fontSize: '1.1rem',
        maxWidth: '480px',
        animation: 'fadeInUp 1.6s ease-out',
        opacity: 0.9
      }}>
        Untuk mendapatkan akses Aplikasi <strong>Digital Desa</strong>,
        silakan hubungi pengembang melalui WhatsApp.
      </p>

      <a
        href="https://wa.me/6282141097776"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          marginTop: '2rem',
          padding: '12px 24px',
          backgroundColor: '#25D366',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: '8px',
          fontWeight: 'bold',
          boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
          transition: 'all 0.3s ease',
          animation: 'fadeInUp 2s ease-out'
        }}
        onMouseEnter={(e) => {
          (e.target as HTMLAnchorElement).style.transform = 'scale(1.05)';
          (e.target as HTMLAnchorElement).style.boxShadow = '0 6px 12px rgba(0,0,0,0.3)';
        }}
        onMouseLeave={(e) => {
          (e.target as HTMLAnchorElement).style.transform = 'scale(1)';
          (e.target as HTMLAnchorElement).style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
        }}
      >
        Hubungi Admin via WhatsApp
      </a>

      <style>{`
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 480px) {
          h1 { font-size: 1.8rem; }
          p { font-size: 1rem; }
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

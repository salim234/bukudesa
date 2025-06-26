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

      <h1 style={{ fontSize: '2.2rem', marginBottom: '0.5rem', animation: 'fadeIn 1s ease-out' }}>
        🚧 Aplikasi Dinonaktifkan Sementara
      </h1>

      <hr style={{ width: '60px', border: '1px solid #ccc', marginBottom: '1rem' }} />

      <p style={{ fontSize: '1.1rem', maxWidth: '500px', marginBottom: '1.5rem' }}>
        Aplikasi <strong>Digital Desa</strong> saat ini sedang <strong>dinonaktifkan</strong> oleh pengelola.
        Jika Anda membutuhkan bantuan, silakan hubungi pengembang atau admin melalui WhatsApp di bawah ini.
      </p>

      <a
        href="https://wa.me/6282141097776"
        target="_blank"
        rel="noopener noreferrer"
        style={{
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
        @media (max-width: 480px) {
          h1 { font-size: 1.8rem; }
          p { font-size: 1rem; }
        }
      `}</style>
    </div>
  );
};

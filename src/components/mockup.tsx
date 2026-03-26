import React from 'react';

/**
 * Komponent prezentujący makietę aplikacji AboTax.
 * Cały wygląd opiera się wyłącznie na klasach CSS z `components.css`,
 * dlatego nie wstawiamy tutaj żadnych zrzutów ekranu PNG – wszystko renderuje HTML + CSS.
 */
export default function MockupPreview() {
  return (
    <div className="app-device animate-slideInPhone">
      <div className="device-frame">
        <div className="device-screen">
          {/* ================= HEADER APLIKACJI ================= */}
          <div className="app-header">
            <div className="app-logo">
              {/* Używamy zwykłego <img>, żeby uniknąć importu next/image */}
              <img src="/logo_abotax.png" alt="AboTax" width={40} height={40} />
              <span>AboTax</span>
            </div>
            <div className="app-user">
              <span className="user-name">Anna Kowalska</span>
              <div className="user-avatar">AK</div>
            </div>
          </div>

          {/* ================= DASHBOARD (SKRÓCONA WERSJA) ================= */}
          <div className="app-content">
            {/* Status konta */}
            <div className="account-status">
              <h3>Twój status w systemie</h3>
              <div className="status-cards">
                <div className="status-card active">
                  <div className="status-icon">👶</div>
                  <div className="status-info">
                    <span className="status-label">Ulga za dziecko</span>
                    <span className="status-value">2% (1560 zł/rok)</span>
                  </div>
                </div>
                <div className="status-card payment">
                  <div className="status-icon">💰</div>
                  <div className="status-info">
                    <span className="status-label">Wpłata AboTax</span>
                    <span className="status-value">650 zł/mies</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= BOTTOM NAV ================= */}
          <div className="app-bottom-nav">
            <button className="nav-item active">
              <span className="nav-icon">🏠</span>
              <span>Start</span>
            </button>
            <button className="nav-item">
              <span className="nav-icon">📄</span>
              <span>Dokumenty</span>
            </button>
            <button className="nav-item">
              <span className="nav-icon">👶</span>
              <span>Profil dziecka</span>
            </button>
            <button className="nav-item">
              <span className="nav-icon">⚙️</span>
              <span>Ustawienia</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

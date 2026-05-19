import React from "react";

const funFacts = [
  {
    id: 1,
    title: "Anlık Veri Akışı",
    description: "Gecikmesiz piyasa takibi.",
    iconClass: "fa-solid fa-bolt-lightning",
  },
  {
    id: 2,
    title: "Derinlemesine Analiz",
    description: "Teknik ve temel raporlar.",
    iconClass: "fa-solid fa-chart-line",
    cls: "tp-funfact-item-2",
  },
  {
    id: 3,
    title: "VIP Sinyaller",
    description: "Özel işlem fırsatları.",
    iconClass: "fa-solid fa-signal",
    cls: "tp-funfact-item-3",
  },
  {
    id: 4,
    title: "Uzman Desteği",
    description: "7/24 analist yanıtları.",
    iconClass: "fa-solid fa-headset",
  },
];

export default function FunFactArea() {
  return (
    <section
      className="funfact-area tp-funfact-bg"
      style={{
        backgroundImage: "url(/assets/img/bg/funfact-2-bg-1.jpg)",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#0056b3' // Eğer resim yüklenmezse zemin mavi kalsın
      }}
    >
      <div className="container">
        <div className="row">
          {funFacts.map((fact) => (
            <div key={fact.id} className="col-lg-3 col-sm-6">
              <div className={`tp-funfact-item d-flex align-items-center ${fact.cls || ""}`}>
                <div className="tp-funfact-icon">
                  <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(255,255,255,0.3)', // İkon etrafına hafif belirginlik
                    borderRadius: '50%',
                    width: '50px',
                    height: '50px'
                  }}>
                    {/* İkon rengi burada beyaza (text-white) çekildi */}
                    <i className={`${fact.iconClass} text-white`} style={{ fontSize: '22px' }}></i>
                  </span>
                </div>
                <div className="tp-funfact-content">
                  <h4 className="tp-funfact-title text-white">{fact.title}</h4>
                  <span className="text-white" style={{ opacity: 0.8 }}>{fact.description}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
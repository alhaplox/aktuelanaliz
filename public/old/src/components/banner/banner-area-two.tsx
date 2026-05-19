'use client';
import Link from "next/link";

const banners = [
  {
    id: 1,
    background: "/assets/img/banner/banner-5-bg-1.jpg", // Analiz ekranı görseli
    spanText: "Aktüel Analiz Ayrıcalığı",
    title: "7 Günlük Ücretsiz VIP",
    description: "Sinyal grubumuzu ve özel analizlerimizi 7 gün boyunca ücretsiz deneyimleyin.",
    buttonText: "Hemen Başla",
    buttonClass: "tp-btn-5",
    link: "/membership"
  },
  {
    id: 2,
    background: "/assets/img/banner/banner-5-bg-2.jpg", // Destek ekibi görseli
    spanText: "Sorularınız mı var?",
    title: "+90 212 911 2804",
    description: "Yatırım yolculuğunuzda size nasıl yardımcı olabiliriz? Destek ekibimize ulaşın.",
    buttonText: "BİZE YAZIN",
    buttonClass: "tp-btn-4",
    link: "/contact"
  },
];

export default function BannerAreaTwo() {
  return (
    <section className="banner-area">
      <div className="container-fluid p-0">
        <div className="row g-0">
          {banners.map((banner) => (
            <div className="col-lg-6" key={banner.id}>
              <div
                className="tp-banner-5-item"
                style={{
                  backgroundImage: `url(${banner.background})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="tp-banner-5-content text-center">
                  <span className="text-uppercase" style={{ letterSpacing: '2px' }}>
                    {banner.spanText}
                  </span>
                  <h2 className="tp-banner-5-title">
                    {/* Eğer başlık bir numara içeriyorsa otomatik tel: linki oluşturur */}
                    {banner.id === 2 ? (
                      <a href={`tel:${banner.title.replace(/\s/g, "")}`}>
                        {banner.title}
                      </a>
                    ) : (
                      banner.title
                    )}
                  </h2>
                  <p className="px-4">{banner.description}</p>
                  <div className="tp-banner-5-btn">
                    <Link className={banner.buttonClass} href={banner.link}>
                      {banner.buttonText}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
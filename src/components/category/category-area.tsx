'use client';
import Image from "next/image";
import shape_line from "@/assets/img/shape/bottom-line/line-2-category.svg";
import category_shape from "@/assets/img/shape/category-2-shape-1.png";
import Link from "next/link";

const marketCategories = [
  {
    id: 1, title: "Hisse Senetleri", count: "BIST100 & Global", color: "blue-bg",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
        <polyline points="17 6 23 6 23 12"></polyline>
      </svg>
    )
  },
  {
    id: 2, title: "Kripto Paralar", count: "Spot & Margin", color: "orange-bg",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 8l-4 8h8l-4-8z"></path>
      </svg>
    )
  },
  {
    id: 3, title: "Emtia Analizleri", count: "Altın & Petrol", color: "green-bg",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
        <line x1="12" y1="2" x2="12" y2="22"></line>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    )
  },
  {
    id: 4, title: "Teknik Analiz", count: "Strateji & Eğitim", color: "purple-bg",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
        <path d="M3 3v18h18"></path>
        <path d="M18 9l-5 5-2-2-4 4"></path>
      </svg>
    )
  },
];

export default function CategoryArea() {
  return (
    <section className="category-area mb-80 mt-95">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <div className="tp-section mb-40 text-center">
              <h5 className="tp-section-3-subtitle">Uzmanlık Alanlarımız</h5>
              <h3 className="tp-section-3-title">
                En Çok Tercih Edilen{" "}
                <span>
                  Kategoriler
                  <Image className="tp-underline-shape-5" src={shape_line} alt="line" />
                </span>
              </h3>
            </div>
          </div>
        </div>

        <div className="row">
          {marketCategories.map((item) => (
            <div key={item.id} className="col-lg-3 col-md-4 col-sm-6">
              <Link href={`/course-categories/${item.id}`} className="tp-category-item mb-25">
                <div className="tp-category-icon">
                  {/* Buraya style ekleyerek CSS çakışmasını engelliyoruz */}
                  <span className={item.color} style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'var(--tp-theme-primary)', // Eğer color class'ı çalışmazsa diye
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%'
                  }}>
                    {item.icon}
                  </span>
                </div>
                <div className="tp-category-content">
                  <h4 className="tp-category-title">{item.title}</h4>
                  <span>{item.count}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
'use client';
import Link from "next/link";
import { useState } from "react";

const planData = [
   {
      id: 1,
      title: "Piyasa <br/> Analizleri",
      description: "Güncel Borsa ve Emtia Yorumları",
      image: "/assets/img/bg/plan/plan-4-bg-1.jpg", // Buraya borsa grafiği olan bir görsel koyabilirsin
      link: "/blog",
   },
   {
      id: 2,
      title: "Analist <br/> Kadromuz",
      description: "Uzmanlarımızla Tanışın",
      image: "/assets/img/bg/plan/plan-4-bg-2.jpg",
      link: "/team",
   },
   {
      id: 3,
      title: "Hemen <br/> İletişime Geç",
      description: "Sorularınız İçin Buradayız",
      image: "/assets/img/bg/plan/plan-4-bg-3.jpg",
      link: "/contact",
   },
];

export default function PlanArea() {
   const [activeId, setActiveId] = useState(1);

   return (
      <section className="plan-area tp-plan-4-wrap fix">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-3">
                  <div className="tp-plan-4-section">
                     <span className="text-uppercase fw-bold" style={{ color: 'var(--tp-theme-1)', letterSpacing: '1px' }}>
                        Aktüel Analiz'ı Keşfet
                     </span>
                     <h3 className="tp-plan-4-section-title">Finansal Yolculuğunuzu Planlayın</h3>
                  </div>
               </div>
               <div className="col-lg-9">
                  <div className="tp-plan-4-wrapper">
                     <div className="row">
                        {planData.map((item) => (
                           <div key={item.id} className="col-md-4">
                              <Link
                                 onMouseEnter={() => setActiveId(item.id)}
                                 href={item.link}
                                 className={`tp-plan-4-item ${activeId === item.id ? "active" : ""}`}
                              >
                                 <div className="tp-plan-4-bg" style={{ backgroundImage: `url(${item.image})` }}></div>
                                 <div className="tp-plan-4-content d-flex align-items-center justify-content-center">
                                    <div className="tp-plan-4-box text-center">
                                       <span className="fw-bold">{item.id <= 9 ? `0${item.id}` : item.id}</span>
                                       <h4 className="tp-plan-4-title" dangerouslySetInnerHTML={{ __html: item.title }}></h4>
                                       <p className="text-white">{item.description}</p>
                                    </div>
                                 </div>
                              </Link>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}
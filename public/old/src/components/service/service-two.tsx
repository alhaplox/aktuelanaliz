'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import heading_shape from '@/assets/img/shape/service/services-shape-2.png';
import { createClient } from "@/utils/supabase/client";

// Tip tanımı
type IService = {
   id: number;
   title: string;
   description: string;
   iconActive: string;
   iconHover: string;
};

export default function ServiceTwo() {
   const [services, setServices] = useState<IService[]>([]);
   const supabase = createClient();

   useEffect(() => {
      async function fetchServices() {
         // Hizmetlerini 'site_settings' veya 'services' tablosunda tutuyorsan buradan çekebilirsin
         // Şimdilik Aktüel Analiz içeriğine göre dinamik bir yapı kurguluyoruz
         const mockServices: IService[] = [
            {
               id: 1,
               title: "Canlı Veri <br> Analizi",
               description: "BIST100, Altın ve Emtia piyasalarını anlık verilerle takip edin.",
               iconActive: "/assets/img/icon/service/services-3-icon-1.svg",
               iconHover: "/assets/img/icon/service/services-3-hover-1.svg",
            },
            {
               id: 2,
               title: "Teknik & Temel <br> Raporlar",
               description: "Uzman analistlerimiz tarafından hazırlanan günlük ve haftalık raporlar.",
               iconActive: "/assets/img/icon/service/services-3-icon-2.svg",
               iconHover: "/assets/img/icon/service/services-3-hover-2.svg",
            },
            {
               id: 3,
               title: "VIP <br> Üyelik",
               description: "Sadece profesyonellere özel, yüksek başarı oranlı sinyal ve analizler.",
               iconActive: "/assets/img/icon/service/services-3-icon-3.svg",
               iconHover: "/assets/img/icon/service/services-3-hover-3.svg",
            },
            {
               id: 4,
               title: "Finansal <br> Eğitimler",
               description: "Piyasayı okumayı öğreten, sıfırdan ileri seviyeye eğitim modülleri.",
               iconActive: "/assets/img/icon/service/services-3-icon-4.svg",
               iconHover: "/assets/img/icon/service/services-3-hover-4.svg",
            },
         ];
         setServices(mockServices);
      }
      fetchServices();
   }, []);

   return (
      <section className="service-area tp-service-3-bg py-100" style={{ backgroundColor: '#f8f9fa' }}>
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-8 col-lg-10">
                  <div className="tp-section p-relative mb-45 text-center">
                     <h3 className="tp-section-title">
                        Aktüel Analiz ile <br /> Yatırımlarınıza Yön Verin.
                     </h3>
                     <div className="tp-service-3-heading">
                        <Image src={heading_shape} alt="heading-shape" />
                     </div>
                  </div>
               </div>
            </div>

            <div className="row">
               {services.map((item) => (
                  <div key={item.id} className="col-lg-3 col-sm-6">
                     <div className="tp-service-3-item mb-30 wow fadeInUp" data-wow-delay=".3s" style={{ borderRadius: '15px', overflow: 'hidden' }}>
                        <div className="tp-service-3-icon">
                           <span className="tp-service-3-icon-active">
                              <Image src={item.iconActive} alt="icon" width={35} height={36} />
                           </span>
                           <span className="tp-service-3-icon-hover">
                              <Image src={item.iconHover} alt="icon" width={35} height={36} />
                           </span>
                        </div>
                        <div className="tp-service-3-content">
                           <h4 className="tp-service-3-title">
                              <span dangerouslySetInnerHTML={{ __html: item.title }}></span>
                           </h4>
                           <p>{item.description}</p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>

         {/* Dekoratif şekilleri finansal platforma uygun şekilde sadeleştirebiliriz */}
         <div className="tp-service-3-shape d-none d-md-block">
            {/* Buradaki çocuk temalı uçuşan şekilleri (ser_shape_1-5) 
                isteğe bağlı olarak grafik veya çizgi ikonlarıyla değiştirebilirsin */}
         </div>
      </section>
   )
} 
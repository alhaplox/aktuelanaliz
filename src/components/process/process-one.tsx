'use client';
import Link from 'next/link';
import Image from 'next/image';
import { ProcessLineSvg, RightArrowFour } from '../svg';
import process_icon_1 from '@/assets/img/icon/process/process-icon-1.svg';
import process_icon_2 from '@/assets/img/icon/process/process-icon-2.svg';
import process_icon_3 from '@/assets/img/icon/process/process-icon-3.svg';

const processData = [
   {
      id: 1,
      borderCls: "pink-border", // Bu klasları CSS'den finansal renklere (lacivert/gold) çekebilirsin
      icon: process_icon_1,
      title: "Veri Toplama",
      description: "BIST100 ve küresel piyasalardan anlık ham verileri sistemimize dahil ediyoruz.",
   },
   {
      id: 2,
      borderCls: "gblue-border",
      icon: process_icon_2,
      title: "Teknik Analiz",
      description: "Gelişmiş algoritmalar ve uzman görüşüyle verileri anlamlı sinyallere dönüştürüyoruz.",
   },
   {
      id: 3,
      borderCls: "lyellow-border",
      icon: process_icon_3,
      title: "Stratejik Raporlama",
      description: "Risklerinizi yönetmeniz için uygulanabilir ve şeffaf raporlar sunuyoruz.",
   }
];

export default function ProcessOne() {
   return (
      <section className="process-area tp-process-3-bg fix py-120" style={{ backgroundColor: '#ffffff' }}>
         <div className="container">
            <div className="row">
               <div className="col-xxl-6 col-lg-8">
                  <div className="tp-process-3-wrap">
                     <div className="tp-section-2">
                        <h2 className="tp-section-2-title">Profesyonel <br /> Analiz Yaklaşımımız</h2>
                        <p>Piyasayı sadece izlemiyoruz; veriyi işleyerek bilinçli <br /> yatırım kararları almanıza yardımcı oluyoruz.</p>
                     </div>
                     <div className="tp-process-3-btn">
                        <Link href="/contact">Bize Katılın
                           <span>
                              <RightArrowFour />
                           </span>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
            <div className="tp-process-3-wrapper">
               <div className="row">
                  {processData.map((process, index) => (
                     <div className="col-lg-4" key={index}>
                        <div className={`tp-process-3-item tp-process-3-item-${process.id} wow fadeInUp`} data-wow-delay={`.${process.id}s`}>
                           <div className="tp-process-3-icon">
                              <span className={process.borderCls}>
                                 <Image src={process.icon} alt={process.title} width={50} height={50} />
                              </span>
                           </div>
                           <div className="tp-process-3-content">
                              <h4 className="tp-process-3-title">{process.title}</h4>
                              <p>{process.description}</p>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
               {/* Adımları birbirine bağlayan çizgi */}
               <div className="tp-process-3-shape-1 wow fadeInUp" data-wow-delay=".5s">
                  <span>
                     <ProcessLineSvg />
                  </span>
               </div>
            </div>
         </div>

         {/* Bebek ve futbol topu gibi gereksiz şekilleri Aktüel Analiz için kaldırdık */}
         <div className="tp-process-3-shape">
            <div className="tp-process-3-shape-12"></div>
            <div className="tp-process-3-shape-13"></div>
         </div>
      </section>
   )
}
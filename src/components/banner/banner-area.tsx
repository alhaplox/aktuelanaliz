'use client';
import Link from "next/link";
import Image from "next/image"
import shape_line_1 from '@/assets/img/unlerline/banner-2-svg-1.svg';
import shape_line_2 from '@/assets/img/unlerline/banner-2-svg-2.svg';
import thumb_1 from '@/assets/img/banner/banner-2-thumb-1.png';
import thumb_2 from '@/assets/img/banner/banner-2-thumb-2.png';


export default function BannerArea() {
   return (
      <section className="banner-area pb-60">
         <div className="container">
            <div className="row">
               {/* Sol Banner: VIP Sinyal Grubu */}
               <div className="col-lg-6">
                  <div className="tp-banner-sm-2-wrap mb-60 wow fadeInUp" data-wow-delay=".3s">
                     <h3 className="tp-banner-sm-2-title">VIP Analiz <br />
                        <span>Grubuna Katıl
                           <Image className="tp-underline-shape-11 wow bounceIn" data-wow-duration="1.5s" data-wow-delay=".4s" src={shape_line_1} alt="shape-line" />
                        </span>
                     </h3>
                     <div className="tp-banner-sm-2-btn">
                        <Link href="/membership">Paketleri Gör</Link>
                     </div>
                     <div className="tp-banner-sm-2-shape-1">
                        <Image src={thumb_1} alt="thumb" style={{ height: 'auto' }} />
                     </div>
                  </div>
               </div>

               {/* Sağ Banner: Eğitim & Akademi */}
               <div className="col-lg-6">
                  <div className="tp-banner-sm-2-wrap tp-banner-sm-2-bg-2 mb-60 wow fadeInUp" data-wow-delay=".3s">
                     <h3 className="tp-banner-sm-2-title">Borsa & Teknik <br />
                        <span>Eğitimleri
                           <Image className="tp-underline-shape-11 wow bounceIn" data-wow-duration="1.5s" data-wow-delay=".4s" src={shape_line_2} alt="shape-line" />
                        </span>
                     </h3>
                     <div className="tp-banner-sm-2-btn">
                        <Link href="/course-with-filter">Akademiyi İncele</Link>
                     </div>
                     <div className="tp-banner-sm-2-shape-1">
                        <Image src={thumb_2} alt="thumb" style={{ height: 'auto' }} />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}
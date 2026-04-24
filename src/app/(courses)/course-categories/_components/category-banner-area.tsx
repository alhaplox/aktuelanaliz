'use client'; //
import Image from 'next/image';
import shape_1 from '@/assets/img/course/course-categories/shape-1.png';
import shape_2 from '@/assets/img/course/course-categories/shape-2.png';

export default function CategoryBannerArea() {
   return (
      <section className="tp-course-banner-area tp-course-banner-bg p-relative pt-180 pb-100"
         style={{ backgroundImage: "url(/assets/img/course/course-categories/course-categories-bg.png)" }}>

         <div className="tp-course-banner-shape">
            <div className="shape-1">
               <Image src={shape_1} alt="dekoratif-sekil" />
            </div>
            <div className="shape-2">
               <Image src={shape_2} alt="dekoratif-sekil" />
            </div>
         </div>

         <div className="container">
            <div className="row">
               <div className="col-lg-4 d-none d-md-block"></div>
               <div className="col-lg-7 col-12">
                  <div className="tp-course-banner-heading">
                     <h3 className="tp-course-banner-title">Tüm Kategoriler</h3>
                     <p>
                        Finansal okuryazarlığınızı artırın; en güvenilir online eğitimler ve
                        sertifika programlarıyla uzmanlığınızı bir üst seviyeye taşıyın.
                     </p>

                     <div className="tp-course-banner-search">
                        <form action="#" onSubmit={(e) => e.preventDefault()}>
                           <div className="tp-footer-newsletter-wrapper tp-footer-inner-input mb-30">
                              <div className="tp-footer-newsletter-input">
                                 <input type="text" placeholder="Kategori veya eğitim ara..." />
                              </div>
                              <div className="tp-footer-5-newsletter-submit">
                                 <button className="tp-btn-inner">Ara</button>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
               <div className="col-lg-1 d-none d-md-block"></div>
            </div>
         </div>
      </section>
   )
}
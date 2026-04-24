"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from '@/assets/img/logo/logo-black.png';
import { CloseThreeSvg, InstagramSvg, YoutubeTwoSvg } from "@/components/svg";
import OffcanvasMenu from "./offcanvas-menu";
import { createClient } from "@/utils/supabase/client";

// Veri Tipleri
type INavData = {
   id: string | number;
   title: string;
   slug?: string;
   type: 'blog' | 'course';
   thumbnail?: string;
}

type IProps = {
   openOffCanvas: boolean;
   onHandleOffCanvas: () => void;
   offcanvas_cls?: string;
}

export default function OffcanvasArea({ openOffCanvas, onHandleOffCanvas, offcanvas_cls }: IProps) {
   const [latestAnalyses, setLatestAnalyses] = useState<INavData[]>([]);
   const supabase = createClient();

   // Son Analizleri (Blogları) Dinamik Olarak Çek
   useEffect(() => {
      async function fetchMenuData() {
         const { data, error } = await supabase
            .from("blogs")
            .select("id, title, thumbnail_url")
            .order("created_at", { ascending: false })
            .limit(4);

         if (!error && data) {
            const formattedData: INavData[] = data.map(item => ({
               id: item.id, // UUID
               title: item.title,
               thumbnail: item.thumbnail_url,
               type: 'blog'
            }));
            setLatestAnalyses(formattedData);
         }
      }
      fetchMenuData();
   }, []);

   return (
      <>
         <div className={`offcanvas__area ${offcanvas_cls} ${openOffCanvas ? 'offcanvas-opened' : ''}`}>
            <div className="offcanvas__wrapper">
               <div className="offcanvas__close">
                  <button onClick={onHandleOffCanvas} className="offcanvas__close-btn offcanvas-close-btn">
                     <CloseThreeSvg />
                  </button>
               </div>
               <div className="offcanvas__content">
                  <div className="offcanvas__top mb-40 d-flex justify-content-between align-items-center">
                     <div className="offcanvas__logo tp-header-logo">
                        <Link href="/" onClick={onHandleOffCanvas}>
                           <Image src={logo} alt="Aktüel Analiz" style={{ height: 'auto', width: '140px' }} />
                        </Link>
                     </div>
                  </div>

                  <div className="offcanvas-main">
                     <div className="offcanvas-content mb-30">
                        <h3 className="offcanvas-title">Aktüel Analiz</h3>
                        <p>Finansal analizler ve eğitim platformu.</p>
                     </div>

                     {/* MOBİL NAVİGASYON (Navbar verilerinden gelir) */}
                     <div className="tp-main-menu-mobile mb-40">
                        <OffcanvasMenu onHandleOffCanvas={onHandleOffCanvas} />
                     </div>

                     {/* DİNAMİK GALERİ (Son 4 Analiz) */}
                     <div className="offcanvas-gallery mb-40">
                        <h3 className="offcanvas-title sm">Son Analizler</h3>
                        <div className="row gx-2">
                           {latestAnalyses.length > 0 ? (
                              latestAnalyses.map((item) => (
                                 <div className="col-md-3 col-3" key={item.id}>
                                    <div className="offcanvas-gallery-img fix" style={{ borderRadius: '4px' }}>
                                       <Link href={`/blog-details/${item.id}`} onClick={onHandleOffCanvas}>
                                          <Image
                                             src={item.thumbnail || "/assets/img/placeholder.jpg"}
                                             alt={item.title}
                                             width={87}
                                             height={87}
                                             style={{ objectFit: 'cover', height: '87px' }}
                                          />
                                       </Link>
                                    </div>
                                 </div>
                              ))
                           ) : (
                              <p style={{ fontSize: '12px' }}>Yükleniyor...</p>
                           )}
                        </div>
                     </div>

                     <div className="offcanvas-contact">
                        <h3 className="offcanvas-title sm">İletişim</h3>
                        <ul>
                           <li><a href="mailto:destek@aktuelanaliz.com">destek@aktuelanaliz.com</a></li>
                           <li><a href="#">İstanbul, Türkiye</a></li>
                        </ul>
                     </div>

                     <div className="offcanvas-social">
                        <h3 className="offcanvas-title sm">Sosyal Medya</h3>
                        <ul>
                           <li><a href="#"><InstagramSvg /></a></li>
                           <li><a href="#"><YoutubeTwoSvg /></a></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div onClick={onHandleOffCanvas} className={`body-overlay ${openOffCanvas ? 'opened' : ''}`} />
      </>
   )
}
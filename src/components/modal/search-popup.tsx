"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";
import { CloseThreeSvg, SearchSvg, StarThree } from "../svg";

// Hibrit veri tipi
type SearchResult = {
   id: string | number;
   title: string;
   thumbnail: string;
   type: 'blog' | 'course';
   category?: string;
   slug?: string; // Kurslar için slug zorunlu
};

type IProps = {
   isSearchOpen: boolean;
   onHide: () => void;
};

export default function SearchPopup({ isSearchOpen, onHide }: IProps) {
   const [searchTerm, setSearchTerm] = useState("");
   const [results, setResults] = useState<SearchResult[]>([]);
   const [featured, setFeatured] = useState<SearchResult[]>([]);
   const [loading, setLoading] = useState(false);
   const supabase = createClient();

   // İlk açılışta gösterilecek öne çıkan içerikler
   useEffect(() => {
      async function getFeatured() {
         const { data: blogs } = await supabase
            .from("blogs")
            .select("id, title, thumbnail_url, category_name")
            .limit(2);

         const { data: courses } = await supabase
            .from("courses")
            .select("id, title, thumbnail, category, slug")
            .limit(2);

         const combined: SearchResult[] = [
            ...(blogs?.map(b => ({
               id: b.id,
               title: b.title,
               thumbnail: b.thumbnail_url,
               type: 'blog' as const,
               category: b.category_name
            })) || []),
            ...(courses?.map(c => ({
               id: c.id,
               title: c.title,
               thumbnail: c.thumbnail,
               type: 'course' as const,
               category: c.category,
               slug: c.slug
            })) || [])
         ];
         setFeatured(combined);
      }
      getFeatured();
   }, []);

   // Canlı Arama Fonksiyonu
   const handleSearch = async (val: string) => {
      setSearchTerm(val);
      if (val.length < 2) {
         setResults([]);
         return;
      }

      setLoading(true);

      // UUID (Blog) ve Slug (Course) bazlı paralel sorgu
      const [blogRes, courseRes] = await Promise.all([
         supabase.from("blogs")
            .select("id, title, thumbnail_url, category_name")
            .ilike("title", `%${val}%`)
            .limit(4),
         supabase.from("courses")
            .select("id, title, thumbnail, category, slug")
            .ilike("title", `%${val}%`)
            .limit(4)
      ]);

      const combined: SearchResult[] = [
         ...(blogRes.data?.map(b => ({
            id: b.id,
            title: b.title,
            thumbnail: b.thumbnail_url,
            type: 'blog' as const,
            category: b.category_name
         })) || []),
         ...(courseRes.data?.map(c => ({
            id: c.id,
            title: c.title,
            thumbnail: c.thumbnail,
            type: 'course' as const,
            category: c.category,
            slug: c.slug
         })) || [])
      ];

      setResults(combined);
      setLoading(false);
   };

   const displayList = searchTerm.length >= 2 ? results : featured;

   return (
      <>
         <div className={`tp-search-area ${isSearchOpen ? 'opened' : ''}`}>
            <div className="tp-search-inner p-relative">
               <div className="tp-search-close">
                  <button className="tp-search-close-btn" onClick={onHide}>
                     <CloseThreeSvg clr="#57595F" />
                  </button>
               </div>
               <div className="container">
                  <div className="row justify-content-center">
                     <div className="col-lg-10">
                        <div className="tp-search-wrapper">
                           <div className="tp-search-content blue">
                              <div className="search p-relative">
                                 <input
                                    type="text"
                                    className="search-input"
                                    placeholder="Analiz (UUID) veya Eğitim (Slug) Ara..."
                                    value={searchTerm}
                                    onChange={(e) => handleSearch(e.target.value)}
                                 />
                                 <button className="tp-search-icon">
                                    {loading ? (
                                       <div className="spinner-border spinner-border-sm text-primary" role="status"></div>
                                    ) : (
                                       <SearchSvg />
                                    )}
                                 </button>
                              </div>

                              <div className="tp-search-course-wrap">
                                 <h3 className="tp-search-course-title">
                                    {searchTerm.length >= 2 ? `"${searchTerm}" Sonuçları` : "Öne Çıkanlar"}
                                 </h3>

                                 <div className="row">
                                    {displayList.map((item) => {
                                       // Yönlendirme mantığı: Blog ise ID, Kurs ise Slug
                                       const itemLink = item.type === 'blog'
                                          ? `/blog-details/${item.id}`
                                          : `/course-details/${item.slug}`;

                                       return (
                                          <div key={`${item.type}-${item.id}`} className="col-xl-3 col-lg-4 col-sm-6">
                                             <div className="tp-search-course-item mb-30">
                                                <div className="tp-search-course-thumb mb-5">
                                                   <Link href={itemLink} onClick={onHide}>
                                                      <Image
                                                         src={item.thumbnail || "/assets/img/placeholder.jpg"}
                                                         alt={item.title}
                                                         width={186}
                                                         height={104}
                                                         style={{ objectFit: 'cover', borderRadius: '8px', height: '104px' }}
                                                      />
                                                   </Link>
                                                </div>
                                                <div className="tp-search-course-content">
                                                   <span className={`tp-course-badge ${item.type === 'blog' ? 'blog-type' : 'course-type'} mb-1`}>
                                                      {item.type === 'blog' ? 'Analiz' : 'Eğitim'}
                                                   </span>
                                                   <h4 className="tp-search-course-item-title">
                                                      <Link href={itemLink} onClick={onHide}>
                                                         {item.title}
                                                      </Link>
                                                   </h4>
                                                   <p className="mt-5" style={{ fontSize: '12px', color: '#666' }}>
                                                      {item.category}
                                                   </p>
                                                </div>
                                             </div>
                                          </div>
                                       );
                                    })}
                                    {searchTerm.length >= 2 && results.length === 0 && !loading && (
                                       <div className="col-12 text-center mt-20">
                                          <p>Aradığınız kriterlere uygun sonuç bulunamadı.</p>
                                       </div>
                                    )}
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div onClick={onHide} className={`body-overlay ${isSearchOpen ? 'opened' : ''}`}></div>
      </>
   );
}
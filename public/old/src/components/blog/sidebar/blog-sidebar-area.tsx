"use client";
import React, { useEffect, useState } from "react";
import Link from 'next/link';
import { SearchSvgTwo } from '@/components/svg';
import { createClient } from "@/utils/supabase/client";
import { IBlogDT } from "@/types/blog-d-t";

export default function BlogSidebarArea() {
   const [recentBlogs, setRecentBlogs] = useState<IBlogDT[]>([]);
   const supabase = createClient();

   // Son analizleri Supabase'den çekelim
   useEffect(() => {
      async function fetchRecent() {
         const { data } = await supabase
            .from("blogs")
            .select("*")
            .order("created_at", { ascending: false })
            .limit(3);

         if (data) setRecentBlogs(data);
      }
      fetchRecent();
   }, []);

   return (
      <div className="tp-sidebar-wrapper pl-55">
         {/* Arama Alanı */}
         <div className="tp-sidebar-widgets mb-50">
            <div className="tp-sidebar-content">
               <div className="tp-sidebar-search p-relative">
                  <form action="#" onSubmit={(e) => e.preventDefault()}>
                     <input type="text" placeholder="Analiz ara..." />
                     <button className="tp-sidebar-search-btn" type="submit">
                        <span>
                           <SearchSvgTwo />
                        </span>
                     </button>
                  </form>
               </div>
            </div>
         </div>

         {/* Kategoriler */}
         <div className="tp-sidebar-widget mb-50">
            <div className="tp-sidebar-content">
               <h5 className="tp-sidebar-widget-title">Kategoriler</h5>
               <ul>
                  <li><Link href="/blog">Hisse Senetleri <span>(12)</span></Link></li>
                  <li><Link href="/blog">Kripto Para <span>(8)</span></Link></li>
                  <li><Link href="/blog">Piyasa Analizi <span>(15)</span></Link></li>
                  <li><Link href="/blog">Emtia <span> (6) </span></Link></li>
                  <li><Link href="/blog">Eğitim <span>(4)</span></Link></li>
               </ul>
            </div>
         </div>

         {/* Son Analizler (Dinamik) */}
         <div className="tp-sidebar-widget mb-50">
            <h5 className="tp-sidebar-widget-title">Son Analizler</h5>
            {recentBlogs.map((blog, i) => (
               <div key={blog.id} className="tp-recent-post-content mb-20">
                  <span className={`tp-recent-post-span ${i === 1 ? 'gray' : i === 2 ? 'yellow' : ''}`}>
                     {blog.category_name || "Borsa"}
                  </span>
                  <h5 className="tp-recent-post-title">
                     <Link href={`/blog-details/${blog.id}`}>{blog.title}</Link>
                  </h5>
                  <div className="tp-recent-post-tag">
                     <span>{blog.date}</span>
                     <span>• 5 Dakika</span>
                  </div>
               </div>
            ))}
         </div>

         {/* Etiket Bulutu */}
         <div className="tp-sidebar-widget mb-50">
            <div className="tp-sidebar-content">
               <h5 className="tp-sidebar-widget-title">Etiketler</h5>
               <div className="tagcloud">
                  <a href="#">Borsa</a>
                  <a href="#">BIST100</a>
                  <a href="#">Altın</a>
                  <a href="#">Bitcoin</a>
                  <a href="#">FED</a>
                  <a href="#">Dolar</a>
                  <a href="#">Teknik Analiz</a>
                  <a href="#">Hisse</a>
                  <a href="#">Ekonomi</a>
               </div>
            </div>
         </div>
      </div>
   )
}
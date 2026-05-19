'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import ShopItem from "./shop-item";
import shape_svg from '@/assets/img/shop/shop-shape.svg';
import { createClient } from "@/utils/supabase/client";

const nav_tabs = ['Analiz Paketleri', 'Eğitim Setleri', 'Özel Raporlar'];

// Veri tipi tanımı
type ShopItemType = {
   id: string | number;
   title: string;
   price: number;
   thumbnail: string;
   category: string;
   slug?: string;
};

export default function ShopArea() {
   const [activeTab, setActiveTab] = useState('Analiz Paketleri');
   const [items, setItems] = useState<ShopItemType[]>([]);
   const [loading, setLoading] = useState(true);
   const supabase = createClient();

   useEffect(() => {
      async function fetchShopData() {
         setLoading(true);

         // Tab ismine göre farklı tablolardan veya filtrelerden veri çekiyoruz
         if (activeTab === 'Analiz Paketleri') {
            const { data } = await supabase
               .from("memberships") // Eğer üyelik paketleri tablon varsa
               .select("id, title, price, thumbnail_url, category")
               .limit(8);
            setItems(data?.map(d => ({ ...d, thumbnail: d.thumbnail_url })) || []);
         }
         else if (activeTab === 'Eğitim Setleri') {
            const { data } = await supabase
               .from("courses")
               .select("id, title, price, thumbnail, category, slug")
               .limit(8);
            setItems(data || []);
         }
         else {
            // Özel Raporlar vb.
            const { data } = await supabase
               .from("blogs")
               .select("id, title, thumbnail_url, category_name")
               .eq("is_premium", true) // Sadece ücretli analizleri rapor olarak göster
               .limit(8);
            setItems(data?.map(d => ({ ...d, price: 0, thumbnail: d.thumbnail_url, category: d.category_name })) || []);
         }

         setLoading(false);
      }

      fetchShopData();
   }, [activeTab]);

   return (
      <section className="tp-shop-product-area pb-50">
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <div className="tp-shop-product-tab mb-60">
                     <ul className="nav nav-pills mb-3 justify-content-center">
                        {nav_tabs.map((nav, i) => (
                           <li key={i} className="nav-item">
                              <button
                                 onClick={() => setActiveTab(nav)}
                                 className={`nav-link ${activeTab === nav ? 'active' : ''}`}
                              >
                                 {nav}
                                 <span><Image src={shape_svg} alt="shape-svg" /></span>
                              </button>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>

            <div className="tab-content">
               {loading ? (
                  <div className="text-center py-5">
                     <div className="spinner-border text-primary" role="status"></div>
                  </div>
               ) : (
                  <div className="row">
                     {items.length > 0 ? items.map((item) => (
                        <div key={item.id} className="col-lg-3 col-sm-6">
                           {/* ShopItem içindeki link mantığının slug/uuid uyumlu olduğundan emin olmalısın */}
                           <ShopItem item={item} />
                        </div>
                     )) : (
                        <div className="col-12 text-center">
                           <p>Bu kategoride henüz bir içerik bulunmuyor.</p>
                        </div>
                     )}
                  </div>
               )}
            </div>
         </div>
      </section>
   )
}
"use client";
import React, { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { IBlogDT } from "@/types/blog-d-t";
import BlogStoriesItem from "../single/blog-stories-item";

// Prop tiplerini page.tsx'ten gelecek verilere göre güncelledik
type IProps = {
  categoryId?: number | string;
  currentBlogId?: number | string;
};

export default function BlogDetailsRelatedBlogs({ categoryId, currentBlogId }: IProps) {
  const [relatedBlogs, setRelatedBlogs] = useState<IBlogDT[]>([]);
  const [loading, setLoading] = useState(true);

  // Client-side Supabase istemcisi
  const supabase = createClient();

  useEffect(() => {
    async function fetchRelatedBlogs() {
      // Eğer bir blog ID'si yoksa sorgu çalıştırma
      if (!currentBlogId) {
        setLoading(false);
        return;
      }

      setLoading(true);

      // Temel sorgu: Mevcut blogu hariç tut ve 3 tane getir
      let query = supabase
        .from("blogs")
        .select("*")
        .neq("id", currentBlogId)
        .limit(3);

      // Eğer kategori ID'si gelmişse, sadece o kategoriye ait olanları getir
      if (categoryId) {
        query = query.eq("category_id", categoryId);
      }

      const { data, error } = await query;

      if (error) {
        console.error("İlgili analizler çekilirken hata oluştu:", error.message);
      } else if (data) {
        setRelatedBlogs(data);
      }

      setLoading(false);
    }

    fetchRelatedBlogs();
  }, [categoryId, currentBlogId]); // Bu değerler değiştiğinde sorguyu yenile

  // Yükleniyor durumunda boş dönebilir veya istersen bir spinner ekleyebilirsin
  if (loading) return null;

  // Eğer hiç ilgili blog bulunamadıysa bölümü tamamen gizle
  if (relatedBlogs.length === 0) return null;

  return (
    <section className="tp-postbox-details-bottom p-relative pt-90 pb-60">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="tp-postbox-details-bottom-title">
              İlginizi Çekebilecek Diğer Analizler
            </h3>
          </div>
          {relatedBlogs.map((blog) => (
            <div key={blog.id} className="col-lg-4 col-md-6">
              {/* BlogStoriesItem'ın blog prop'unu IBlogDT tipinde beklediğinden emin ol */}
              <BlogStoriesItem blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
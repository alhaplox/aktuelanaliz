"use client";
import React, { useEffect, useState } from "react";
import { DotsSvg, NextArrowTwo, PrevArrowTwo } from "@/components/svg";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";

export default function BlogDetailsNavigation({ currentId }: { currentId: string }) {
  const [prevBlog, setPrevBlog] = useState<{ id: string; title: string } | null>(null);
  const [nextBlog, setNextBlog] = useState<{ id: string; title: string } | null>(null);
  const supabase = createClient();
  interface IProps {
    currentId: string | number; // Sadece string olan yeri string | number yap
  }
  useEffect(() => {
    async function getNavigation() {
      // 1. Tüm listeyi çekiyoruz (Sıralamayı JS tarafında yapacağız)
      const { data: allBlogs, error } = await supabase
        .from("blogs")
        .select("id, title, created_at");

      if (error || !allBlogs) {
        console.error("Navigasyon hatası:", error);
        return;
      }

      // 2. Metin olan tarihleri gerçek tarihe çevirip kronolojik sıralıyoruz
      // Eğer created_at "23.04.2026" gibi bir formatta ise Date.parse bazen şaşırabilir.
      // Bu yüzden güvenli bir sort yapıyoruz.
      const sortedBlogs = allBlogs.sort((a, b) => {
        return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
      });

      // 3. Mevcut blogun index'ini bul (UUID'lerde bazen boşluk kalabilir, trim ekledik)
      const currentIndex = sortedBlogs.findIndex(b => b.id.trim() === currentId.trim());

      console.log("Mevcut Index:", currentIndex, "Toplam Blog:", sortedBlogs.length);

      if (currentIndex !== -1) {
        // Bir önceki
        if (currentIndex > 0) {
          setPrevBlog(sortedBlogs[currentIndex - 1]);
        } else {
          setPrevBlog(null);
        }

        // Bir sonraki
        if (currentIndex < sortedBlogs.length - 1) {
          setNextBlog(sortedBlogs[currentIndex + 1]);
        } else {
          setNextBlog(null);
        }
      }
    }

    if (currentId) getNavigation();
  }, [currentId]);

  // Sadece veri varsa render edelim ki boşluk kalmasın
  if (!prevBlog && !nextBlog) return null;

  return (
    <div className="tp-postbox-details-navigation mb-60">
      <div className="row align-items-center">
        <div className="col-xl-5 col-lg-5 col-md-5 col-12">
          {prevBlog && (
            <div className="tp-postbox-details-navigation-content text-start">
              <Link className="tp-postbox-details-navigation-btn" href={`/blog-details/${prevBlog.id}`}>
                <span><PrevArrowTwo /></span> ÖNCEKİ ANALİZ
              </Link>
              <h4 className="tp-postbox-details-navigation-title">
                <Link href={`/blog-details/${prevBlog.id}`}>{prevBlog.title}</Link>
              </h4>
            </div>
          )}
        </div>

        <div className="col-xl-2 col-lg-2 col-md-2 col-12 text-center">
          <Link href="/blog-list">
            <span><DotsSvg /></span>
          </Link>
        </div>

        <div className="col-xl-5 col-lg-5 col-md-5 col-12">
          {nextBlog && (
            <div className="tp-postbox-details-navigation-content next text-end">
              <Link className="tp-postbox-details-navigation-btn" href={`/blog-details/${nextBlog.id}`}>
                SIRADAKİ ANALİZ <span><NextArrowTwo /></span>
              </Link>
              <h4 className="tp-postbox-details-navigation-title">
                <Link href={`/blog-details/${nextBlog.id}`}>{nextBlog.title}</Link>
              </h4>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
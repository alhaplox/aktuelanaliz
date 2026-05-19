'use client';
import React, { useEffect, useState } from "react";
import usePagination from "@/hooks/use-pagination";
import BlogSidebarArea from "./sidebar/blog-sidebar-area";
import Pagination from "../ui/pagination";
import { BlogQuoteItemOne, BlogQuoteItemTwo } from "./single/blog-quote-item";
import BlogStandardItem from "./single/blog-standard-item";
import { createClient } from "@/utils/supabase/client";
import { IBlogDT } from "@/types/blog-d-t";

export default function BlogStandardArea() {
  const [blogs, setBlogs] = useState<IBlogDT[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  // Supabase'den güncel analizleri çekelim
  useEffect(() => {
    async function fetchStandardBlogs() {
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .eq('is_published', true) // Sadece yayındaki analizler
        .order("created_at", { ascending: false });

      if (!error && data) {
        setBlogs(data);
      }
      setLoading(false);
    }
    fetchStandardBlogs();
  }, []);

  // Sayfalama (Her sayfada 5 analiz)
  const { currentItems, handlePageClick, pageCount } = usePagination(
    blogs,
    5
  );

  if (loading) {
    return (
      <div className="container pt-100 pb-100 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Analizler Yükleniyor...</span>
        </div>
      </div>
    );
  }

  return (
    <section className="tp-blog-standard-area p-relative pt-100 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="tp-postbox-wrapper">
              {currentItems.length > 0 ? (
                currentItems.map((blog) =>
                  blog.postboxQuote1 ? (
                    <BlogQuoteItemOne key={blog.id} blog={blog} />
                  ) : blog.postboxQuote2 ? (
                    <BlogQuoteItemTwo key={blog.id} blog={blog} />
                  ) : (
                    <BlogStandardItem key={blog.id} blog={blog} />
                  )
                )
              ) : (
                <div className="text-center py-5">
                  <h4>Henüz bir analiz paylaşılmadı.</h4>
                  <p>Aktüel Analiz bültenini takipte kalın.</p>
                </div>
              )}
            </div>

            {/* Sayfalama Kontrolleri */}
            {blogs.length > 5 && (
              <div className="tp-event-inner-pagination tp-postbox-item-pagination">
                <div className="tp-dashboard-pagination">
                  <div className="tp-pagination">
                    <Pagination
                      handlePageClick={handlePageClick}
                      pageCount={pageCount}
                      isCenter={true}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="col-lg-4">
            <BlogSidebarArea />
          </div>
        </div>
      </div>
    </section>
  );
}
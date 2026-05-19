import { ShapeLineTwo } from "../svg";
import BlogItem from "./single/blog-item";
// Statik veri yerine Supabase entegrasyonu için hazırlık
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import { IBlogDT } from "@/types/blog-d-t";

export default function BlogOne() {
  const [blogs, setBlogs] = useState<IBlogDT[]>([]);
  const supabase = createClient();

  useEffect(() => {
    async function getLatestBlogs() {
      const { data } = await supabase
        .from("blogs")
        .select("*")
        .eq('is_published', true)
        .order("created_at", { ascending: false })
        .limit(4); // Ana sayfada en güncel 4 analizi gösterelim

      if (data) setBlogs(data);
    }
    getLatestBlogs();
  }, []);

  return (
    <section className="blog-area grey-bg pt-110 pb-95">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div
              className="tp-event-section text-center mb-60 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="tp-section">
                <h5 className="tp-section-subtitle">PİYASA GÜNCELLEMELERİ</h5>
                <h3 className="tp-section-2-title">
                  Son Analizler &
                  <span>
                    Haberler.
                    <ShapeLineTwo />
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {blogs.length > 0 ? (
            blogs.map((blog) => (
              <div key={blog.id} className="col-lg-6">
                <BlogItem blog={blog} />
              </div>
            ))
          ) : (
            <div className="col-12 text-center">
              <p>Güncel analizler yükleniyor...</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
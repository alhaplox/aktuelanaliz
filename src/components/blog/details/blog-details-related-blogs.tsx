"use client";
import React, { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { IBlogDT } from "@/types/blog-d-t";
import BlogStoriesItem from "../single/blog-stories-item";

type IProps = {
  categoryName?: string;
  currentBlogId?: number;
};

export default function BlogDetailsRelatedBlogs({ categoryName, currentBlogId }: IProps) {
  const [relatedBlogs, setRelatedBlogs] = useState<IBlogDT[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    async function fetchRelatedBlogs() {
      setLoading(true);

      let query = supabase
        .from("blogs")
        .select("*")
        .neq("id", currentBlogId) // Mevcut okunan blogu listede gösterme
        .limit(3);

      // Eğer kategori ismi gelmişse, aynı kategorideki diğer yazıları getir
      if (categoryName) {
        query = query.eq("category_name", categoryName);
      }

      const { data, error } = await query;

      if (!error && data) {
        setRelatedBlogs(data);
      }
      setLoading(false);
    }

    if (currentBlogId) {
      fetchRelatedBlogs();
    }
  }, [categoryName, currentBlogId]);

  if (loading) return null; // Veya bir skeleton loader eklenebilir
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
              <BlogStoriesItem blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
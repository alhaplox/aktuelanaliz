import { Metadata } from "next";
import { notFound } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import DetailsBreadcrumb from "../_components/details-breadcrumb";
import BlogDetailsArea from "../_components/blog-details-area";
import BlogDetailsRelatedBlogs from "@/components/blog/details/blog-details-related-blogs";
import { PageParamsProps } from "@/types/custom-d-t";

// SEO Meta Verileri
export async function generateMetadata(props: PageParamsProps): Promise<Metadata> {
  const resolvedParams = await props.params;
  const { id } = resolvedParams;

  // BURADA DÜZELTME: await eklendi
  const supabase = await createClient();
  const { data: blog } = await supabase
    .from("blogs")
    .select("title, description")
    .eq("id", id)
    .single();

  return {
    title: blog ? `${blog.title} - Aktüel Analiz` : "Analiz Bulunamadı",
    description: blog?.description || "Aktuel Analiz güncel piyasa analizleri.",
  };
}

export default async function BlogDetailsPage(props: PageParamsProps) {
  const resolvedParams = await props.params;
  const { id } = resolvedParams;

  // BURADA DÜZELTME: await eklendi
  const supabase = await createClient();

  const { data: blog, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !blog) {
    return notFound(); // notFound() kullanmak Next.js standartları için daha iyidir
  }

  return (
    <main>
      <DetailsBreadcrumb title={blog.title} />

      <BlogDetailsArea blog={blog} />

      {/* categoryId yerine category_name gönderiyoruz (Supabase tablonla uyum için) */}
      <BlogDetailsRelatedBlogs
        categoryId={blog.category_id}
        currentBlogId={blog.id}
      />
    </main>
  );
}
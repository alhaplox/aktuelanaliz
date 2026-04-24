import { Metadata } from "next";
import { notFound } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import BlogDetailsRelatedBlogs from "@/components/blog/details/blog-details-related-blogs";
import DetailsBreadcrumb from "../_components/details-breadcrumb";
import FullWidthImg from "../_components/full-width-img";
import BlogDetailsArea from "../_components/blog-details-area";
import { PageParamsProps } from "@/types/custom-d-t";

// SEO ve Sosyal Medya Kartları İçin Dinamik Metadata
export async function generateMetadata(props: PageParamsProps): Promise<Metadata> {
  const resolvedParams = await props.params;
  const { id } = resolvedParams;

  const supabase = await createClient();
  const { data: blog } = await supabase
    .from("blogs")
    .select("title, description")
    .eq("id", id)
    .single();

  return {
    title: blog ? `${blog.title} | Aktüel Analiz Analiz` : "Analiz Bulunamadı",
    description: blog?.description || "Aktüel Analiz derinlemesine piyasa incelemesi.",
  };
}
interface IProps {
  categoryId: number | string; // Buraya hangi tipi bekliyorsa onu ekle
}
export default async function BlogDetailsFullWidthPage(props: PageParamsProps) {
  const resolvedParams = await props.params;
  const { id } = resolvedParams;

  const supabase = await createClient();

  // Veritabanından blog verisini çekiyoruz
  const { data: blog, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("id", id)
    .single();

  // Hata durumunda veya kayıt bulunamadığında 404 sayfasına yönlendir
  if (error || !blog) {
    return (
      <div className="container text-center mt-100 mb-100">
        <h3>Analiz kaydı sistemde bulunamadı.</h3>
        <p>Lütfen bağlantıyı kontrol edin veya blog listesine geri dönün.</p>
      </div>
    );
  }

  return (
    <main>
      {/* Hero Alanı: Başlık, Yazar ve Tarih Bilgilerini İçeren 
          Tam Genişlikli Breadcrumb 
      */}
      <DetailsBreadcrumb blog={blog} />

      {/* Vurgu Görseli: Analizin ana temasını belirleyen 
          büyük grafik veya görsel alanı 
      */}
      <FullWidthImg imgSrc={blog.thumbnail_url} />

      {/* Ana İçerik: HTML Formatındaki makale ve detaylar 
      */}
      <BlogDetailsArea blog={blog} />

      {/* İlgili Analizler: Aynı kategorideki diğer önemli başlıklar 
      */}
      <BlogDetailsRelatedBlogs categoryId={blog.category_id} />
    </main>
  );
}
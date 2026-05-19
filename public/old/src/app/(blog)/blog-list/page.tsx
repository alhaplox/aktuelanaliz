import { Metadata } from "next";
import BlogListArea from "@/components/blog/blog-list-area";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";

export const metadata: Metadata = {
  title: "Güncel Piyasa Analizleri | Aktüel Analiz",
  description: "Borsa İstanbul, Kripto Para ve Küresel Piyasalar üzerine en son teknik analizler ve finansal haberler.",
};

export default function BlogListPage() {
  return (
    <main>
      {/* Breadcrumb Alanı: Kullanıcıyı karşılayan ana başlık */}
      <BreadcrumbOne
        subtitle="Piyasa Bülteni"
        title="Güncel Analizler"
      />

      {/* Blog Listesi: Kartların ve yan menünün (sidebar) olduğu ana alan */}
      <BlogListArea />
    </main>
  )
}
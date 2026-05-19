import { Metadata } from "next";
import CategoryBannerArea from "./_components/category-banner-area";
import CategoryArea from "./_components/category-area";
import BannerArea from "@/components/banner/banner-area";

export const metadata: Metadata = {
    title: "Eğitim Kategorileri - Aktuel Analiz",
    description: "Finans, borsa ve yatırım alanındaki tüm uzmanlık kategorilerimizi inceleyin.",
}

export default function CourseCategoriesPage() {
    return (
        <main>
            {/* Kategori Sayfası Üst Bilgi Alanı (Breadcrumb: Anasayfa > Kategoriler) */}
            <CategoryBannerArea />

            {/* Tüm Kategorilerin Kartlar Halinde Listelendiği Alan */}
            <CategoryArea />

            {/* Alt Banner (Hemen Başla / İletişim CTA) */}
            <BannerArea />
        </main>
    )
}
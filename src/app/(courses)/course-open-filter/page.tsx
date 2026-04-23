import { Metadata } from "next";
import CourseFilterProvider from "@/components/provider/course-filter-provider";
import BannerArea from "@/components/banner/banner-area";
import OpenFilterBannerArea from "./_components/open-filter-banner-area";
import CourseOpenFilterArea from "./_components/course-open-filter-area";
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export const metadata: Metadata = {
    title: "Gelişmiş Eğitim Arama - Aktuel Analiz",
    description: "Detaylı filtreleme seçenekleri ile size en uygun borsa ve finans eğitimini bulun.",
}

export default async function CourseOpenFilterPage() {
    // 1. Supabase Client Kurulumu (Sunucu Tarafı)
    const cookieStore = await cookies();
    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        { cookies: { getAll: () => cookieStore.getAll() } }
    );

    // 2. Canlı Kurs Verilerini Çekiyoruz
    const { data: courses } = await supabase
        .from('courses')
        .select('*')
        .order('created_at', { ascending: false });

    return (
        <CourseFilterProvider initialCourses={courses || []}>

            {/* Kurs Üst Alanı (Geniş Filtreleme Başlığı) */}
            <OpenFilterBannerArea />

            {/* Sol Tarafta Daima Açık Olan Filtre Paneli ve Kurs Listesi */}
            <CourseOpenFilterArea />

            {/* Alt Bilgi ve Yönlendirme Alanı */}
            <BannerArea />

        </CourseFilterProvider>
    )
}
import { Metadata } from "next";
import CourseFilterProvider from "@/components/provider/course-filter-provider";
import BannerArea from "@/components/banner/banner-area";
import CourseBannerArea from "./_components/course-banner-area";
import TabCoursesArea from "./_components/tab-courses-area";
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export const metadata: Metadata = {
    title: "Eğitim Katalogu - Aktuel Analiz",
    description: "Tüm finans ve yatırım eğitimlerimize göz atın."
}

export default async function CourseWithTabPage() {
    // 1. Supabase Client Kurulumu (Server-side)
    const cookieStore = await cookies();
    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        { cookies: { getAll: () => cookieStore.getAll() } }
    );

    // 2. Veritabanından kursları çekiyoruz
    // created_at'e göre sıralayarak en yenilerin başta çıkmasını sağlıyoruz
    const { data: courses } = await supabase
        .from('courses')
        .select('*')
        .order('created_at', { ascending: false });

    return (
        <CourseFilterProvider initialCourses={courses || []}>

            {/* Kurs Banner Alanı (Breadcrumb: Anasayfa > Kurslar) */}
            <CourseBannerArea />

            {/* Kurs Filtreleme ve Tab Alanı (Varsayılan Grid Görünümü) */}
            <TabCoursesArea />

            {/* Alt Banner (Harekete Geçirici Mesaj) */}
            <BannerArea />

        </CourseFilterProvider>
    )
}
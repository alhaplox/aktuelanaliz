import { Metadata } from "next";
import CourseFilterProvider from "@/components/provider/course-filter-provider";
import BannerArea from "@/components/banner/banner-area";
import CourseBannerArea from "../course-with-tab/_components/course-banner-area";
import TabCoursesArea from "../course-with-tab/_components/tab-courses-area";
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export const metadata: Metadata = {
    title: "Eğitim Listesi - Aktuel Analiz",
    description: "Finans ve borsa eğitimlerimizi listeleyin."
}

export default async function CourseWithTabListPage() {
    // 1. Supabase Client Kurulumu
    const cookieStore = await cookies();
    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        { cookies: { getAll: () => cookieStore.getAll() } }
    );

    // 2. Veritabanından Tüm Kursları Çek
    const { data: courses } = await supabase
        .from('courses')
        .select('*')
        .order('created_at', { ascending: false });

    return (
        <CourseFilterProvider initialCourses={courses || []}>

            {/* Kurs Banner Alanı - Başlıkları içerir */}
            <CourseBannerArea listActive={true} />

            {/* Filtreleme ve Tab Alanı - Liste görünümü aktif */}
            <TabCoursesArea listActive={true} />

            {/* Alt Banner (CTA) Alanı */}
            <BannerArea />

        </CourseFilterProvider>
    )
}
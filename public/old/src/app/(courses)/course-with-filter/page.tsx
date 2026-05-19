import { Metadata } from "next";
import CourseFilterBanner from "./_components/course-filter-banner";
import CourseFilterProvider from "@/components/provider/course-filter-provider";
import CourseFilterArea from "./_components/course-filter-area";
import BannerArea from "@/components/banner/banner-area";
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export const metadata: Metadata = {
    title: "Eğitim Filtreleme - Aktuel Analiz",
    description: "Kategorilere ve uzmanlık seviyelerine göre eğitimlerimizi filtreleyin.",
}

export default async function CourseWithFilterPage() {
    // 1. Supabase Client (Server-side)
    const cookieStore = await cookies();
    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        { cookies: { getAll: () => cookieStore.getAll() } }
    );

    // 2. Veritabanından tüm kursları çekiyoruz
    const { data: courses } = await supabase
        .from('courses')
        .select('*')
        .order('created_at', { ascending: false });

    return (
        <CourseFilterProvider initialCourses={courses || []}>

            {/* Kurs Filtreleme Üst Alanı (Breadcrumb) */}
            <CourseFilterBanner />

            {/* Sol Sidebar Filtreleri ve Kurs Listesi */}
            <CourseFilterArea />

            {/* Alt Banner (CTA) */}
            <BannerArea />

        </CourseFilterProvider>
    )
}
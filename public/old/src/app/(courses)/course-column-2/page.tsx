import { Metadata } from "next";
import CourseFilterProvider from "@/components/provider/course-filter-provider";
import BannerArea from "@/components/banner/banner-area";
import CourseFilterBanner from "../course-with-filter/_components/course-filter-banner";
import CourseOpenFilterArea from "../course-open-filter/_components/course-open-filter-area";
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export const metadata: Metadata = {
    title: "Eğitim Listesi (2 Sütun) - Aktuel Analiz",
    description: "Detaylı görünümle eğitim içeriklerimize göz atın.",
}

export default async function CourseColumn2Page() {
    // 1. Supabase Client Kurulumu (Server-side)
    const cookieStore = await cookies();
    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        { cookies: { getAll: () => cookieStore.getAll() } }
    );

    // 2. Veritabanından kursları çekiyoruz
    const { data: courses } = await supabase
        .from('courses')
        .select('*')
        .order('created_at', { ascending: false });

    return (
        <CourseFilterProvider initialCourses={courses || []}>

            {/* Kurs Banner Alanı - Boşluk ayarı korundu */}
            <CourseFilterBanner spacing="tp-course-filter-space" />

            {/* 2 Sütunlu Kurs Listeleme ve Filtreleme Alanı */}
            <CourseOpenFilterArea />

            {/* Alt Banner (CTA) */}
            <BannerArea />

        </CourseFilterProvider>
    )
}
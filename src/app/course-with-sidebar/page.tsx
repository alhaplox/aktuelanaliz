import { Metadata } from "next";
import CourseFilterProvider from "@/components/provider/course-filter-provider";
import BannerArea from "@/components/banner/banner-area";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import FilterSidebarTopArea from "./_components/filter-sidebar-top-area";
import GridSidebarCourseArea from "./_components/grid-sidebar-course-area";
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export const metadata: Metadata = {
    title: "Eğitim Katalogu - Aktuel Analiz",
    description: "Yan menü filtreleri ile size en uygun finans eğitimini bulun.",
}

export default async function CourseWithSidebarPage() {
    // 1. Supabase Client Kurulumu (Server-side)
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

            {/* Sayfa Üstü Navigasyon (Breadcrumb) */}
            <BreadcrumbOne subtitle="Eğitim Listesi" title="Eğitim Listesi" />

            {/* Üst Filtre ve Sıralama Alanı */}
            <FilterSidebarTopArea />

            {/* Yan Menülü Kurs Izgarası */}
            <GridSidebarCourseArea />

            {/* Alt Bilgi Bannerı */}
            <BannerArea />

        </CourseFilterProvider>
    )
}
import { cookies } from "next/headers"; // <-- Eksik olan buydu
import { createServerClient } from "@supabase/ssr";
import CourseDetailsBreadcrumb from "../_components/course-details-breadcrumb";
import RelatedCourses from "@/components/course/details/related-courses";
import CourseDetailsArea from "../_components/course-details-area";
import { removeTagInText } from "@/utils";

async function getCourse(slug: string) {
    const cookieStore = await cookies();
    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll() {
                    return cookieStore.getAll();
                },
            },
        }
    );

    const { data } = await supabase
        .from('courses')
        .select('*')
        .eq('slug', slug)
        .single();

    return data;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const course = await getCourse(slug);

    return {
        title: course?.title ? `${removeTagInText(course.title)} - Aktüel Analiz` : "Kurs Detayları - Aktüel Analiz",
    };
}

export default async function CourseDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const course = await getCourse(slug);

    if (!course) {
        return (
            <div className="text-center mt-100 mb-80">
                <h3>Üzgünüz, böyle bir kurs bulunamadı.</h3>
            </div>
        );
    }

    return (
        <main>
            <CourseDetailsBreadcrumb course={course} />
            <CourseDetailsArea course={course} />
            <RelatedCourses category={course.category} />
        </main>
    );
}
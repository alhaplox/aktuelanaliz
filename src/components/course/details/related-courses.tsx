import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import CourseItem from "../single/course-item";

// Prop olarak mevcut kursun kategorisini ve ID'sini alıyoruz 
// (Aynı kursun listede tekrar çıkmaması için ID gerekiyor)
export default async function RelatedCourses({ category, currentCourseId }: { category?: string, currentCourseId?: string }) {
    const cookieStore = await cookies();
    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        { cookies: { getAll: () => cookieStore.getAll() } }
    );

    // Aynı kategorideki ilk 3 kursu çekiyoruz
    const { data: related_courses } = await supabase
        .from('courses')
        .select('*')
        .eq('category', category)
        .neq('id', currentCourseId) // Mevcut kursu listeden hariç tut
        .limit(3);

    // Eğer ilgili kurs bulunamazsa rastgele 3 kurs gösterelim
    let displayCourses = related_courses;
    if (!related_courses || related_courses.length === 0) {
        const { data: randomCourses } = await supabase
            .from('courses')
            .select('*')
            .limit(3);
        displayCourses = randomCourses;
    }

    return (
        <section className="tp-course-details-2-related-area pb-80">
            <div className="container">
                <div className="tp-course-details-2-related-border"></div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tp-course-details-2-related-heading pt-80">
                            <h3 className="tp-course-details-2-related-title">İlginizi Çekebilecek Diğer Eğitimler</h3>
                            <p>Yatırım dünyasında kendinizi geliştirmeye devam edin</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {displayCourses?.map((item) => (
                        <div key={item.id} className="col-lg-4 col-md-6">
                            {/* course-item içinde Link yapısının kurs.slug kullandığından emin olmalısın */}
                            <CourseItem course={item} removeTag={true} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
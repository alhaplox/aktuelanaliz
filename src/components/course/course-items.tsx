import CourseItem from "./single/course-item";
import { getAllCourses } from "@/lib/supabaseRequests";

export default async function CourseItems() {
  // Veriyi doğrudan Supabase'den çekiyoruz
  const courses = await getAllCourses();

  if (!courses || courses.length === 0) {
    return (
      <div className="col-12 text-center mt-50 mb-50">
        <div className="tp-error-content">
          <p>Şu anda görüntülenecek aktif bir analiz veya eğitim bulunmuyor.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {courses.map((item) => (
        <div key={item.id} className="col-lg-4 col-md-6 d-flex align-items-stretch">
          {/* align-items-stretch: Kart içerikleri farklı uzunlukta olsa bile kutu boylarını eşitler */}
          <CourseItem course={item} />
        </div>
      ))}
    </>
  );
}
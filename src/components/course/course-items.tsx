"use client";

import useCourse from "@/hooks/use-course";
import CourseItem from "./single/course-item";

export default function CourseItems() {
  const { filterCourse } = useCourse();

  // Eğer filtreleme sonucunda kurs bulunamazsa kullanıcıya bilgi verelim
  if (filterCourse.length === 0) {
    return (
      <div className="col-12 text-center mt-50 mb-50">
        <p>Seçili kategoride henüz bir eğitim bulunmuyor.</p>
      </div>
    );
  }

  return (
    <>
      {filterCourse.map((item) => (
        <div key={item.id} className="col-lg-4 col-md-6 d-flex">
          {/* d-flex ekleyerek kartların aynı satırda eşit boyda durmasını sağladık */}
          <CourseItem course={item} />
        </div>
      ))}
    </>
  );
}
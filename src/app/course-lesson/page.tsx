import { Metadata } from "next";
import CourseLessonArea from "./_components/course-lesson-area";

export const metadata: Metadata = {
    title: "Eğitim Paneli - Aktuel Analiz",
    description: "Eğitim videolarınızı izleyin ve ders materyallerine erişin.",
};

export default function CourseLessonPage() {
    return (
        <main className="tp-dashboard-body-bg">
            {/* Ders listesi, video oynatıcı ve ders notlarının 
                bulunduğu ana bileşen.
            */}
            <CourseLessonArea />
        </main>
    );
}
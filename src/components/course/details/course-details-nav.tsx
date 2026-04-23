'use client';
import useScrollSpy from "@/hooks/use-scroll-spy";

export default function CourseDetailsNav() {
    // ID referansları (Kod tarafı - Değişmemeli)
    const sections = ["info", "curriculum", "instructors", "reviews"];
    const activeSection = useScrollSpy(sections);

    return (
        <nav>
            <ul id="course_details2_nav">
                <li className={activeSection === "info" ? "current" : ""}>
                    <a href="#info">Genel Bilgi</a>
                </li>
                <li className={activeSection === "curriculum" ? "current" : ""}>
                    <a href="#curriculum">Müfredat</a>
                </li>
                <li className={activeSection === "instructors" ? "current" : ""}>
                    <a href="#instructors">Eğitmenler</a>
                </li>
                <li className={activeSection === "reviews" ? "current" : ""}>
                    <a href="#reviews">Değerlendirmeler</a>
                </li>
            </ul>
        </nav>
    )
}
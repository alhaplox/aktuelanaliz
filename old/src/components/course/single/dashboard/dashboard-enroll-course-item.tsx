import Image from "next/image";
import { ICourseDT } from "@/types/course-d-t";
import { LessonsSvg, UserSvgTwo } from "@/components/svg";
import { removeTagInText } from "@/utils";
import Link from "next/link";

type IProps = {
  course: ICourseDT;
};

export default function DashboardEnrollCourseItem({ course }: IProps) {
  const { id, thumbnail, title, total_rating, lessons, students, progress } = course;
  const progressValue = progress ?? 0;

  // Tamamlanan ders sayısını hesapla
  const completedLessons = Math.round((progressValue / 100) * lessons);

  return (
    <div className="tp-dashboard-course mb-25">
      <div className="tp-dashboard-course-thumb">
        <Link href={`/course-details/${id}`}>
          <Image
            src={thumbnail}
            alt="kurs-kapak"
            width={262}
            height={160}
            style={{ objectFit: 'cover', borderRadius: '8px' }}
          />
        </Link>
      </div>
      <div className="tp-dashboard-course-content">
        <div className="tp-dashboard-rating">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <span>({total_rating} Değerlendirme)</span>
        </div>

        <h4 className="tp-dashboard-course-title">
          <Link href={`/course-details/${id}`}>{removeTagInText(title)}</Link>
        </h4>

        <div className="tp-dashboard-course-meta">
          <span>
            <span><LessonsSvg /></span>
            {" "}{lessons} Ders
          </span>
          <span>
            <span><UserSvgTwo /></span>
            {" "}{students} Öğrenci
          </span>
        </div>

        {/* İlerleme Çubuğu Alanı */}
        <div className="tp-dashboard-progress">
          <div className="tp-dashboard-progress-info d-flex align-items-center justify-content-between">
            <span>{completedLessons} / {lessons} Ders Bitti</span>
            <span>%{progressValue} Tamamlandı</span>
          </div>
          <div className="progress" role="progressbar" aria-label="Eğitim İlerlemesi" aria-valuenow={progressValue} aria-valuemin={0} aria-valuemax={100}>
            <div className="progress-bar" style={{ width: `${progressValue}%` }}></div>
          </div>
        </div>

        {/* Sertifika Butonu - Sadece %100 olunca aktif olması mantıklı olabilir */}
        <div className="tp-dashboard-course-btn">
          <Link
            className={`tpd-btn-border w-100 ${progressValue < 100 ? 'disabled-btn' : ''}`}
            href={progressValue === 100 ? "/dashboard/instructor-certificate" : "#"}
          >
            {progressValue === 100 ? "Sertifikayı İndir" : "Devam Et"}
          </Link>
        </div>
      </div>
    </div>
  );
}
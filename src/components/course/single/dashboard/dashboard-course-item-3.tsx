import Image from "next/image";
import { ICourseDT } from "@/types/course-d-t";
import { removeTagInText } from "@/utils";
import CoursePrice from "../../course-price";
import { LessonsSvg, PenSvg, UserSvgTwo } from "@/components/svg";
import Link from "next/link";
import CourseDashboardItemAction from "./course-d-item-action";

type IProps = {
    course: ICourseDT;
};

export default function DashboardCourseItemThree({ course }: IProps) {
    const { id, title, old_price, thumbnail, total_rating, lessons, students, price } = course || {};

    return (
        <div className="tp-dashboard-course tp-dashboard-course-2 mb-25">
            {/* Kurs Görseli */}
            <div className="tp-dashboard-course-thumb">
                <Link href={`/course-details/${id}`}>
                    <Image
                        src={thumbnail}
                        alt={removeTagInText(title)}
                        width={262}
                        height={160}
                        style={{ objectFit: 'cover', borderRadius: '8px' }}
                    />
                </Link>
            </div>

            {/* Kurs Bilgileri */}
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

                {/* Fiyat ve Yönetim Araçları */}
                <div className="tp-dashboard-btn d-flex align-items-center justify-content-between">
                    <div className="tp-course-pricing text-start">
                        <CoursePrice price={price} oldPrice={old_price} />
                    </div>

                    <div className="tp-course-action d-flex align-items-center">
                        {/* Düzenle Butonu */}
                        <div className="tpd-action-inexact-btn mr-5">
                            <Link href={`/dashboard/edit-course/${id}`} title="Eğitimi Düzenle">
                                <PenSvg />
                            </Link>
                        </div>
                        {/* Diğer İşlemler (Kopyala, Sil vb.) */}
                        <CourseDashboardItemAction courseId={id} />
                    </div>
                </div>
            </div>
        </div>
    )
}
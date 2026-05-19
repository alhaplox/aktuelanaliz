import Link from "next/link";
import Image from "next/image";
import { LessonsSvg, UserSvgTwo } from "@/components/svg";
import { ICourseDT } from "@/types/course-d-t";
import { removeTagInText } from "@/utils";
import CoursePrice from "../course-price";

type IProps = {
    course: ICourseDT;
    sm_title?: boolean;
    title_cls?: string
};

export default function CourseListItemTwo({ course, sm_title, title_cls }: IProps) {
    // Veritabanı sütun isimlerine göre parçalıyoruz
    const {
        slug,
        instructor_name,
        rating,
        lectures_count,
        students,
        thumbnail,
        category,
        price,
        old_price,
        author_img,
        title,
        description
    } = course || {};

    return (
        <div className="tp-course-filter-item mb-25 d-flex">
            <div className="tp-course-filter-thumb">
                <Link href={`/course-details/${slug}`}>
                    <Image
                        className="course-pink"
                        src={thumbnail || "/assets/img/course/course-1.jpg"}
                        alt={title}
                        width={440}
                        height={310}
                        style={{ objectFit: 'cover', height: '100%' }}
                    />
                </Link>
            </div>
            <div className="tp-course-filter-content">
                <div className="tp-course-filter-tag d-flex align-items-center justify-content-between mb-10">
                    <span className="tag-span">{category}</span>
                    <div className="tp-course-rating-star">
                        <p>{rating || "5.0"}</p>
                        <div className="tp-course-rating-icon">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                    </div>
                </div>
                <h4 className={title_cls ? title_cls : 'tp-course-filter-title'}>
                    <Link href={`/course-details/${slug}`}>
                        {sm_title ? removeTagInText(title).slice(0, 28) + "..." : removeTagInText(title)}
                    </Link>
                </h4>
                <div className="tp-course-filter-meta">
                    <span className="d-flex align-items-center">
                        {author_img && (
                            <Image
                                src={author_img}
                                alt={instructor_name || "Eğitmen"}
                                width={30}
                                height={30}
                                style={{ borderRadius: '50%', marginRight: '8px' }}
                            />
                        )}
                        {instructor_name}
                    </span>
                    <span>
                        <LessonsSvg />
                        {lectures_count} Ders
                    </span>
                    <span>
                        <UserSvgTwo />
                        {students || 0} Öğrenci
                    </span>
                </div>
                <div className="tp-course-filter-p">
                    <p>{description ? description.substring(0, 120) + "..." : "Eğitim içeriği hakkında detaylı bilgi için inceleyin."}</p>
                </div>
                <div className="tp-course-filter-pricing d-flex align-items-center justify-content-between">
                    <div className="price">
                        {/* Negatif fiyat hatasını önlemek için direkt değerleri gönderiyoruz */}
                        <CoursePrice price={Number(price)} oldPrice={Number(old_price)} />
                    </div>
                    <div className="tp-course-filter-btn">
                        <Link href={`/course-details/${slug}`}>Eğitimi İncele</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
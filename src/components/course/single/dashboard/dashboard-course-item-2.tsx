import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CartThree, LessonsSvg, UserSvgTwo } from "@/components/svg";
import { ICourseDT } from "@/types/course-d-t";
import { removeTagInText } from "@/utils";
import { formatPrice } from "@/lib/format-price";

type IProps = {
    course: ICourseDT;
};

export default function DashboardCourseItemTwo({ course }: IProps) {
    const { id, author_name, author_img, title, discount, thumbnail, total_rating, lessons, students, price } = course || {};

    return (
        <div className="tp-dashboard-course tp-dashboard-course-2 mb-25">
            {/* Üst Bilgi: Eğitmen ve İndirim Oranı */}
            <div className="tp-course-teacher mb-15">
                <span>
                    {author_img && (
                        <Image src={author_img} alt={author_name} width={30} height={30} style={{ borderRadius: '50%' }} />
                    )}
                    {author_name}
                </span>
                {discount && discount > 0 ? (
                    <span className="discount">%{discount} İndirim </span>
                ) : null}
            </div>

            {/* Kurs Görseli */}
            <div className="tp-dashboard-course-thumb">
                <Link href={`/course-details/${id}`}>
                    <Image src={thumbnail} alt="kurs-kapak" width={262} height={160} style={{ objectFit: 'cover' }} />
                </Link>
            </div>

            {/* Kurs İçeriği */}
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

                {/* Buton ve Fiyat Alanı */}
                <div className="tp-dashboard-btn d-flex align-items-center justify-content-between">
                    <Link className="tpd-btn-border" href="/cart">
                        <span><CartThree /></span>
                        Sepete Ekle
                    </Link>
                    <div className="tp-dashboard-course-free">
                        <span>{price === 0 ? "Ücretsiz" : formatPrice(price)}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
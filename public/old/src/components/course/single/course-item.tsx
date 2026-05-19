'use client';
import React from "react";
import Image from "next/image";
import { LessonsSvg, UserSvgTwo } from "../../svg";
import { ICourseDT } from "@/types/course-d-t";
import Link from "next/link";
import CoursePrice from "../course-price";

type IProps = {
  course: ICourseDT;
  removeTag?: boolean;
};

export default function CourseItem({ course, removeTag }: IProps) {
  const {
    thumbnail,
    instructor_name,
    author_img,
    title,
    lectures_count,
    students,
    rating,
    category,
    price,
    old_price,
    slug
  } = course || {};

  const coursePath = `/course-details/${slug || 'analiz'}`;
  const defaultAuthorImg = 'https://images.unsplash.com/photo-1602442787305-decbd65be507?q=80&w=687&auto=format&fit=crop';

  return (
    <div className="tp-course-item p-relative fix mb-30 shadow-sm transition-3 h-100 d-flex flex-column">
      {/* Eğitmen / Analist Bilgisi */}
      <div className="tp-course-teacher mb-15">
        <span className="d-flex align-items-center gap-2">
          <Image
            src={author_img || defaultAuthorImg}
            alt={instructor_name || "Analist"}
            width={30}
            height={30}
            style={{ borderRadius: '50%', objectFit: 'cover' }}
          />
          <small className="fw-bold text-dark">{instructor_name || "Aktüel Analiz Analisti"}</small>
        </span>
      </div>

      {/* Görsel Alanı */}
      <div className="tp-course-thumb p-relative">
        <Link href={coursePath}>
          <Image
            className="course-lightblue w-100"
            src={thumbnail || "/assets/img/course/course-1.jpg"}
            alt={title || "Aktüel Analiz Analiz"}
            width={352}
            height={200}
            style={{ objectFit: 'cover', transition: 'transform 0.5s ease', height: '200px' }}
          />
        </Link>
        {category && (
          <div className="tp-course-tag p-absolute" style={{ top: '15px', left: '15px', zIndex: 2 }}>
            <span className="badge bg-primary text-white p-2">{category}</span>
          </div>
        )}
      </div>

      <div className="tp-course-content flex-grow-1">
        {/* Meta Bilgiler */}
        <div className="tp-course-meta d-flex align-items-center mb-15">
          <span className="me-3">
            <span className="me-1"><LessonsSvg /></span>
            {lectures_count || 0} Modül
          </span>
          <span>
            <span className="me-1"><UserSvgTwo /></span>
            {students || 0} Katılımcı
          </span>
        </div>

        {/* Başlık */}
        <h4 className="tp-course-title mb-15">
          <Link
            href={coursePath}
            dangerouslySetInnerHTML={{
              __html: removeTag && title ? title.replace(/(<([^>]+)>)/gi, "") : (title || "Analiz Başlığı")
            }}
          ></Link>
        </h4>

        {/* Rating ve Fiyatlandırma */}
        <div className="tp-course-rating d-flex align-items-center justify-content-between border-top pt-15">
          <div className="tp-course-rating-star">
            {/* d-flex ve flex-row yıldızların yan yana gelmesini garanti eder */}
            <div className="d-flex flex-row align-items-center gap-1">
              <span className="fw-bold text-warning me-1">{rating || "5.0"}</span>
              <div className="d-flex flex-row align-items-center" style={{ minWidth: '80px' }}>
                <i className="fa-solid fa-star text-warning" style={{ fontSize: '12px' }}></i>
                <i className="fa-solid fa-star text-warning" style={{ fontSize: '12px' }}></i>
                <i className="fa-solid fa-star text-warning" style={{ fontSize: '12px' }}></i>
                <i className="fa-solid fa-star text-warning" style={{ fontSize: '12px' }}></i>
                <i className="fa-solid fa-star text-warning" style={{ fontSize: '12px' }}></i>
              </div>
            </div>
          </div>

          <div className="tp-course-pricing">
            <CoursePrice
              price={Number(price || 0)}
              oldPrice={old_price ? Number(old_price) : undefined}
            />
          </div>
        </div>

        {/* Aksiyon Butonu */}
        <div className="tp-course-btn home-2 mt-20">
          <Link href={coursePath} className="w-100 text-center tp-btn-3">
            Detayları İncele
          </Link>
        </div>
      </div>
    </div>
  );
}
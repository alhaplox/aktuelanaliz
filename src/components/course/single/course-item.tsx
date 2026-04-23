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
    instructor_name, // Veritabanı sütun isminle eşitledim
    author_img,
    title,
    lectures_count, // Veritabanı sütun isminle eşitledim
    students,
    rating, // Veritabanı sütun isminle eşitledim
    category,
    price,
    old_price,
    slug
  } = course || {};

  return (
    <div className="tp-course-item p-relative fix mb-30">
      <div className="tp-course-teacher mb-15">
        <span>
          {author_img && (
            <Image
              src={author_img}
              alt={instructor_name || "Eğitmen"}
              width={30}
              height={30}
              style={{ borderRadius: '50%' }}
            />
          )}
          {instructor_name}
        </span>
      </div>

      <div className="tp-course-thumb">
        {/* ID yerine SLUG kullanıyoruz */}
        <Link href={`/course-details/${slug}`}>
          <Image
            className="course-lightblue"
            src={thumbnail || "/assets/img/course/course-1.jpg"}
            alt={title}
            width={352}
            height={200}
            style={{ objectFit: 'cover' }}
          />
        </Link>
      </div>

      <div className="tp-course-content">
        <div className="tp-course-tag mb-10">
          <span>{category}</span>
        </div>
        <div className="tp-course-meta">
          <span>
            <span><LessonsSvg /></span>
            {" "}{lectures_count} Ders
          </span>
          <span>
            <span><UserSvgTwo /></span>
            {" "}{students || 0} Öğrenci
          </span>
        </div>
        <h4 className="tp-course-title">
          <Link href={`/course-details/${slug}`}
            dangerouslySetInnerHTML={{ __html: removeTag ? title.replace(/(<([^>]+)>)/gi, "") : title }}
          ></Link>
        </h4>
        <div className="tp-course-rating d-flex align-items-end justify-content-between">
          <div className="tp-course-rating-star">
            <p>
              {rating || "5.0"}
            </p>
            <div className="tp-course-rating-icon">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
          </div>
          <div className="tp-course-pricing home-2">
            {/* Mantık hatasını burada da düzelttik: discount yerine direkt fiyatları gönderiyoruz */}
            <CoursePrice price={Number(price)} oldPrice={Number(old_price)} />
          </div>
        </div>
      </div>
      <div className="tp-course-btn home-2">
        {/* En alttaki önizleme butonu da slug'a gitmeli */}
        <Link href={`/course-details/${slug}`}>Eğitimi İncele</Link>
      </div>
    </div>
  );
}
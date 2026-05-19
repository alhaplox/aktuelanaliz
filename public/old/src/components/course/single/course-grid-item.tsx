import Link from "next/link";
import Image from "next/image";
import { LessonsSvg, UserSvgTwo } from "@/components/svg";
import { ICourseDT } from "@/types/course-d-t";
import CoursePrice from "../course-price";
import { removeTagInText } from "@/utils";

type IProps = {
   course: ICourseDT;
};

export default function CourseGridItem({ course }: IProps) {
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
      title
   } = course || {};

   return (
      <div className="tp-course-grid-item d-flex mb-30">
         <div className="tp-course-grid-thumb">
            {/* ID yerine SLUG kullanıyoruz */}
            <Link href={`/course-details/${slug}`}>
               <Image
                  src={thumbnail || "/assets/img/course/course-1.jpg"}
                  alt={removeTagInText(title)}
                  width={230}
                  height={320}
                  style={{ objectFit: 'cover', height: '100%' }}
               />
            </Link>
         </div>
         <div className="tp-course-grid-content">
            <div className="tp-course-filter-tag mb-10">
               <span className="tag-span">{category}</span>
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

            <h4 className="tp-course-grid-title">
               <Link href={`/course-details/${slug}`}>
                  {removeTagInText(title)}
               </Link>
            </h4>

            <div className="tp-course-teacher tp-course-grid-teacher">
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
            </div>

            <div className="tp-course-rating d-flex align-items-end justify-content-between">
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
               <div className="tp-course-pricing">
                  {/* Fiyat hesaplama hatasını önlemek için direkt değerleri gönderiyoruz */}
                  <CoursePrice price={Number(price)} oldPrice={Number(old_price)} />
               </div>
            </div>
         </div>
      </div>
   )
}
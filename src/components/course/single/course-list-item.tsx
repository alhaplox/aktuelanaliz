import Image from "next/image";
import Link from "next/link";
import { LessonsSvg, UserSvgTwo } from "@/components/svg";
import { ICourseDT } from "@/types/course-d-t";

// Prop tipi
type IProps = {
   course: ICourseDT
}

export default function CourseListItem({ course }: IProps) {
   // Veritabanı sütun isimlerine göre parçalıyoruz
   const {
      slug,
      price,
      old_price,
      lectures_count,
      students,
      thumbnail,
      instructor_name,
      author_img,
      title,
      rating
   } = course || {};

   return (
      <div className="tp-course-4-item d-flex wow fadeInUp">
         <div className="tp-course-4-thumb">
            <Link href={`/course-details/${slug}`}>
               <Image
                  src={thumbnail || "/assets/img/course/course-1.jpg"}
                  alt={title}
                  width={220}
                  height={293}
                  style={{ height: '100%', objectFit: 'cover', borderRadius: '8px' }}
               />
            </Link>
         </div>
         <div className="tp-course-4-content">
            <div className="tp-course-4-rating">
               <i className="fa-solid fa-star"></i>
               <i className="fa-solid fa-star"></i>
               <i className="fa-solid fa-star"></i>
               <i className="fa-solid fa-star"></i>
               <i className="fa-solid fa-star"></i>
               <span>({rating || "5.0"})</span>
            </div>

            <h4 className="tp-course-4-title">
               <Link href={`/course-details/${slug}`}>{title}</Link>
            </h4>

            <div className="tp-course-4-info d-flex align-items-center">
               <div className="tp-course-4-info-item">
                  <span>
                     <span><LessonsSvg /></span>
                     {" "}{lectures_count} Ders
                  </span>
               </div>
               <div className="tp-course-4-info-item">
                  <span>
                     <span><UserSvgTwo /></span>
                     {" "}{students || 0} Öğrenci
                  </span>
               </div>
            </div>

            <p>{course.description?.substring(0, 100)}...</p>

            <div className="tp-course-4-avatar d-flex align-items-center justify-content-between">
               <div className="tp-course-4-avatar-info d-flex align-items-center">
                  {author_img && (
                     <div className="tp-course-4-avatar-thumb">
                        <Image
                           src={author_img}
                           alt={instructor_name || "Eğitmen"} // Eğer isim yoksa "Eğitmen" yaz
                           width={30}
                           height={30}
                           style={{ borderRadius: '50%' }}
                        />
                     </div>
                  )}
                  <div className="tp-course-4-avatar-text">
                     <span>Eğitmen:</span>
                     <a href="#">{" "}{instructor_name}</a>
                  </div>
               </div>

               <div className="tp-course-4-ammount">
                  {/* Fiyat mantığı: Ücretsiz mi yoksa indirimli mi? */}
                  <span style={{ fontWeight: '700', color: '#000', fontSize: '18px' }}>
                     {Number(price) === 0 ? "Ücretsiz" : `$${price}`}
                  </span>
                  {old_price && Number(old_price) > Number(price) && (
                     <span style={{
                        textDecoration: 'line-through',
                        color: '#a0a0a0',
                        fontSize: '14px',
                        marginLeft: '8px'
                     }}>
                        ${old_price}
                     </span>
                  )}
               </div>
            </div>
         </div>
      </div>
   )
}
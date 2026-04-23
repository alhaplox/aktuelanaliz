import Link from "next/link";
import Image from "next/image";
import { HomeSvg } from "@/components/svg";
import { ICourseDT } from "@/types/course-d-t";
import { removeTagInText } from "@/utils";
// Varsayılan eğitmen resmi (Veritabanında yoksa kullanılır)
import default_author from "@/assets/img/course/course-5-teacher-1.png";

type IProps = {
   course: ICourseDT
}

export default function CourseDetailsBreadcrumb({ course }: IProps) {
   // Tarihi okunabilir formata çevirelim
   const lastUpdate = course.created_at
      ? new Date(course.created_at).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })
      : "23 Nisan 2026";

   return (
      <section className="tp-breadcrumb__area pt-25 pb-55 p-relative z-index-1 fix">
         <div className="tp-breadcrumb__bg" style={{ backgroundImage: "url(/assets/img/breadcrumb/breadcrumb-bg-2.jpg)" }}></div>
         <div className="container">
            <div className="row align-items-center">
               <div className="col-sm-12">
                  <div className="tp-breadcrumb__content">
                     {/* Üst Navigasyon (Breadcrumb List) */}
                     <div className="tp-breadcrumb__list course-details mb-70">
                        <span><Link href="/"><HomeSvg /></Link></span>
                        <span>
                           <Link href="/courses">Eğitimler</Link> / {course.category} / {removeTagInText(course.title)}
                        </span>
                     </div>

                     <div className="tp-course-details-2-header">
                        <span className="tp-course-details-2-category">{course.category}</span>
                        <h3 className="tp-course-details-2-title">
                           {removeTagInText(course.title)}
                        </h3>

                        <div className="tp-course-details-2-meta-wrapper d-flex align-items-center flex-wrap">
                           {/* Eğitmen Bilgisi */}
                           <div className="tp-course-details-2-meta ">
                              <div className="tp-course-details-2-author d-flex align-items-center">
                                 <div className="tp-course-details-2-author-avater">
                                    <Image
                                       src={course.author_img || default_author}
                                       alt={course.instructor_name || "Eğitmen"}
                                       width={50}
                                       height={50}
                                       style={{ borderRadius: '50%', objectFit: 'cover' }}
                                    />
                                 </div>
                                 <div className="tp-course-details-2-author-content">
                                    <span className="tp-course-details-2-author-designation">Eğitmen</span>
                                    <h3 className="tp-course-details-2-meta-title">
                                       <a href="#">{course.instructor_name}</a>
                                    </h3>
                                 </div>
                              </div>
                           </div>

                           {/* Kategori */}
                           <div className="tp-course-details-2-meta">
                              <span className="tp-course-details-2-meta-subtitle">Kategori</span>
                              <h3 className="tp-course-details-2-meta-title">{course.category}</h3>
                           </div>

                           {/* Son Güncelleme */}
                           <div className="tp-course-details-2-meta">
                              <span className="tp-course-details-2-meta-subtitle">Son Güncelleme</span>
                              <h3 className="tp-course-details-2-meta-title">{lastUpdate}</h3>
                           </div>

                           {/* Puanlama */}
                           <div className="tp-course-details-2-meta text-end">
                              <div className="tp-course-details-2-meta-rating-wrapper">
                                 <div className="tp-course-rating-icon">
                                    {/* Rating değerine göre yıldızları dönebiliriz, şimdilik statik 5 yıldız */}
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                 </div>
                                 <span className="tp-course-details-2-meta-subtitle">
                                    {course.rating || "5.0"} (Puanlama)
                                 </span>
                              </div>
                           </div>

                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}
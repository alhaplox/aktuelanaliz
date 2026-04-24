import { ICourseDT } from "@/types/course-d-t";
import CourseDetailsRightSide from "../_components/course-details-right-side";
import CourseDetailsInfo from "@/components/course/details/course-details-info";
import CourseDetailsCurriculum from "@/components/course/details/course-details-curriculum";
import CourseDetailsInstructor from "@/components/course/details/course-details-instructor";
import CourseDetailsRatingReviews from "@/components/course/details/course-details-rating-reviews";
import CourseDetailsFeaturedReviews from "@/components/course/details/course-details-featured-reviews";
import CourseDetailsReviewForm from "@/components/course/details/course-details-review-form";
import CourseDetailsNav from "@/components/course/details/course-details-nav";

type IProps = {
   course: ICourseDT;
};

export default function CourseDetailsArea({ course }: IProps) {
   return (
      <section className="tp-course-details-2-area pt-50 pb-80">
         <div className="container">
            <div className="row">
               <div className="col-lg-8">
                  <div className="tp-course-details-2-main-inner pr-70">
                     <div className="tp-course-details-2-nav d-flex align-items-center">
                        {/* Tab linklerinin olduğu kısım */}
                        <CourseDetailsNav />
                     </div>

                     <div className="tp-course-details-2-content">
                        {/* Kurs Bilgisi */}
                        {/* @ts-ignore */}
                        <div id="info">
                           <CourseDetailsInfo course={course} />
                        </div>

                        {/* Müfredat */}
                        <div id="curriculum" className="pt-70">
                           <h4 className="tp-course-details-2-main-title">Eğitim Müfredatı</h4>
                           <CourseDetailsCurriculum course={course} />
                        </div>

                        {/* Eğitmen Bilgisi */}
                        <div id="instructors" className="pt-100">
                           <h4 className="tp-course-details-2-main-title">Eğitmenler</h4>
                           <CourseDetailsInstructor course={course} />
                        </div>

                        {/* Değerlendirmeler */}
                        <div id="reviews">
                           <h4 className="tp-course-details-2-main-title">Puanlama ve Yorumlar</h4>
                           <CourseDetailsRatingReviews course={course} />
                        </div>

                        <h4 className="tp-course-details-2-main-title">Öne Çıkan Yorum</h4>
                        <CourseDetailsFeaturedReviews course={course} />

                        <h4 className="tp-course-details-2-main-title">Yorum Yap</h4>
                        <div className="tp-course-details-2-comment-box pr-25">
                           <span>Bu eğitim hakkında ne düşünüyorsunuz?</span>
                           <CourseDetailsReviewForm courseId={course.id} />
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4">
                  <CourseDetailsRightSide course={course} />
               </div>
            </div>
         </div>
      </section>
   );
}
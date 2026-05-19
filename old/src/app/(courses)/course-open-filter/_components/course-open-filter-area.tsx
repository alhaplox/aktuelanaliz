'use client';
import usePagination from "@/hooks/use-pagination";
import useCourseFilter from "@/hooks/use-course-filter";
import CourseFilterSelectBox from "@/components/course/filter/course-filter-select-boxs";
import CourseGridItem from "@/components/course/single/course-grid-item";
import CourseListItemTwo from "@/components/course/single/course-list-item-2";
import Pagination from "@/components/ui/pagination";
import ResetFilter from "@/components/course/filter/reset-filter";

export default function CourseOpenFilterArea() {
   const { state } = useCourseFilter();
   // Her sayfada 6 içerik olacak şekilde ayarlandı
   const { currentItems, handlePageClick, pageCount } = usePagination(state.filteredCourses, 6);

   return (
      <section>
         {state.filteredCourses.length > 0 ? (
            <div className="tp-filter-mt">
               <div className="container">

                  {/* Sıralama ve hızlı filtreleme kutuları */}
                  <CourseFilterSelectBox />

                  <div className="tab-content" id="myTabContent">
                     {/* Izgara (Grid) Görünümü - Yan yana 2'li düzen */}
                     <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <div className="row">
                           {currentItems.map((course) => (
                              <div key={course.id} className="col-lg-6 d-flex">
                                 {/* d-flex: Kartların alt alta ve yan yana eşit hizada durmasını sağlar */}
                                 <CourseGridItem course={course} />
                              </div>
                           ))}
                        </div>
                     </div>

                     {/* Liste Görünümü */}
                     <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        {currentItems.map((course) => (
                           <CourseListItemTwo key={course.id} course={course} />
                        ))}
                     </div>
                  </div>

                  {/* Sayfalama (Pagination) */}
                  <div className="col-lg-12">
                     <div className="tp-event-inner-pagination pb-100">
                        <div className="tp-dashboard-pagination pt-20">
                           <div className="tp-pagination">
                              <Pagination
                                 handlePageClick={handlePageClick}
                                 pageCount={pageCount}
                                 isCenter={true}
                              />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         ) : (
            <div className="container mt-50 mb-50 text-center">
               <ResetFilter />
            </div>
         )}
      </section>
   )
}
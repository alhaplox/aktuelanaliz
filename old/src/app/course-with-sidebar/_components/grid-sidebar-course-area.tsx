'use client';
import useCourseFilter from "@/hooks/use-course-filter";
import FilterSidebarArea from "./filter-sidebar-area";
import usePagination from "@/hooks/use-pagination";
import Pagination from "@/components/ui/pagination";
import CourseListItemTwo from "@/components/course/single/course-list-item-2";
import CourseItem from "@/components/course/single/course-item";

export default function GridSidebarCourseArea() {
   const { state } = useCourseFilter();
   // Sayfa başına 6 kurs gösterimi ve sayfalama mantığı
   const { currentItems, handlePageClick, pageCount } = usePagination(state.filteredCourses, 6);

   return (
      <section className="tp-grid-sidebar-area pb-100">
         <div className="container">
            <div className="row">
               {/* Sol Sidebar: Filtreleme Seçenekleri */}
               <div className="col-lg-3">
                  <FilterSidebarArea />
               </div>

               {/* Sağ İçerik Alanı: Kurs Listesi */}
               <div className="col-lg-9">
                  <div className="tab-content" id="myTabContent">

                     {/* Izgara (Grid) Görünümü */}
                     <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <div className="tp-grid-sidebar-right">
                           <div className="row">
                              {currentItems.map((course) => (
                                 <div key={course.id} className="col-lg-4 col-md-6 d-flex">
                                    {/* d-flex: Farklı uzunluktaki kurs başlıklarına rağmen kart boylarını eşitler */}
                                    <CourseItem course={course} removeTag={true} />
                                 </div>
                              ))}
                           </div>
                        </div>
                     </div>

                     {/* Liste Görünümü */}
                     <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <div className="tp-list-sidebar-right">
                           <div className="row">
                              {currentItems.map((course) => (
                                 <div key={course.id} className="col-12 mb-20">
                                    <CourseListItemTwo
                                       course={course}
                                       sm_title={true}
                                       title_cls="tp-course-list-title"
                                    />
                                 </div>
                              ))}
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Sayfalama (Pagination) Alanı */}
                  <div className="tp-event-inner-pagination mt-30">
                     <div className="tp-dashboard-pagination pt-20">
                        <div className="tp-pagination">
                           <Pagination
                              handlePageClick={handlePageClick}
                              pageCount={pageCount}
                              isCenter={false}
                           />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}
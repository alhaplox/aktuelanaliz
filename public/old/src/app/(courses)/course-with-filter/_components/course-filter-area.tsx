'use client'
import ResetFilter from "@/components/course/filter/reset-filter";
import CourseItem from "@/components/course/single/course-item";
import CourseListItemTwo from "@/components/course/single/course-list-item-2";
import Pagination from "@/components/ui/pagination";
import useCourseFilter from "@/hooks/use-course-filter"
import usePagination from "@/hooks/use-pagination";

export default function CourseFilterArea() {
    const { state } = useCourseFilter();
    // Sayfa başına 6 kurs gösterecek şekilde pagination ayarlandı
    const { currentItems, handlePageClick, pageCount } = usePagination(state.filteredCourses, 6);

    return (
        <section>
            {state.filteredCourses.length > 0 ? (
                <div className="tp-filter-mt-2">
                    <div className="container">
                        <div className="tab-content" id="myTabContent">
                            {/* Izgara (Grid) Görünümü */}
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className="row">
                                    {currentItems.map((course) => (
                                        <div key={course.id} className="col-lg-4 col-md-6 d-flex">
                                            {/* d-flex: Kartların boylarını eşitleyerek daha düzenli bir görünüm sağlar */}
                                            <CourseItem course={course} />
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
                        <div className="row">
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
                </div>
            ) : (
                <div className="container mt-50 mb-50">
                    {/* Filtreleme sonucu boşsa sıfırlama butonu ve mesajı */}
                    <ResetFilter />
                </div>
            )}
        </section>
    )
}
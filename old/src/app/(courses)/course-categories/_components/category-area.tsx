import { CategoryTwoSvg } from "@/components/svg";
import Link from "next/link";

// Kategorileri Aktuel Analiz içeriğine uygun şekilde güncelledik
const categories = [
   { title: "Teknik Analiz", courseCount: 15, colorClass: "", delay: ".3s" },
   { title: "Temel Analiz", courseCount: 10, colorClass: "color-1", delay: ".4s" },
   { title: "Borsa İstanbul", courseCount: 9, colorClass: "color-2", delay: ".5s" },
   { title: "Kripto Varlıklar", courseCount: 12, colorClass: "color-3", delay: ".6s" },
   { title: "Algoritmik Ticaret", courseCount: 17, colorClass: "color-4", delay: ".3s" },
   { title: "Forex Piyasaları", courseCount: 20, colorClass: "color-5", delay: ".4s" },
   { title: "Portföy Yönetimi", courseCount: 25, colorClass: "color-6", delay: ".5s" },
   { title: "Emtia Yatırımı", courseCount: 30, colorClass: "color-7", delay: ".6s" },
   { title: "Finansal Okuryazarlık", courseCount: 22, colorClass: "color-8", delay: ".3s" },
   { title: "Risk Yönetimi", courseCount: 18, colorClass: "color-9", delay: ".4s" },
   { title: "Opsiyon Piyasaları", courseCount: 29, colorClass: "color-10", delay: ".5s" },
   { title: "Ekonomi 101", courseCount: 26, colorClass: "color-11", delay: ".6s" }
];

export default function CategoryArea() {
   return (
      <section className="tp-course-categories-area pt-100 pb-75">
         <div className="container">
            <div className="row">
               {categories.map((category, index) => (
                  <div key={index} className="col-lg-3 col-sm-6">
                     <Link
                        href={`/course-with-filter?category=${category.title}`}
                        className="tp-course-categories-item p-relative mb-25 wow fadeInUp"
                        data-wow-delay={category.delay}
                     >
                        <div className="tp-course-categories-icon">
                           <span className={category.colorClass}>
                              <CategoryTwoSvg />
                           </span>
                        </div>
                        <h3 className="tp-course-categories-title">{category.title}</h3>
                        <p>{category.courseCount} Eğitim</p>
                     </Link>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}
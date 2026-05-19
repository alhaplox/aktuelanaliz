"use client"
import { useState, useEffect } from "react";
import { CertificateSvg, DeadLineSvg, DurationSvg, LanguageSvg, LectureSvg, PlayTwoSvg, ShareSvg, SkillLevelSvg } from "@/components/svg";
import CoursePrice from "../../../../components/course/course-price";
import { useVideoModal } from "@/provider/VideoProvider";
import { ICourseDT } from "@/types/course-d-t";
import { createClient } from "@/utils/supabase/client";
import Image from "next/image";
import { useRouter } from "next/navigation";

type IProps = {
   course: ICourseDT;
};

export default function CourseDetailsRightSide({ course }: IProps) {
   const { playVideo } = useVideoModal();
   const router = useRouter();
   const supabase = createClient();

   const [isEnrolled, setIsEnrolled] = useState(false);
   const [loading, setLoading] = useState(false);
   const [showShareMenu, setShowShareMenu] = useState(false);

   const handleCopyLink = () => {
      const url = window.location.href;
      navigator.clipboard.writeText(url);
      alert("Bağlantı panoya kopyalandı!");
      setShowShareMenu(false);
   };
   // Kullanıcın bu kursa zaten kayıtlı olup olmadığını kontrol et
   useEffect(() => {
      const checkEnrollment = async () => {
         const { data: { user } } = await supabase.auth.getUser();
         if (user) {
            const { data } = await supabase
               .from('enrollments')
               .select('*')
               .eq('user_id', user.id)
               .eq('course_id', course.id)
               .single();

            if (data) setIsEnrolled(true);
         }
      };
      checkEnrollment();
   }, [course.id]);

   // Kursa Kayıt Olma Fonksiyonu
   const handleEnroll = async () => {
      setLoading(true);
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
         router.push('/login');
         return;
      }

      const { error } = await supabase
         .from('enrollments')
         .insert([{ user_id: user.id, course_id: course.id }]);

      if (error) {
         alert("Kayıt sırasında bir hata oluştu: " + error.message);
      } else {
         setIsEnrolled(true);
         alert("Kursa başarıyla kayıt oldunuz! Profil sayfanızdan erişebilirsiniz.");
         router.push('/profile');
      }
      setLoading(false);
   };

   return (
      <div className="tp-course-details-2-widget">
         <div className="tp-course-details-2-widget-thumb p-relative">
            {/* Kursun kendi görselini kullanıyoruz */}
            <img
               src={course.thumbnail || '/assets/img/course/details/course.jpg'}
               alt={course.title}
               style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
            <button onClick={() => playVideo("go7QYaQR494")}>
               <span><PlayTwoSvg /></span>
            </button>
         </div>

         <div className="tp-course-details-2-widget-content">
            <div className="tp-course-details-2-widget-price">
               <CoursePrice
                  price={Number(course.price)}
                  oldPrice={Number(course.old_price)}
               />
            </div>

            <div className="tp-course-details-2-widget-btn">
               {isEnrolled ? (
                  <button className="tp-btn-inner w-100 active" onClick={() => router.push('/profile')}>
                     Eğitime Git
                  </button>
               ) : (
                  <button
                     className="tp-btn-inner w-100 active"
                     onClick={handleEnroll}
                     disabled={loading}
                  >
                     {loading ? 'İşleniyor...' : 'Hemen Kayıt Ol'}
                  </button>
               )}
               <p className="mt-15">30 Gün Para İade Garantisi</p>
            </div>

            <div className="tp-course-details-2-widget-list">
               <h5>Bu eğitimin içeriği:</h5>
               <div className="tp-course-details-2-widget-list-item-wrapper">
                  <div className="tp-course-details-2-widget-list-item d-flex align-items-center justify-content-between">
                     <span> <LectureSvg /> Ders Sayısı</span>
                     <span>{course.lectures_count || '0'}</span>
                  </div>
                  <div className="tp-course-details-2-widget-list-item d-flex align-items-center justify-content-between">
                     <span> <DurationSvg /> Süre</span>
                     <span>{course.duration || 'Belirtilmemiş'}</span>
                  </div>
                  <div className="tp-course-details-2-widget-list-item d-flex align-items-center justify-content-between">
                     <span> <SkillLevelSvg /> Seviye</span>
                     <span>{course.level || 'Her Seviye'}</span>
                  </div>
                  <div className="tp-course-details-2-widget-list-item d-flex align-items-center justify-content-between">
                     <span> <LanguageSvg /> Dil</span>
                     <span>{course.language || 'Türkçe'}</span>
                  </div>
                  <div className="tp-course-details-2-widget-list-item d-flex align-items-center justify-content-between">
                     <span> <CertificateSvg /> Sertifika</span>
                     <span>Evet</span>
                  </div>

                  <div className="tp-course-details-2-widget-share p-relative">
                     <div
                        className="share d-flex align-items-center justify-content-between"
                        style={{ cursor: 'pointer' }}
                        onClick={() => setShowShareMenu(!showShareMenu)}
                     >
                        <span>
                           <span><ShareSvg clr="#5169F1" /></span> Paylaş
                        </span>
                     </div>

                     {showShareMenu && (
                        <div className="share-dropdown-menu" style={{
                           position: 'absolute',
                           top: '100%',
                           right: 0,
                           backgroundColor: '#fff',
                           boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                           borderRadius: '8px',
                           padding: '15px',
                           zIndex: 100,
                           width: '200px',
                           display: 'flex',
                           flexDirection: 'column',
                           gap: '10px'
                        }}>
                           {/* Bağlantıyı Kopyala */}
                           <button onClick={handleCopyLink} className="share-item" style={{ textAlign: 'left', background: 'none', border: 'none', fontSize: '14px' }}>
                              <i className="fa-regular fa-copy mr-10"></i> Bağlantıyı Kopyala
                           </button>

                           <hr style={{ margin: '5px 0', borderTop: '1px solid #eee' }} />

                           {/* WhatsApp */}
                           <a
                              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(course.title + " " + window.location.href)}`}
                              target="_blank"
                              className="share-item"
                           >
                              <i className="fa-brands fa-whatsapp mr-10" style={{ color: '#25D366' }}></i> WhatsApp
                           </a>

                           {/* Twitter (X) */}
                           <a
                              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(course.title)}&url=${encodeURIComponent(window.location.href)}`}
                              target="_blank"
                              className="share-item"
                           >
                              <i className="fa-brands fa-twitter mr-10" style={{ color: '#1DA1F2' }}></i> Twitter
                           </a>

                           {/* LinkedIn */}
                           <a
                              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                              target="_blank"
                              className="share-item"
                           >
                              <i className="fa-brands fa-linkedin mr-10" style={{ color: '#0077B5' }}></i> LinkedIn
                           </a>
                        </div>
                     )}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
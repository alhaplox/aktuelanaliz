'use client';
import Image from "next/image";
import dashboard_shape from '@/assets/img/dashboard/bg/dashboard-bg-shape-1.jpg';
// Statik profil resmini siliyoruz veya yedek olarak tutuyoruz

interface ProfileProps {
   profile: any;
   email?: string;
}

export default function ProfileBannerArea({ profile, email }: ProfileProps) {
   // Kullanıcın avatarı varsa onu, yoksa varsayılan bir görseli kullan
   const avatarSrc = profile?.avatar_url || "/assets/img/dashboard/profile/dashboard-profile.jpg";

   return (
      <section className="tp-dashboard-banner-wrap">
         <div className="tp-dashboard-banner-shape">
            <Image src={dashboard_shape} alt="arka plan şekil" />
         </div>
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <div className="tp-dashboard-banner-bg mt-30" style={{ backgroundImage: "url(/assets/img/dashboard/bg/dashboard-bg-1.jpg)" }}>
                     <div className="tp-instructor-wrap d-flex justify-content-between">
                        <div className="tp-instructor-info d-flex">
                           <div className="tp-instructor-avatar">
                              {/* Dışarıdan gelen URL'ler için unoptimized kullanabiliriz veya width/height vermeliyiz */}
                              <img
                                 src={avatarSrc}
                                 alt="profil resmi"
                                 style={{ width: "150px", height: "150px", borderRadius: "50%", objectFit: "cover" }}
                              />
                           </div>
                           <div className="tp-instructor-content">
                              <h4 className="tp-instructor-title">
                                 {profile?.first_name} {profile?.last_name}
                              </h4>
                              <div className="tp-instructor-rate d-flex align-items-center">
                                 <span className="profile">0 Kurs</span> <span className="profile">{email}</span>
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
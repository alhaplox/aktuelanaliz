import Image from "next/image";
import user_img from '@/assets/img/course/details/user.png';
import { Star, UserSvgTwo, VideoPlayerThreeSvg } from "@/components/svg";
import SocialLinks from "@/components/social/social-links";


export default function CourseDetailsInstructor() {
    return (
        <div className="tp-course-details-2-instructor d-flex">
            <div className="tp-course-details-2-instructor-thumb mr-40">
                <Image src={user_img} alt="eğitmen-fotoğrafı" width={150} height={150} style={{ borderRadius: '10px' }} />
            </div>
            <div className="tp-course-details-2-instructor-content">
                <h5>Barış Bey</h5> {/* İstersen burayı dinamik yapabiliriz */}
                <span className="pre">Kıdemli Piyasa Analisti & Yazılım Geliştirici</span>

                <div className="tp-course-details-2-instructor-sub d-flex">
                    <span><Star /> 4.8 Puan</span>
                    <span><VideoPlayerThreeSvg /> 12 Eğitim</span>
                    <span><UserSvgTwo clr="#6C7275" /> 1,450+ Öğrenci</span>
                </div>

                <div className="tp-course-details-2-instructor-text">
                    <p>
                        On yılı aşkın süredir finansal piyasalarda algoritmik trade ve teknik analiz
                        üzerine uzmanlaşmış bir stratejistim. Aktuel Analiz topluluğunun kurucusu olarak,
                        yeni nesil yatırımcılara veri odaklı karar alma mekanizmalarını öğretiyorum.
                    </p>
                    <p>
                        Karmaşık piyasa dinamiklerini, herkesin anlayabileceği basit ve uygulanabilir
                        stratejilere dönüştürmek en büyük önceliğimdir. Finansal özgürlük yolculuğunuzda
                        size rehberlik etmek için buradayım.
                    </p>
                </div>

                <div className="tp-course-details-2-instructor-social">
                    {/* Sosyal medya linklerini Aktuel Analiz hesaplarına yönlendirmeyi unutma */}
                    <SocialLinks />
                </div>
            </div>
        </div>
    )
}
import Image from "next/image";
import overview_img_1 from "@/assets/img/course/details/admisson-overview-1.jpg";
import overview_img_2 from "@/assets/img/course/details/admisson-overview-2.jpg";
import { RightArrowSeven } from "../svg";
import Link from "next/link";

// 1. Bölüm: Platformun Erişilebilirliği ve Değeri
export default function AdmissionArea() {
  return (
    <section className="tp-admission-overview-area grey-bg pb-130">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div
              className="tp-admission-overview-heading wow fadeInUp"
              data-wow-delay=".3s"
            >
              <h3 className="tp-admission-overview-title">Neden Aktüel Analiz?</h3>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="tp-admission-overview-wrapper wow fadeInUp"
              data-wow-delay=".5s"
            >
              <p>
                Aktüel Analiz olarak, sizi finansal kariyerinizde veya bireysel yatırımlarınızda
                destekleyici, yaratıcı ve profesyonel bir analiz ortamıyla buluşturuyoruz.
                Pratik teknik analiz becerileri kazanırken, profesyonel bir ağın parçası olursunuz.
              </p>
              <p>
                Analizlerimiz her seviyeden yatırımcı için erişilebilirdir. Yıllık abonelik
                planlarımızda, portföy büyüklüğünüze bakılmaksızın tüm üyelerimize
                eşit kalitede veri ve rapor sunuyoruz. Küçük ölçekli yatırımcılar için
                <span> özel indirimli başlangıç paketlerimiz</span> mevcuttur.
              </p>
              <div className="tp-admission-overview-btn mt-50">
                <Link className="tp-btn" href="/membership">
                  Abonelik Planlarını <br />
                  Detaylı İncele{" "}
                  <span>
                    <RightArrowSeven />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 2. Bölüm: Kazanç/Maliyet Hesaplayıcı (CTA)
export function AdmissionCtaArea() {
  return (
    <section className="tp-admission-cta-area grey-bg pb-160">
      <div className="container">
        <div className="tp-admission-cta-box">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="tp-admission-cta-heading wow fadeInUp"
                data-wow-delay=".3s"
              >
                <h3 className="tp-admission-cta-title">
                  Yatırım Getirinizi <br /> Tahmin Edin.
                </h3>
                <p>
                  Aktüel Analiz analizleriyle ne kadar tasarruf edebilir veya <br />
                  kazancınızı nasıl optimize edebilirsiniz? Hesaplayıcımızla görün.
                </p>
                <div className="tp-admission-cta-btn">
                  <Link className="tp-btn" href="/calculator">
                    ROI Hesaplayıcı{" "}
                    <span>
                      <RightArrowSeven />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="tp-admission-cta-thumb wow fadeInUp"
                data-wow-delay=".5s"
              >
                <Image
                  src={overview_img_1}
                  alt="analysis-overview"
                  style={{ height: "auto", borderRadius: '20px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 3. Bölüm: Yeni Dönem Kayıt/Başvuru
export function AdmissionApplyArea() {
  return (
    <section className="tp-admission-apply-area grey-bg pt-40 pb-140">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div
              className="tp-admission-apply-thumb p-relative wow fadeInUp"
              data-wow-delay=".3s"
            >
              <Image
                src={overview_img_2}
                alt="apply-now"
                style={{ height: "auto", borderRadius: '20px' }}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="tp-admission-apply-heading wow fadeInUp"
              data-wow-delay=".5s"
            >
              <h3 className="tp-admission-apply-title">2026 Sezonuna Katılın</h3>
              <p>
                VIP grubumuza katılım sürecinde size rehberlik ediyor, <br />
                borsa ve kripto sinyallerimize erişim adımlarındaki <br />
                tüm sorularınızı anında yanıtlıyoruz.
              </p>
              <div className="tp-admission-apply-btn">
                <Link className="tp-btn" href="/contact">
                  Nasıl Üye Olurum?
                  <span>
                    <RightArrowSeven />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
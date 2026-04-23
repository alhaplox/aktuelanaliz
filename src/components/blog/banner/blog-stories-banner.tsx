import Link from "next/link";
import Image from "next/image";
import { HomeSvg, SearchSvg } from "@/components/svg";

// Unsplash'ten profesyonel finans görselleri
const featured_banner = "https://images.unsplash.com/photo-1611974785765-967aa3d83b48?q=80&w=1200&auto=format&fit=crop";
const admin_avatar = "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&auto=format&fit=crop";

export default function BlogStoriesBanner() {
  return (
    <section className="tp-blog-stories-area fix p-relative pt-120 pb-60">
      <div
        className="tp-blog-stories-bg"
        style={{
          backgroundImage: "url(/assets/img/blog/blog-stories/blog-stories-bg.png)",
        }}
      ></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-12">
            <div className="tp-breadcrumb__content">
              <div className="tp-breadcrumb__list">
                <span>
                  <Link href="/">
                    <HomeSvg />
                  </Link>
                </span>
                <span className="color">Analizler & Haberler</span>
              </div>
              <h3 className="tp-breadcrumb__title">Piyasa Nabzı</h3>
              <p className="tp-blog-stories-p">
                Finansal özgürlüğünüzü inşa etmenize yardımcı olacak derinlemesine analizler ve stratejiler.
              </p>
              <div className="tp-blog-stories-btn-box mb-60">
                <a className="active" href="#">Borsa İstanbul</a>
                <a href="#">Kripto Varlıklar</a>
                <a href="#">Makro Ekonomi</a>
                <a href="#">Döviz & Emtia</a>
                <a href="#">Yatırım Eğitimi</a>
                <span className="tp-search-open-btn">
                  <SearchSvg />
                </span>
              </div>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="tp-blog-stories-banner-wrap p-relative">
              <div className="tp-blog-stories-banner-thumb p-relative">
                <Image
                  src={featuredBanner}
                  alt="Öne Çıkan Piyasa Analizi"
                  width={1200}
                  height={600}
                  style={{ width: "100%", height: "auto", objectFit: "cover", borderRadius: "16px" }}
                  priority // Sayfanın en üstünde olduğu için hızlı yüklenmesi kritik
                />
              </div>
              <div className="tp-blog-stories-banner-content">
                <a className="tp-blog-stories-banner-sub" href="#">
                  Günün Analizi
                </a>
                <h3 className="tp-blog-stories-banner-title">
                  <Link href="/blog-details/1">
                    Küresel Piyasalarda Likidite <br />
                    Döngüsü ve Stratejik Fırsatlar
                  </Link>
                </h3>
                <div className="tp-blog-stories-banner-user d-flex align-items-center">
                  <div className="tp-blog-stories-user-thumb">
                    <Image
                      src={admin_avatar}
                      alt="Aktuel Analiz Uzmanı"
                      width={50}
                      height={50}
                      className="rounded-circle"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="tp-blog-stories-user-content">
                    <h6>Aktuel Analiz (Aktüel Analiz)</h6>
                    <span>{new Date().toLocaleDateString('tr-TR')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
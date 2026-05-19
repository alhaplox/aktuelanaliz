'use client';
import { RightArrowTwo } from "@/components/svg";
import Link from "next/link";

export default function AboutBanner() {
    return (
        <section className="tp-about-pt fix p-relative pt-200">
            <div
                className="tp-about-bg-main"
                style={{ backgroundImage: "url(/assets/img/about/about/about-bg.png)" }}
            ></div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <div className="tp-about-banner mb-80">
                            <span className="text-uppercase fw-bold" style={{ color: 'var(--tp-theme-1)' }}>
                                Analiz Standartlarımız
                            </span>
                            <h3 className="tp-about-banner-title">
                                Piyasada en yüksek doğruluk <br /> oranlı analizleri sunuyoruz.
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid p-0">
                <div
                    className="tp-about-banner-bg"
                    style={{
                        backgroundImage: "url(/assets/img/about/about/about-thumb-1.jpg)",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    <div className="row g-0">
                        <div className="col-xl-6 col-lg-12"></div>
                        <div className="col-xl-6 col-lg-12">
                            <div className="tp-about-banner-content p-relative">
                                <span className="span">Hikayemiz</span>
                                <p>
                                    Yatırımcılarımızla kurduğumuz yakın <br />
                                    iş ortaklıkları sayesinde, her portföye <br />
                                    özel stratejik çözümler ve piyasa <br />
                                    öngörüleri geliştiriyoruz.
                                </p>
                                <Link href="/team">
                                    Analist Kadromuz <span><RightArrowTwo clr="currentColor" /></span>
                                </Link>
                                <div className="tp-about-banner-content-year">
                                    <span>8</span>
                                    <p>Yıllık Finansal Deneyim</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
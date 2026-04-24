import Image from "next/image";
import shape_underline from "@/assets/img/unlerline/cta-2-svg-1.svg";
import { CheckSvg, EmailTwo } from "../svg";

export default function CtaTwo() {
  return (
    <section className="cta-area tp-cta-2-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-8 col-lg-10">
            <div className="tp-cta-2-wrapper text-center">
              <h2 className="tp-cta-2-title">
                Piyasanın Nabzını {' '}
                <span>
                  Aktüel Analiz
                  <Image
                    className="tp-underline-shape-12 wow bounceIn"
                    data-wow-duration="1.5s"
                    data-wow-delay=".4s"
                    src={shape_underline}
                    alt="alt-cizgi"
                  />
                </span>
                ile Tutun{" "}
              </h2>
              <p>Haftalık bültenimize abone olun, en kritik analiz ve sinyalleri kaçırmayın.</p>

              <div className="tp-cta-2-form">
                <form action="#">
                  <span>
                    <EmailTwo />
                  </span>
                  <input type="email" placeholder="E-posta adresinizi girin" required />
                  <div className="tp-cta-2-btn">
                    <button className="tp-btn-round" type="submit">Abone Ol!</button>
                  </div>
                </form>
              </div>

              <div className="tp-cta-2-info-list">
                <span>
                  <span>
                    <CheckSvg />
                  </span>
                  Anında Erişim
                </span>
                <span>
                  <span>
                    <CheckSvg />
                  </span>
                  Kredi Kartı Gerektirmez
                </span>
                <span>
                  <span>
                    <CheckSvg />
                  </span>
                  5000+ Aktif Yatırımcı
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
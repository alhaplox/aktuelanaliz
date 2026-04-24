import Image from 'next/image';
import Link from 'next/link';
import { DownArrowTwo, Email, RightArrowFour } from '../svg';
import FooterSocial from './footer-social';
import { footerLinks } from '@/data/footer-links';
import logo from '@/assets/img/logo/logo-black.png';
import google_play from '@/assets/img/footer/google-play.jpg';
import apple_store from '@/assets/img/footer/apple-store.jpg';

export default function FooterTwo() {
   return (
      <footer>
         <div className="tp-footer-2">
            <div className="tp-footer-main pt-70 pb-55">
               <div className="container">
                  <div className="row">
                     <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="tp-footer-widget tp-footer-2-col-1 mb-30">
                           <div className="tp-footer-widget-logo mb-20 tp-header-logo">
                              <Link href="/">
                                 <Image src={logo} alt="Aktüel Analiz" style={{ height: "auto" }} />
                              </Link>
                           </div>
                           <div className="tp-footer-widget-content">
                              <p>Aktüel Analiz; finansal piyasalarda bilinçli adımlar atmanız için profesyonel analiz, güncel veri ve kapsamlı eğitimler sunan dijital bir platformdur.</p>
                           </div>
                           <div className="tp-footer-contact">
                              <div className="tp-footer-btn">
                                 <Link className="tp-btn-round" href="/contact">Bize Ulaşın
                                    <span>
                                       <RightArrowFour />
                                    </span>
                                 </Link>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                        <div className="tp-footer-widget tp-footer-2-col-2 mb-30">
                           <h4 className="tp-footer-widget-title mb-15">Kurumsal</h4>
                           <div className="tp-footer-widget-link">
                              <ul>
                                 {footerLinks.link_one.map((link) => (
                                    <li key={link.id}>
                                       <Link href={link.link}>{link.title}</Link>
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                        <div className="tp-footer-widget tp-footer-2-col-3 mb-30">
                           <h4 className="tp-footer-widget-title mb-15">Hızlı Erişim</h4>
                           <div className="tp-footer-widget-link">
                              <ul>
                                 {footerLinks.link_two.map((link) => (
                                    <li key={link.id}>
                                       <Link href={link.link}>{link.title}</Link>
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="p-footer-widget tp-footer-2-col-4 mb-30">
                           <h4 className="tp-footer-widget-title mb-20">Analiz Bülteni</h4>
                           <div className="tp-footer-contact">
                              <span>Sorunuz mu var?</span>
                              <a href="tel:08500000000">0850 000 00 00</a>
                           </div>
                           <div className="tp-footer-contact-mail mb-20">
                              <a href="mailto:info@aktuelanaliz.com">
                                 <span>
                                    <Email />
                                 </span>
                                 info@aktuelanaliz.com</a>
                           </div>
                           <div className="tp-footer-app">
                              <a href="#">
                                 <Image src={google_play} alt="google-play" />
                              </a>
                              <a href="#">
                                 <Image src={apple_store} alt="apple-store" />
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="tp-footer-bottom">
               <div className="container">
                  <div className="row align-items-center">
                     <div className="col-lg-3 col-md-4">
                        <div className="tp-footer-bottom-social">
                           <FooterSocial />
                        </div>
                     </div>
                     <div className="col-lg-6 col-md-5">
                        <div className="tp-footer-copyright text-start text-md-center">
                           <span>© {new Date().getFullYear()} <a href="#">Aktüel Analiz</a>. Tüm hakları saklıdır.</span>
                        </div>
                     </div>
                     <div className="col-lg-3 col-md-3">
                        <div className="header-bottom__lang-2 text-start text-md-end">
                           <ul>
                              <li>
                                 <a id="header-bottom__lang-toggle" href="#">
                                    <span>TR</span>
                                    <span>
                                       <DownArrowTwo />
                                    </span>
                                 </a>
                                 <ul className="header-bottom__lang-submenu-2">
                                    <li><a href="#">English</a></li>
                                 </ul>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   )
}
'use client'; // Form ve dashboard etkileşimi için gerekli
import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Email } from "../svg";
import FooterSocial from "./footer-social";
import logo from '@/assets/img/logo/logo-black.png';
import logo_white from '@/assets/img/logo/logo-white.png';
import { footerLinks } from "@/data/footer-links";

type Props = {
  dashboard_footer?: boolean;
  bgClr?: string;
}

export default function FooterSeven({ bgClr, dashboard_footer }: Props) {
  // Form gönderimini yöneten basit bir fonksiyon
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter abonelik mantığı buraya eklenebilir
  };

  return (
    <footer>
      <div className={`tp-footer-main ${dashboard_footer ? 'tpd-dashboard-footer' : 'tp-footer-inner'} pt-80 pb-55`}
        style={bgClr ? { backgroundColor: bgClr } : dashboard_footer ? { backgroundColor: "#0a1c3a" } : {}}>
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-3 col-md-6 col-sm-6">
              <div className="tp-footer-widget tp-footer-col-1 mb-30">
                <div className="tp-footer-widget-logo mb-20 tp-header-logo">
                  <Link href="/">
                    <Image
                      src={dashboard_footer ? logo_white : logo}
                      alt="Aktüel Analiz Logo"
                      style={{ height: "auto", width: "160px" }}
                      priority
                    />
                  </Link>
                </div>
                <div className="tp-footer-widget-content">
                  <p>
                    Finans ve borsa dünyasında <br />
                    stratejik analizlerle bir adım <br />
                    önde olun.
                  </p>
                </div>
                <div className="tp-footer-contact">
                  <span>Sorularınız mı var?</span>
                  <a href="tel:08500000000">0850 000 00 00</a>
                </div>
                <div className="tp-footer-contact-mail">
                  <a href="mailto:info@aktuelanaliz.com">
                    <span>
                      <Email />
                    </span>
                    info@aktuelanaliz.com
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6">
              <div className="tp-footer-widget tp-footer-col-2 mb-30">
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

            <div className="col-xl-2 col-lg-3 col-md-5 col-sm-5">
              <div className="tp-footer-widget tp-footer-col-3 mb-30">
                <h4 className="tp-footer-widget-title mb-15">Hızlı Linkler</h4>
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

            <div className="col-xl-4 col-lg-3 col-md-7 col-sm-7">
              <div className="p-footer-widget tp-footer-5-col-4 mb-30">
                <h4 className="tp-footer-widget-title mb-15">Bültene Katılın</h4>
                <div className="tp-footer-newsletter-wrap">
                  <p>Önemli piyasa güncellemelerini <br /> kaçırmamak için abone olun.</p>
                  <form onSubmit={handleSubscribe}>
                    <div className={`tp-footer-newsletter-wrapper ${dashboard_footer ? '' : 'tp-footer-inner-input'} mb-30`}>
                      <div className="tp-footer-newsletter-input">
                        <input type="email" placeholder="E-posta adresiniz" required />
                      </div>
                      <div className={`${dashboard_footer ? 'tp-footer-newsletter-submit' : 'tp-footer-
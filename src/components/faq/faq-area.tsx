'use client';
import React, { useState } from "react";
import Link from "next/link";
import { SearchSvgTwo } from "../svg";
import FaqItem from "./faq-item";

// Veri yapısını tek bir yerde toplamak yönetimi kolaylaştırır
const FAQ_DATA = {
  student: {
    label: "Öğrenci",
    topics: [
      { id: 1, text: "Hesap ve Profil", href: "/my-profile" },
      { id: 2, text: "Eğitim Süreci", href: "/course-with-filter" },
      { id: 3, text: "Ödeme ve İadeler", href: "#" },
      { id: 4, text: "Teknik Sorunlar", href: "#" },
    ],
    faqs: [
      { id: 1, question: "Aktüel Analiz eğitimlerine nasıl katılabilirim?", answer: "Eğitimlerimize katılmak için üye girişi yaptıktan sonra dilediğiniz eğitimi seçip kayıt olabilirsiniz." },
      { id: 2, question: "İade politikası nasıl çalışıyor?", answer: "Eğitim içeriklerine erişim sağlanmadığı sürece 14 gün içinde iade talebinde bulunabilirsiniz." },
    ]
  },
  instructor: {
    label: "Eğitmen",
    topics: [
      { id: 1, text: "Eğitmen Paneli", href: "#" },
      { id: 2, text: "İçerik Yükleme", href: "#" },
      { id: 3, text: "Kazanç Raporları", href: "#" },
    ],
    faqs: [
      { id: 3, question: "Nasıl eğitmen olabilirim?", answer: "Eğitmen başvuru formunu doldurarak uzmanlık alanlarınızı bize iletebilirsiniz." },
      { id: 4, question: "Ödemeler ne zaman yapılıyor?", answer: "Eğitmen kazançları her ayın ilk haftası tanımlanan hesaplara yatırılmaktadır." },
    ]
  }
};

export default function FaqArea() {
  // Aktif tabı state ile yönetiyoruz (Bootstrap bağımlılığını azaltır)
  const [activeTab, setActiveTab] = useState<"student" | "instructor">("student");

  return (
    <section className="tp-faq-area tp-faq-p pt-50 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tp-instructor-become-tab">
              {/* Tab Navigasyon */}
              <ul className="nav nav-tabs justify-content-center" role="tablist">
                {(Object.keys(FAQ_DATA) as Array<keyof typeof FAQ_DATA>).map((key) => (
                  <li key={key} className="nav-item">
                    <button
                      className={`nav-link ${activeTab === key ? "active" : ""}`}
                      onClick={() => setActiveTab(key)}
                      type="button"
                    >
                      {FAQ_DATA[key].label}
                    </button>
                  </li>
                ))}
              </ul>

              {/* Tab İçeriği */}
              <div className="tab-content mt-40">
                <div className="tab-pane show active">
                  <div className="row">
                    {/* Sol Kenar Çubuğu */}
                    <div className="col-lg-4">
                      <div className="tp-faq-wrap">
                        <div className="tp-faq-search mb-30">
                          <div className="tp-header-2-search">
                            <form action="#" onSubmit={(e) => e.preventDefault()}>
                              <input type="text" placeholder="Soru ara..." />
                              <button className="tp-header-2-search-btn" type="submit">
                                <span><SearchSvgTwo /></span>
                              </button>
                            </form>
                          </div>
                        </div>
                        <div className="tp-faq-sidebar">
                          <h4 className="tp-faq-sidebar-title">İlgili Konular</h4>
                          <ul>
                            {FAQ_DATA[activeTab].topics.map((topic) => (
                              <li key={topic.id}>
                                <Link href={topic.href}>{topic.text}</Link>
                              </li>
                            ))}
                          </ul>
                          <div className="tp-faq-sidebar-btn mt-30">
                            <Link className="tp-btn-inner w-100 text-center" href="/contact">
                              Bize Ulaşın
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Sağ Akordeon Alanı */}
                    <div className="col-lg-8">
                      <div className="tp-faq-box">
                        <div className="tpd-accordion">
                          <div className="accordion accordion-flush" id="faqAccordion">
                            {FAQ_DATA[activeTab].faqs.map((faq) => (
                              <FaqItem key={faq.id} faq={faq} parentId="faqAccordion" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Tab İçeriği Bitiş */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
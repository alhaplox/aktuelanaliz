import React from "react";
import { HandCheck } from "../svg";
import Link from "next/link";

const requirements = [
  "VIP Analiz grubuna katılım için aktif bir abonelik planına sahip olmalısınız.",
  "Teknik analiz eğitimleri için temel düzeyde borsa ve <br> grafik okuma bilgisine sahip olmanız önerilir.",
  "Piyasa verilerine ve özel raporlara erişim için <br> kullanıcı profilinizin doğrulanmış olması gerekmektedir.",
  "Kripto para ve kaldıraçlı işlemler eğitimi için 18 yaş <br> ve üzeri olma zorunluluğu bulunmaktadır.",
  "Risk yönetimi ve portföy çeşitlendirme kurallarına uyum taahhüdü.",
];

const deadlinesData = [
  {
    category: "Piyasa Açılışı",
    date: "Her Pazartesi 09:00",
    decision: "Haftalık Bülten",
  },
  {
    category: "VIP Canlı Yayın",
    date: "Çarşamba 21:00",
    decision: "Soru-Cevap",
  },
  {
    category: "Aylık Portföy",
    date: "Ayın Son Günü",
    decision: "Performans Raporu",
  },
  {
    category: "Eğitim Kayıt",
    date: "Kontenjanla Sınırlı",
    decision: "Erken Kayıt Avantajı",
  },
];

export default function ApplyRequirement() {
  return (
    <section className="tp-apply-requirement-area tp-apply-requirement-bg pt-110 pb-120">
      <div className="container">
        <div className="row">
          {/* Sol Kolon: Gereksinimler */}
          <div className="col-lg-8">
            <div className="tp-apply-requirement-box">
              <h3 className="tp-apply-process-title">
                Üyelik ve Erişim Süreci
              </h3>
              <span>Aktüel Analiz VIP dünyasına katılmak için:</span>
              <div className="tp-apply-requirement-bullet mb-55">
                {requirements.map((requirement, index) => (
                  <p key={index}>
                    <span>
                      <HandCheck />
                    </span>
                    <i dangerouslySetInnerHTML={{ __html: requirement }}></i>
                  </p>
                ))}
              </div>
              <div className="tp-apply-requirement-btn">
                <Link className="tp-btn" href="/membership">Paketleri Görüntüle</Link>
              </div>
            </div>
          </div>

          {/* Sağ Kolon: Takvim */}
          <div className="col-lg-4">
            <div className="tp-apply-dedline-box">
              <h4 className="tp-apply-dedline-wrap-title">
                Analiz ve Yayın Takvimi
              </h4>
              <div className="tp-apply-dedline-wrapper">
                {deadlinesData.map((deadline, index) => (
                  <div
                    key={index}
                    className={`tp-apply-dedline-wrap d-flex align-items-center justify-content-between ${index === deadlinesData.length - 1 ? "b-none" : ""
                      }`}
                  >
                    <div className="tp-apply-dedline-content">
                      <span>{deadline.category}</span>
                      <p>{deadline.date}</p>
                    </div>
                    <div className="tp-apply-dedline-date">
                      <p>{deadline.decision}</p>
                    </div>
                  </div>
                ))}

                <div className="tp-apply-btn mt-30">
                  <Link className="tp-btn" href="/contact">
                    Destek Alın
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
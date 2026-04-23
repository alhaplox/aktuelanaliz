'use client';
import React from "react";
import { MinusSvg, PlusThreeSvg } from "@/components/svg";


export default function CourseDetailsInfo() {
  const [showMore, setShowMore] = React.useState(false);
  return (
    <div id="info">
      <h4 className="tp-course-details-2-main-title">Eğitim Hakkında</h4>
      <div className="tp-course-details-2-text mb-60">
        <div className={`content ${showMore ? 'show' : ''}`}>
          <p>Bu eğitim, finansal piyasalara ilgi duyan ve kendi yatırım stratejilerini geliştirmek isteyen katılımcılar için hazırlandı. <br />
            En temel kavramlardan başlayarak, adım adım ileri seviye analiz yöntemlerine kadar kapsamlı bir yol izleyeceğiz. <br />
            Halihazırda yatırım deneyiminiz olsa bile, profesyonel trade disiplini ve risk yönetimi kazanmak istiyorsanız <br />
            bu program tam size göre!</p>
          <p>İlk olarak, temel ve teknik analiz arasındaki farkları inceleyeceğiz. Gerçek piyasa verileri üzerinden <br />
            vaka analizi yapacak, ardından grafik formasyonlarını ve indikatörleri nasıl verimli <br /> kullanabileceğimizi öğreneceğiz.</p>
        </div>
        <a onClick={() => setShowMore(!showMore)} className="tp-course-details-showmore show-more-button pointer">
          <span className="svg-icon">
            {showMore ? <MinusSvg clr="#3C66F9" /> : <PlusThreeSvg clr="#3C66F9" />}
          </span>
          Daha {showMore ? 'Az' : 'Fazla'} Göster
        </a>
      </div>

      <h4 className="tp-course-details-2-main-title">Neler Öğreneceksiniz?</h4>
      <div className="tp-course-details-2-list">
        <ul>
          <li>Piyasa psikolojisi ve yatırımcı disiplini.</li>
          <li>Mum grafikleri ve teknik göstergelerin yorumlanması.</li>
          <li>Kendi trade stratejinizi oluşturma ve test etme.</li>
          <li>Risk ve kasa yönetimi teknikleri.</li>
          <li>Haber akışlarını ve ekonomik takvimi okuma.</li>
          <li>Kripto paralar, hisse senetleri ve emtia piyasaları arasındaki farklar.</li>
          <li>Trend dönüş sinyallerini önceden tespit etme.</li>
        </ul>
        <p>Bu eğitimle birlikte, sadece teorik bilgiye değil; aynı zamanda geçmiş piyasa verileri,
          strateji kontrol listeleri ve özel analiz araçları gibi birçok ek kaynağa da erişim sağlayacaksınız.</p>
      </div>
    </div>
  )
}
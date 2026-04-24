import Link from "next/link";

const applicationProcess = [
  {
    step: 1,
    title: "Paket Seçimi ve Kayıt",
    description: `Size en uygun analiz paketini seçerek kayıt işlemini tamamlayın. <br> Kayıt sırasında verdiğiniz bilgiler, analiz raporlarınızın size ulaştırılması ve <br> profil doğrulaması için kullanılacaktır.`,
    linkText: "Paketleri İncele",
    linkHref: "/membership"
  },
  {
    step: 2,
    title: "Ödeme ve Onay",
    description: `Ödemeniz tamamlandıktan sonra sistemimiz üyeliğinizi otomatik olarak aktif eder. <br> Güvenli ödeme altyapımız sayesinde tüm işlemleriniz uçtan uca şifrelenir.`,
  },
  {
    step: 3,
    title: "VIP Kanallara Katılım",
    description: `Üyelik paneliniz üzerinden size özel tanımlanan <b>Telegram VIP Analiz</b> <br> kanalına katılım linkine erişebilirsiniz. Sinyaller ve anlık piyasa <br> yorumları bu kanal üzerinden paylaşılır.`
  },
  {
    step: 4,
    title: "Profil ve Risk Tercihleri",
    description: `Yatırım hedeflerinizi ve risk toleransınızı belirlemek için kısa bir anketi <br> tamamlamanız istenir. Bu sayede size daha odaklı eğitim içerikleri <br> ve raporlar sunabiliriz.`
  },
  {
    step: 5,
    title: "Analizlere Başlayın",
    description: `Artık hazırsınız! Günlük bültenler, özel teknik analiz videoları ve <br> canlı piyasa takipleriyle yatırımlarınıza profesyonel bir bakış açısı katın.`
  }
];


export default function ProcessTwo() {
  return (
    <section className="tp-apply-process-area grey-bg pb-60 pt-60">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div id="down" className="tp-apply-process-wrapper">
              <h3 className="tp-apply-process-title">Nasıl Başlarım?</h3>

              {applicationProcess.map((step, index) => (
                <div key={index} className="tp-apply-process-box">
                  <h4 className="tp-apply-process-subtitle">
                    <span>{step.step}</span>{step.title}
                  </h4>
                  <p dangerouslySetInnerHTML={{ __html: step.description }}></p>

                  {step.linkText && step.linkHref && (
                    <Link className="tp-btn mt-30" href={step.linkHref}>
                      {step.linkText}
                    </Link>
                  )}
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
    </section>
  )
} s
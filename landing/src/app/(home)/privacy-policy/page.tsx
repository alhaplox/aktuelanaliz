import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Gizlilik Politikası | Aktüel Analiz Akademi',
  description: 'Aktüel Analiz Akademi gizlilik politikası, kişisel verilerin korunması ve çerez politikası hakkında bilgilendirme.',
};

export default function PrivacyPolicy() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-gray-50 min-h-screen py-16 md:py-24">
      <div className="container max-w-4xl mx-auto px-4">

        {/* Geri Dönüş Linki */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primaryDark transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
            Ana Sayfaya Dön
          </Link>
        </div>

        {/* Ana Kart Başlık Yapısı */}
        <div className="bg-white p-6 md:p-12 rounded-xl shadow-sm border border-gray-100">
          <div className="border-b border-gray-100 pb-8 mb-8">
            <span className="text-sm text-primary uppercase font-bold tracking-wider">
              Yasal Prosedürler
            </span>
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mt-2">
              Gizlilik Politikası
            </h1>
            <p className="text-sm text-gray-400 mt-4">
              Son Güncelleme Tarihi: 19 Mayıs {currentYear}
            </p>
          </div>

          {/* İçerik Metni */}
          <div className="prose prose-gray max-w-none space-y-6 text-gray-600 leading-relaxed text-base">
            <p>
              <strong>Aktüel Analiz</strong> (&quot;biz&quot;, &quot;bizim&quot; veya &quot;şirketimiz&quot;) olarak, web sitemizi ziyaret eden kursiyerlerimizin ve kullanıcılarımızın gizliliğine ve kişisel verilerinin korunmasına büyük önem veriyoruz. Bu Gizlilik Politikası, web sitemiz veya Meta (Facebook/Instagram) reklam formlarımız üzerinden topladığımız kişisel verilerin türlerini, bunları nasıl kullandığımızı, kimlerle paylaştığımızı ve verileriniz üzerindeki haklarınızı açıklamaktadır.
            </p>

            <hr className="border-gray-100 my-6" />

            {/* Madde 1 */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Toplanan Kişisel Veriler</h2>
              <p className="mb-2">
                Web sitemizdeki iletişim ve başvuru formlarını doldurduğunuzda, kendi rızanızla bizimle paylaştığınız aşağıdaki bilgileri işlemekteyiz:
              </p>
              <ul className="list-disc list-inside space-y-1 ms-2">
                <li><strong>Kimlik Bilgileri:</strong> Adınız ve soyadınız.</li>
                <li><strong>İletişim Bilgileri:</strong> E-posta adresiniz ve telefon numaranız.</li>
                <li><strong>Eğitim Tercihleri:</strong> İlgilendiğiniz eğitim modeli (Kayıt Video Eğitimler, Online Canlı Grup Eğitimi veya Birebir Mentorluk).</li>
                <li><strong>Mesaj İçeriği:</strong> Form üzerindeki mesaj alanına kendi isteğinizle eklediğiniz notlar.</li>
              </ul>
            </div>

            {/* Madde 2 */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Verilerin Toplanma Yöntemi ve Amacı</h2>
              <p>
                Kişisel verileriniz, tamamen sizin özgür iradenizle doldurduğunuz başvuru formları aracılığıyla dijital ortamda (ve entegre edilmiş Google Sheets / veri tabanı altyapılarında) toplanır. Bu veriler aşağıdaki amaçlarla işlenmektedir:
              </p>
              <ul className="list-disc list-inside space-y-1 ms-2 mt-2">
                <li>Seçtiğiniz eğitim programı hakkında size detaylı bilgi sunmak ve başvurunuzu neticelendirmek,</li>
                <li>Eğitim süreçleri, fiyatlandırma ve güncellemeler hakkında sizinle iletişim kurmak,</li>
                <li>Meta (Facebook/Instagram) ve diğer dijital platformlar üzerindeki reklam hedeflemelerimizi ve kullanıcı deneyimini optimize etmek.</li>
              </ul>
            </div>

            {/* Madde 3 */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Çerezler (Cookies) ve Otomatik Toplanan Veriler</h2>
              <p>
                Web sitemizde, platformun kararlı çalışmasını sağlamak, analitik veriler toplamak ve reklam performansını ölçmek amacıyla çerezler (cookies) kullanılmaktadır.
                Tarayıcınızda çalışan <strong>Meta Pixel</strong> veya <strong>Google Analytics</strong> çerezleri, web sitemizi ziyaret eden kullanıcıların davranışlarını anonim olarak analiz etmek amacıyla veri toplayabilir. Bu veriler kimliğinizi doğrudan ifşa etmez.
              </p>
            </div>

            {/* Madde 4 */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Verilerin Üçüncü Taraflarla Paylaşımı</h2>
              <p>
                Aktüel Analiz, topladığı kişisel verileri asla üçüncü şahıslara satmaz veya kiralamaz. Verileriniz yalnızca form verilerinizin güvenle saklandığı altyapı hizmetleri (veri tabanı sağlayıcıları, form işleme servisleri veya veri akışını sağladığımız Google Sheets entegrasyonları) ile operasyonel amaçlarla paylaşılabilir.
              </p>
            </div>

            {/* Madde 5 */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Veri Güvenliği</h2>
              <p>
                Paylaştığınız bilgiler, yetkisiz erişim, kayıp, kötüye kullanım veya değiştirilme risklerine karşı endüstri standardı güvenlik önlemleriyle (SSL şifreleme ve güvenli sunucu altyapıları) korunmaktadır. Form verileriniz yalnızca yetkili eğitim danışmanlarımız tarafından işlenir.
              </p>
            </div>

            {/* Madde 6 */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Kullanıcı Hakları (KVKK ve GDPR Uyumluluğu)</h2>
              <p>
                Dilediğiniz zaman bizimle iletişime geçerek; kişisel verilerinizin işlenip işlenmediğini öğrenme, verilerinizin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme veya verilerinizin sistemlerimizden tamamen silinmesini (unutulma hakkı) talep etme hakkına sahipsiniz.
              </p>
            </div>

            {/* Madde 7 */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 mt-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">7. İletişim Bilgileri</h2>
              <p className="text-sm">
                Bu Gizlilik Politikası ile ilgili her türlü soru, görüş veya veri silme talepleriniz için bizimle doğrudan aşağıdaki e-posta adresi üzerinden iletişime geçebilirsiniz:
              </p>
              <p className="mt-3 text-base font-semibold text-gray-900">
                E-posta: <a href="mailto:info@aktuelanaliz.com" className="text-primary hover:underline">info@aktuelanaliz.com</a>
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
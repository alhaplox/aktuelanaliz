import IconifyIcon from '@/components/wrappers/IconifyIcon'
import React from 'react'

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50/50">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-sm text-primary uppercase font-semibold tracking-wider">
            Eğitim Programları
          </span>
          <h2 className="text-3xl md:text-4xl/tight font-semibold text-black mt-4">
            Finansal Piyasaları Uzmanından Öğrenin
          </h2>
          <p className="text-base font-medium mt-4 text-gray-600">
            Sıfırdan ileri seviyeye, yatırımlarınızı rasyonel verilere dayandırarak yönetmeniz için hazırlanan modüllerimiz.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-6 md:gap-y-12 lg:gap-y-16 md:pt-20 pt-12">

          {/* 1. BIST ve Hisse Senetleri */}
          <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100/80">
            <div className="flex items-center justify-center">
              <div className="items-center justify-center flex bg-primary/10 rounded-[49%_80%_40%_90%_/_50%_30%_70%_80%] h-20 w-20 border border-primary/20">
                <IconifyIcon
                  icon="lucide:trending-up"
                  className="h-10 w-10 text-primary"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold pt-4">BIST 100 & Hisse Senetleri</h3>
            <p className="text-base text-gray-600 mt-2">
              Borsa İstanbul mekanizması, şirket seçimi ve doğru zamanda hisse senedi alım-satım stratejileri.
            </p>
          </div>

          {/* 2. Kripto Paralar */}
          <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100/80">
            <div className="flex items-center justify-center">
              <div className="items-center justify-center flex bg-primary/10 rounded-[49%_80%_40%_90%_/_50%_30%_70%_80%] h-20 w-20 border border-primary/20">
                <IconifyIcon
                  icon="lucide:bitcoin"
                  className="h-10 w-10 text-primary"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold pt-4">Kripto Para Piyasaları</h3>
            <p className="text-base text-gray-600 mt-2">
              Bitcoin, Ethereum ve altcoin ekosistemi, zincir üstü (on-chain) veriler ve güvenli trading süreçleri.
            </p>
          </div>

          {/* 3. Global Piyasalar (Nasdaq) */}
          <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100/80">
            <div className="flex items-center justify-center">
              <div className="items-center justify-center flex bg-primary/10 rounded-[49%_80%_40%_90%_/_50%_30%_70%_80%] h-20 w-20 border border-primary/20">
                <IconifyIcon
                  icon="lucide:globe"
                  className="h-10 w-10 text-primary"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold pt-4">Nasdaq & ABD Piyasaları</h3>
            <p className="text-base text-gray-600 mt-2">
              Amerikan borsalarında işlem yapma, teknoloji devlerinin analizi ve küresel makroekonomik takip.
            </p>
          </div>

          {/* 4. Emtia Ticareti */}
          <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100/80">
            <div className="flex items-center justify-center">
              <div className="items-center justify-center flex bg-primary/10 rounded-[49%_80%_40%_90%_/_50%_30%_70%_80%] h-20 w-20 border border-primary/20">
                <IconifyIcon
                  icon="lucide:coins"
                  className="h-10 w-10 text-primary"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold pt-4">Emtia Piyasaları</h3>
            <p className="text-base text-gray-600 mt-2">
              Altın, gümüş, petrol gibi emtiaların fiyatlama dinamikleri ve portföy dengelemedeki rolleri.
            </p>
          </div>

          {/* 5. Forex & Pariteler */}
          <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100/80">
            <div className="flex items-center justify-center">
              <div className="items-center justify-center flex bg-primary/10 rounded-[49%_80%_40%_90%_/_50%_30%_70%_80%] h-20 w-20 border border-primary/20">
                <IconifyIcon
                  icon="lucide:arrow-left-right"
                  className="h-10 w-10 text-primary"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold pt-4">Forex & Döviz Pariteleri</h3>
            <p className="text-base text-gray-600 mt-2">
              Kaldıraçlı piyasaların işleyişi, EUR/USD gibi majör pariteler ve likidite yönetimi mantığı.
            </p>
          </div>

          {/* 6. Teknik Analiz Kursu */}
          <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100/80">
            <div className="flex items-center justify-center">
              <div className="items-center justify-center flex bg-primary/10 rounded-[49%_80%_40%_90%_/_50%_30%_70%_80%] h-20 w-20 border border-primary/20">
                <IconifyIcon
                  icon="lucide:candlestick-chart"
                  className="h-10 w-10 text-primary"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold pt-4">İleri Teknik Analiz</h3>
            <p className="text-base text-gray-600 mt-2">
              Grafik formasyonları, indikatörler, mum formasyonları ve price action (fiyat hareketleri) stratejileri.
            </p>
          </div>

          {/* 7. Temel Analiz Kursu */}
          <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100/80">
            <div className="flex items-center justify-center">
              <div className="items-center justify-center flex bg-primary/10 rounded-[49%_80%_40%_90%_/_50%_30%_70%_80%] h-20 w-20 border border-primary/20">
                <IconifyIcon
                  icon="lucide:bar-chart-3"
                  className="h-10 w-10 text-primary"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold pt-4">Makro & Temel Analiz</h3>
            <p className="text-base text-gray-600 mt-2">
              Bilanço okuma, temel rasyolar (F/K, PD/DD), merkez bankası kararları ve piyasaya etkileri.
            </p>
          </div>

          {/* 8. Risk ve Portföy Yönetimi */}
          <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100/80">
            <div className="flex items-center justify-center">
              <div className="items-center justify-center flex bg-primary/10 rounded-[49%_80%_40%_90%_/_50%_30%_70%_80%] h-20 w-20 border border-primary/20">
                <IconifyIcon
                  icon="lucide:shield-check"
                  className="h-10 w-10 text-primary"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold pt-4">Risk & Portföy Yönetimi</h3>
            <p className="text-base text-gray-600 mt-2">
              Kasa yönetimi, zarar durdur (stop-loss) seviyeleri, psikoloji yönetimi ve sürdürülebilir büyüme.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Services
import Image from 'next/image'
import React from 'react'
import logo from '@/assets/images/logo-white.png'

function Footer() {
  return (
    <>
      <footer className="bg-[#17243A]">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 pb-16 pt-16">

            {/* Sol Kurumsal Alan */}
            <div className="col-span-full lg:col-span-2">
              <div className="max-w-2xl mx-auto">
                <div className="flex items-center">
                  <Image src={logo} alt="Aktüel Analiz Logo" className="h-10 me-5 w-auto" width={132} height={40} />
                </div>
                <p className="text-gray-300 max-w-xs mt-6 text-sm leading-relaxed">
                  Finansal okuryazarlık, teknik analiz ve rasyonel portföy yönetimi eğitimleri ile geleceğinizi doğru verilerle inşa edin.
                </p>
              </div>
              <div className="mt-6 grid space-y-3">
                <a className="inline-flex items-center gap-x-4 text-gray-300 hover:text-white transition-all duration-300 text-sm" href="mailto:info@aktuelanaliz.com">
                  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width={20} height={16} x={2} y={4} rx={2} /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                  info@aktuelanaliz.com
                </a>
                <a className="inline-flex items-center gap-x-4 text-gray-300 hover:text-white transition-all duration-300 text-sm" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  Destek Hattı & WhatsApp
                </a>
              </div>
            </div>

            {/* Menü 1: Kurumsal */}
            <div className="col-span-1">
              <h4 className="font-semibold text-gray-100 uppercase text-sm tracking-wider">Kurumsal</h4>
              <div className="mt-6 grid space-y-3">
                <p><a className="inline-flex gap-x-2 text-sm text-gray-300 hover:text-white transition-all duration-300" href="#about">Hakkımızda</a></p>
                <p><a className="inline-flex gap-x-2 text-sm text-gray-300 hover:text-white transition-all duration-300" href="#features">Neden Biz?</a></p>
                <p><a className="inline-flex gap-x-2 text-sm text-gray-300 hover:text-white transition-all duration-300" href="#testimonials">Kursiyer Yorumları</a></p>
                <p><a className="inline-flex gap-x-2 text-sm text-gray-300 hover:text-white transition-all duration-300" href="#contact">İletişim</a></p>
              </div>
            </div>

            {/* Menü 2: Eğitimlerimiz */}
            <div className="col-span-1">
              <h4 className="font-semibold text-gray-100 uppercase text-sm tracking-wider">Eğitimler</h4>
              <div className="mt-6 grid space-y-3">
                <p><a className="inline-flex gap-x-2 text-sm text-gray-300 hover:text-white transition-all duration-300" href="#pricing">Video Eğitimler</a></p>
                <p><a className="inline-flex gap-x-2 text-sm text-gray-300 hover:text-white transition-all duration-300" href="#pricing">Canlı Grup Eğitimi</a></p>
                <p><a className="inline-flex gap-x-2 text-sm text-gray-300 hover:text-white transition-all duration-300" href="#pricing">Birebir Mentorluk</a></p>
                <p><a className="inline-flex gap-x-2 text-sm text-gray-300 hover:text-white transition-all duration-300" href="#faq">Sıkça Sorulanlar</a></p>
              </div>
            </div>

            {/* Menü 3: Meta & Yasal Bağlantılar */}
            <div className="col-span-1">
              <h4 className="font-semibold text-gray-100 uppercase text-sm tracking-wider">Yasal & Politika</h4>
              <div className="mt-6 grid space-y-3">
                <p>
                  <a className="inline-flex gap-x-2 text-sm text-gray-300 hover:text-white font-medium transition-all duration-300 text-primary" href="/privacy-policy">
                    Gizlilik Politikası
                  </a>
                </p></div>
            </div>

          </div>
        </div>

        {/* Alt Footer - Telif Hakları & Sosyal Medya */}
        <div className="py-4 bg-[#1C2940]">
          <div className="container">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-400 text-center sm:text-left">
                {new Date().getFullYear()} © Aktüel Analiz. Tüm Hakları Saklıdır.
              </p>

              {/* Sosyal Medya İkonları */}
              <div className="flex items-center gap-2">
                <a className="size-8 inline-flex justify-center items-center text-sm font-semibold rounded-md text-gray-400 hover:text-white hover:bg-primary transition-all duration-300" href="#" aria-label="Facebook">
                  <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </a>
                <a className="size-8 inline-flex justify-center items-center text-sm font-semibold rounded-md text-gray-400 hover:text-white hover:bg-primary transition-all duration-300" href="#" aria-label="Youtube">
                  <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                  </svg>
                </a>
                <a className="size-8 inline-flex justify-center items-center text-sm font-semibold rounded-md text-gray-400 hover:text-white hover:bg-primary transition-all duration-300" href="#" aria-label="Twitter / X">
                  <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </a>
                <a className="size-8 inline-flex justify-center items-center text-sm font-semibold rounded-md text-gray-400 hover:text-white hover:bg-primary transition-all duration-300" href="#" aria-label="LinkedIn">
                  <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </a>
              </div>

            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
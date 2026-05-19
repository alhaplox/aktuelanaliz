import Image from 'next/image'
import React from 'react'
import Link from 'next/link' // Next.js Link bileşenini ekledik
import mobile from '@/assets/images/mobile.png'

export const Hero = () => {
  return (
    <section
      className="relative pt-32 pb-20 bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black"
      id="home"
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-6 gap-y-10 items-center">
          <div className="relative">
            <h1 className="text-3xl md:text-5xl/tight lg:text-6xl/tight text-white tracking-normal leading-normal font-bold max-w-2xl mt-4">
              Piyasalara Yön Verin, Geleceğinizi <span className="text-primary">Analiz Edin</span>
            </h1>
            <p className="text-base text-gray-300 font-medium max-w-lg mt-6">
              BIST, Kripto, Nasdaq, Emtia ve Parite piyasalarında profesyonel eğitimler. Aktüel Analiz ile teknik analizi öğrenin, yatırımlarınızı şansa bırakmayın.
            </p>
            <div className="flex flex-wrap mt-9 text-center gap-3">
              {/* İletişim Bölümüne Bağlanan Buton */}
              <Link href="#contact" className="py-2 px-6 rounded-md text-white text-base bg-primary hover:bg-primaryDark border border-primary hover:border-primaryDark transition-all duration-500 font-medium inline-block">
                Bize Ulaşın
              </Link>
            </div>
          </div>
          <div className="relative">
            <Image
              src={mobile}
              className="md:h-[600px] lg:ms-auto mx-auto object-contain"
              alt="Aktüel Analiz Piyasalar Görseli"
              width={550}
              height={800}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
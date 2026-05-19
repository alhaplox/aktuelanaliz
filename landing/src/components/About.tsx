import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Image from 'next/image'
import React from 'react'
import iphone from "@/assets/images/feature-iphone.png";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 items-center gap-12">

          <div className="lg:ms-5">
            <div>
              <span className="text-sm text-primary uppercase font-semibold tracking-wider">
                Hakkımızda
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl/tight font-semibold text-black mt-4">
              8 Yıllık Deneyimle Finansal Okuryazarlığın Öncüsüyüz
            </h2>
            <p className="text-base font-normal text-gray-600 mt-6 leading-relaxed">
              Aktüel Analiz, 8 yılı aşkın süredir finans ve yatırım dünyasında doğru bilginin adresi olmuştur. Bugüne kadar hem bireysel yatırımcılara hem de köklü kurumsal firmalara sunduğumuz sayısız eğitimle, binlerce kursiyerimizin piyasalarda rasyonel, veriye dayalı ve profesyonel kararlar almasını sağladık.
            </p>

            {/* Başarı Metrikleri / Özellikler */}
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 mt-9">

              {/* Bireysel Eğitimler */}
              <div>
                <div className="flex items-center justify-start">
                  <div className="items-center justify-center flex bg-green-50 rounded-full h-16 w-16 border border-dashed border-green-200">
                    <IconifyIcon
                      icon="lucide:users"
                      className="h-7 w-7 text-green-600"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-semibold pt-4">Bireysel Eğitim</h3>
                <p className="text-sm text-gray-600 font-normal mt-2">
                  Sıfırdan başlayanlar ve uzmanlaşmak isteyenler için kişiselleştirilmiş eğitim modelleri.
                </p>
              </div>

              {/* Kurumsal Çözümler */}
              <div>
                <div className="flex items-center justify-start">
                  <div className="items-center justify-center flex bg-blue-50 rounded-full h-16 w-16 border border-dashed border-blue-200">
                    <IconifyIcon
                      icon="lucide:building-2"
                      className="h-7 w-7 text-blue-600"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-semibold pt-4">Kurumsal Çözüm</h3>
                <p className="text-sm text-gray-600 font-normal mt-2">
                  Şirketlerin finans, risk yönetimi ve hazine departmanlarına özel profesyonel atölyeler.
                </p>
              </div>

              {/* 8 Yıllık Tecrübe */}
              <div>
                <div className="flex items-center justify-start">
                  <div className="items-center justify-center flex bg-primary/10 rounded-full h-16 w-16 border border-dashed border-primary/20">
                    <IconifyIcon
                      icon="lucide:award"
                      className="h-7 w-7 text-primary"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-semibold pt-4">8+ Yıllık Tecrübe</h3>
                <p className="text-sm text-gray-600 font-normal mt-2">
                  Yılların getirdiği piyasa tecrübesi ve sürekli güncellenen dinamik müfredat yapısı.
                </p>
              </div>

            </div>
          </div>

          {/* Sağ Görsel Alanı */}
          <div className="flex items-center lg:mt-0 mt-8">
            <Image
              src={iphone}
              className="h-[600px] rounded-xl mx-auto object-contain"
              alt="Aktüel Analiz Akademi Eğitimleri Görseli"
              width={538}
              height={600}
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Image from 'next/image'
import React from 'react'
import vector from "@/assets/images/vector/vector-1.png";
import vector2 from "@/assets/images/vector/vector-2.png";
import vector3 from "@/assets/images/vector/vector-3.png";

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <div>
            <span className="text-sm text-primary uppercase font-semibold tracking-wider">
              Eğitim Modelleri
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl/tight font-semibold text-black mt-4">
            Size En Uygun Öğrenme Modelini Seçin
          </h2>
          <p className="text-gray-500 text-base mt-4">
            İster kendi hızınızda ilerleyin, ister canlı sınıflarda veya doğrudan uzmanıyla birebir çalışın.
          </p>
        </div>

        <div className="grid grid-cols-1 mt-14">
          <div id="StarterContent">
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">

              {/* 1. Video İçerik Paketleri */}
              <div className="flex flex-col shadow-2xl rounded-xl bg-white overflow-hidden border border-gray-100">
                <div className="text-center pt-10">
                  <Image
                    src={vector}
                    className="h-28 w-28 mx-auto"
                    alt="Video Eğitimler"
                  />
                  <h5 className="text-2xl font-semibold text-black mt-4">
                    Kayıt Video Eğitimler
                  </h5>
                  <h2 className="text-5xl mt-5 mb-1 items-center align-middle font-bold text-gray-900">
                    <sup className="text-2xl font-medium align-middle">$</sup>
                    <span>50</span>
                    <sub className="text-base font-normal text-gray-400 ms-1">'dan itibaren</sub>
                  </h2>
                  <span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full inline-block mt-2">
                    Kendi Hızınızda Öğrenin
                  </span>
                </div>
                <div className="px-6 py-8 mx-auto w-full">
                  <ul className="space-y-4">
                    <li className="flex items-center justify-start">
                      <IconifyIcon
                        icon="lucide:check"
                        className="text-primary text-lg me-2 shrink-0"
                      />
                      <span className="font-medium text-gray-700">7/24 Erişilebilir Video Paneli</span>
                    </li>
                    <li className="flex items-center justify-start">
                      <IconifyIcon
                        icon="lucide:check"
                        className="text-primary text-lg me-2 shrink-0"
                      />
                      <span className="font-medium text-gray-700">İndirilebilir Grafik & PDF Kaynaklar</span>
                    </li>
                    <li className="flex items-center justify-start">
                      <IconifyIcon
                        icon="lucide:check"
                        className="text-primary text-lg me-2 shrink-0"
                      />
                      <span className="font-medium text-gray-700">Ömür Boyu Güncellenen Müfredat</span>
                    </li>
                    <li className="flex items-center justify-start text-gray-400">
                      <IconifyIcon
                        icon="lucide:x"
                        className="text-gray-300 text-lg me-2 shrink-0"
                      />
                      <span className="font-medium line-through">Canlı Soru-Cevap Sınıfları</span>
                    </li>
                    <li className="flex items-center justify-start text-gray-400">
                      <IconifyIcon
                        icon="lucide:x"
                        className="text-gray-300 text-lg me-2 shrink-0"
                      />
                      <span className="font-medium line-through">Kişiye Özel Portföy İncelemesi</span>
                    </li>
                  </ul>
                </div>
                <div className="flex justify-center px-10 pb-10 mt-auto">
                  <a
                    href="#contact"
                    className="py-2 px-6 inline-flex rounded-md text-base items-center justify-center border border-primary text-white bg-primary hover:bg-primaryDark transition-all duration-500 font-medium w-full shadow-md text-center"
                  >
                    Eğitimleri İncele
                  </a>
                </div>
              </div>

              {/* 2. Online Canlı Grup Eğitimleri (Popüler) */}
              <div className="flex flex-col shadow-2xl rounded-xl bg-white overflow-hidden border-2 border-primary relative">
                <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  En Çok Tercih Edilen
                </div>
                <div className="text-center pt-10">
                  <Image
                    src={vector2}
                    className="h-28 w-28 mx-auto"
                    alt="Canlı Grup Eğitimi"
                  />
                  <h5 className="text-2xl font-semibold text-black mt-4">
                    Online Canlı Grup
                  </h5>
                  <h2 className="text-5xl mt-5 mb-1 items-center align-middle font-bold text-gray-900">
                    <sup className="text-2xl font-medium align-middle">$</sup>
                    <span>100</span>
                    <sub className="text-base font-normal text-gray-400 ms-1">'dan itibaren</sub>
                  </h2>
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full inline-block mt-2">
                    Etkileşimli Sınıflar
                  </span>
                </div>
                <div className="px-6 py-8 mx-auto w-full">
                  <ul className="space-y-4">
                    <li className="flex items-center justify-start">
                      <IconifyIcon
                        icon="lucide:check"
                        className="text-primary text-lg me-2 shrink-0"
                      />
                      <span className="font-medium text-gray-700">Video Paket İçeriğinin Tamamı</span>
                    </li>
                    <li className="flex items-center justify-start">
                      <IconifyIcon
                        icon="lucide:check"
                        className="text-primary text-lg me-2 shrink-0"
                      />
                      <span className="font-medium text-gray-700">Canlı Yayında Soru sorma İmkanı</span>
                    </li>
                    <li className="flex items-center justify-start">
                      <IconifyIcon
                        icon="lucide:check"
                        className="text-primary text-lg me-2 shrink-0"
                      />
                      <span className="font-medium text-gray-700">Haftalık Canlı Pratik Pazarı</span>
                    </li>
                    <li className="flex items-center justify-start">
                      <IconifyIcon
                        icon="lucide:check"
                        className="text-primary text-lg me-2 shrink-0"
                      />
                      <span className="font-medium text-gray-700">Dönem Kursiyerlerine Özel Grup</span>
                    </li>
                    <li className="flex items-center justify-start text-gray-400">
                      <IconifyIcon
                        icon="lucide:x"
                        className="text-gray-300 text-lg me-2 shrink-0"
                      />
                      <span className="font-medium line-through">Birebir Özel Mentorluk Seansı</span>
                    </li>
                  </ul>
                </div>
                <div className="flex justify-center px-10 pb-10 mt-auto">
                  <a
                    href="#contact"
                    className="py-2 px-6 inline-flex rounded-md text-base items-center justify-center border border-primary text-white bg-primary hover:bg-primaryDark transition-all duration-500 font-medium w-full shadow-md text-center"
                  >
                    Sınıftaki Yerini Al
                  </a>
                </div>
              </div>

              {/* 3. Online Birebir Eğitimler */}
              <div className="flex flex-col shadow-2xl rounded-xl bg-white overflow-hidden border border-gray-100">
                <div className="text-center pt-10">
                  <Image
                    src={vector3}
                    className="h-28 w-28 mx-auto"
                    alt="Birebir Eğitim"
                  />
                  <h5 className="text-2xl font-semibold text-black mt-4">
                    Online Birebir Mentorluk
                  </h5>
                  <h2 className="text-5xl mt-5 mb-1 items-center align-middle font-bold text-gray-900">
                    <sup className="text-2xl font-medium align-middle">$</sup>
                    <span>250</span>
                    <sub className="text-base font-normal text-gray-400 ms-1">'dan itibaren</sub>
                  </h2>
                  <span className="text-sm font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full inline-block mt-2">
                    Tamamen Size Özel
                  </span>
                </div>
                <div className="px-6 py-8 mx-auto w-full">
                  <ul className="space-y-4">
                    <li className="flex items-center justify-start">
                      <IconifyIcon
                        icon="lucide:check"
                        className="text-primary text-lg me-2 shrink-0"
                      />
                      <span className="font-medium text-gray-700">Canlı ve Video Paketlerin Tamamı</span>
                    </li>
                    <li className="flex items-center justify-start">
                      <IconifyIcon
                        icon="lucide:check"
                        className="text-primary text-lg me-2 shrink-0"
                      />
                      <span className="font-medium text-gray-700">Size Özel Gün ve Saat Planlaması</span>
                    </li>
                    <li className="flex items-center justify-start">
                      <IconifyIcon
                        icon="lucide:check"
                        className="text-primary text-lg me-2 shrink-0"
                      />
                      <span className="font-medium text-gray-700">Kişisel Portföy & Risk Analizi</span>
                    </li>
                    <li className="flex items-center justify-start">
                      <IconifyIcon
                        icon="lucide:check"
                        className="text-primary text-lg me-2 shrink-0"
                      />
                      <span className="font-medium text-gray-700">Canlı Piyasada Birebir İşlem Pratiği</span>
                    </li>
                    <li className="flex items-center justify-start">
                      <IconifyIcon
                        icon="lucide:check"
                        className="text-primary text-lg me-2 shrink-0"
                      />
                      <span className="font-medium text-gray-700">Eğitim Sonrası 1 Ay Whatsapp Desteği</span>
                    </li>
                  </ul>
                </div>
                <div className="flex justify-center px-10 pb-10 mt-auto">
                  <a
                    href="#contact"
                    className="py-2 px-6 inline-flex rounded-md text-base items-center justify-center border border-primary text-white bg-primary hover:bg-primaryDark transition-all duration-500 font-medium w-full shadow-md text-center"
                  >
                    Özel Başvuru Yap
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
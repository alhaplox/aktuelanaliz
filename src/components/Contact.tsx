'use client'
import React, { useState } from 'react'
import IconifyIcon from './wrappers/IconifyIcon'

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: '' });

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Başvurunuz başarıyla alındı! En kısa sürede sizinle iletişime geçeceğiz.'
        });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error('Bir hata oluştu.');
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Form gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container">
        <div className="grid lg:grid-cols-3 gap-6 items-center">
          <div>
            <div>
              <span className="text-sm text-primary uppercase font-semibold tracking-wider mb-6 inline-block">
                İletişim
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl/tight font-semibold text-black mt-4">
              Geleceğinize Yatırım Yapmak İçin Bizimle İletişime Geçin
            </h2>

            {/* E-posta */}
            <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-start mt-10">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <IconifyIcon
                  icon="lucide:mail"
                  className="text-2xl text-primary"
                />
              </div>
              <div>
                <h5 className="text-base text-gray-700 font-medium mb-1">
                  info@aktuelanaliz.com
                </h5>
                <a
                  href="mailto:info@aktuelanaliz.com"
                  className="text-xs text-primary font-bold uppercase tracking-wider"
                >
                  E-posta Gönder
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 lg:ms-24">
            <div className="p-6 md:p-12 rounded-md shadow-lg bg-white">
              <form onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="formFirstName"
                      className="block text-sm/normal font-semibold text-black mb-2"
                    >
                      Adınız
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      className="block w-full text-sm rounded-md py-3 px-4 border-gray-200 focus:border-gray-300 focus:ring-transparent text-gray-900"
                      id="formFirstName"
                      placeholder="Adınız..."
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="formLastName"
                      className="block text-sm/normal font-semibold text-black mb-2"
                    >
                      Soyadınız
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      className="block w-full text-sm rounded-md py-3 px-4 border-gray-200 focus:border-gray-300 focus:ring-transparent text-gray-900"
                      id="formLastName"
                      placeholder="Soyadınız..."
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="formEmail"
                      className="block text-sm/normal font-semibold text-black mb-2"
                    >
                      E-posta Adresiniz
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="block w-full text-sm rounded-md py-3 px-4 border-gray-200 focus:border-gray-300 focus:ring-transparent text-gray-900"
                      id="formEmail"
                      placeholder="E-posta adresiniz..."
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="formPhone"
                      className="block text-sm/normal font-semibold text-black mb-2"
                    >
                      Telefon Numaranız
                    </label>
                    <input
                      type="text"
                      name="phone"
                      className="block w-full text-sm rounded-md py-3 px-4 border-gray-200 focus:border-gray-300 focus:ring-transparent text-gray-900"
                      id="formPhone"
                      placeholder="05xx xxx xx xx"
                      required
                    />
                  </div>

                  {/* Eğitim Modeli Seçimi */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="formEducationModel"
                      className="block text-sm/normal font-semibold text-black mb-2"
                    >
                      İlgilendiğiniz Eğitim Modeli
                    </label>
                    <select
                      id="formEducationModel"
                      name="educationModel"
                      className="block w-full text-sm rounded-md py-3 px-4 border-gray-200 focus:border-gray-300 focus:ring-transparent text-gray-900 bg-white"
                      required
                      defaultValue=""
                    >
                      <option value="" disabled>Lütfen bir eğitim modeli seçiniz...</option>
                      <option value="Kayıt Video Eğitimler (50$)">Kayıt Video Eğitimler - 50$&apos;dan itibaren</option>
                      <option value="Online Canlı Grup Eğitimi (100$)">Online Canlı Grup Eğitimi - 100$&apos;dan itibaren</option>
                      <option value="Online Birebir Mentorluk (250$)">Online Birebir Mentorluk - 250$&apos;dan itibaren</option>
                      <option value="Genel Bilgi Almak İstiyorum">Sadece Genel Bilgi Almak İstiyorum</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <div className="mb-4">
                      <label
                        htmlFor="formMessages"
                        className="block text-sm/normal font-semibold text-black mb-2"
                      >
                        Mesajınız
                      </label>
                      <textarea
                        name="message"
                        className="block w-full text-sm rounded-md py-3 px-4 border-gray-200 focus:border-gray-300 focus:ring-transparent text-gray-900"
                        id="formMessages"
                        rows={4}
                        placeholder="Eklemek istediğiniz notlar veya sorularınız..."
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Durum Bildirimleri (Success/Error) */}
                {status.type && (
                  <div className={`mb-6 p-4 rounded-md text-sm font-medium ${status.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'
                    }`}>
                    {status.message}
                  </div>
                )}

                <div className="mt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="py-2 px-6 rounded-md inline-flex items-center justify-center border border-primary text-white bg-primary hover:bg-primaryDark transition-all duration-500 font-medium gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Gönderiliyor...' : 'Başvuruyu Gönder'}
                    {!loading && (
                      <IconifyIcon
                        icon="lucide:send"
                        className="h-4 w-4"
                      />
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
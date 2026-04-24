'use client';
import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

// Supabase istemcisini başlat
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function ContactArea() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error', msg: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    const { error } = await supabase.from('contacts').insert([data]);

    if (error) {
      setStatus({ type: 'error', msg: 'Mesaj gönderilirken bir hata oluştu.' });
    } else {
      setStatus({ type: 'success', msg: 'Mesajınız başarıyla iletildi! 👍🏻' });
      (e.target as HTMLFormElement).reset();
    }
    setLoading(false);
  };

  return (
    <section className="tp-contact-area tp-contact-p fix p-relative pt-150 pb-125">
      {/* Arka Plan Görseli */}
      <div className="tp-contact-bg" style={{ backgroundImage: "url(/assets/img/live/contact-bg.png)" }}></div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="tp-contact-wrap p-relative">
              <div className="tp-contact-heading text-center">
                <h3 className="tp-contact-title">Bize Ulaşın</h3>
                <p>Her türlü sorunuz için yanınızdayız.</p>
              </div>

              <div className="tp-contact-from-box">
                <h3 className="tp-contact-from-title">Bir Mesaj Gönder 👍🏻</h3>

                <form onSubmit={handleSubmit} className="tp-contact-form">
                  <div className="row custom-mar-20">
                    <div className="col-md-6">
                      <div className="tp-contact-input">
                        <input name="name" type="text" placeholder="Adınız Soyadınız" required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="tp-contact-input">
                        <input name="email" type="email" placeholder="E-posta Adresiniz" required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="tp-contact-input">
                        <input name="phone" type="tel" placeholder="Telefon Numaranız (Örn: 05xx)" required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="tp-contact-input">
                        <input name="subject" type="text" placeholder="Konu" required />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="tp-contact-input">
                        <textarea name="message" placeholder="Mesajınız..." required></textarea>
                      </div>
                    </div>
                    <div className="col-12 text-center">
                      <div className="tp-contact-btn">
                        <button type="submit" className="tp-btn-inner" disabled={loading}>
                          {loading ? 'Gönderiliyor...' : 'Mesaj Gönder'}
                        </button>
                      </div>
                    </div>
                  </div>
                  {status && (
                    <div className={`mt-20 text-center ${status.type === 'success' ? 'text-success' : 'text-danger'}`}>
                      {status.msg}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
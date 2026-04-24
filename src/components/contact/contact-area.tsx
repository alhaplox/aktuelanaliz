'use client';
import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js'; // npm install @supabase/supabase-js

// Supabase istemcisini başlat (Bu değerlerin .env dosyanızda olduğundan emin olun)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function ContactForm() {
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
      phone: formData.get('phone'), // Yeni eklenen alan
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
            {/* Telefon Numarası Alanı */}
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
  );
}
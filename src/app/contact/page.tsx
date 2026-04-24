import { Metadata } from "next";
import ContactArea from "@/components/contact/contact-area";
import ContactInfoArea from "@/components/contact/contact-info-area";

export const metadata: Metadata = {
    title: "İletişim - Aktuel Analiz",
    description: "Finans eğitimlerimiz hakkında bilgi almak veya teknik destek için bizimle iletişime geçin.",
};

export default function ContactPage() {
    return (
        <main>
            {/* İletişim Formu ve Başlık Alanı */}
            <ContactArea />

            {/* Adres, Telefon ve E-posta Bilgileri */}
            <ContactInfoArea />

            {/* Harita Alanı */}
            <div className="tp-map-area">
                <div className="tp-contact-map-content">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.826092551699!2d103.84591427587203!3d1.277837898710022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19124fcf96a9%3A0x9fb450a1b8d87b0a!2s77%20Robinson%20Rd%2C%20%2333%2001%2C%20Singapore%20068896!5e0!3m2!1str!2s!4v1777028644207!5m2!1str!2s"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Aktuel Analiz Ofis Konumu"
                    ></iframe>
                </div>
            </div>
        </main>
    );
}
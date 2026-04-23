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
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.281896172605!2d28.98509167657!3d41.04100231737701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab76426463993%3A0xc07a21396f43e5c7!2zTmnFn2FudGHFn8SxLCBaY2l5ZSBIYW7EsW0gU2suLCAzNDM2NyDFnnXFn2xpL8Swc3RhbmJ1bA!5e0!3m2!1str!2str!4v1714000000000!5m2!1str!2str"
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
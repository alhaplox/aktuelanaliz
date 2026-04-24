"use client";
import { CloseSvg } from "@/components/svg";
import Link from "next/link";
import { useState } from "react";

export default function AnnouncementArea() {
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  // Bu veriler ileride Supabase'deki 'campaigns' tablosundan çekilebilir
  const campaign = {
    text: "Nisan Ayına Özel VIP Paketlerde ",
    discount: "30% İndirim",
    link: "/membership",
    btnText: "Fırsatı Yakala",
    deadline: "Sınırlı Süre"
  };

  return (
    showAnnouncement && (
      <div
        className="tp-announcement-area p-relative"
        style={{
          backgroundColor: '#1a1a1a', // Koyu profesyonel arka plan
          padding: '10px 0'
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-announcement-wrap text-center">
                <div className="tp-announcement-content d-flex justify-content-center align-items-center">
                  <p className="mb-0 text-white">
                    {campaign.text}
                    <span className="fw-bold" style={{ color: 'var(--tp-theme-1)' }}>
                      {campaign.discount}
                    </span>
                    {` — ${campaign.deadline}!`}
                  </p>
                  <Link className="tp-announcement-btn ml-20" href={campaign.link}>
                    {campaign.btnText}
                  </Link>
                </div>
                <div className="tp-announcement-close">
                  <button
                    onClick={() => setShowAnnouncement(false)}
                    className="hide-button"
                    style={{ color: '#fff' }}
                  >
                    <CloseSvg />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
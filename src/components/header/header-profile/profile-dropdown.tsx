'use client';
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import {
  DashboardSvg,
  LogoutSvg,
  OrderSvg,
  SettingSvg,
  UserSvg,
  UserSvgThree,
  WishlistSvg,
} from "@/components/svg";

// Unsplash yedek görseli
const default_user = "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&auto=format&fit=crop";

type ListItem =
  | { link: string; icon: React.ReactNode; label: string; isDivider?: false }
  | { isDivider: true };

// Aktüel Analiz'a uygun menü yapısı
const listData: ListItem[] = [
  { link: "/dashboard", icon: <DashboardSvg />, label: "Panelim" },
  { link: "/dashboard/profile", icon: <UserSvg />, label: "Profil Bilgilerim" },
  { link: "/dashboard/my-analyses", icon: <WishlistSvg />, label: "Takip Listem" },
  { link: "/dashboard/orders", icon: <OrderSvg />, label: "Abonelik Geçmişi" },
  { isDivider: true },
  { link: "/dashboard/settings", icon: <SettingSvg />, label: "Ayarlar" },
  { link: "/api/auth/logout", icon: <LogoutSvg />, label: "Çıkış Yap" }, // Supabase veya Auth rotan
];

type IProps = {
  top_cls?: string;
  user_icon?: boolean;
  userName?: string; // Prop olarak kullanıcı adını alalım
  userImage?: string;
};

export default function ProfileDropdown({ top_cls = "tp-header-inner-login", user_icon, userName = "Barış", userImage }: IProps) {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <div
      className={`${top_cls} tp-header-user-hover ${openDropdown ? "active" : ""}`}
      onMouseLeave={() => setOpenDropdown(false)} // Mouse ayrılınca kapansın
    >
      <button onClick={() => setOpenDropdown(!openDropdown)}>
        {user_icon ? (
          <span><UserSvgThree /></span>
        ) : (
          <Image
            src={userImage || default_user}
            alt="Profil"
            width={40}
            height={40}
            className="rounded-circle"
            style={{ objectFit: 'cover' }}
          />
        )}
      </button>

      <div className="tp-header-user-box">
        <div className="tp-header-user-content">
          <div className="tp-header-user-profile d-flex align-items-center">
            <div className="tp-header-user-profile-thumb">
              <Image
                src={userImage || default_user}
                alt="Kullanıcı"
                width={45}
                height={45}
                className="rounded-circle"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="tp-header-user-profile-content">
              <h4>{userName}</h4>
              <span>Aktüel Analiz Üyesi</span>
            </div>
          </div>

          <div className="tp-header-user-list">
            <ul>
              {listData.map((item, index) => (
                item.isDivider ? (
                  <li key={`divider-${index}`} className="hr-border"></li>
                ) : (
                  <li key={index}>
                    <Link href={item.link}>
                      <span>{item.icon}</span>
                      {item.label}
                    </Link>
                  </li>
                )
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
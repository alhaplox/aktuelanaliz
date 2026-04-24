'use client';
import Image from "next/image";
import { formatPrice } from "@/lib/format-price";
import Link from "next/link";

// Aktüel Analiz Veri Tipi
type IShopItem = {
  id: string | number;
  title: string;
  price: number;
  thumbnail?: string;
  category: string;
  slug?: string;
  tag?: string;

  type?: 'blog' | 'course' | 'membership'; // Hangi tabloya gideceğimizi belirler
};

type IProps = {
  item: IShopItem;
};

export function getTagClass(tag?: string) {
  if (!tag) return '';
  if (tag.includes('%')) return 'off';

  switch (tag.toLowerCase()) {
    case 'hot': return 'hot';
    case 'new': return 'new';
    case 'vip': return 'hot'; // VIP paketler için kırmızı tag
    default: return '';
  }
}

export default function ShopItem({ item }: IProps) {
  // Yönlendirme Mantığı: Kurs ise Slug, Blog ise UUID
  const itemLink = item.slug
    ? `/course-details/${item.slug}`
    : `/blog-details/${item.id}`;

  return (
    <div className="tp-shop-product-item text-center mb-50">
      <div className="tp-shop-product-thumb p-relative">
        <Link href={itemLink}>
          <Image
            src={item.thumbnail || "/assets/img/placeholder.jpg"}
            alt={item.title}
            width={282}
            height={380}
            style={{ height: "auto", borderRadius: '8px', objectFit: 'cover' }}
          />
        </Link>

        {item.tag && (
          <div className="tp-shop-product-thumb-tag">
            <span className={getTagClass(item.tag)}>{item.tag}</span>
          </div>
        )}

        <div className="tp-shop-product-thumb-btn">
          <button className="tp-btn-shop">
            {item.price === 0 ? "İncele" : "Sepete Ekle"}
          </button>
        </div>
      </div>

      <div className="tp-shop-product-content">
        <div className="tp-shop-product-tag">
          <span className="badge bg-light text-dark">{item.category}</span>
        </div>
        <h4 className="tp-shop-product-title">
          <Link href={itemLink}>{item.title}</Link>
        </h4>
        <div className="tp-shop-product-price">
          {item.price > 0 ? (
            <span>{formatPrice(item.price, true)}</span>
          ) : (
            <span className="text-success">Ücretsiz Analiz</span>
          )}
        </div>
      </div>
    </div>
  );
}
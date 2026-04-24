'use client'
import Link from "next/link"
import Image from "next/image"
import { getTagClass } from "./shop-item"
import { formatPrice } from "@/lib/format-price"

// Aktüel Analiz hibrit veri tipi
type IShopListItem = {
    id: string | number;
    title: string;
    price: number;
    thumbnail: string; // image yerine thumbnail
    category: string;
    short_desc?: string;
    tag?: string;
    slug?: string; // Kurslar için
}

type IProps = {
    item: IShopListItem
}

export default function ShopListItem({ item }: IProps) {
    // Navigasyon Mantığı: Kurs ise slug, değilse (Blog/Analiz) UUID kullanılır
    const itemLink = item.slug
        ? `/course-details/${item.slug}`
        : `/blog-details/${item.id}`;

    return (
        <div className="tp-shop-list-product-item d-flex mb-30 align-items-center">
            <div className="tp-shop-list-product-thumb p-relative">
                <Link href={itemLink}>
                    <Image
                        src={item.thumbnail || "/assets/img/placeholder.jpg"}
                        alt={item.title}
                        width={148}
                        height={200}
                        style={{
                            height: "auto",
                            borderRadius: '6px',
                            objectFit: 'cover'
                        }}
                    />
                </Link>
            </div>
            <div className="tp-shop-list-product-content p-relative ml-20">
                {item.tag && (
                    <div className="tp-shop-product-thumb-tag">
                        <span className={getTagClass(item.tag)}>{item.tag}</span>
                    </div>
                )}
                <div className="tp-shop-product-tag">
                    <span className="badge bg-light text-primary">{item.category}</span>
                </div>
                <h4 className="tp-shop-product-title mt-5">
                    <Link href={itemLink}>{item.title}</Link>
                </h4>

                {/* Analiz veya Kursun kısa özeti */}
                <p className="mb-15" style={{ fontSize: '14px', color: '#666' }}>
                    {item.short_desc}
                </p>

                <div className="tp-shop-product-price mb-15">
                    <span className="fw-bold text-dark">
                        {item.price > 0 ? formatPrice(item.price, true) : "Ücretsiz İçerik"}
                    </span>
                </div>

                <div className="tp-shop-list-product-btn">
                    <button className="tp-btn-inner">
                        {item.price > 0 ? "Sepete Ekle" : "Hemen İncele"}
                    </button>
                </div>
            </div>
        </div>
    )
}
import { formatPrice } from "@/lib/format-price";
import { discountPrice } from "@/utils";

type IProps = {
    discount: number;
    price: number;
}

export default function CoursePrice({ price, oldPrice }: { price: number; oldPrice?: number }) {
    return (
        <div className="tp-course-price-wrapper d-flex align-items-center">
            {/* Güncel Fiyat: Siyah ve Bold */}
            <span
                className="tp-course-price-new"
                style={{
                    color: '#000',
                    fontWeight: '700',
                    fontSize: '24px',
                    marginRight: '10px'
                }}
            >
                ${price.toFixed(2)}
            </span>

            {/* Eski Fiyat: Üstü Çizili ve Açık Renk */}
            {oldPrice && (
                <span
                    className="tp-course-price-old"
                    style={{
                        color: '#a0a0a0',
                        textDecoration: 'line-through',
                        fontSize: '18px',
                        fontWeight: '400'
                    }}
                >
                    ${oldPrice.toFixed(2)}
                </span>
            )}
        </div>
    );
}
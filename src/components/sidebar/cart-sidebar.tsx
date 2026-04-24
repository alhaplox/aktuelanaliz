'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import empty_cart_img from '@/assets/img/cartmini/empty-cart.png';
import { formatPrice } from '@/lib/format-price';

// Prop type 
type IProps = {
  openSidebar: boolean;
  onShowSidebar: () => void;
}

// Sepet öğesi tipi (Abonelik paketleri için)
type CartItem = {
  id: string | number;
  title: string;
  price: number;
  thumbnail: string;
  type: 'membership' | 'course';
}

const CartMiniSidebar = ({ openSidebar, onShowSidebar }: IProps) => {
  // Bu veriler normalde bir Context veya Global State'ten (Zustand/Redux) gelmeli.
  // Şimdilik dinamik yapıya hazırlık için state olarak tutuyoruz.
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Örnek: Sepette veri olduğunu varsayalım (Test için)
  useEffect(() => {
    // Burası gerçekte veritabanından veya yerel depolamadan beslenecek.
    const mockData: CartItem[] = [
      {
        id: 'premium-plan',
        title: 'VIP Analiz Üyeliği (Aylık)',
        price: 450,
        thumbnail: 'https://images.unsplash.com/photo-1602442787305-decbd65be507?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'membership'
      }
    ];
    setCartItems(mockData);
  }, []);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <>
      <div className={`cartmini__area ${openSidebar ? 'cartmini-opened' : ''}`}>
        <div className="cartmini__wrapper d-flex justify-content-between flex-column">
          <div className="cartmini__top-wrapper">
            <div className="cartmini__top p-relative">
              <div className="cartmini__top-title">
                <h4>Seçili Paketler</h4>
              </div>
              <div className="cartmini__close">
                <button onClick={onShowSidebar} type="button" className="cartmini__close-btn cartmini-close-btn">
                  <i className="fa-regular fa-xmark"></i>
                </button>
              </div>
            </div>

            {/* Paket Listesi */}
            {cartItems.length > 0 ? (
              <div className="cartmini__widget">
                {cartItems.map((item, i) => (
                  <div key={i} className="cartmini__widget-item">
                    <div className="cartmini__thumb">
                      <Link href="#">
                        <Image
                          src={item.thumbnail}
                          width={70}
                          height={60}
                          alt={item.title}
                          style={{ objectFit: 'cover', borderRadius: '4px' }}
                        />
                      </Link>
                    </div>
                    <div className="cartmini__content">
                      <h5 className="cartmini__title home-shop">
                        <Link href="#">{item.title}</Link>
                      </h5>
                      <div className="cartmini__price-wrapper">
                        <span className="cartmini__price home-shop">{formatPrice(item.price)}</span>
                      </div>
                    </div>
                    <button className="cartmini__del pointer" onClick={() => {/* Silme fonksiyonu */ }}>
                      <i className="fa-regular fa-trash-can"></i>
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="cartmini__empty text-center mt-50">
                <Image src={empty_cart_img} alt="Boş Sepet" />
                <p>Henüz bir analiz paketi seçmediniz.</p>
                <Link href="/membership" onClick={onShowSidebar} className="tp-btn">Paketleri İncele</Link>
              </div>
            )}
          </div>

          {/* Checkout Kısmı */}
          {cartItems.length > 0 && (
            <div className="cartmini__checkout">
              <div className="cartmini__checkout-title mb-30">
                <h4>Toplam:</h4>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="cartmini__checkout-btn home-shop">
                <Link href="/cart" onClick={onShowSidebar} className="tp-btn mb-10 w-100">
                  Sepeti Görüntüle
                </Link>
                <Link href="/checkout" onClick={onShowSidebar} className="tp-btn tp-btn-border w-100">
                  Ödemeye Geç
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      <div onClick={onShowSidebar} className={`body-overlay ${openSidebar ? 'opened' : ''}`}></div>
    </>
  );
};

export default CartMiniSidebar;
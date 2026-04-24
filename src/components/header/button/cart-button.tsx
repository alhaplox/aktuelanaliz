'use client'
import React, { useEffect, useRef, useState } from "react";
import { Cart } from "@/components/svg";
import CartMiniSidebar from "@/components/sidebar/cart-sidebar";
import { createPortal } from "react-dom";

type IProps = {
   icon?: React.ReactNode;
}

export default function CartButton({ icon = <Cart /> }: IProps) {
   const [isCartOpen, setIsCartOpen] = useState(false);
   const [mounted, setMounted] = useState(false);
   const [cartCount, setCartCount] = useState(0); // Dinamik sayı takibi
   const modalRef = useRef<HTMLElement | null>(null);

   useEffect(() => {
      setMounted(true);
      if (typeof window !== "undefined") {
         modalRef.current = document.getElementById("cart-mini-sidebar");
      }

      // Örnek: Sepetteki ürün sayısını localstorage veya context'ten çekebilirsin
      // Şimdilik Aktüel Analiz için 1 adet analiz paketi varsayalım
      setCartCount(1);
   }, []);

   const handleCartMiniToggle = () => {
      setIsCartOpen(!isCartOpen);
   };

   return (
      <>
         <button
            onClick={handleCartMiniToggle}
            className="cartmini-open-btn p-relative"
            title="Analiz Paketlerim"
         >
            <span>
               {icon}
            </span>
            {cartCount > 0 && (
               <i className="cart-count-badge">{cartCount}</i>
            )}
         </button>

         {/* Portal Hatası Önleyici Yapı */}
         {mounted && modalRef.current && createPortal(
            <CartMiniSidebar
               openSidebar={isCartOpen}
               onShowSidebar={handleCartMiniToggle}
            />,
            modalRef.current
         )}
      </>
   );
}
'use client'
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import OffcanvasArea from "@/components/sidebar/offcanvas/offcanvas-area";

type Props = {
   children?: React.ReactNode;
   offcanvas_cls?: string;
   offcanvas_menu_2?: boolean
};

export default function OffcanvasButton({ children, offcanvas_cls = '', offcanvas_menu_2 = false }: Props) {
   const [isOpenOffcanvas, setIsOpenOffcanvas] = useState(false);
   const [mounted, setMounted] = useState(false);
   const modalRef = useRef<HTMLElement | null>(null);

   useEffect(() => {
      // Hydration hatalarını önlemek için bileşen mount olduktan sonra portalı aktifleştiriyoruz
      setMounted(true);
      if (typeof window !== "undefined") {
         modalRef.current = document.getElementById("offcanvas-sidebar");
      }
   }, []);

   const handleOffcanvasToggle = () => {
      setIsOpenOffcanvas(!isOpenOffcanvas);

      // Menü açıkken arka plandaki kaydırmayı durdurmak profesyonel bir dokunuş olur
      if (!isOpenOffcanvas) {
         document.body.style.overflow = 'hidden';
      } else {
         document.body.style.overflow = 'auto';
      }
   };

   // Escape tuşu ile menüyü kapatma desteği
   useEffect(() => {
      const handleEsc = (event: KeyboardEvent) => {
         if (event.key === 'Escape') {
            setIsOpenOffcanvas(false);
            document.body.style.overflow = 'auto';
         }
      };
      window.addEventListener('keydown', handleEsc);
      return () => window.removeEventListener('keydown', handleEsc);
   }, []);

   return (
      <>
         <button
            onClick={handleOffcanvasToggle}
            className="offcanvas-open-btn"
            aria-label="Menüyü Aç"
         >
            {children ? children : (
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
               </svg>
            )}
         </button>

         {/* Portalı sadece DOM hazır olduğunda oluşturuyoruz */}
         {mounted && modalRef.current && createPortal(
            <OffcanvasArea
               openOffCanvas={isOpenOffcanvas}
               onHandleOffCanvas={handleOffcanvasToggle}
               offcanvas_cls={offcanvas_cls}
               offcanvas_menu_2={offcanvas_menu_2}
            />,
            modalRef.current
         )}
      </>
   );
}
'use client'
import Image from "next/image";
import { Modal } from "react-bootstrap";
import { CloseFourSvg } from "../svg";
import useGlobalContext from "@/hooks/use-global-context";
import announce_icon from '@/assets/img/dashboard/icon/announcement-icon.svg';

export default function AnnounceDetailsModal() {
   const {
      handleAnnounceDetailsModal,
      showAnnounceDetailsModal,
      announceEditMode, // Orijinal ismiyle alalım
      handleAnnounceAddEditModal
   } = useGlobalContext();

   // TypeScript'i tüm fonksiyon gövdesinde susturmak için veriyi 'any' olarak cast edelim
   const data = announceEditMode as any;

   const handleEditFromDetails = () => {
      handleAnnounceDetailsModal();
      handleAnnounceAddEditModal();
   };

   return (
      <>
         <Modal className="tpd-modal" show={showAnnounceDetailsModal} onHide={handleAnnounceDetailsModal} centered={true}>
            <div className="modal-header">
               <div className="tpd-modal-icon">
                  <span><Image src={announce_icon} alt="icon" /></span>
               </div>

               <h4 className="tpd-modal-title">{data?.title || 'Duyuru Detayı'}</h4>
               <p>{data?.category || 'Genel Analiz'}</p>

               <button onClick={handleAnnounceDetailsModal} type="button" className="tpd-modal-btn-close">
                  <span>
                     <CloseFourSvg />
                  </span>
               </button>
            </div>
            <div className="modal-body">
               <div className="tpd-modal-content">
                  <div className="tpd-modal-course mb-20">
                     <span>Analiz Özeti</span>
                     <p className="mt-10" style={{ color: '#666', fontSize: '14px' }}>
                        {data?.summary || 'İçerik bulunamadı.'}
                     </p>
                  </div>
                  <div className="tpd-modal-info d-flex justify-content-between">
                     <div>
                        <span>Yayınlanma Tarihi</span>
                        <h4 className="tpd-modal-date">{data?.date || '24 Nisan 2026'}</h4>
                     </div>
                     <div>
                        <span>Durum</span>
                        <h4 className="tpd-modal-time" style={{ color: 'var(--tp-theme-1)' }}>Aktif</h4>
                     </div>
                  </div>
               </div>
            </div>
            <div className="modal-footer d-flex justify-content-between">
               <div className="tpd-modal-btn">
                  <button onClick={handleAnnounceDetailsModal} type="button" className="tpd-btn-cancel">Kapat</button>
               </div>
               <div className="tpd-modal-btn-wrap">
                  <button type="button" className="tpd-btn-delete">Sil</button>
                  <button
                     onClick={handleEditFromDetails}
                     type="button"
                     className="tpd-btn-edit ml-10"
                  >
                     Düzenle
                  </button>
               </div>
            </div>
         </Modal>
      </>
   )
}
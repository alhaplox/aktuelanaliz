'use client';
import { useEffect, useState } from "react";
import useGlobalContext from "@/hooks/use-global-context";
import { CloseFourSvg } from "../svg";
import { Modal } from "react-bootstrap";

export default function AnnouncementModal() {
   const { showAnnounceAddEditModal, handleAnnounceAddEditModal, announceEditMode: edit } = useGlobalContext();

   // Aktüel Analiz içeriğine göre state'leri güncelledik
   const [title, setTitle] = useState<string>('');
   const [category, setCategory] = useState<string>('');
   const [summary, setSummary] = useState<string>('');

   useEffect(() => {
      // edit objesini 'any' olarak cast ediyoruz (geçici çözüm)
      const editData = edit as any;

      if (editData) {
         setTitle(editData.title || '');
         setCategory(editData.category || '');
         setSummary(editData.summary || '');
      } else {
         setTitle('');
         setCategory('');
         setSummary('');
      }
   }, [edit]);

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Burada Supabase veya API isteği gelecek
      console.log("Yayınlanıyor:", { title, category, summary });
      handleAnnounceAddEditModal();
   };

   return (
      <Modal className="tpd-modal-announcement" show={showAnnounceAddEditModal} onHide={handleAnnounceAddEditModal} centered={true}>
         <div className="modal-header">
            <h4 className="tpd-modal-title">
               {edit ? 'Duyuruyu Düzenle' : 'Yeni Piyasa Duyurusu Oluştur'}
            </h4>
            <button
               onClick={() => handleAnnounceAddEditModal()}
               type="button"
               className="tpd-modal-btn-close"
            >
               <span>
                  <CloseFourSvg />
               </span>
            </button>
         </div>
         <div className="modal-body">
            <form onSubmit={handleSubmit}>
               <div className="tpd-input-white mb-20">
                  <label>Duyuru Başlığı</label>
                  <input
                     type="text"
                     placeholder="Örn: BIST100 Gün Ortası Analizi"
                     value={title}
                     onChange={(e) => setTitle(e.target.value)}
                  />
               </div>
               <div className="tpd-input-white mb-20">
                  <label>Kategori / Sembol</label>
                  <input
                     type="text"
                     placeholder="Örn: XU100, Altın, VIP"
                     value={category}
                     onChange={(e) => setCategory(e.target.value)}
                  />
               </div>
               <div className="tpd-input-white">
                  <label className="col-form-label">Duyuru Detayı / Özet</label>
                  <textarea
                     className="form-control"
                     placeholder="Piyasa beklentilerinizi buraya yazın..."
                     value={summary}
                     onChange={(e) => setSummary(e.target.value)}
                     rows={4}
                  ></textarea>
               </div>

               <div className="modal-footer px-0 pb-0 mt-20">
                  <button
                     type="button"
                     onClick={() => handleAnnounceAddEditModal()}
                     className="tpd-btn-cancel"
                  >
                     Vazgeç
                  </button>
                  <button type="submit" className="tpd-btn-edit ml-10">
                     {edit ? 'Güncelle' : 'Yayınla'}
                  </button>
               </div>
            </form>
         </div>
      </Modal>
   );
}
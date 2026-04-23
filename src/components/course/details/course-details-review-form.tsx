"use client"
import { useState } from "react";
import { StarTwo } from "@/components/svg";
import { createClient } from "@/utils/supabase/client";

type IProps = {
  courseId: string | number;
};

export default function CourseDetailsReviewForm({ courseId }: IProps) {
  const supabase = createClient();
  const [rating, setRating] = useState(5);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      alert("Yorum yapabilmek için giriş yapmalısınız.");
      setLoading(false);
      return;
    }

    // Not: Veritabanında 'reviews' tablonuzun olduğunu varsayıyoruz
    const { error } = await supabase
      .from('reviews')
      .insert([
        {
          course_id: courseId,
          user_id: user.id,
          rating: rating,
          // Form alanlarını buraya ekleyebilirsiniz
        }
      ]);

    if (error) {
      alert("Hata oluştu: " + error.message);
    } else {
      alert("Yorumunuz başarıyla iletildi!");
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="tp-course-details-2-comment-star">
        {[1, 2, 3, 4, 5].map((num) => (
          <span
            key={num}
            onClick={() => setRating(num)}
            style={{ cursor: 'pointer' }}
          >
            <StarTwo clr={num <= rating ? "#FFB013" : "#BFC5CA"} />
          </span>
        ))}
      </div>

      <div className="tp-contact-input-form">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-contact-input p-relative">
              <label>Değerlendirme Başlığı</label>
              <input type="text" placeholder="Yorumunuzun özeti..." />
            </div>
          </div>
          <div className="col-xl-12">
            <div className="tp-contact-input p-relative">
              <label>Değerlendirme İçeriği</label>
              <textarea placeholder="Eğitim hakkında ne düşünüyorsunuz? Deneyimlerinizi paylaşın..."></textarea>
            </div>
          </div>
          <div className="tp-contact-btn">
            <button
              type="submit"
              className="tp-btn-inner"
              disabled={loading}
            >
              {loading ? "Gönderiliyor..." : "Yorumu Gönder"}
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}
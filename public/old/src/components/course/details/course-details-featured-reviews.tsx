'use client';
import { useState } from "react";
import { DisLikeSvg, LikeSvg, StarTwo } from "@/components/svg";
import Image from "next/image";
import { ICourseDT } from "@/types/course-d-t"; // Bunu ekles
// 1. Tip tanımını buraya ekliyoruz
interface IProps {
    course: ICourseDT;
}
// Finans eğitimlerine yönelik örnek yorum verileri
const reviewsData = [
    {
        name: "Burak Y.",
        img: "/assets/img/course/details/user-2.png",
        rating: 5,
        timeAgo: "2 hafta önce",
        content: "Eğitmenin teknik analiz anlatımı çok başarılı. Karmaşık indikatörleri bile herkesin anlayabileceği seviyeye indirgemiş. Kesinlikle tavsiye ederim."
    },
    {
        name: "Selin K.",
        img: "/assets/img/course/details/user-3.png",
        rating: 4,
        timeAgo: "1 ay önce",
        content: "Piyasa psikolojisi üzerine anlatılanlar ufkumu açtı. Strateji kurma konusunda çok faydalı oldu, teşekkürler."
    }
];

export default function CourseDetailsFeaturedReviews({ course }: IProps) {
    const [visibleReviews, setVisibleReviews] = useState(1);

    const showMoreReviews = () => {
        setVisibleReviews((prevVisible) => prevVisible + 1);
    };

    return (
        <div className="tp-course-details-2-review-reply-wrap">
            {reviewsData.slice(0, visibleReviews).map((review, index) => (
                <div className="tp-course-details-2-review-item-reply" key={index}>
                    <div className="tp-course-details-2-review-top d-flex">
                        <div className="tp-course-details-2-review-thumb">
                            <Image src={review.img} alt={review.name} width={50} height={50} />
                        </div>
                        <div className="tp-course-details-2-review-content">
                            <h4>{review.name}</h4>
                            <div className="tp-course-details-2-review-star">
                                {[...Array(5)].map((_, starIndex) => (
                                    <span key={starIndex}>
                                        <StarTwo clr={starIndex < review.rating ? "#FFC107" : "#BFC5CA"} />
                                    </span>
                                ))}
                                <span className="span ml-10"> {review.timeAgo}</span>
                            </div>
                        </div>
                    </div>
                    <p>{review.content}</p>
                    <div className="tp-course-details-2-review-react d-flex align-items-center">
                        <span>Bu yorum yardımcı oldu mu?</span>
                        <div className="react">
                            <a href="#" onClick={(e) => e.preventDefault()}><span><LikeSvg /></span></a>
                            <a href="#" onClick={(e) => e.preventDefault()}><span><DisLikeSvg /></span></a>
                        </div>
                    </div>
                </div>
            ))}
            {visibleReviews < reviewsData.length && (
                <div className="tp-course-details-2-review-reply-btn">
                    <a className="pointer" onClick={showMoreReviews}>Daha Fazla Yorum Göster</a>
                </div>
            )}
        </div>
    );
}
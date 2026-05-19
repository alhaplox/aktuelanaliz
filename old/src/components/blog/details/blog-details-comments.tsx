"use client";
import React from "react";
import Image from "next/image";
import { ReplySvg } from "@/components/svg";

// Unsplash'ten genel kullanıcı avatarları (Hata almamak için)
const default_avatar = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop";

// Not: Bu veriyi ileride useEffect ile Supabase'den çekeceğiz. 
// Şimdilik Aktüel Analiz içeriğine uygun güncelledik.
const commentsData = [
  {
    id: 1,
    name: "Emre Aksoy",
    date: "23 Nisan 2026, 14:20",
    text: "BIST100 teknik analizi oldukça isabetli olmuş. 9800 direnci üzerindeki kapanışları takip ediyoruz.",
    avatar: default_avatar,
    replies: [
      {
        id: 2,
        name: "Aktuel Analiz (Admin)",
        date: "23 Nisan 2026, 15:05",
        text: "Kesinlikle Emre Bey, hacim desteği de gelirse hareket hızlanabilir.",
        avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&auto=format&fit=crop",
      },
    ],
  },
];

export default function BlogDetailsComments() {
  return (
    <ul>
      {commentsData.map((comment) => (
        <li key={comment.id}>
          <div className="tp-postbox-comment-box d-flex">
            <div className="tp-postbox-comment-info">
              <div className="tp-postbox-comment-avater mr-20">
                <Image
                  src={comment.avatar || default_avatar}
                  alt={comment.name || "Kullanıcı"}
                  width={50}
                  height={50}
                  className="rounded-circle"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className="tp-postbox-comment-text">
              <div className="tp-postbox-comment-name">
                <h5>{comment.name}</h5>
                <span className="post-meta">{comment.date}</span>
              </div>
              <p>{comment.text}</p>
              <div className="tp-postbox-comment-reply">
                <a href="#" onClick={(e) => e.preventDefault()}>
                  <ReplySvg />
                  Yanıtla
                </a>
              </div>
            </div>
          </div>

          {comment.replies && comment.replies.length > 0 && (
            <ul className="children">
              {comment.replies.map((reply) => (
                <li key={reply.id}>
                  <div className="tp-postbox-comment-box d-flex">
                    <div className="tp-postbox-comment-info">
                      <div className="tp-postbox-comment-avater mr-20">
                        <Image
                          src={reply.avatar || default_avatar}
                          alt={reply.name || "Kullanıcı"}
                          width={50}
                          height={50}
                          className="rounded-circle"
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                    </div>
                    <div className="tp-postbox-comment-text">
                      <div className="tp-postbox-comment-name">
                        <h5>{reply.name}</h5>
                        <span className="post-meta">{reply.date}</span>
                      </div>
                      <p>{reply.text}</p>
                      <div className="tp-postbox-comment-reply">
                        <a href="#" onClick={(e) => e.preventDefault()}>
                          <ReplySvg />
                          Yanıtla
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}
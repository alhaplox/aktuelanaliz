import Image from "next/image";
import { AuthorSvg, ClockSvg, NextArrow } from "@/components/svg";
import { IBlogDT } from "@/types/blog-d-t";
import Link from "next/link";
// Yedek görsel: Eğer veritabanında görsel yoksa gösterilecek

type IProps = {
  blog: IBlogDT;
};

export default function BlogItem({ blog }: IProps) {
  // Supabase kolonlarına göre veri eşleşmesi ve hata koruması
  const displayImage = blog.thumbnail_url || blog.img;
  const displayAuthor = blog.author_name || blog.author || "Aktuel Analiz";
  const displayTag = blog.category_name || (blog.tags && blog.tags[0]) || "Analiz";

  return (
    <div
      className="tp-blog-item text-center mb-40 wow fadeInLeft"
      data-wow-delay=".4s"
    >
      <div className="tp-blog-thumb fix">
        <Link href={`/blog-details/${blog.id}`}>
          <Image
            src={displayImage}
            alt={blog.title || "Aktüel Analiz Analiz"}
            width={559}
            height={350}
            style={{
              width: '100%',
              height: '350px',
              objectFit: 'cover'
            }}
            priority={false}
          />
        </Link>
      </div>
      <div className="tp-blog-content">
        <span className="tp-blog-tag">{displayTag}</span>
        <h4 className="tp-blog-title">
          <Link href={`/blog-details/${blog.id}`}>{blog.title}</Link>
        </h4>
        <div className="tp-blog-meta">
          <span>
            <span>
              <AuthorSvg />
              {displayAuthor}
            </span>
          </span>
          <span>
            <span>
              <ClockSvg />
              {blog.date}
            </span>
          </span>
        </div>
        <div className="tp-blog-btn">
          <Link href={`/blog-details/${blog.id}`} aria-label="Analizi Oku">
            <span className="tp-blog-btn-bg blog-btn-bg"></span>
            <span className="tp-blog-btn-border blog-btn-border"></span>
            <span className="icon">
              <NextArrow />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
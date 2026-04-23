import Link from "next/link";
import Image from "next/image";
import { RightArrowSeven } from "@/components/svg";
import { IBlogDT } from "@/types/blog-d-t";
// Statik bir yedek görsel import et (Opsiyonel: Eğer veritabanında görsel yoksa kullanılır)
import default_thumb from '@/assets/img/blog/blog-list/blog-list-1.jpg';

type IProps = {
  blog: IBlogDT;
};

export default function BlogListItem({ blog }: IProps) {
  // Görsel kaynağını güvenli bir şekilde belirleyelim
  const imageSrc = blog.thumbnail_url || blog.img || default_thumb;

  return (
    <div className="tp-postbox-item p-relative mb-40">
      <div className="tp-postbox-item-list-box d-flex align-items-center">
        <div className="tp-postbox-item-list-thumb">
          <Link href={`/blog-details/${blog.id}`}>
            <Image
              src={imageSrc}
              alt={blog.title || "Analiz Görseli"}
              width={270}
              height={340}
              style={{
                width: '270px',
                height: '340px',
                objectFit: 'cover',
                borderRadius: '8px'
              }}
            />
          </Link>
        </div>

        <div className="tp-postbox-content">
          <div className="tp-blog-stories-tag-wrap d-flex">
            {/* Supabase'den gelen kategori ismi veya ilk etiketi kullan */}
            <a href="#">{blog.category_name || (blog.tags && blog.tags[0]) || "Genel"}</a>
            <span>{blog.date}</span>
          </div>
          <h3 className="tp-postbox-item-list-title">
            <Link href={`/blog-details/${blog.id}`}>{blog.title}</Link>
          </h3>
          <p>{blog.description || blog.desc} […]</p>
          <div className="tp-postbox-btn">
            <Link href={`/blog-details/${blog.id}`}>
              Devamını Oku{" "}
              <span>
                <RightArrowSeven />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
import Link from "next/link";
import Image from "next/image";
import { PrevArrow } from "@/components/svg";
import { IBlogDT } from "@/types/blog-d-t";

type IProps = {
  blog: IBlogDT;
};

export default function DetailsBreadcrumb({ blog }: IProps) {
  return (
    <section className="tp-blog-full-width-area tp-blog-full-width-pl fix p-relative pt-180">
      <div
        className="tp-blog-stories-bg"
        style={{ backgroundImage: `url(${blog.thumbnail_url || "/assets/img/blog/blog-stories/blog-stories-bg.png"})` }}
      ></div>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-12">
            <div className="tp-breadcrumb__content text-center">
              {/* Dinamik Başlık: Analiz Başlığı */}
              <h3 className="tp-blog-full-width-title">
                {blog.title}
              </h3>

              <div className="tp-blog-full-width-box d-flex justify-content-between align-items-center">
                {/* Geri Dönüş Linki */}
                <div className="tp-blog-full-width-back">
                  <Link href="/blog">
                    <span>
                      <PrevArrow />
                    </span>
                    Tüm Analizlere Dön
                  </Link>
                </div>

                {/* Yazar ve Tarih Bilgisi */}
                <div className="tp-blog-details-user order-3 order-lg-2">
                  <span>
                    {blog.author_img ? (
                      <Image
                        src={blog.author_img}
                        alt={blog.author_name || "Yazar"}
                        width={40}
                        height={40}
                        className="rounded-circle"
                      />
                    ) : (
                      <i className="fa-solid fa-user-circle me-2"></i>
                    )}
                    {" "}{blog.author_name || "Aktüel Analiz Analisti"}
                  </span>
                  <span>{blog.date}</span>
                  <span>{blog.comments_count || 0} Yorum</span>
                </div>

                {/* Sosyal Paylaşım */}
                <div className="tp-blog-details-user-social order-2 order-lg-3">
                  <div className="tp-postbox-details-social text-end">
                    <a href="#" title="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="#" title="X (Twitter)"><i className="fa-brands fa-twitter"></i></a>
                    <a href="#" title="Bağlantıyı Kopyala"><i className="fa-solid fa-link"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
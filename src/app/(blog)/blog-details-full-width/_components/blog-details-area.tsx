"use client";
import Image from 'next/image';
import { IBlogDT } from '@/types/blog-d-t';
import BlogDetailsComments from '@/components/blog/details/blog-details-comments';
import BlogDetailsNavigation from '@/components/blog/details/blog-details-navigation';
import BlogReplyForm from '@/components/form/blog-reply-form';
import BlogDetailsAuthor from '@/components/blog/details/blog-details-author';
import details_thumb from '@/assets/img/blog/deatils/blog-details-thumb-2.jpg';
import { BlogQuoteItemOne } from '@/components/blog/single/blog-quote-item';

type IProps = {
  blog: IBlogDT
}

export default function BlogDetailsArea({ blog }: IProps) {
  return (
    <section className="tp-blog-details-p p-relative pt-80 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="tp-postbox-wrapper">

              {/* Supabase'den Gelen Dinamik HTML İçeriği */}
              <div className="tp-postbox-details-text">
                {blog.content ? (
                  <div
                    className="tp-blog-main-content"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                  />
                ) : (
                  <>
                    <p className="tp-dropcap text-1">
                      {blog.description || "Finansal analiz içeriği hazırlanıyor..."}
                    </p>
                    <p>Piyasalardaki güncel veriler ve teknik göstergeler ışığında hazırlanan raporun detayları yüklenmektedir.</p>
                  </>
                )}
              </div>

              {/* Analiz Destekleyici Görsel */}
              <div className="tp-postbox-details-thumb pb-60 mt-40">
                <Image
                  src={blog.thumbnail_url || details_thumb}
                  alt="analiz-grafigi"
                  width={850}
                  height={450}
                  style={{ height: "auto", borderRadius: "8px", objectFit: "cover" }}
                />
              </div>

              {/* Önemli Analiz Notu / Alıntı */}
              <BlogQuoteItemOne blog={blog} />

              {/* Etiketler ve Sosyal Paylaşım */}
              <div className="tp-postbox-details-share mb-50">
                <div className="row align-items-center">
                  <div className="col-md-8">
                    <div className="tagcloud tp-postbox-details-tag">
                      {blog.tags && blog.tags.length > 0 ? (
                        blog.tags.map((tag, i) => <a key={i} href="#">{tag}</a>)
                      ) : (
                        <>
                          <a href="#">Borsa</a>
                          <a href="#">Analiz</a>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="tp-postbox-details-social text-start text-md-end">
                      <a href="#" title="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                      <a href="#" title="X"><i className="fa-brands fa-twitter"></i></a>
                      <a href="#" title="Link"><i className="fa-solid fa-link"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigasyon ve Yazar Kartı */}
              <BlogDetailsNavigation currentId={blog.id} />
              {/* Yorumlar Bölümü */}
              <div className="tp-postbox-comment mb-100">
                <h3 className="tp-postbox-comment-title">
                  {blog.comments_count || 2} Yorum
                </h3>
                <BlogDetailsComments />
              </div>

              {/* Yorum Formu */}
              <div className="tp-postbox-comment-from">
                <h3 className="tp-postbox-comment-title">Bir Yanıt Bırakın</h3>
                <p className="tp-postbox-comment-p">
                  E-posta adresiniz yayımlanmayacaktır. Gerekli alanlar * ile işaretlenmiştir.
                </p>
                <BlogReplyForm />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
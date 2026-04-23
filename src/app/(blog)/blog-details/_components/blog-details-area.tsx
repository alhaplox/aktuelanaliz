import Image from 'next/image';
import { IBlogDT } from '@/types/blog-d-t';
import BlogReplyForm from '@/components/form/blog-reply-form';
import BlogDetailsNavigation from '@/components/blog/details/blog-details-navigation';
import BlogSidebarArea from '@/components/blog/sidebar/blog-sidebar-area';
import { BlogQuoteItemOne } from '@/components/blog/single/blog-quote-item';
import BlogDetailsComments from '@/components/blog/details/blog-details-comments';
import BlogDetailsAuthor from '@/components/blog/details/blog-details-author';

// Statik görselleri yedek (fallback) olarak tutuyoruz
import details_bg from '@/assets/img/blog/deatils/blog-details-bg.jpg';

type IProps = {
	blog: IBlogDT
}

export default function BlogDetailsArea({ blog }: IProps) {
	// Alt etiketleri için güvenli isimler
	const authorName = blog.author_name || blog.author || "Aktuel Analiz Yazarı";
	const blogTitle = blog.title || "Piyasa Analizi";

	return (
		<section className="tp-blog-details-p p-relative pt-80 pb-120">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="tp-blog-details-wrap">
							<div className="tp-blog-stories-tag-wrap">
								<a href="#">{blog.category_name || blog.category || "Piyasa Analizi"}</a>
							</div>
							<h3 className="tp-blog-details-title">{blogTitle}</h3>
							<div className="tp-blog-details-user d-flex justify-content-between">
								<div className="tp-blog-details-user-box">
									<span>
										{blog.author_img && (
											<Image
												src={blog.author_img}
												alt={authorName} // HATA BURADAYDI: blog.author boşsa alt hatası veriyordu
												width={46}
												height={46}
												className="rounded-circle"
												style={{ objectFit: 'cover' }}
											/>
										)} {authorName}
									</span>
									<span>{blog.date}</span>
									<span>{blog.comments_count || 0} Yorum</span>
								</div>
								<div className="tp-blog-details-user-social">
									<div className="tp-postbox-details-social text-end">
										<a href="#" title="Facebook'ta Paylaş"><i className="fa-brands fa-facebook-f"></i></a>
										<a href="#" title="X'te Paylaş"><i className="fa-brands fa-twitter"></i></a>
										<a href="#" title="Bağlantıyı Kopyala"><i className="fa-solid fa-link"></i></a>
									</div>
								</div>
							</div>
						</div>

						<div className="tp-blog-details-thumb mb-80">
							<Image
								src={blog.thumbnail_url || blog.thumbnail || details_bg}
								alt={blogTitle}
								width={1200}
								height={600}
								style={{ width: "100%", height: "auto", objectFit: "cover", borderRadius: "12px" }}
								priority
							/>
						</div>
					</div>

					<div className="col-lg-8">
						<div className="tp-postbox-wrapper">
							{/* ANA İÇERİK: Veritabanındaki 'content' alanını buraya basıyoruz */}
							<div className="tp-postbox-details-text">
								<div
									className="tp-postbox-content-main"
									dangerouslySetInnerHTML={{ __html: blog.content || blog.desc || "" }}
								/>
							</div>

							{/* Alıntı Alanı: Supabase'deki veriyi kullanır */}
							<div className="mt-50 mb-50">
								<BlogQuoteItemOne blog={blog} />
							</div>

							{/* Etiketler ve Paylaşım */}
							<div className="tp-postbox-details-share mb-50">
								<div className="row align-items-center">
									<div className="col-md-8">
										<div className="tagcloud tp-postbox-details-tag">
											{blog.tags && blog.tags.length > 0 ? (
												blog.tags.map((tag, index) => <a key={index} href="#">{tag}</a>)
											) : (
												<>
													<a href="#">Borsa</a>
													<a href="#">Analiz</a>
												</>
											)}
										</div>
									</div>
								</div>
							</div>

							<BlogDetailsNavigation />
							<BlogDetailsAuthor author={authorName} />

							<div className="tp-postbox-comment mb-100">
								<h3 className="tp-postbox-comment-title">{blog.comments_count || 0} Yorum</h3>
								<BlogDetailsComments />
							</div>

							<div className="tp-postbox-comment-from">
								<h3 className="tp-postbox-comment-title">Yorum Yapın</h3>
								<p className="tp-postbox-comment-p">
									E-posta adresiniz yayımlanmayacaktır.
								</p>
								<BlogReplyForm />
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<BlogSidebarArea />
					</div>
				</div>
			</div>
		</section>
	)
}
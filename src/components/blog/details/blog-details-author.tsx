import Image from 'next/image';
// Unsplash'ten profesyonel bir avatar veya yer tutucu
const default_avatar = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop';

// prop type 
type IProps = {
  author: string;
}

export default function BlogDetailsAuthor({ author }: IProps) {
  return (
    <div className="tp-postbox-details-author-box mb-60 p-relative">
      <div className="tp-postbox-details-author-wrap d-flex align-items-center">
        <div className="tp-postbox-details-author-avata">
          {/* Yuvarlak ve profesyonel bir görünüm için stil ekledik */}
          <Image
            src={default_avatar}
            alt={author}
            width={100}
            height={100}
            style={{ borderRadius: '50%', objectFit: 'cover' }}
          />
        </div>
        <div className="tp-postbox-details-author-content">
          <h4>{author || "Aktuel Analiz"}</h4>
          <p>
            Finansal piyasalar stratejisti ve teknik analiz uzmanı. <br />
            Borsa İstanbul, küresel makro veriler ve kripto varlıklar üzerine
            derinlemesine analizler sunarak yatırımcılara yol gösterir.
          </p>
        </div>
      </div>
      <div className="tp-postbox-details-author-social">
        {/* Aktüel Analiz sosyal medya veya yazar profilleri için linkler */}
        <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
        <a href="#" aria-label="Twitter"><i className="fa-brands fa-twitter"></i></a>
        <a href="#" aria-label="Linkedin"><i className="fa-brands fa-linkedin-in"></i></a>
      </div>
    </div>
  )
}
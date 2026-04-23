import Image from "next/image";
import { StaticImageData } from "next/image";
import full_width_bg from '@/assets/img/blog/deatils/blog-full-width-bg.jpg';

type IProps = {
   imgSrc?: string | StaticImageData;
}

export default function FullWidthImg({ imgSrc }: IProps) {
   return (
      <div className="tp-blog-full-width-img mb-60 mt-40">
         <div className="container-fluid p-0 ">
            <div className="row g-0">
               <div className="col-lg-12">
                  <div className="tp-blog-full-width-thumb">
                     <Image
                        src={imgSrc || full_width_bg}
                        alt="market-pulse-analiz-gorseli"
                        width={1920}
                        height={600}
                        style={{
                           width: '100%',
                           height: 'auto',
                           maxHeight: '600px',
                           objectFit: 'cover'
                        }}
                        priority={false} // Sayfa ortasındaysa false, en tepedeyse true yapılabilir
                     />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
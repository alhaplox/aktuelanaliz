import { StaticImageData } from "next/image";
import client from "@/assets/images/user/client-07.jpg";
import client4 from "@/assets/images/user/client-04.jpg";
import client5 from "@/assets/images/user/client-05.jpg";
import client3 from "@/assets/images/user/client-03.jpg";
import type { FaqType } from "./types";

type SliderDataType = {
  title: string;
  description: string;
  image: StaticImageData;
  name: string;
  catageries: string;
};

// Aktüel Analiz Akademi - Kursiyer Yorumları
export const sliderData: SliderDataType[] = [
  {
    title: "Sıfırdan Başlayanlar İçin Kusursuz!",
    description:
      "Finans hakkında hiçbir bilgim yokken Video Eğitim paketiyle başladım. Anlatım o kadar sade ve akıcı ki, kısa sürede BIST üzerinde kendi analizlerimi yapıp rasyonel kararlar almaya başladım. Emeğinize sağlık.",
    image: client,
    name: "Murat Yılmaz",
    catageries: "BIST Yatırımcısı & Girişimci",
  },
  {
    title: "Canlı Sınıf Pratikleri Harika",
    description:
      "Online Canlı Grup eğitimine katıldım. Sadece teorik bilgi verilmiyor; her hafta canlı piyasada indikatörleri ve Price Action yapısını birlikte uyguluyoruz. Eğitmenin anlık sorularımıza cevap vermesi çok değerli.",
    image: client4,
    name: "Aylin Korkmaz",
    catageries: "Kripto Varlık Traderı",
  },
  {
    title: "Birebir Mentorluk Süreci Çağ Atlattı",
    description:
      "250$'lık Online Birebir Mentorluk paketini aldım. Benim portföyüme ve risk yönetimime özel bir yol haritası çizdik. Canlı piyasada birlikte yaptığımız işlemler sayesinde trading psikolojimi tamamen kontrol altına aldım.",
    image: client5,
    name: "Caner Demir",
    catageries: "Portföy Yöneticisi",
  },
  {
    title: "Kesinlikle Tavsiye Ediyorum",
    description:
      "Piyasada çok fazla bilgi kirliliği var ama Aktüel Analiz veriye dayalı, rasyonel ve profesyonel analizi çok iyi öğretiyor. Üstelik eğitim paneline ömür boyu erişebilmek büyük bir avantaj.",
    image: client3,
    name: "Selin Öztürk",
    catageries: "Mali Müşavir & Yatırımcı",
  },
];

// Aktüel Analiz Akademi - Sıkça Sorulan Sorular
const faqContents: FaqType[] = [
  {
    title:
      "Eğitimler için herhangi bir finans veya ekonomi altyapısına ihtiyacım var mı?",
    description:
      "Hayır, kesinlikle gerek yok. Eğitimlerimiz en temel seviyeden, yani 'Sıfırdan' başlar. Finansal okuryazarlık temelinden başlayarak adım adım ileri düzey teknik analiz ve portföy yönetimi stratejilerine doğru ilerleriz.",
  },
  {
    title:
      "Kayıt Video Eğitimler ile Canlı Grup Eğitimleri arasındaki fark nedir?",
    description:
      "Kayıt Video Eğitimlerde, önceden hazırlanmış yüksek kaliteli ders videolarına 7/24 erişim sağlar ve kendi hızınızda ilerlersiniz. Canlı Grup Eğitimlerinde ise dersler belirlenen gün ve saatlerde interaktif olarak işlenir; eğitmene anlık soru sorabilir ve haftalık canlı piyasa pratiklerine katılabilirsiniz.",
  },
  {
    title: "Online Birebir Mentorluk süreci nasıl işliyor?",
    description:
      "Birebir mentorlukta ders günleri, saatleri ve müfredat tamamen sizin mevcut bilgi seviyenize ve hedeflerinize göre kişiselleştirilir. Canlı piyasada birlikte işlemler yapar, kendi portföyünüzün risk analizini çıkarırız. Eğitim bittikten sonra da 1 ay boyunca WhatsApp üzerinden doğrudan destek almaya devam edersiniz.",
  },
  {
    title:
      "Satın aldığım eğitimlerin içeriklerine ne kadar süreyle erişebilirim?",
    description:
      "Hangi eğitim modelini seçerseniz seçin (Video, Canlı veya Birebir), tüm video kayıtlarına ve eğitim paneline ömür boyu (lifetime) kesintisiz erişim hakkına sahip olursunuz.",
  },
  {
    title:
      "Eğitimlerde hangi piyasalar üzerinde analizler yapmayı öğreneceğiz?",
    description:
      "Eğitimlerimizin içeriği geniş bir yelpazeyi kapsar. Başta BIST 100, Kripto Para Piyasası, Amerikan Borsaları (NASDAQ, NYSE), Vadeli İşlemler (VİOP) ve Emtialar (Altın, Gümüş, Petrol) olmak üzere tüm küresel piyasalarda geçerli olan teknik ve temel analiz metodolojilerini öğrenirsiniz.",
  },
  {
    title: "Eğitim fiyatları tek seferlik mi yoksa aylık abonelik mi?",
    description:
      "Tüm eğitim paketlerimizin ücretleri tek seferliktir (One-time payment). Herhangi bir aylık üyelik, gizli ücret veya yenileme bedeli bulunmamaktadır.",
  },
  {
    title: "Dersleri kaçırırsam sonradan izleme imkanım var mı?",
    description:
      "Evet. Canlı grup ve birebir eğitimlerde işlenen tüm dersler eş zamanlı olarak kaydedilir. Canlı yayına katılamasanız bile, ders bitiminden hemen sonra panelinize yüklenen kayıtları dilediğiniz zaman izleyebilirsiniz.",
  },
  {
    title:
      "Eğitime katılmak için bilgisayarıma teknik bir program yüklemeli miyim?",
    description:
      "Özel bir yazılım yüklemenize gerek yoktur. Analizlerimizi tamamen tarayıcı tabanlı çalışan TradingView platformu üzerinden gerçekleştireceğiz. Canlı dersler ve mentorluk seansları için ise sadece Zoom veya Google Meet bağlantısına tıklamanız yeterlidir.",
  },
  {
    title: "Ödeme yöntemleriniz nelerdir ve taksit imkanı var mı?",
    description:
      "Ödemelerinizi web sitemiz üzerinden kredi kartı veya banka kartı ile güvenli bir şekilde yapabilirsiniz. Anlaşmalı bankaların kartlarına peşin fiyatına veya vade farkıyla taksit seçenekleri sunulmaktadır. Ayrıca alternatif ödeme yöntemleri için iletişim formumuz üzerinden bizimle görüşebilirsiniz.",
  },
  {
    title: "Eğitim esnasında veya sonrasında sorularımı nasıl sorabilirim?",
    description:
      "Canlı grup ve VIP mentorluk öğrencilerimiz kendilerine özel oluşturulan kapalı topluluklara dahil edilirler. Buradan hem diğer kursiyerlerle bilgi alışverişi yapabilir hem de piyasa saatleri içerisinde eğitmenlerimize doğrudan sorularınızı iletebilirsiniz.",
  },
];

export { faqContents };

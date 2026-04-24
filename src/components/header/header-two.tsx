import Image from "next/image";
import Link from "next/link";
import SearchButton from "./button/search-button";
import NavbarMenusTwo from "./navbar/navbar-menus-2";
import logo_black from "@/assets/img/logo/logo-black.png";
import ProfileDropdown from "./header-profile/profile-dropdown";
import HeaderCategoryArea from "./header-category/header-category-area";
import HeaderStickyWrapper from "./header-sticky-provider/header-sticky-wrapper";
import CartButton from "./button/cart-button";
import OffcanvasButton from "./button/offcanvas-btn";

// prop type 
type IProps = {
  inner?: boolean;
  transparent?: boolean;
}

export default function HeaderTwo({ inner = false, transparent }: IProps) {
  return (
    <>
      <header className="header-area p-relative">
        <HeaderStickyWrapper cls={`tp-header-2 ${transparent ? 'tp-header-transparent' : ''}`}>
          <div className="container custom-container-larg">
            <div className="row align-items-center">
              {/* Sol Kısım: Logo ve Kategoriler */}
              <div className="col-xxl-3 col-xl-3 col-lg-6 col-6">
                <div className="tp-header-2-right d-flex align-items-center">
                  <div className="tp-header-inner-logo tp-header-logo">
                    <Link href="/">
                      <Image
                        src={logo_black}
                        alt="Aktüel Analiz Logo"
                        priority
                        style={{ height: 'auto', width: '160px' }}
                      />
                    </Link>
                  </div>
                  {/* Piyasalar / Analizler Dropdown */}
                  <HeaderCategoryArea />
                </div>
              </div>

              {/* Orta Kısım: Ana Menü */}
              <div className="col-xxl-6 col-xl-7 col-lg-6 d-none d-xl-block">
                <div className="main-menu text-xl-center d-none d-xl-block">
                  <NavbarMenusTwo />
                </div>
              </div>

              {/* Sağ Kısım: Arama, Cart, Profil ve Aksiyon */}
              <div className="col-xxl-3 col-xl-2 col-lg-6 col-6">
                <div className="tp-header-2-contact d-flex align-items-center justify-content-end">

                  {/* Canlı Arama Butonu (Popup'ı tetikler) */}
                  <div className="tp-header-inner-search">
                    <SearchButton />
                  </div>

                  {/* Sepet / Abonelikler */}
                  <div className="tp-header-2-cart home-2 d-none d-xxl-block">
                    <CartButton />
                  </div>

                  {/* VIP / Abone Ol Butonu */}
                  <div className={`tp-header-inner-btn ${inner ? '' : 'home-2'} d-none d-xxl-block`}>
                    <Link className="tp-btn-inner" href="/membership">
                      VIP Analiz
                    </Link>
                  </div>

                  {/* Dinamik Profil Dropdown */}
                  <ProfileDropdown />

                  {/* Mobil Menü Butonu */}
                  <div className="offcanvas-btn d-xxl-none ml-30">
                    <OffcanvasButton offcanvas_cls="offcanvas__2" offcanvas_menu_2={true} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </HeaderStickyWrapper>
      </header>

      {/* Portallar (SearchPopup, Offcanvas vb. buraya render edilir) */}
      <div id="offcanvas-sidebar" />
      <div id="cart-mini-sidebar"></div>
    </>
  );
}
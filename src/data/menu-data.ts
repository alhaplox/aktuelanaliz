import { IMenu, IMenuDT2 } from "@/types/menu-d-t";

const menu_data: IMenu[] = [
  {
    id: 1,
    title: "Anasayfa",
    link: "/",
  },
  {
    id: 2,
    title: "Online Kurslar",
    link: "#",
    sm_mega_menus: [
      { id: 1, title: "Genel Bakış", link: "/university-admission-overview" },
      { id: 2, title: "Borsa", link: "/university-program" },
      { id: 3, title: "Nasdaq", link: "/university-program" },
      { id: 4, title: "Emtia", link: "/university-program" },
      { id: 5, title: "Kripto Paralar", link: "/course-with-filter" },
      { id: 6, title: "Emtia", link: "/course-with-filter" },
      { id: 7, title: "Endeksler", link: "/university-leadership" },
    ],
  },
  {
    id: 3,
    title: "Admissions",
    link: "#",
    dropdown_menus: [
      { id: 1, title: "Overview", link: "/university-admission-overview" },
      { id: 2, title: "How to Apply", link: "/university-apply" },
      { id: 3, title: "Tuition & Fees", link: "/university-tuition-fees" },
      { id: 4, title: "Financial Aid", link: "/university-financial" },
      { id: 5, title: "Dates & Deadlines", link: "/university-deadlines" },
      { id: 6, title: "Schedule a Tour", link: "/university-schedule" },
    ],
  },
  {
    id: 4,
    title: "Pages",
    link: "#",
    pages_dropdown: [
      {
        id: 1,
        title: "About",
        dropdown_menus: [
          { id: 1, title: "About Us", link: "/about" },
          { id: 2, title: "University About", link: "/university-about" },
          { id: 3, title: "Campus", link: "/university-campus" },
          { id: 4, title: "Mission & Values", link: "/university-mission" },
          { id: 5, title: "History", link: "/university-history" },
          { id: 6, title: "Our Leadership", link: "/university-leadership" },
        ],
      },
      {
        id: 2,
        title: "Get Started",
        dropdown_menus: [
          { id: 1, title: "Events", link: "/event" },
          { id: 2, title: "Event Details", link: "/event-details/1" },
          { id: 3, title: "Instructor", link: "/instructor" },
          { id: 4, title: "Profile", link: "/my-profile" },
          { id: 5, title: "Become a Instructor", link: "/become-instructor" },
          { id: 6, title: "Maintenance", link: "/up-coming" },
          { id: 7, title: "Contact Us", link: "/contact" },
          { id: 8, title: "Membership plans", link: "/membership-plans" },
          { id: 9, title: "FAQs", link: "/faq" },
          { id: 10, title: "Privacy Policy", link: "/privacy-policy" },
          { id: 11, title: "404 Page", link: "/not-found" },
        ],
      },
      {
        id: 3,
        title: "Shop",
        dropdown_menus: [
          { id: 1, title: "Shop", link: "/shop-grid" },
          { id: 2, title: "Single Product", link: "/shop-details/1" },
          { id: 3, title: "Cart Page", link: "/cart" },
          { id: 4, title: "Wishlist page", link: "/wishlist" },
          { id: 5, title: "My Account", link: "/my-account" },
          { id: 6, title: "Login & Register", link: "/login" },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Blog",
    link: "#",
    dropdown_menus: [
      { id: 1, title: "Blog 3 Column", link: "/blog-stories" },
      { id: 2, title: "Blog Grid Sidebar", link: "/blog-stories-sidebar" },
      { id: 3, title: "Blog List Sidebar", link: "/blog-list" },
      { id: 4, title: "Blog Standard", link: "/blog-standard" },
      { id: 5, title: "Blog Details", link: "/blog-details/1" },
      {
        id: 6,
        title: "Blog Details Full Width",
        link: "/blog-details-full-width/1",
      },
    ],
  },
];

export default menu_data;

// menu data 2
export const menu_data_2: IMenuDT2[] = [
  {
    id: 1,
    title: "Anasayfa",
    link: "/",
  },
  {
    id: 2,
    title: "Online Kurslar",
    link: "#",
    academic_dropdown: [
      {
        id: 1,
        title: "Eğitimler",
        dropdown_menus: [
          { id: 1, title: "Borsa İstanbul", link: "/borsa-istanbul" },
          { id: 2, title: "Nasdaq", link: "/nasdaq" },
          { id: 3, title: "Kripto Paralar", link: "/kripto-paralar" },
          { id: 4, title: "Emtia", link: "/emtia" },
          { id: 5, title: "Endeksler", link: "/endeksler" },
        ],
      },
    ],
  },

  {
    id: 5,
    title: "Kurumsal",
    link: "#",
    pages_dropdown: [
      {
        id: 1,
        title: "Hakkımızda",
        dropdown_menus: [
          { id: 1, title: "Hakkımızda", link: "/about" },
          { id: 2, title: "Eğitmenler", link: "/university-about" },
          { id: 4, title: "Misyon", link: "/university-mission" },
        ],
      },
      {
        id: 2,
        title: "Eğitim Hakkında",
        dropdown_menus: [
          { id: 3, title: "Eğitmenler", link: "/instructor" },
          { id: 5, title: "Eğitmen Ol!", link: "/become-instructor" },
          { id: 7, title: "İletişim", link: "/contact" },
          { id: 8, title: "Üyelik Planları", link: "/membership-plans" },
          { id: 9, title: "SSS", link: "/faq" },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Blog",
    link: "/blog-list",
  },
];

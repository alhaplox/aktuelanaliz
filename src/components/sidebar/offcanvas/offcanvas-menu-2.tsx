'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";

// Tip tanımlamaları
type MenuLink = { id: string | number; title: string; link: string };
type SubMenu = { id: string | number; title: string; dropdown_menus: MenuLink[] };

export default function OffcanvasMenuTwo() {
   const [navTitle, setNavTitle] = useState("");
   const [subMenu, setSubMenu] = useState("");
   const [dynamicCourses, setDynamicCourses] = useState<MenuLink[]>([]);
   const [dynamicBlogs, setDynamicBlogs] = useState<MenuLink[]>([]);

   const supabase = createClient();

   useEffect(() => {
      async function fetchMenuData() {
         // 1. Kursları slug ile çek
         const { data: courses } = await supabase
            .from("courses")
            .select("id, title, slug")
            .limit(5);

         // 2. Son analizleri uuid ile çek
         const { data: blogs } = await supabase
            .from("blogs")
            .select("id, title")
            .order("created_at", { ascending: false })
            .limit(5);

         if (courses) {
            setDynamicCourses(courses.map(c => ({ id: c.id, title: c.title, link: `/course-details/${c.slug}` })));
         }
         if (blogs) {
            setDynamicBlogs(blogs.map(b => ({ id: b.id, title: b.title, link: `/blog-details/${b.id}` })));
         }
      }
      fetchMenuData();
   }, []);

   const openMobileMenu = (menu: string) => {
      setNavTitle(navTitle === menu ? "" : menu);
      setSubMenu("");
   };

   const openSubMobileMenu = (s_menu: string) => {
      setSubMenu(subMenu === s_menu ? "" : s_menu);
   };

   // Aktüel Analiz Menü Yapısı
   const main_menu = [
      { id: 1, title: "Anasayfa", link: "/" },
      { id: 2, title: "Analizler", link: "/blog", dropdown: dynamicBlogs },
      { id: 3, title: "Eğitimler", link: "/courses", dropdown: dynamicCourses },
      {
         id: 4, title: "Piyasalar", link: "/markets", sub_dropdown: [
            { id: 41, title: "Döviz & Altın", dropdown_menus: [{ id: 1, title: "XAUUSD", link: "/markets/gold" }] },
            { id: 42, title: "Borsa İstanbul", dropdown_menus: [{ id: 1, title: "BIST100", link: "/markets/bist" }] }
         ]
      },
   ];

   return (
      <div className="tp-main-menu-mobile d-xl-none">
         <nav className="tp-main-menu-content">
            <ul className="dropdown-opened">
               {main_menu.map((menu) => (
                  <li key={menu.id} className={`has-dropdown ${navTitle === menu.title ? "dropdown-opened expanded" : ""}`}>
                     <div className="d-flex align-items-center justify-content-between">
                        <Link href={menu.link}>{menu.title}</Link>
                        {(menu.dropdown || menu.sub_dropdown) && (
                           <button
                              onClick={() => openMobileMenu(menu.title)}
                              className={`dropdown-toggle-btn ${navTitle === menu.title ? "dropdown-opened" : ""}`}
                           ></button>
                        )}
                     </div>

                     {/* Blog & Kurs Dropdown (Dinamik) */}
                     {menu.dropdown && (
                        <ul className="tp-submenu" style={{ display: navTitle === menu.title ? "block" : "none" }}>
                           {menu.dropdown.map((dm) => (
                              <li key={dm.id}>
                                 <Link href={dm.link}>{dm.title}</Link>
                              </li>
                           ))}
                        </ul>
                     )}

                     {/* Çoklu Kategori (Piyasalar vb.) */}
                     {menu.sub_dropdown && (
                        <ul className="tp-submenu" style={{ display: navTitle === menu.title ? "block" : "none" }}>
                           {menu.sub_dropdown.map((sub) => (
                              <li key={sub.id} className={`has-dropdown ${subMenu === sub.title ? "dropdown-opened expanded" : ""}`}>
                                 <div className="d-flex align-items-center justify-content-between">
                                    <Link href="#">{sub.title}</Link>
                                    <button
                                       onClick={() => openSubMobileMenu(sub.title)}
                                       className={`dropdown-toggle-btn ${subMenu === sub.title ? "dropdown-opened" : ""}`}
                                    ></button>
                                 </div>
                                 <ul className="tp-submenu" style={{ display: subMenu === sub.title ? "block" : "none" }}>
                                    {sub.dropdown_menus.map((dm) => (
                                       <li key={dm.id}><Link href={dm.link}>{dm.title}</Link></li>
                                    ))}
                                 </ul>
                              </li>
                           ))}
                        </ul>
                     )}
                  </li>
               ))}
            </ul>
         </nav>
      </div>
   );
}
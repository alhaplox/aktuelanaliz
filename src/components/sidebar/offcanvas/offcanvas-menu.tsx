'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";
interface IProps {
  onHandleOffCanvas: () => void;
}
// Dinamik Link Tipleri
type DynamicItem = { id: string | number; title: string; link: string };

export default function OffcanvasMenu({ onHandleOffCanvas }: IProps) {
  const [navTitle, setNavTitle] = useState("");
  const [dynamicCourses, setDynamicCourses] = useState<DynamicItem[]>([]);
  const [dynamicBlogs, setDynamicBlogs] = useState<DynamicItem[]>([]);

  const supabase = createClient();

  useEffect(() => {
    async function getNavData() {
      // Kursları Slug ile çekiyoruz
      const { data: courses } = await supabase
        .from("courses")
        .select("id, title, slug")
        .limit(8);

      // Blogları UUID ile çekiyoruz
      const { data: blogs } = await supabase
        .from("blogs")
        .select("id, title")
        .order("created_at", { ascending: false })
        .limit(8);

      if (courses) {
        setDynamicCourses(courses.map(c => ({ id: c.id, title: c.title, link: `/course-details/${c.slug}` })));
      }
      if (blogs) {
        setDynamicBlogs(blogs.map(b => ({ id: b.id, title: b.title, link: `/blog-details/${b.id}` })));
      }
    }
    getNavData();
  }, []);

  const openMobileMenu = (menu: string) => {
    setNavTitle(navTitle === menu ? "" : menu);
  };

  // Aktüel Analiz Dinamik Menü Haritası
  const nav_menu = [
    { id: 1, title: "Anasayfa", link: "/" },
    { id: 2, title: "Analizler", link: "/blog", dynamicData: dynamicBlogs, isMega: true },
    { id: 3, title: "Eğitimler", link: "/courses", dynamicData: dynamicCourses, isMega: true },
    {
      id: 4, title: "Piyasalar", link: "/markets", dropdown_menus: [
        { id: 41, title: "Altın / Ons", link: "/markets/gold" },
        { id: 42, title: "BIST 100", link: "/markets/bist" },
        { id: 43, title: "Brent Petrol", link: "/markets/oil" }
      ]
    },
  ];

  return (
    <div className="tp-main-menu-mobile d-xl-none">
      <nav className="tp-main-menu-content">
        <ul className="dropdown-opened">
          {nav_menu.map((menu) => (
            <li key={menu.id} className={`has-dropdown ${navTitle === menu.title ? "dropdown-opened expanded" : ""}`}>
              <div className="d-flex align-items-center justify-content-between">
                <Link href={menu.link}>{menu.title}</Link>
                {(menu.dynamicData || menu.dropdown_menus) && (
                  <button
                    onClick={() => openMobileMenu(menu.title)}
                    className={`dropdown-toggle-btn ${navTitle === menu.title ? "dropdown-opened" : ""}`}
                  ></button>
                )}
              </div>

              {/* Dinamik Megamenu Görünümü (Kurslar ve Bloglar İçin) */}
              {menu.dynamicData && (
                <div className="tp-megamenu-main" style={{ display: navTitle === menu.title ? "block" : "none" }}>
                  <div className="megamenu-demo-small p-relative">
                    <div className="tp-megamenu-small-content">
                      <div className="row">
                        <div className="col-12">
                          <div className="tp-megamenu-list">
                            {menu.dynamicData.map((item) => (
                              <Link key={item.id} href={item.link}>
                                {item.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Klasik Dropdown (Piyasalar vb. İçin) */}
              {menu.dropdown_menus && (
                <ul className="tp-submenu" style={{ display: navTitle === menu.title ? "block" : "none" }}>
                  {menu.dropdown_menus.map((dm) => (
                    <li key={dm.id}>
                      <Link href={dm.link}>{dm.title}</Link>
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
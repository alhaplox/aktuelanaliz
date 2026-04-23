import { CategorySvg } from "@/components/svg";
import Link from "next/link";


export default function HeaderCategoryArea() {
  return (
    <div className="tp-header-2-category tp-header-inner-category home-2 d-none d-md-block">
      <Link className="tp-header-2-category-icon" href="/course-with-sidebar">
        <p>
          <span>
            <CategorySvg />
          </span>
          {" "}Kategoriler
        </p>
      </Link>
      <div className="tp-header-2-category-list">
        <ul>
          <li>
            <Link href="/course-with-sidebar">Borsa İstanbul</Link>
          </li>
          <li>
            <Link href="/course-with-sidebar">NASDAQ</Link>
          </li>
          <li>
            <Link href="/course-with-sidebar">Kripto Paralar</Link>
          </li>
          <li>
            <Link href="/course-with-sidebar">Emtia</Link>
          </li>
          <li>
            <Link href="/course-with-sidebar">Endeksler</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

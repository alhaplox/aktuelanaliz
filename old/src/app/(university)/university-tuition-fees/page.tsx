import { Metadata } from "next";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import TuitionArea from "./_components/tuition-area";

export const metadata: Metadata = {
  title: "University Tuition Fees - Aktüel Analiz",
};

export default function UniversityTuitionFeesPage() {
  return (
    <main>
      {/* breadcrumb area start */}
      <BreadcrumbTwo
        title="Tuition & Fees"
        subtitle="Tuition & Fees"
        admission={true}
      />
      {/* breadcrumb area end */}

      {/* tuition area start */}
      <TuitionArea />
      {/* tuition area end */}

    </main>
  );
}

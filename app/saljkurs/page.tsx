import type { Metadata } from "next";
import { SalesCourse } from "@/components/sales-course";

export const metadata: Metadata = {
  title: "Säljkurs",
  description:
    "Lär dig FRAMRAs säljmetod i nio delar och visa dina kunskaper i ett interaktivt slutprov.",
};

export default function SalesCoursePage() {
  return <SalesCourse />;
}

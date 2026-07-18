import DashboardLayout from "@/components/dashboard/DashboardLayout";
import DashboardHero from "@/components/dashboard/DashboardHero";
import SummaryGrid from "@/components/dashboard/SummaryGrid";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <DashboardHero />

      <div className="mt-6">
        <SummaryGrid />
      </div>
    </DashboardLayout>
  );
}
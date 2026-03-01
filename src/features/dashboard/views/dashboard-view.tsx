import { PageHeader } from "@/components/page-header";
import { HeroPattern } from "@/features/dashboard/components/hero-pattern";

export function DashboardView() {
    return (
        <div className="relative">
            <PageHeader title="Dashboard" className="lg:hidden" />
            <HeroPattern />
        </div>
    );
};
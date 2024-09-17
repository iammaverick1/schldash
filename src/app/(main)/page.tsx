import DashboardCard from "@/components/Dashboard/DashboardCard";
import UsersTable from "@/components/users/UsersTable";
import AnalyticsChart from "@/components/Dashboard/AnalyticsChart";
import {
  ChartSpline,
  ClipboardPenLine,
  CreditCard,
  Folder,
  Link,
  MessageCircle,
  Newspaper,
  User,
} from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
        <DashboardCard
          title="Users"
          count={10}
          icon={<User className="text-slate-500" size={72} />}
        />

        <DashboardCard
          title="Stats"
          count={4}
          icon={<ChartSpline className="text-slate-500" size={72} />}
        />
        <DashboardCard
          title="Onboard"
          count={10}
          icon={<ClipboardPenLine className="text-slate-500" size={72} />}
        />
        <DashboardCard
          title="Billing"
          count={200}
          icon={<CreditCard className="text-slate-500" size={72} />}
        />
      </div>
      <AnalyticsChart />
      <UsersTable title="Latest Users" limit={5} />
    </>
  );
}

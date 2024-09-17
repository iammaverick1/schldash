import AuditLogsPage from "@/app/(main)/AuditLogs/page";
import RolesPage from "@/app/(main)/Roles/page";
import BillingPage from "@/app/(main)/Billing/page";
import NotificationPage from "@/app/(main)/Notification/page";
import ProfilePage from "@/app/(main)/Profile/page";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import {
  LayoutDashboard,
  Newspaper,
  CreditCard,
  Settings,
  User,
  Calendar,
  ChartSpline,
  Contact,
  ReceiptIndianRupee,
  BellRing,
  UserPen,
} from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <Command className="bg-secondary rounded-none">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <LayoutDashboard className="mr-2 h-4 w-4" />
            <Link href="/">Dashboard</Link>
          </CommandItem>
          <CommandItem>
            <Contact className="mr-2 h-4 w-4" />
            <Link href="/users">Users</Link>
          </CommandItem>
          <CommandItem>
            <UserPen className="mr-2 h-4 w-4" />
            <Link href="/Roles">
              {" "}
              <RolesPage />
            </Link>
          </CommandItem>
          <CommandItem>
            <ReceiptIndianRupee className="mr-2 h-4 w-4" />
            <Link href="/AuditLogs">
              {" "}
              <AuditLogsPage />
            </Link>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <User className="mr-2 h-4 w-4" />
            <Link href="/Profile">
              {" "}
              <ProfilePage />
            </Link>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCard className="mr-2 h-4 w-4" />
            <Link href="/Billing">
              {" "}
              <BillingPage />
            </Link>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <BellRing className="mr-2 h-4 w-4" />
            <Link href="/Notification">
              {" "}
              <NotificationPage />
            </Link>
            <CommandShortcut>⌘N</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
};

export default Sidebar;

import AuditLogsPage from "@/app/(main)/AuditLogs/page";
import RolesPage from "@/app/(main)/Roles/page";
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
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <BellRing className="mr-2 h-4 w-4" />
            <span>Notification</span>
            <CommandShortcut>⌘N</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
};

export default Sidebar;

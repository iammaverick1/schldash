import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableCell,
  TableRow,
  TableCaption,
} from "../ui/table";
import Link from "next/link";
import users from "../../../data/Users";
import { User } from "../../../types/Users";

interface UsersTableprops {
  limit?: number;
  title?: string;
}

const UsersTable = ({ limit, title }: UsersTableprops) => {
  //sort posts in dec order based on date
  const sortedUsers: User[] = [...users].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  //Filer users to limit
  const filteredUsers = limit ? sortedUsers.slice(0, limit) : sortedUsers;
  return (
    <div className="mt-10">
      <h3 className="'text-2xl mb-4 font-semibold">
        {title ? title : "Users"}
      </h3>
      <Table>
        <TableCaption>A list of recent users</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Subjects</TableHead>
            <TableHead className="hidden md:table-cell">Users</TableHead>
            <TableHead className="hidden md:table-cell text-right">
              Date
            </TableHead>
            <TableHead>view</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.title}</TableCell>
              <TableCell className="hidden md:table-cell">
                {user.author}
              </TableCell>
              <TableCell className="text-right hidden md:table-cell">
                {user.date}
              </TableCell>
              <TableCell>
                <Link href={`/users/edit/${user.id}`}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs">
                    Edit
                  </button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UsersTable;

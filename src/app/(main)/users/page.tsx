import UsersTable from "@/components/users/UsersTable";
import BackButton from "@/components/BackButton";
import UsersPagination from "@/components/users/UsersPagination";


const UsersPage = () => {
  return (
    <>
      <BackButton text="Go back" link="/" />
      <UsersTable />
      <UsersPagination />
    </>
  );
};

export default UsersPage;

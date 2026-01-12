import AdminSidebar from "./AdminSidebar";
import CustomerSidebar from "./CustomerSidebar";
import OwnerSidebar from "./OwnerSidebar";

const DynamicSidebar = () => {
  //   const role = "admin"; // later get from auth context

  //   if (role === "admin") return <AdminSidebar />;
  //   if (role === "owner") return <OwnerSidebar />;
  //   if (role === "customer") return <CustomerSidebar />;
  return <AdminSidebar />;
};

export default DynamicSidebar;

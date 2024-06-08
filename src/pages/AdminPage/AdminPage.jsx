
import './AdminPage.css'

import NavBar from '../../components/NavBar/NavBar'
import AdminUsersTable from '../../components/Admin/AdminUsersTable/AdminUsersTable'
import Chart from '../../components/Admin/AdminChart/Chart';


const AdminPage = () => {
  return (
    <>
      <div className="page admin-page">
        <NavBar />
        <AdminUsersTable />
        <Chart />
      </div>
    </>
  );
};

export default AdminPage;
